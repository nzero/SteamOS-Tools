var version = chrome.app.getDetails().version;

var previousVersion = localStorage['version'];

if (!previousVersion) {
    chrome.tabs.create({url: 'message.html'});
    localStorage['version'] = version;
}

var checkForValidUrl = function (tabId, changeInfo, tab) {
    var urlMatchesFacebook = new RegExp('https?:\\/\\/www\\.facebook\\.com\\/.*').test(tab.url);
    if(urlMatchesFacebook) {
        chrome.pageAction.show(tabId);
    } else {
        chrome.pageAction.hide(tabId);
    }
};

// page action handler
var selectAllFriends = function(tab) {
    chrome.tabs.sendMessage(tab.id, 'do it!');
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
