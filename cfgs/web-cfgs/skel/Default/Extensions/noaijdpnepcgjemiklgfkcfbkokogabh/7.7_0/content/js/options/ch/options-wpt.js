'use strict';
(function(){
	var c2=GEBI("SL_logo-link");
	c2.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp");
		//chrome.tabs.create({"url": "http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp"});
	},!1);
} )();
(function(){
	var pp=GEBI("SL_PP");
	pp.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2");
		//chrome.tabs.create({"url": "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2"});
	},!1);
} )();


(function(){
    window.addEventListener('load',function(){
	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	var OB = GEBI('SL_langSrc_wpt');
	var OB1 = document.createElement('option');
	var v = document.createAttribute("value");
	v.value = "auto";
	OB1.setAttributeNode(v);
	OB1.appendChild(document.createTextNode(FExtension.element('extDetect_language_from_box')));
	OB.appendChild(OB1); 
	var SL_TMP = SL_Languages.split(",");
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB.appendChild(OB2);
	}

	var OB3 = GEBI('SL_langDst_wpt');
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB3.appendChild(OB2);
	}
	INIT();
    },!1);
})();
function CONSTRUCTOR(){
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element('extTITLE')));
	GEBI('SLfeedback').appendChild(document.createTextNode(FExtension.element('extFeedback')));
	GEBI('SL_PP').title=FExtension.element('extContribution_ttl');
	GEBI('SL_options4').title=FExtension.element('extTrHist');
	GEBI('SL_BG_op').appendChild(document.createTextNode(FExtension.element('extSLBG_op')));
	GEBI('SL_setLS4allTr').appendChild(document.createTextNode(FExtension.element('extSL_setLS4allTr')));
	GEBI('SLSeSo').appendChild(document.createTextNode(FExtension.element('extSeSo')));
	GEBI('SLSeTa').appendChild(document.createTextNode(FExtension.element('extSeTa')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element('extTrHist')));
	GEBI('SL_WpTH').appendChild(document.createTextNode(FExtension.element('extWpTH')));
	GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element('extSaveButton')));
}


//document.querySelector('#SL_save_button').addEventListener('click', save_options);
(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);
})();


function INIT(){
	window.resizeTo(480,(GEBI('SL_body').clientHeight+65));
	window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);
	var mySL_langSrc_wpt = FExtension.store.get("SL_langSrc_wpt");
	var mySL_langSrcSelect_wpt = GEBI("SL_langSrc_wpt");
	for (var i = 0; i < mySL_langSrcSelect_wpt.options.length; i++) {
		var mySL_langSrcOption_wpt = mySL_langSrcSelect_wpt.options[i];
		if (mySL_langSrcOption_wpt.value == mySL_langSrc_wpt) {
			mySL_langSrcOption_wpt.selected = "true";
			break;
		}
	}

	var mySL_langDst_wpt = FExtension.store.get("SL_langDst_wpt");
	var mySL_langDstSelect_wpt = GEBI("SL_langDst_wpt");
	for (var i = 0; i < mySL_langDstSelect_wpt.options.length; i++) {
		var mySL_langDstOption_wpt = mySL_langDstSelect_wpt.options[i];
		if (mySL_langDstOption_wpt.value == mySL_langDst_wpt) {
			mySL_langDstOption_wpt.selected = "true";
			break;
		}
	}

	var SL_TH_3 = FExtension.store.get("SL_TH_3");
	if(SL_TH_3=="1")  GEBI("SL_TH_3").checked = true;
	else GEBI("SL_TH_3").checked = false;

	var SL_global_lng_wpt = FExtension.store.get("SL_global_lng_wpt");
	if(SL_global_lng_wpt=="true")  GEBI("SL_global_lng_wpt").checked = true;
	else GEBI("SL_global_lng_wpt").checked = false;
}

function save_options() {
	var SL_select_S_wpt = GEBI("SL_langSrc_wpt");
	var SL_select_T_wpt = GEBI("SL_langDst_wpt");

	if(SL_select_S_wpt.value!=SL_select_T_wpt.value){

		if(GEBI("SL_TH_3").checked==true) FExtension.store.set("SL_TH_3","1");
		else FExtension.store.set("SL_TH_3", "0");

		if(GEBI("SL_global_lng_wpt").checked==true){
			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_wpt").checked);

			FExtension.store.set("SL_langSrc", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			FExtension.store.set("SL_langSrc_bbl", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			FExtension.store.set("SL_langSrc_wpt", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);
			FExtension.store.set("SL_langSrc_it", SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value);

			FExtension.store.set("SL_langDst", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			FExtension.store.set("SL_langDst_bbl", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			FExtension.store.set("SL_langDst_wpt", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
			FExtension.store.set("SL_langDst_name_wpt", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text);
			FExtension.store.set("SL_langDst_it", SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value);
		} else {
			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_wpt").checked);
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_wpt").checked);
		}	
		var SL_langSrc_wpt = SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value;
		FExtension.store.set("SL_langSrc_wpt", SL_langSrc_wpt);
		
		var SL_langDst_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value;
		FExtension.store.set("SL_langDst_wpt", SL_langDst_wpt);
		
		var SL_langDst_name_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text;
		FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_wpt);

//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
//==============================

		if(GEBI("SL_global_lng_wpt").checked==true){
			FExtension.store.set("SL_langDst_name", SL_langDst_name_wpt);
			FExtension.store.set("SL_langDst_name_bbl", SL_langDst_name_wpt);
			FExtension.store.set("SL_langDst_name_gt", SL_langDst_name_wpt);
			FExtension.store.set("SL_langDst_name_it", SL_langDst_name_wpt);
		}

		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest4();
	        FExtension.bg.FExtension.browser.refreshSettings();


		if (FExtension.bg.FExtension.browserInject && FExtension.bg.FExtension.browserInject.getBrowserName() == 'firefox') {
			FExtension.bg.document.getElementById("imtranslator3-1").label="Translate this page to " + FExtension.store.get("SL_langDst_name_wpt");
			FExtension.bg.document.getElementById("imtranslator3-2").label="Mouseover translation to " + FExtension.store.get("SL_langDst_name_wpt");
		}

		var SL_status = GEBI("SL_status");
		SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";
		setTimeout(function() {
			SL_status.innerHTML = "";
		}, 2000);
	}else alert(FExtension.element('extS_T_L_diff'));
}

function GEBI(id){ return document.getElementById(id);}
