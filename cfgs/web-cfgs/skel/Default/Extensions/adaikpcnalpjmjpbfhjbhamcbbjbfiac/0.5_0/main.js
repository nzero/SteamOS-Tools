chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
    'width': 1024,
    'height': 768
},
function(win) {
    win.maximize();
});
});


chrome.app.runtime.onRestarted.addListener(function() {
    chrome.app.window.create('index.html', {
    'width': 1024,
    'height': 768
},
function(win) {
    win.maximize();
});
});

document.body.addEventListener('click', function() {
  document.body.webkitRequestFullscreen();
});
