var wv = document.querySelector('webview');

wv.addEventListener('loadcommit', function () {
    wv.insertCSS({
        code: '.chat_page_steam_logo {display: none;} .chat_page_header {padding-top: 42px !important;} body, textarea {font-family: Lato, Arial, Helvetica, Verdana, sans-serif !important;} .playerAvatar.medium {width: 50px !important; height: 50px !important;} .playerAvatar.medium img {width: 50px !important; height: 50px !important;} .maincontent {max-width: none !important; margin-left: 40px !important; margin-right: 40px !important;}',
        runAt: 'document_start'
    });
});

wv.addEventListener('permissionrequest', function (e) {
    if (e.permission === 'media') {
        e.request.allow();
    }
});

wv.addEventListener('newwindow', function (e) {
    window.open(e.targetUrl);
});

document.getElementById('close').onclick = function () {
    chrome.systemIndicator.disable();
    chrome.app.window.current().close();
}

document.getElementById('minimize').onclick = function () {
    chrome.app.window.current().minimize();
}

document.getElementById('maximize').onclick = function () {
    if (chrome.app.window.current().isMaximized()) {
        chrome.app.window.current().restore();
    } else {
        chrome.app.window.current().maximize();
    }
}