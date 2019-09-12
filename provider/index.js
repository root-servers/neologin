import connectToChild from 'penpal/lib/connectToChild';

function sendEvent(ev, data) { //{type, data}
    registeredEvents[ev].map((cb) => cb(data));
}

let registeredEvents = {
    'READY': [],
    'ACCOUNT_CHANGED': [],
    'NETWORK_CHANGED': [],
    'CONNECTED': [],
    'DISCONNECTED': [],
    'BLOCK_HEIGHT_CHANGED': [],
    'TRANSACTION_CONFIRMED': [],
};

function checkEvent(ev) {
    if (Object.keys(registeredEvents).includes(ev)) {
        return true;
    } else {
        console.error(`The event used ("${ev}") is not supported. The only events supported are ${Object.keys(registeredEvents)}.`);
        return false;
    }
}

function addEventListener(ev, cb) {
    if (checkEvent(ev)) {
        registeredEvents[ev].push(cb);
    }
}

function removeEventListener(ev) {
    if (checkEvent(ev)) {
        registeredEvents[ev] = [];
    }
}

const iframe = document.createElement('iframe');
iframe.src = 'http://localhost:3002/';

document.body.appendChild(iframe);
closeWidget()

const connection = connectToChild({
    // The iframe to which a connection should be made
    iframe,
    // Methods the parent is exposing to the child
    methods: {
        sendEvent,
        displayWidget,
        closeWidget
    }
});

const promiseMethods = ["getProvider", "getNetworks", "getAccount", "getPublicKey", "getBalance", "getStorage", "invokeRead", "getBlock", "getBlockHeight", "getTransaction", "getApplicationLog", "send", "invoke", "invokeMulti", "signMessage", "deploy"]; //Doesn't include addEventListener nor removeEventListener as these don't return promises

let neologin = { removeEventListener, addEventListener };

for (let i = 0; i < promiseMethods.length; i++) {
    let method = promiseMethods[i];
    neologin[method] = function (...args) {
        return connection.promise.then((child) => child[method](...args));
    };
}

var iframeDeskStyle = {
    boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.75)',
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    border: '0',
    width: '375px',
}

var iframeMobileStyle = {
    boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.75)',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    border: '0'
}

function setIframeStyle(w, h) {
    let iframeStyle = w > 576 ? iframeDeskStyle : iframeMobileStyle
    let actualDisp = iframe.style['display']
    iframe.style = null
    for (let style in iframeStyle) {
        iframe.style[style] = iframeStyle[style];
    }
    iframe.style['display'] = actualDisp
}

function displayWidget() {
    iframe.style['display'] = 'block';
}

function closeWidget() {
    iframe.style['display'] = 'none';
}

function getWindowSize() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    setIframeStyle(w, h)
}

window.addEventListener("resize", getWindowSize);
getWindowSize();

export default neologin;
