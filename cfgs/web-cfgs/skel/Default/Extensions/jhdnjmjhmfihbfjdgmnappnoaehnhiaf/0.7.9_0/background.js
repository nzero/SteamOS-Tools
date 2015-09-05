/**
 * Listens for the app launching then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  var importFile = launchData;

  chrome.app.window.create(
    'index.html',
    {
      id: 'twerkApp',
      bounds: {
        width: 420,
        height: 600,
      },
      minWidth:420,
      minHeight:600,
      maxWidth:420,
      maxHeight:600
    },
    function (twerkApp) {
      twerkApp.contentWindow.addEventListener('load', function(e) {
          twerkApp.contentWindow.passLaunchData(importFile);
      });
  });
});
