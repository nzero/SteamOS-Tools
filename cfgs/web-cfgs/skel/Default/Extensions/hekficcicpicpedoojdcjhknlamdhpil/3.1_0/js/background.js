chrome.app.runtime.onLaunched.addListener(function () {
    var wnd = chrome.app.window.create('../synapse.html', {
        bounds: {
            'width': Math.round(window.screen.availWidth * 0.7),
            'height': Math.round(window.screen.availHeight * 0.8)
        },
        frame: 'none',
        state: 'normal',
        resizable: true
    });
    chrome.systemIndicator.enable();
});

chrome.app.window.onClosed.addListener(function () {
    chrome.systemIndicator.disable();
});