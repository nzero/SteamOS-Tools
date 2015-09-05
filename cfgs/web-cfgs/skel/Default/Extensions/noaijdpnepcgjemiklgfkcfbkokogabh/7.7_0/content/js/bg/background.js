

ImTranslatorBG = {
	/////////////
	ADVkey: 1,
	// 1 - show for all
	// 2 - show for new
	// 3 - show for old
	// 4 - do not show for all
	/////////////

        tempresp: "",
	seltext: null,
	myWindow: "",
	NORUN: 0,
	ImTranslator_URL: "http://translate.imtranslator.net/1/",
	TextTransLimit: 8000,
	ImTranslator_Wconst: 550,
	ImTranslator_Hconst: 550,
        THE_URL: "",
	SL_ListOfAvailableLanguages: SL_Languages,
        SL_ListOfAvailableLanguagesExt: SL_LanguagesExt,
	first_run: false,
	the_ID1: null,
	the_ID2: null,
	the_ID3: null,
	the_ID4: null,
	the_ID5: null,
	the_ID6: null,
	the_ID7: null,
	the_ID8: null,
	the_ID9: null,

	init: function(){	
		FExtension.browser.addOnRequestListener(function(request, sender, sendResponse)
		{
		    switch(request.message){
		        case 'setText':
		            window.seltext = request.data
		            break;
		        default:
		            sendResponse({data: 'Invalid arguments'});
		        	break;
		    }
		});

	        if(FExtension.browser.getBrowserName() == 'firefox'){
		    FExtension.browser.refreshSettings();
        	}
		
		//console.log("Segment:" + the_ID1);
		if (!FExtension.store.get('ran_before')) {
			ImTranslatorBG.first_run = true;  
			FExtension.store.set('ran_before', '1');
		}


	        var manifestData = chrome.app.getDetails();
        	var version = manifestData.version;
		if (ImTranslatorBG.first_run) { 
			ImTranslatorBG.setDefault();
			FExtension.browser.getVersion(function(version){
				FExtension.store.set("SL_Version", version);
			})
				
			if(FExtension.browser.getBrowserName() != 'firefox') ImTranslatorBG.SL_RunWelcomePage(); 
		} else { 
                        if(FExtension.store.get("SL_Version") != version){
				FExtension.store.set("SL_Version", version);
				if(FExtension.browser.getBrowserName() != 'firefox') ImTranslatorBG.SL_RunWelcomePage(); 
			}
		}
		ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator",ImTranslatorBG.ContMenuClick, false);
		ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element('extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
		ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element('extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
		ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus(FExtension.element('extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO, false);
		ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus(FExtension.element('extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
                                                                                

		if(FExtension.store.get("SL_ENABLE")=='false') ImTranslatorBG.SL_callbackRequestToChangeRightClickMenu(0);



                if(FExtension.browser.getBrowserName() == 'firefox'){
			ImTranslatorBG.SL_callbackRequest5();
			ImTranslatorBG.SL_callbackRequest6();
		}
		
		ImTranslator_inliner.init();
		
		var SL_TMPTMP1=ImTranslatorBG.SL_ListOfAvailableLanguages.split(",");
		for (var i = 0; i < SL_TMPTMP1.length; i++) {
			var SL_TMPTMP2 = SL_TMPTMP1[i].split(":");
			if (SL_TMPTMP2[0] == FExtension.store.get("SL_langDst")) {
				FExtension.store.set("SL_langDst_name",SL_TMPTMP2[1]);
			}
			if (SL_TMPTMP2[0] == FExtension.store.get("SL_langDst_wpt")) {
				FExtension.store.set("SL_langDst_name_wpt",SL_TMPTMP2[1]);
			}
		}
		
		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.onMessage
			);

		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.ClearMessage
			);
		
	},

        ChortCutToOptions: function() {
		ImTranslatorBG.myWindow = FBrowserFirefox.prototype.openPopUpOptions('chrome://imtranslator/content/xul/options/options.html');
	},


	NewTAB: function(url) {
	 FExtension.browser.openNewTab(url);
	},

	Lexicon: function(LongLngName) {
	 LongLngName=LongLngName.replace("ька","ьку");
	 return LongLngName;
	},

	open_trans_www: function(state,lang) {
	 var EXT="";

	 if(state==1) EXT="&anno=2";
	 var URL_host=content.document.location.href;
	 var LEGO=URL_host.split("&u=");
	 if(LEGO.length>1){
	  var newLANG1=LEGO[0].split("&tl=");
	  var FINALline=newLANG1[0]+"&tl="+lang;
	  URL_host=FINALline+"&u="+LEGO[1];
	 }
	 var GOhead=0;

//	 if(URL_host.indexOf("https://")>-1) {alert(FExtension.element('extWPTalert1'));GOhead=1;}
	 if(URL_host.indexOf("file:///")>-1) {alert(FExtension.element('extWPTalert2'));GOhead=1;}
	 FExtension.store.set("SL_langDst_wpt", lang);

	 if(GOhead==0) ImTranslatorBG.SL_WEB_PAGE_TRANSLATION();

	},
	
	
	setDefault: function(){
        FExtension.store.setDefault();
	},
	

	ClearMessage: function(request, sender, sendResponse) {
/*
	    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
*/
	    if (request.greeting == "Clear")  ImTranslatorBG.SL_callbackRequestToAdd_Clear();
	    else                              ImTranslatorBG.SL_callbackRequestToRemove_Clear();
	},


	onMessage: function(request, sender, sendResponse) {
		//console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");

		FExtension.browser.getVersion(function(version){
			if (FExtension.store.get("SL_Version") != version){
				ImTranslatorBG.setDefault();
				FExtension.store.set("SL_Version", version);
				setTimeout(function(){
					FExtension.browser.openNewTab("http://imtranslator.net/Translator-For-Firefox-ImTranslator_v_7_7.asp?v=v77");
				},1500);
			}
		});

		FExtension.browser.executeForSelectedTab(null, function(tab) { 
			if(tab){
				FExtension.store.set("THE_URL", tab.url);				
			}
		});

//VK REQUEST
		sendResponse({farewell: FExtension.store.get("SL_HKset")+"~"+FExtension.store.get("SL_HKset_inv")+"~"+FExtension.store.get("SL_langSrc_bbl")+"|"+FExtension.store.get("SL_langDst_bbl")+"|"+FExtension.store.get("SL_Fontsize_bbl")+"|"+FExtension.store.get("SL_show_button_bbl")+"|"+FExtension.store.get("SL_pin_bbl")+"|"+FExtension.store.get("SL_translation_mos_bbl")+"|"+FExtension.store.get("SL_MOSHK_bbl")+"|"+FExtension.store.get("SL_no_detect_bbl")+"|"+FExtension.store.get("SL_TS")+"|"+FExtension.store.get("SL_ENABLE")+"|"+FExtension.store.get("SL_TH_2")+"|"+FExtension.store.get("SL_TH_4")+"|"+FExtension.store.get("SL_translatorFK")+"|"+FExtension.store.get("SL_no_detect_it")+"|"+FExtension.store.get("SL_dict_bbl")+"|"+FExtension.store.get("SL_MOSHK_bbl2")+"|"+FExtension.store.get("SL_translatorFK_inv")+"~"+FExtension.store.get("SL_FK_box1")+"|"+FExtension.store.get("SL_inlinerFK1")+"|"+FExtension.store.get("SL_shortcutInliner")+"~"+FExtension.store.get("SL_FK_box2")+"|"+FExtension.store.get("SL_inlinerFK2")+"|"+FExtension.store.get("SL_shortcutClean")+"~"+FExtension.store.get("SL_HK_gt1")+"~"+FExtension.store.get("SL_HK_gt2")+"~"+FExtension.store.get("SL_HK_it1")+"~"+FExtension.store.get("SL_HK_it2")+"~"+FExtension.store.get("SL_HK_bb1")});
		if (request.greeting != "" && request.greeting!="1" && request.greeting!=FExtension.store.getLocalStorage().length){
			request.greeting=(request.greeting + "").replace("{empty}",FExtension.store.get("SL_langSrc_wpt")+"|"+FExtension.store.get("SL_langDst_wpt"));
	                if(request.greeting.length && request.greeting.length>10) {
        	            FExtension.store.set("SL_History", request.greeting + FExtension.store.get("SL_History"));
                	}
		}
//VK REQUEST
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
	},
        SL_callbackRequestToChangeRightClickMenu: function(st){
                if(st == 0) FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID5);
                else{
                        FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID5);
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID6);
			ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element('extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
			ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element('extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it"))),ImTranslator_inliner.inlinerContextOnClick, true);
		}
	},

        SL_callbackRequestToAdd_Clear: function(){

		if(FExtension.store.get("SL_hide_translation")=="true"){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
			ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element('extCMsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
		}
                FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
		ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element('extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, false);
	},

	SL_callbackRequestToRemove_Clear: function(){
		FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
                FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
	},

	SL_callbackRequest: function(){		

		FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID2, FExtension.element('extCMTransPageTo')+" "+ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))));
		FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID3, FExtension.element('extCMMouseOverTransTo')+" "+ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))));
		FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID6, "Inline Translator: "+FExtension.element('extCMTransSel')+" "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it"))),ImTranslator_inliner.inlinerContextOnClick, true);
	},

	SL_callbackRequest2: function(){
		FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID1, "ImTranslator: "+FExtension.element('extCMTransSel')+" "+ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst")));
		FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID5, "Pop-Up Bubble: "+FExtension.element('extCMTransSel')+" "+ ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl")),ImTranslatorBG.SL_PopUpBubble, true);
	},
	SL_callbackRequest2_: function(){
		FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID1, "ImTranslator: "+FExtension.element('extCMTransSel')+" "+ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst2")));
	},


	SL_callbackRequest3: function(){
		setTimeout(function(){
			FExtension.browser.inlinerPostMessage({name:"shortcutInlinerSelectionValue", message:FExtension.store.get("SL_FK_box1")+"|"+FExtension.store.get("SL_inlinerFK1")+"|"+FExtension.store.get("SL_shortcutInliner")});
			FExtension.browser.inlinerPostMessage({name:"shortcutInlinerCleanValue", message:FExtension.store.get("SL_FK_box2")+"|"+FExtension.store.get("SL_inlinerFK2")+"|"+FExtension.store.get("SL_shortcutClean")});
		},3500);
	},

	SL_callbackRequest4: function(){
		if(FExtension.store.get("SL_hide_translation")!="true")	FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
		else{
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID8);
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID9);

			ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element('extCMTsot'),ImTranslator_inliner.inlinerContextShowOnClick, false);
			ImTranslatorBG.the_ID8 = FExtension.browser.createContextMenus(FExtension.element('extCMTct'),ImTranslator_inliner.inlinerContextClearOnClick, false);
			ImTranslatorBG.the_ID9 = FExtension.browser.createContextMenus(FExtension.element('extCMTcl'),ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
		}
	},

	SL_callbackRequest5: function(){
			FBrowserFirefox.prototype.ResetAllWindows("Context1","imtranslator");
			FBrowserFirefox.prototype.ResetAllWindows("Context2","imtranslator2");
			FBrowserFirefox.prototype.ResetAllWindows("Context3","Inline-menu");
			FBrowserFirefox.prototype.ResetAllWindows("Context4","Bubble-menu");
			FBrowserFirefox.prototype.ResetAllWindows("Context5","imtranslator3");
			FBrowserFirefox.prototype.ResetAllWindows("Context6","ImTranslator-menu");
			FBrowserFirefox.prototype.ResetAllWindows("showBut","ImTranslator-translator-toolbar-button");
	},

	SL_callbackRequest6: function(){
			FBrowserFirefox.prototype.ResetAllHKS();
	},

	SL_PopUpBubble: function(info, tab){
		 chrome.tabs.executeScript(tab.id, {
		    code: 'TranslatorIM.SL_CLOBALPosition(window.e, 0);TranslatorIM.SL_ShowBalloon();'
		 });		
	},

	GetLongLanguageName: function(code){
		var temp=FExtension.element('extLanguages').split(',');
		var lng="";
		var output="Spanish";
		for(var i=0; i<temp.length; i++){
			lng=temp[i].split(":");
		 	if(lng[0]==code) {
				output=lng[1]; 
				break;
			}
		}
		return (output);
       	},

	ContMenuClick: function(info, tab) {

	        var s="undefined";
        	if(typeof info != "undefined"){
	            s=String(info.selectionText);
	        } else {
        	    s=String(FExtension.browser.getSelectionText());
	        }
		if(s!='undefined'){
	            FExtension.browser.sendMessageTabs({greeting: "hello2"}, function(response) {
        	    if(response){
		       // console.log(response.farewell);
                    }
		    });
		    setTimeout(function(){
			    window.blur();
           
			    s=s.replace(/(^[\s]+|[\s]+$)/g, '');
			    var theQ=s.split(" ").length;

			    if(s.match(/[$-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
			    if(FExtension.store.get("SL_dict")=="false") theQ=100;
	 		    if(s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;

			    if(theQ==1){
				if(FExtension.browser.getBrowserName() == 'firefox') ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("../../xul/popup/dictionary.html", s);
				else ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("../../html/popup/dictionary.html", s);
			    } else {
				if(FExtension.browser.getBrowserName() == 'firefox') ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("../../xul/popup/translator.html", s);
				else ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("../../html/popup/translator.html", s);			
			    }
		            ImTranslatorBG.myWindow.focus(); 
	            },500);

		 }else{
		   	window.blur();
		   	if(!ImTranslatorBG.myWindow){
        		        FExtension.browser.sendMessageTabs({greeting: "hello"}, function(response) {
		                if(response){
                		       // console.log(response.farewell);
		                }
                		});

	                	setTimeout(function(){
	        	            ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("translator.html", s);
        	        	},500);
		   	}else {
				if(ImTranslatorBG.myWindow.name==""){
                		    FExtension.browser.sendMessageTabs({greeting: "hello"}, function(response) {
		                    if(response){
			     		 //   console.log(response.farewell);
                		    }
		                    });

		                    setTimeout(function(){
                		        ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("translator.html", s);
		                    },500);
				}
		   	}	
		  	ImTranslatorBG.myWindow.focus(); 
		 }
	},
	
	SL_WEB_PAGE_TRANSLATION_MO: function (info, tab) {
		var URL_host= FExtension.browser.getCurrentUrl(tab);
		var lang=FExtension.store.get("SL_langDst_wpt");
		var LEGO=URL_host.split("&u=");
		if(LEGO.length>1){
			var newLANG1=LEGO[0].split("&tl=");
			var FINALline=newLANG1[0]+"&tl="+lang;
			URL_host=FINALline+"&u="+LEGO[1];
		}
		var GOhead=0;
/*
		if(URL_host.indexOf("https://")>-1) {
			alert(FExtension.element('extWPTalert1'));GOhead=1;
		}
*/
		if(URL_host.indexOf("file:///")>-1) {
			alert(FExtension.element('extWPTalert2'));GOhead=1;
		}

		if(GOhead==0){
			ImTranslatorBG.THE_URL = "http://translate.googleusercontent.com/translate_c?depth=1&hl=en&rurl=translate.google.com&tl="+lang+"&u="+URL_host;
			if (FExtension.store.get("SL_TH_3")==1){
				var SLnow = new Date();
				SLnow=SLnow.toString();
	            		var TMPtime=SLnow.split(" ");
	            		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
	            		var tp=3;
	            		FExtension.store.set("SL_History", URL_host + "~~" + ImTranslatorBG.THE_URL + "~~auto|"+lang+"~~"+ ImTranslatorBG.THE_URL+"~~"+CurDT+"~~"+tp+"^^" + FExtension.store.get("SL_History"));
			}
			window.open(ImTranslatorBG.THE_URL);
		}
	},
	
	SL_WEB_PAGE_TRANSLATION: function(info, tab) {
		var URL_host= FExtension.browser.getCurrentUrl(tab);
		var lang=FExtension.store.get("SL_langDst_wpt");
		var LEGO=URL_host.split("&u=");
		if(LEGO.length>1){
			var newLANG1=LEGO[0].split("&tl=");
			var FINALline=newLANG1[0]+"&tl="+lang;
			URL_host=FINALline+"&u="+LEGO[1];
		}
		var GOhead=0;
/*
		if(URL_host.indexOf("https://")>-1) {
			alert(FExtension.element('extWPTalert1'));GOhead=1;
		}
*/
		if(URL_host.indexOf("file:///")>-1) {
			alert(FExtension.element('extWPTalert2'));GOhead=1;
		}
		if(GOhead==0){
			ImTranslatorBG.THE_URL = "http://translate.googleusercontent.com/translate_c?depth=1&anno=2&hl=en&rurl=translate.google.com&tl="+lang+"&u="+URL_host;
			if (FExtension.store.get("SL_TH_3")==1){
				var SLnow = new Date();
				SLnow=SLnow.toString();
	            		var TMPtime=SLnow.split(" ");
	            		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
	            		var tp=4;
	            		FExtension.store.set("SL_History", URL_host + "~~" + ImTranslatorBG.THE_URL + "~~auto|"+lang+"~~"+ ImTranslatorBG.THE_URL+"~~"+CurDT+"~~"+tp+"^^" + FExtension.store.get("SL_History"));
			}
			window.open(ImTranslatorBG.THE_URL);
		}
	},
	
	SL_SET_TRANSLATION_LNG: function (info, tab){
		FExtension.browser.openNewTab(FExtension.browser.getPopUpURL("options-router.html", true));
	},


	SL_RunWelcomePage: function(){
	 //NEW PARAMS---------------------
	 FExtension.store.loadNewParams();
	 //NEW PARAMS---------------------
	 switch(ImTranslatorBG.ADVkey){
	  case 1: FExtension.browser.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp"); break;
	  case 2: if(ImTranslatorBG.first_run==true) FExtension.browser.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp"); break;
	  case 3: if(ImTranslatorBG.first_run==false) FExtension.browser.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp"); break;
	 }
	},

	//HOTKEYS FOR FF----------------
	SL_HKS: function (e){
	 window.addEventListener("keyup",function(e){
	           var data1=FExtension.store.get("SL_GLOBAL_HK_1").split("|");
		   if(data1[0]=="1"){
			if(data1[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data1[1]=="Ctrl+Alt"){
					if(data1[2]==e.key || data1[2].toLowerCase()==e.key) FExtension_chromeListener.launchTranslator();
				}
				if(e.altKey && !e.ctrlKey && data1[1]=="Alt"){
					if(data1[2]==e.key || data1[2].toLowerCase()==e.key) FExtension_chromeListener.launchTranslator();
				}
				if(e.ctrlKey && !e.altKey && data1[1]=="Ctrl"){
					if(data1[2]==e.key || data1[2].toLowerCase()==e.key) FExtension_chromeListener.launchTranslator();
				}
			}else{
				if(data1[2]==e.key || data1[2].toLowerCase()==e.key) FExtension_chromeListener.launchTranslator();
			}
		   }

	           var data2=FExtension.store.get("SL_GLOBAL_HK_2").split("|");
		   if(data2[0]=="1"){
			if(data2[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data2[1]=="Ctrl+Alt"){
					if(data2[2]==e.key || data2[2].toLowerCase()==e.key) ImTranslatorBG.ContMenuClick();
				}
				if(e.altKey && !e.ctrlKey && data2[1]=="Alt"){
					if(data2[2]==e.key || data2[2].toLowerCase()==e.key) ImTranslatorBG.ContMenuClick();
				}
				if(e.ctrlKey && !e.altKey && data2[1]=="Ctrl"){
					if(data2[2]==e.key || data2[2].toLowerCase()==e.key) ImTranslatorBG.ContMenuClick();
				}
			}else{
				if(data2[2]==e.key || data2[2].toLowerCase()==e.key) ImTranslatorBG.ContMenuClick();
			}
		   }

	           var data3=FExtension.store.get("SL_GLOBAL_HK_3").split("|");
		   if(data3[0]=="1"){
			if(data3[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data3[1]=="Ctrl+Alt"){
					if(data3[2]==e.key || data3[2].toLowerCase()==e.key) ImTranslatorBG.ChortCutToOptions();
				}
				if(e.altKey && !e.ctrlKey && data3[1]=="Alt"){
					if(data3[2]==e.key || data3[2].toLowerCase()==e.key) ImTranslatorBG.ChortCutToOptions();
				}
				if(e.ctrlKey && !e.altKey && data3[1]=="Ctrl"){
					if(data3[2]==e.key || data3[2].toLowerCase()==e.key) ImTranslatorBG.ChortCutToOptions();
				}
			}else{
				if(data3[2]==e.key || data3[2].toLowerCase()==e.key) ImTranslatorBG.ChortCutToOptions();
			}
		   }

	           var data4=FExtension.store.get("SL_GLOBAL_HK_4").split("|");
		   if(data4[0]=="1"){
			if(data4[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data4[1]=="Ctrl+Alt"){
					if(data4[2]==e.key || data4[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTranslator();
				}
				if(e.altKey && !e.ctrlKey && data4[1]=="Alt"){
					if(data4[2]==e.key || data4[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTranslator();
				}
				if(e.ctrlKey && !e.altKey && data4[1]=="Ctrl"){
					if(data4[2]==e.key || data4[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTranslator();
				}
			}else{
				if(data4[2]==e.key || data4[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTranslator();
			}
		   }

	           var data5=FExtension.store.get("SL_GLOBAL_HK_5").split("|");
		   if(data5[0]=="1"){
			if(data5[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data5[1]=="Ctrl+Alt"){
					if(data5[2]==e.key || data5[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTTS();
				}
				if(e.altKey && !e.ctrlKey && data5[1]=="Alt"){
					if(data5[2]==e.key || data5[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTTS();
				}
				if(e.ctrlKey && !e.altKey && data5[1]=="Ctrl"){
					if(data5[2]==e.key || data5[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTTS();
				}
			}else{
				if(data5[2]==e.key || data5[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsTTS();
			}
		   }

	           var data6=FExtension.store.get("SL_GLOBAL_HK_6").split("|");
		   if(data6[0]=="1"){
			if(data6[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data6[1]=="Ctrl+Alt"){
					if(data6[2]==e.key || data6[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsDictionary();
				}
				if(e.altKey && !e.ctrlKey && data6[1]=="Alt"){
					if(data6[2]==e.key || data6[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsDictionary();
				}
				if(e.ctrlKey && !e.altKey && data6[1]=="Ctrl"){
					if(data6[2]==e.key || data6[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsDictionary();
				}
			}else{
				if(data6[2]==e.key || data6[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsDictionary();
			}
		   }

	           var data7=FExtension.store.get("SL_GLOBAL_HK_7").split("|");
		   if(data7[0]=="1"){
			if(data7[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data7[1]=="Ctrl+Alt"){
					if(data7[2]==e.key || data7[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsVirk();
				}
				if(e.altKey && !e.ctrlKey && data7[1]=="Alt"){
					if(data7[2]==e.key || data7[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsVirk();
				}
				if(e.ctrlKey && !e.altKey && data7[1]=="Ctrl"){
					if(data7[2]==e.key || data7[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsVirk();
				}
			}else{
				if(data7[2]==e.key || data7[2].toLowerCase()==e.key) FExtension_chromeListener.ToolsVirk();
			}
		   }

	           var data8=FExtension.store.get("SL_GLOBAL_HK_8").split("|");
		   if(data8[0]=="1"){
			if(data8[1]!="None"){
				ImTranslatorBG.NORUN=0;
				if(e.ctrlKey && e.altKey && data8[1]=="Ctrl+Alt"){
					if(data8[2]==e.key || data8[2].toLowerCase()==e.key) ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO();
				}
				if(e.altKey && !e.ctrlKey && data8[1]=="Alt"){
					if(data8[2]==e.key || data8[2].toLowerCase()==e.key) ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO();
				}
				if(e.ctrlKey && !e.altKey && data8[1]=="Ctrl"){
					if(data8[2]==e.key || data8[2].toLowerCase()==e.key) ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO();
				}
			}else{
				if(data8[2]==e.key || data8[2].toLowerCase()==e.key) ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO();
			}
		   }
	 },!1);
	}
}

if(FExtension.browser.isLocalStoragePreset()){
	ImTranslatorBG.init();
}

//HOTKEYS FOR FF----------------
(function(e){ ImTranslatorBG.SL_HKS(e); } )();
