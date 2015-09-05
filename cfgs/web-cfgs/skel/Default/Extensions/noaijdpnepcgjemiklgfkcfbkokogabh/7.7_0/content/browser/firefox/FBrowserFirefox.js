function FBrowserFirefox() {
	this.initFBrowserFirefox();
	this.windowMediator  = Components.classes["@mozilla.org/appshell/window-mediator;1"]
	.getService(Components.interfaces.nsIWindowMediator);
}
	
FBrowserFirefox.prototype = FExtension.extend(FBrowser.prototype, FBrowserFirefox);

FBrowserFirefox.prototype.frankerPort = null;

FBrowserFirefox.prototype.getBrowserName = function(){
    return 'firefox';
}

FBrowserFirefox.prototype.isLocalStoragePreset = function() {
	return false;
}

FBrowserFirefox.prototype.sendMessageTabs = function(obj, callback) {
    FExtension.browserPopup.addOnMessageListener(obj);
}

FBrowserFirefox.prototype.inlinerPortListener = function(port, callback) {
	this.inlinerPortListener = callback;
}

FBrowserFirefox.prototype.inlinerPostMessage = function(data) {
    inlinerInjectHandleMessage(data);
}

FBrowserFirefox.prototype.openNewTab = function(url) {
	var win = this.windowMediator.getMostRecentWindow('navigator:browser');
	if(win){
		win.gBrowser.selectedTab = win.gBrowser.addTab(url);
	}else{
		win=window.open(url, '_blank');
		win.focus();
	}
}

FBrowserFirefox.prototype.ResetAllWindows = function(storeID,objID) {
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
      		.getService(Components.interfaces.nsIWindowMediator);
	var enumerator = wm.getEnumerator("navigator:browser");
	while (enumerator.hasMoreElements()) {
	      var win = enumerator.getNext();
              if(FExtension.store.get(storeID)=="false") win.document.getElementById(objID).style.display='none';
	      else win.document.getElementById(objID).style.display='block';
	}
}

FBrowserFirefox.prototype.ResetAllHKS = function(){
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
      		.getService(Components.interfaces.nsIWindowMediator);
	var enumerator = wm.getEnumerator("navigator:browser");
	while (enumerator.hasMoreElements()) {
	      var win = enumerator.getNext();
		win.FExtension.store.loadPrefs();
	}

}


FBrowserFirefox.prototype.ResetContextMenuData = function() {
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
      		.getService(Components.interfaces.nsIWindowMediator);
	var enumerator = wm.getEnumerator("navigator:browser");
	while (enumerator.hasMoreElements()) {
	      var win = enumerator.getNext();
		win.document.getElementById("Inline-menu").label="Inline translation to " + FExtension.store.get("SL_langDst_name_it");
		win.document.getElementById("Bubble-menu").label="Pop-Up Bubble translation to " + FExtension.store.get("SL_langDst_name_bbl");
		win.document.getElementById("imtranslator3-1").label="Translate this page to " + FExtension.store.get("SL_langDst_name_wpt");
		win.document.getElementById("imtranslator3-2").label="Mouseover translation to " + FExtension.store.get("SL_langDst_name_wpt");

		win.document.getElementById("Inline-menu").style.display="none";
		win.document.getElementById("Bubble-menu").style.display="none";
	}
}


FBrowserFirefox.prototype.addOnRequestListener = function(onRequestListener) {
	this.addOnRequestListener = onRequestListener;
	//chrome.extension.onRequest.addListener(onRequestListener);
}

FBrowserFirefox.prototype.getVersion = function(callback) {
	var version = 1.0;
	try {
		// Firefox 4 and later; Mozilla 2 and later
		Components.utils.import("resource://gre/modules/AddonManager.jsm");
		AddonManager.getAddonByID("{9AA46F4F-4DC7-4c06-97AF-5035170634FE}", function(addon) {
			version = addon.version;
			callback(version);
		});
	}
	catch (ex) {
		// Firefox 3.6 and before; Mozilla 1.9.2 and before
		var em = Components.classes["@mozilla.org/extensions/manager;1"].getService(Components.interfaces.nsIExtensionManager);
		var addon = em.getItemForID("{9AA46F4F-4DC7-4c06-97AF-5035170634FE}");
		version = addon.version;
		callback(version);
	}
}

FBrowserFirefox.prototype.createContextMenus = function(title, callback, selection) {}

FBrowserFirefox.prototype.removeContextMenus = function(menu) {}

FBrowserFirefox.prototype.updateContextMenus = function(menu, title) {}

FBrowserFirefox.prototype.addOnMessageListener = function(onMessageListener) {
	this.addOnMessageListener = onMessageListener;
}

FBrowserFirefox.prototype.executeForSelectedTab = function(windowId, tabFunction) {
	var tab = null;
	try{
		tab = gBrowser.selectedTab;
	}catch(e){
		tab = null;
	}
	tabFunction(tab);
}

FBrowserFirefox.prototype.portOnConnectListener = function(onConnectListener) {}

FBrowserFirefox.prototype.executeScript = function(info, tab, callback) {
	eval(callback);
}

FBrowserFirefox.prototype.tabsSendMessage = function(tabID, msg) {
    mainFunctionControl(msg);
}

