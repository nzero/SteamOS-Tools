FExtension.bg = window;
FExtension.store = FExtension.bg.FExtension.store;
/**
 * Default FBrowserPopupFirefox ctor.
 * Creates instance of FBrowserPopupFirefox class that contains ALL Firefox browser-specific implementation  
 *         of the core browser functionality required for the rest of the code.
 *
 * @param {String} siteDomain The domain name of the site.
 */
function FBrowserPopupFirefox() {
	this.initFBrowserPopupFirefox();
	// TODO : initialize firefox-specific functionality here...
	this.isLocalStoragePreset = (FExtension.bg.FExtension.browser) ? FExtension.bg.FExtension.browser.isLocalStoragePreset : null;
	this.windowMediator  = Components.classes["@mozilla.org/appshell/window-mediator;1"]
							.getService(Components.interfaces.nsIWindowMediator);
	if(!FExtension.store){
		FExtension.bg = this.windowMediator.getMostRecentWindow('navigator:browser');
		FExtension.store = FExtension.bg.FExtension.store;
	}
}


	
//$.extend(FBrowserPopupFirefox.prototype, FBrowserPopup.prototype);
function extend(destination, source) {   
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
};
extend(FBrowserPopupFirefox.prototype, FBrowserPopup.prototype);

FBrowserPopupFirefox.prototype.initFBrowserPopupFirefox = function() {
	// Call parent class implementation first
	this.initFBrowserPopup();
}

FBrowserPopupFirefox.prototype.openNewTab = function(url) {
	var win = this.windowMediator.getMostRecentWindow('navigator:browser');
	if(win){
		win.gBrowser.selectedTab = win.gBrowser.addTab(url);
	}else{
		win=window.open(url, '_blank');
		win.focus();
	}
}

FBrowserPopupFirefox.prototype.executeForSelectedTab = function(windowId, tabFunction) {
	var tab = null;
	var win = this.windowMediator.getMostRecentWindow('navigator:browser');
	try{
		tab = win.gBrowser.selectedTab;
	}catch(e){
		tab = window;
	}
	tabFunction(tab);
}

FBrowserPopupFirefox.prototype.addOnRequestListener = function(onRequestListener) {
	//chrome.extension.onRequest.addListener(onRequestListener);
}

FBrowserPopupFirefox.prototype.getVersion = function(callback) {
	/*var version = chrome.app.getDetails().version;
	if (callback) {
		callback(version);
	}
	return version;*/
}

FBrowserPopupFirefox.prototype.extensionSendRequest = function(data, callback) {
	//chrome.extension.sendRequest(data,callback);
}

FBrowserPopupFirefox.prototype.tabSendRequest = function(id, data, sendResponse) {
	FExtension.bg.FExtension.browserInject.addOnRequestListener(id, data, sendResponse);
	//chrome.tabs.sendRequest(id, data, callback);
}

FBrowserPopupFirefox.prototype.addOnMessageListener = function(onMessageListener) {
    if(typeof onMessageListener != "object"){
        this.addOnMessageListener = onMessageListener;
    }
}

FExtension.browserPopup = new FBrowserPopupFirefox();
