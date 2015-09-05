/**
 * Default FBrowserInjectChrome ctor.
 * Creates instance of FBrowserInjectChrome class that contains ALL Chrome browser-specific implementation
 *         of the core browser functionality required for the rest of the code.
 *
 * @param {String} siteDomain The domain name of the site.
 */
function FBrowserInjectFirefox() {
    this.initFBrowserInjectFirefox();
}

FBrowserInjectFirefox.prototype = FExtension.extend(FBrowserInject.prototype, FBrowserInjectFirefox);

FBrowserInjectFirefox.prototype.getBrowserName = function () {
    return 'firefox';
}

FBrowserInjectFirefox.prototype.initFBrowserInjectFirefox = function () {
    // Call parent class implementation first
    this.initFBrowserInject();
    this.windowMediator = Components.classes["@mozilla.org/appshell/window-mediator;1"]
        .getService(Components.interfaces.nsIWindowMediator);
}

FBrowserInjectFirefox.prototype.inlinerPort = null;

FBrowserInjectFirefox.prototype.inlinerPortListener = function (callback) {
    this.frankerPortListener = callback;
    //this.frankerPort = chrome.extension.connect({name: "imFranker"});
    //this.frankerPort.onMessage.addListener(callback);
}

FBrowserInjectFirefox.prototype.inlinerPostMessage = function (data) {
    ImTranslator_inliner.respondToMessage(data);
    //this.frankerPort.postMessage(data);
}

FBrowserInjectFirefox.prototype.stopInlinerPort = function (port, callback) {
    //if (typeof this.frankerPort != "undefined" && this.frankerPort != null) {
    //	this.frankerPort.disconnect();
    //}
}

FBrowserInjectFirefox.prototype.initFBrowserInjectChrome = function () {
    // Call parent class implementation first
    this.initFBrowserInject();
}

FBrowserInjectFirefox.prototype.isLocalStoragePreset = function () {
    return true;
};

FBrowserInjectFirefox.prototype.openNewTab = function (url) {
    var win = this.windowMediator.getMostRecentWindow('navigator:browser');
    if (win) {
        win.gBrowser.selectedTab = win.gBrowser.addTab(url);
    } else {
        win = window.open(url, '_blank');
        win.focus();
    }
}

FBrowserInjectFirefox.prototype.runtimeSendMessage = function (msg, callback) {
    FExtension.browserInject.extensionSendMessage(msg, callback);
    //chrome.runtime.sendMessage(msg, callback);
}

FBrowserInjectFirefox.prototype.extensionSendMessage = function (msg, sendResponse) {
    var request = msg;

    var sender = {
        tab: { url: FExtension.browser.getCurrentUrl() }
    };

    ImTranslatorBG.onMessage(request, sender, sendResponse);
    if (typeof(sendResponse) != "undefined") {
        sendResponse();
    }
    //chrome.extension.sendMessage(msg, callback);
}

FBrowserInjectFirefox.prototype.getCurrentUrl = function (tab) {
    try {
        return content.location.href;
    } catch (e) {
        return '';
    }
}

FBrowserInjectFirefox.prototype.setEvent = function (e) {
    window.event = e;
    window.e = e;
}

FBrowserInjectFirefox.prototype.getDocument = function (is_select) {
    //var browser = gBrowser.getBrowserAtIndex(gBrowser.mTabContainer.selectedIndex);
    //var doc= browser.docShell.document;
    try {
        if(is_select){
            if(document.commandDispatcher.focusedWindow){
                var selText = document.commandDispatcher.focusedWindow.document.getSelection() + "";
                if(selText.length > 0){
                    return document.commandDispatcher.focusedWindow.document;
                }
            }
        }
    } catch (e) { }
    return content.document;
    //return content.document;//document.commandDispatcher.focusedWindow.document;
    /*try {
        if (content.frames.length > 0) {
            for (var i = 0; i < content.frames.length; i++) {
                text = content.frames[i].getSelection() + "";
                if (text != "" && text != "null") {
                    return content.frames[i].document;
                }
            }
        }
        return content.document;
    } catch (e) {
        return document;
    }*/
}