FBrowserFirefox.prototype.getPopUpURL = function(filePath, opt) {
	if(opt){
		return 'chrome://imtranslator/content/xul/options/' + filePath;
	}else{
		return 'chrome://imtranslator/content/xul/popup/' + filePath;
	}
}

FBrowserFirefox.prototype.openPopUpByURL = function(file, s, param) {
	if(s!="undefined"){
		s=s.replace(/%/g,"");
		var location = FExtension.browser.getPopUpURL(file, false) + "?text="+s;
	} else 
		var location = FExtension.browser.getPopUpURL(file, false);
	var winWidth = 480 ;
	var winHeight = 645 ;
	var posLeft = ( screen.width - winWidth ) / 2 ;
	var posTop = ( screen.height - winHeight ) / 2 ;
    var win = null;
    try{
		win = window.openDialog( location,'ImTranslator','width=' + winWidth + ',height=' + winHeight +',top=' + posTop + ',left=' +
			posLeft +  ',resizable=yes,scrollbars=yes,toolbar=no,titlebar=yes,' + 'location=no,directories=yes,status=no,menubar=no,copyhistory=no');
	}catch(e){
		//alert(e);
		console.log(e);
	}
    return win
}

FBrowserFirefox.prototype.openPopUpOptions = function(path) {
	var winWidth = 480 ;
	var winHeight = 545 ;
	var posLeft = ( screen.width - winWidth ) / 2 ;
	var posTop = ( screen.height - winHeight ) / 2 ;
    var win = null;
    try{
		win = window.openDialog(path,'ImTranslator','width=' + winWidth + ',height=' + winHeight +',top=' + posTop + ',left=' +
			posLeft +  ',resizable=yes,scrollbars=yes,toolbar=no,titlebar=yes,' + 'location=no,directories=yes,status=no,menubar=no,copyhistory=no');
                win.focus();
	}catch(e){
		//alert(e);
		console.log(e);
	}
    return win
}

FBrowserFirefox.prototype.getCurrentUrl = function(tab){
	try{
		return content.location.href;
	}catch(e){
		return '';
	}
}

FBrowserFirefox.prototype.getSelectionText = function() {
	var selection = "";
	try{
		selection = window.getSelection().toString();
		if(selection != ""){
			return selection;
		}
		selection = content.document.getSelection().toString();
		if(selection != ""){
			return selection;
		}
	}catch(e){
		selection = content.document.getSelection().toString();
	}
	return selection;
}

FBrowserFirefox.prototype.refreshSettings = function() {
    updateSettings();
	var sl_inliner = FExtension.store.get("SL_shortcutInliner");
	var sl_clean = FExtension.store.get("SL_shortcutClean");
	var sl_hkset = FExtension.store.get("SL_HKset");
	
	var start_sk = window.document.getElementById('ImTranslator_start_sk');
	var sl_hkset_fl = FExtension.store.get("SL_Flag");
	if(start_sk && sl_hkset){
		var theresponse = sl_hkset.split("~");
		var theresponse1 = theresponse[0].split("|");
		var thekey1 = theresponse1[0];
		var thekey2 = theresponse1[1];
		start_sk.setAttribute('key', String.fromCharCode(thekey2));
	}
	
	var inliner_sk = window.document.getElementById('ImTranslator_inliner_sk');
	if(inliner_sk && sl_inliner){
		var theresponse = sl_inliner.split("+");
		inliner_sk.setAttribute('modifiers', "control alt");
		inliner_sk.setAttribute('key', 'f');
		if(theresponse.length > 1){
			inliner_sk.setAttribute('modifiers', "");
			inliner_sk.setAttribute('key', '');
		}
		for(var i = 0; i < theresponse.length; i++){ //shift
			var modifiers = inliner_sk.getAttribute('modifiers');
			var key = inliner_sk.getAttribute('key');
			switch(theresponse[i].toLowerCase()){
				case 'alt':
					modifiers += ' alt';
					break;
				case 'ctrl':
					modifiers += ' control';
					break;
				case 'shift':
					modifiers += ' shift';
					break;
				default:
					key = theresponse[i];
					break;
			}
			inliner_sk.setAttribute('modifiers', modifiers);
			inliner_sk.setAttribute('key', key);
		}
	}
	
	var clear_sk = window.document.getElementById('ImTranslator_clear_sk');
	if(clear_sk && sl_clean){
		var theresponse = sl_clean.split("+");
		clear_sk.setAttribute('modifiers', "control alt");
		clear_sk.setAttribute('key', 'f');
		if(theresponse.length > 1){
			clear_sk.setAttribute('modifiers', "");
			clear_sk.setAttribute('key', '');
		}
		for(var i = 0; i < theresponse.length; i++){ //shift
			var modifiers = clear_sk.getAttribute('modifiers');
			var key = clear_sk.getAttribute('key');
			switch(theresponse[i].toLowerCase()){
				case 'alt':
					modifiers += ' alt';
					break;
				case 'ctrl':
					modifiers += ' control';
					break;
				case 'shift':
					modifiers += ' shift';
					break;
				default:
					key = theresponse[i];
					break;
			}
			clear_sk.setAttribute('modifiers', modifiers);
			clear_sk.setAttribute('key', key);
		}
	}
}

FBrowserFirefox.prototype.initFBrowserFirefox = function() {
	// Call parent class implementation first
	this.initFBrowser();
}

FExtension.browser = new FBrowserFirefox();