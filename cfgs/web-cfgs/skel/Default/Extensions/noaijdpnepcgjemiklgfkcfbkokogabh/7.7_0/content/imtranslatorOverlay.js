if (!window.console) {
 var console = {
	consoleService: Components.classes["@mozilla.org/consoleservice;1"]
	                .getService(Components.interfaces.nsIConsoleService),
	log: function(msg) {
		console.consoleService.logStringMessage(msg);
	}
 };
}



FExtension_chromeListener = {
	isLoaded: false,
	init: function() {
		//alert("I am here! " + SBExtension.browser); //SBExtension.config);
		var contextMenu = document.getElementById("contentAreaContextMenu");
		  if (contextMenu)
		    contextMenu.addEventListener("popupshowing", FExtension_chromeListener.menuManager, false);
		  
		  var se_panelbutton = document.getElementById('ImTranslator-translator-toolbar-button');
		  if(se_panelbutton){
			  se_panelbutton.onclick = function() { 
				  FExtension_chromeListener.menuManager();
			  }
		  }

		ImTranslatorBG.init();
		//FExtension.browser.onAppcontentLoad();
	},
	
	menuManager: function(){
		var is_selection = FExtension.browserInject.getSelectionText() != "";
	},

	GetMyCookie: function (){
	 try {
	 var ImTranslator_ios = Components.classes["@mozilla.org/network/io-service;1"]
            .getService(Components.interfaces.nsIIOService);
	 var ImTranslator_uri = ImTranslator_ios.newURI(ImTranslatorBG.ImTranslator_URL, null, null);
	 var ImTranslator_cookieSvc = Components.classes["@mozilla.org/cookieService;1"]
             .getService(Components.interfaces.nsICookieService);
	 var ImTranslator_cookie = ImTranslator_cookieSvc.getCookieString(ImTranslator_uri, null);
	 ImTranslator_tempH1 = ImTranslator_cookie.split("curSize=");
	 ImTranslator_tempH2 = ImTranslator_tempH1[1].split(";");
	 ImTranslator_tempW1 = ImTranslator_cookie.split("curSizeW=");
	 ImTranslator_tempW2 = ImTranslator_tempW1[1].split(";");
	 ImTranslatorBG.ImTranslator_Wconst=ImTranslator_tempW2[0];
	 ImTranslatorBG.ImTranslator_Hconst=ImTranslator_tempH2[0];
	 }
	 catch (errorInfo)
	 {
	 //    alert(errorInfo);
	 }
	},


	launchTranslator: function() {
		if(ImTranslatorBG.NORUN==0){
                        FExtension_chromeListener.GetMyCookie();
			var ImTranslator_temptext = "";
			ImTranslator_temptext = FExtension_chromeListener.SLgrabthetext();

			var dirParentFrom="en";
			var dirParentTo="es";
			if (FExtension.store.get("dirParentFrom") && FExtension.store.get("dirParentTo")) {
			    dirParentFrom=FExtension.store.get("dirParentFrom");
			    dirParentTo=FExtension.store.get("dirParentTo");
			}
			var ImTranslator_gon=0;
			var newDir = FExtension.store.get("dirParentFrom")+"/"+FExtension.store.get("dirParentTo");

			var ImTranslator_newLoc = "en";
                        if (FExtension.store.get("locParent")) ImTranslator_newLoc = FExtension.store.get("locParent");

			var ImTranslator_adet = 1;
			if (!FExtension.store.get("AutoDetect") || FExtension.store.get("AutoDetect")=="false") ImTranslator_adet = 0;

			var ImTranslator_ab = 1;
			if (!FExtension.store.get("AutoBack") || FExtension.store.get("AutoBack")=="false") ImTranslator_ab = 0;

			var ImTranslator_at = 1;
			if (!FExtension.store.get("AutoTranslit") || FExtension.store.get("AutoTranslit")=="false") ImTranslator_at = 0;

			var ImTranslator_a_s = 1;
			if (!FExtension.store.get("AutoSpell") || FExtension.store.get("AutoSpell")=="false") ImTranslator_a_s = 0;

			var ImTranslator_ad = 1;
			if (!FExtension.store.get("AutoDecode") || FExtension.store.get("AutoDecode")=="false") ImTranslator_ad = 0;

			var ImTranslator_ad = 1;
			if (!FExtension.store.get("AutoDecode") || FExtension.store.get("AutoDecode")=="false") ImTranslator_ad = 0;

			var ImTranslator_adi = 1;
			if (!FExtension.store.get("AutoDictionary") || FExtension.store.get("AutoDictionary")=="false") ImTranslator_adi = 0;

			var ImTranslator_provider="promt";
			if (FExtension.store.get("provider")) ImTranslator_provider=FExtension.store.get("provider");

			var WSP1x=100;
			if (FExtension.store.get("WSP1x")) WSP1x=FExtension.store.get("WSP1x");

			var WSP1y=100;
			if (FExtension.store.get("WSP1y")) WSP1y=FExtension.store.get("WSP1y");

			var WSP2x=700;
			if (FExtension.store.get("WSP2x")) WSP1x=FExtension.store.get("WSP2x");

			var WSP2y=10;
			if (FExtension.store.get("WSP2y")) WSP1y=FExtension.store.get("WSP2y");

			var ImTranslator_left = WSP1x;
			var ImTranslator_top = WSP1y;
			var ImTranslator_btl = WSP2x;
			var ImTranslator_btt = WSP2y;

			var TMPurl = ImTranslatorBG.ImTranslator_URL +"?op=y&adet="+ImTranslator_adet+"&a_s="+ImTranslator_a_s+"&ad="+ImTranslator_ad+"&ab="+ImTranslator_ab+"&at="+ImTranslator_at+"&gon="+ImTranslator_gon+"&adi="+ImTranslator_adi+"&dir="+newDir+"&loc="+ImTranslator_newLoc+"&prvd="+ImTranslator_provider+"&btl="+ImTranslator_btl+"&btt="+ImTranslator_btt+"&text="+escape(ImTranslator_temptext.substring(0,ImTranslatorBG.TextTransLimit));

			ImTranslator_temptext="";
			var ImTranslator_features = "scrollbars=yes,unadorned=yes,dependent=yes,width="+ImTranslatorBG.ImTranslator_Wconst+",height="+ImTranslatorBG.ImTranslator_Hconst+",top="+ImTranslator_top+",left="+ImTranslator_left+",scroll=auto,help=no,status=no,directories=no,menubar=no,resizable=yes";

			var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator);  
			var type="navigator:browser";
			var enumerator = wm.getEnumerator(type); 
			while(enumerator.hasMoreElements()) {  
			   var win = enumerator.getNext();
			   if(win.document.title.indexOf("Free translation, ImTranslator.com")>-1)   win.close();
			}

			window.open(TMPurl,"translator",ImTranslator_features);  
		}
	},






	button_toolbar_hide: function() {
	  	 FExtension.store.set("showBut","false");
		 ImTranslatorBG.SL_callbackRequest5();
		 ImTranslatorBG.SL_callbackRequest6();
	},

	launchPrefTranslator: function() {
		 if(FExtension.store.get("PrefTrans")==0) FExtension_chromeListener.launchTranslator();
		 else ImTranslatorBG.ContMenuClick();
	},


	// TRANSLATION TOOLS ------------------------------------------
	ToolsTranslator: function (){
		 if (ImTranslatorBG.NORUN==0){
			 var ImTranslator_temptext = FExtension_chromeListener.SLgrabthetext();
			 var ImTranslator_newDir = FExtension.store.get("dirParentFrom")+"/"+FExtension.store.get("dirParentTo");
			 var ImTranslator_newLoc = "en";
                         if (FExtension.store.get("locParent")) ImTranslator_newLoc = FExtension.store.get("locParent");
			 var WSP4x=500;
			 if (FExtension.store.get("WSP4x")) WSP4x=FExtension.store.get("WSP4x");
			 var WSP4y=10;
			 if (FExtension.store.get("WSP4y")) WSP4y=FExtension.store.get("WSP4y");
			 var ImTranslator_twl = WSP4x;
			 var ImTranslator_twt = WSP4y;
			 var ImTranslator_translatorURL = "http://translation.imtranslator.net/widget2/?dir="+ImTranslator_newDir+"&loc="+ImTranslator_newLoc+"&text="+escape(ImTranslator_temptext);
			 ImTranslator_temptext="";
			 var ImTranslator_features = "unadorned=yes,dependent=yes,width=336,height=390,top="+ImTranslator_twt+",left="+ImTranslator_twl+",scroll=no,help=no,status=no,directories=no,menubar=no,resizable=no";
			 var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator);  
			 var type="navigator:browser";
			 var enumerator = wm.getEnumerator(type); 
			 while(enumerator.hasMoreElements()) {  
			   var win = enumerator.getNext();
			   if(win.document.title.indexOf("Free translation, ImTranslator.com")>-1)
			             //     tabbrowser = win.Browser(); 
			     win.close();
			 }
			 window.open(ImTranslator_translatorURL,"translator",ImTranslator_features);
		}
	},

	ToolsTTS: function (){
		 if (ImTranslatorBG.NORUN==0){
			 var WSP3x=500;
			 if (FExtension.store.get("WSP3x")) WSP3x=FExtension.store.get("WSP3x");
			 var WSP3y=10;
			 if (FExtension.store.get("WSP3y")) WSP3y=FExtension.store.get("WSP3y");
			 var ImTranslator_ttsl = WSP3x;
			 var ImTranslator_ttst = WSP3y;
			 var ImTranslator_temptext = FExtension_chromeListener.SLgrabthetext();
			 var ImTranslator_newDir = FExtension.store.get("SL_langSrc");
			 var ImTranslator_translatorURL = "http://text-to-speech.imtranslator.net/tts-468.asp?dir="+ImTranslator_newDir+"&text="+escape(ImTranslator_temptext);
			 ImTranslator_temptext="";                                          
			 var ImTranslator_features = "unadorned=yes,dependent=yes,width=470,height=485,top="+ImTranslator_ttst+",left="+ImTranslator_ttsl+",scroll=no,help=no,status=no,directories=no,menubar=no,resizable=no";
			 var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator);  
			 var type="navigator:browser";
			 var enumerator = wm.getEnumerator(type); 
			 while(enumerator.hasMoreElements()) {  
			   var win = enumerator.getNext();
			   if(win.document.title.indexOf("Free translation, ImTranslator.com")>-1)
			             //     tabbrowser = win.Browser(); 
			     win.close();
			 }
			 window.open(ImTranslator_translatorURL,"translator",ImTranslator_features);
		}
	},

	ToolsVirk: function (){
		 if (ImTranslatorBG.NORUN==0){
			 var WSP5x=500;
			 if (FExtension.store.get("WSP5x")) WSP5x=FExtension.store.get("WSP5x");
			 var WSP5y=10;
			 if (FExtension.store.get("WSP5y")) WSP5y=FExtension.store.get("WSP5y");
			 var ImTranslator_virkl = WSP5x;
			 var ImTranslator_virkt = WSP5y;
			 var ImTranslator_translatorURL = "http://translation.imtranslator.net/widget2/virk.asp";
			 var ImTranslator_features = "unadorned=yes,dependent=yes,width=310,height=360,top="+ImTranslator_virkt+",left="+ImTranslator_virkl+",scroll=no,help=no,status=no,directories=no,menubar=no,resizable=no";
			 var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator);  
			 var type="navigator:browser";
			 var enumerator = wm.getEnumerator(type); 
			 while(enumerator.hasMoreElements()) {  
			   var win = enumerator.getNext();
			   if(win.document.title.indexOf("Free translation, ImTranslator.com")>-1)
		             //     tabbrowser = win.Browser(); 
			     win.close();
			 }
			 window.open(ImTranslator_translatorURL,"translator",ImTranslator_features);
		}
	},

	ToolsDictionary: function (){
		 if (ImTranslatorBG.NORUN==0){
			 var WSP6x=500;
			 if (FExtension.store.get("WSP6x")) WSP6x=FExtension.store.get("WSP6x");
			 var WSP6y=10;
			 if (FExtension.store.get("WSP6y")) WSP6y=FExtension.store.get("WSP6y");
			 var ImTranslator_dictl = WSP6x;
			 var ImTranslator_dictt = WSP6y;
			 var ImTranslator_temptext = FExtension_chromeListener.SLgrabthetext();
			 var dirParentFrom=FExtension.store.get("SL_langSrc");
			 var dirParentTo=FExtension.store.get("SL_langDst");
			 var ImTranslator_newDir = dirParentFrom+"/"+dirParentTo;
			 var ImTranslator_translatorURL = "http://translation.imtranslator.net/widget2/dictionary_gadget/gadget_center.asp?lang="+ImTranslator_newDir+"&text="+escape(ImTranslator_temptext);
			 ImTranslator_temptext="";
			 var ImTranslator_features = "unadorned=yes,dependent=yes,width=320,height=350,top="+ImTranslator_dictt+",left="+ImTranslator_dictl+",scroll=no,help=no,status=no,directories=no,menubar=no,resizable=no";
			 var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator);  
			 var type="navigator:browser";
			 var enumerator = wm.getEnumerator(type); 
			 while(enumerator.hasMoreElements()) {  
			   var win = enumerator.getNext();
			   if(win.document.title.indexOf("Free translation, ImTranslator.com")>-1)
		             //     tabbrowser = win.Browser(); 
			     win.close();
			 }
			 window.open(ImTranslator_translatorURL,"translator",ImTranslator_features);
		}
	},

	Donate: function (){
		 if (ImTranslatorBG.NORUN==0){
			 var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
				.getService(Components.interfaces.nsIWindowMediator);  
			 var wind = wm.getMostRecentWindow("navigator:browser");
			 var gBrowser = wind.getBrowser();
			 gBrowser.loadOneTab('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2', null, null, null, false, false);
		}
	},

	// TRANSLATION TOOLS ------------------------------------------

	SLgrabthetext: function (e){
		  var e = e || window.event;
		  var el = e.target || e.srcElement;
		  var tagName = el.tagName && el.tagName.toLowerCase();
		  var t;
		//  var d = content;
		  var d = document.commandDispatcher.focusedWindow.document;
		  if (d && d.selection && d.selection.createRange) {
		    t = d.selection.createRange().text;
		  } else if (d.getSelection) {
		    t = d.getSelection();
		  }
		  if (t == '') {
		    if (tagName == 'textarea' || 
		       (tagName == 'input' && el.type == 'text')) {
		     if (typeof el.selectionStart == 'number' && 
        		 el.selectionStart != el.selectionEnd) {
		        t = el.value.substring(el.selectionStart, el.selectionEnd)
		     }
		    }
		  }
		 if(t) return t.toString();
		 else return "";
	},


	onUnload: function() {
		FExtension_chromeListener.isLoaded = false;
	},

	extLoad: function() {
		try{
			if(FExtension_chromeListener.isLoaded){
				return;
			}
			var appcontent = window.document.getElementById("appcontent");
			appcontent.addEventListener("DOMContentLoaded", function(){
					//alert('DOMContentLoaded');
			}, false);
                                  

			FExtension_chromeListener.init();
			FExtension_chromeListener.isLoaded = true;
		} catch(e) {
			//FExtension.alert_debug('extLoad: ' + e.message)
		}
                FBrowserFirefox.prototype.ResetContextMenuData();
	}
};

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

// During initialisation

window.addEventListener("load", function() {
	try{
		var appcontent = window.document.getElementById("appcontent");
		if(appcontent){
			appcontent.addEventListener(
				"load",
				function() {FExtension_chromeListener.extLoad(); },
				true
			);
		}else{
			FExtension_chromeListener.extLoad();
		}
	} catch(e) {
		//FExtension.alert_debug('load ext: ' + e.message);
	}
}, true);

window.addEventListener("unload", function() {
	FExtension_chromeListener.onUnload();
}, false);