FBrowserInjectFirefox.prototype.getDocuments = function () {
    var docs = [];
    docs.push(content.document);
    docs.push(document);
    //var browser = gBrowser.getBrowserAtIndex(gBrowser.mTabContainer.selectedIndex);
    //var doc= browser.docShell.document;
    try {
        if (content.frames.length > 0) {
            for (var i = 0; i < content.frames.length; i++) {
                docs.push(content.frames[i].document);
            }
        }
        return docs;
    } catch (e) {
        return docs;
    }
}

FBrowserInjectFirefox.prototype.getSelectionText = function () {
    var selection = "";

    var d = document.commandDispatcher.focusedWindow.document;
    if (d && d.selection && d.selection.createRange) {
        selection = d.selection.createRange().text;
    } else if (d.getSelection) {
        selection = d.getSelection() + "";
    }

    /*try {
        selection = window.getSelection().toString();
        if (selection != "") {
            return selection;
        }
        var doc = FExtension.browserInject.getDocument();
        selection = FExtension.browserInject.getSelection(doc).toString();
        if (selection != "") {
            return selection;
        }
        if (content.frames.length > 0) {
            for (var i = 0; i < content.frames.length; i++) {
                text = content.frames[i].getSelection() + "";
                if (text != "" && text != "null") {
                    return content.frames[i].getSelection();
                }
            }
        }
    } catch (e) {
        var doc = FExtension.browserInject.getDocument();
        selection = FExtension.browserInject.getSelection(doc).toString();
    }*/
    return selection;
}

FBrowserInjectFirefox.prototype.getSelection = function (doc, is_select) {
    var selection = "";
    try {
        if(is_select){
            if(document.commandDispatcher.focusedWindow){
                var selText = document.commandDispatcher.focusedWindow.document.getSelection() + "";
                if(selText.length > 0){
                    return document.commandDispatcher.focusedWindow.document.getSelection();
                }
            }
        }

        selection = doc.defaultView.getSelection();
    } catch (e) {
        selection = doc.getSelection();
    }
    return selection;
}

//////////////////BY VK
//Boris, here I am settling the CSS file into each frame of a frameset

FBrowserInjectFirefox.prototype.setStyle = function () {
    try {
        var doc = content.document;
        if (doc.getElementById("SL_Style") == null) {
            var fileref = doc.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("id", "SL_Style");
            fileref.setAttribute("href", "chrome://imtranslator/skin/translator.css");
            doc.getElementsByTagName("head")[0].appendChild(fileref);
        }
    } catch (e) {
    }
}
////////////////////////////////

FBrowserInjectFirefox.prototype.getURL = function (filePath, opt) {
    if (typeof opt == "undefined") {
        return 'chrome://imtranslator/' + filePath;
    }
    if (opt) {
        return 'chrome://imtranslator/content/xul/options/' + filePath;
    } else {
        return 'chrome://imtranslator/content/xul/options/' + filePath;
    }
}

FBrowserInjectFirefox.prototype.extensionSendRequest = function (data, callback) {
    callback(data);
    //FExtension.browserInject.addOnRequestListener
    //chrome.extension.sendRequest(data, callback);
}

FBrowserInjectFirefox.prototype.addOnRequestListener = function (onRequestListener) {
    this.addOnRequestListener = onRequestListener;
    //chrome.extension.onRequest.addListener(onRequestListener);
}

FBrowserInjectFirefox.prototype.addOnMessageListener = function (onMessageListener) {
    this.addOnMessageListener = onMessageListener;
}

FBrowserInjectFirefox.prototype.modifySentence = function (selection, doc, replace) {
    var sentence = "", sent = "";
    if (doc.arraySentence && doc.arraySentence.length > 0) {
        sentence = doc.arraySentence[0];
        sent = sentence;
        sentence = escape(sentence.toLowerCase().trim()).replace(/%A0%3A/g, '%20%3A').replace(/%20%0D%0A%20/g, '%20');
    }
    var originalRange = selection.getRangeAt(0).cloneRange();
    FExtension.browserInject.refreshSelection(selection, originalRange);

    var sel = escape(selection.toString().replace(/[^\S\r\n]+/g, ' ').trim());
    var sel1 = sel.replace(/%0A%20/g, '%0A%A0');
    var i = 0;
    while (sel != sentence && sel1 != sentence) {// || sentence.length <= selection.toString().replace(/[^\S\r\n]+/g, ' ').trim().length + 2) {//sentence.length >= selection.toString().length &&
        i = sel == "" ? i + 1 : 0;
        selection.modify('extend', 'forward', 'character');
        sel = escape(selection.toString().toLowerCase().replace(/[^\S\r\n]+/g, ' ').trim());
        sel1 = sel.replace(/%0A%20/g, '%0A%A0');
        if (i > 100) {
            this.getNextNodeByParent(selection);
            //return;
        }
        if (sel.length > sentence.length + 100) {
            selection.collapseToStart();
            return;
        }
    }
    return sel;
}

FBrowserInjectFirefox.prototype.refreshSelection = function (selection, originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
}

FBrowserInjectFirefox.prototype.getSentence = function (doc, selection) {
    if (doc.arraySentence && doc.arraySentence.length > 0) {
        sentence = doc.arraySentence[0];
        if (doc.arraySentence.length > 0 && (sentence == "" || sentence == "\r" || sentence == "\n" || sentence == " \r")) {
            while (doc.arraySentence.length > 0 && (sentence == "" || sentence == "\r" || sentence == "\n" || sentence == " \r")) {
                doc.arraySentence.splice(0, 1);
                var text = selection.focusNode.textContent;
                if (!inlinerInjectBefore && text[0] == "" && text[0] == "\r" && text[0] == "\r" && text[0] == " \r") {
                    for (var i = 0; i < sentence.length; i++) {
                        selection.modify('move', 'forward', 'character');
                    }
                }
                if (doc.arraySentence.length == 0) {
                    sentence = "";
                    break;
                }
                sentence = doc.arraySentence[0];
            }
        }
        return escape(sentence.trim().toLowerCase()).replace(/%A0%3A/g, '%20%3A').replace(/%20%0D%0A%20/g, '%20');
    }
    return "";
}

FBrowserInjectFirefox.prototype.getNextNode = function (doc) {
    var selection = FExtension.browserInject.getSelection(doc);
    if (inlinerInjectHideTranslation && inlinerInjectBefore && doc.currentSentence
        || !doc.currentSentence && selection.focusNode && selection.focusNode.parentElement && selection.focusNode.parentElement.style.display == "none") {
        /*for(var i = 0; i < doc.currentSentence.length; i++){
         selection.modify('move', 'forward', 'character');
         }*/
        var node = selection.focusNode;
        while (node == selection.focusNode) {
            selection.modify('move', 'forward', 'character');
        }
        FExtension.browserInject.getNextNodeByParent(selection);
        /*if(selection.focusNode.parentElement &&
         (selection.focusNode.parentElement.style.display == "none"
         || selection.focusNode.parentElement.className == "im-inliner-orig-text")){
         var node = selection.focusNode;
         while(node == selection.focusNode){
         selection.modify('move', 'forward', 'character');
         }
         }*/
        doc.currentSentence = null;
    }
}

FBrowserInjectFirefox.prototype.getNextNodeByParent = function (selection) {
    var parent = selection.focusNode.parentElement;
    //if(parent && (parent.style.display == "none" || parent.className == "im-inliner-orig-text")){
    while (parent) {
        if (parent && (parent.style.display == "none" || parent.className == "im-inliner-orig-text")) {
            var is_none = parent.style.display == "none";
            if (is_none) {
                parent.style.display = "";
            }
            var old_parent = parent;
            var node = selection.focusNode;
            while (node == selection.focusNode) {
                selection.modify('move', 'forward', 'character');
                parent = selection.focusNode.parentElement;
            }
            if (is_none) {
                old_parent.style.display = "none";
                is_none = false;
            }
        }
        parent = parent.parentElement;
    }
}

FExtension.browserInject = new FBrowserInjectFirefox();
FExtension.browser = FExtension.browserInject;