'use strict';
(function(){GEBI("SRV1").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV2").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV2"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){ NoneColor(1); SL_KBD(0);},!1); } )();
(function(){GEBI("SRV2").addEventListener("mouseout",function(){ SL_KBD(0);},!1); } )();
(function(){GEBI("SL_del1").addEventListener("click",function(){SL_del(1);NoneColor(1);},!1);} )();

(function(){window.addEventListener("mousemove",function(){NoneColor(1);},!1);} )();

(function(){
    window.addEventListener('load',function(){
        GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	var OB = GEBI('SL_langSrc_tr');
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

	var OB3 = GEBI('SL_langDst_tr');
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
	GEBI('SL_TR_op').appendChild(document.createTextNode(FExtension.element('extTR_op')));
	GEBI('SL_DetSoLaAu').appendChild(document.createTextNode(FExtension.element('extDetSoLaAu')));
	GEBI('SL_enable_dict').appendChild(document.createTextNode(FExtension.element('extEnable_Dict')));
	GEBI('SL_showBW').appendChild(document.createTextNode(FExtension.element('extShowBW')));
	GEBI('SL_ChFS').appendChild(document.createTextNode(FExtension.element('extChFS')));
	GEBI('SL_FS_small').appendChild(document.createTextNode(FExtension.element('extFS_small')));
	GEBI('SL_FS_large').appendChild(document.createTextNode(FExtension.element('extFS_large')));
	GEBI('SL_HotKeys').appendChild(document.createTextNode(FExtension.element('extHotKeys')));
	GEBI('SL_TOMS').appendChild(document.createTextNode(FExtension.element('extTOMS')));
	GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element('extInvTr')));
	GEBI('SL_del1').title=FExtension.element('extDelete');
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element('extTrHist')));
	GEBI('SL_EnTH').appendChild(document.createTextNode(FExtension.element('extEnTH')));
	GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element('extSaveButton')));
}




function INIT(){
  window.resizeTo(480,(GEBI('SL_body').clientHeight+65));
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);

  var mySL_langSrc_tr = FExtension.store.get("SL_langSrc");
  var mySL_langSrc_trSelect = GEBI("SL_langSrc_tr");
  for (var i = 0; i < mySL_langSrc_trSelect.options.length; i++) {
    var mySL_langSrc_trOption = mySL_langSrc_trSelect.options[i];
    if (mySL_langSrc_trOption.value == mySL_langSrc_tr) {
      mySL_langSrc_trOption.selected = "true";
      break;
    }
  }

  var mySL_langDst_tr = FExtension.store.get("SL_langDst");
  var mySL_langDst_trSelect = GEBI("SL_langDst_tr");
  for (var i = 0; i < mySL_langDst_trSelect.options.length; i++) {
    var mySL_langDst_trOption = mySL_langDst_trSelect.options[i];
    if (mySL_langDst_trOption.value == mySL_langDst_tr) {
      mySL_langDst_trOption.selected = "true";
      break;
    }
  }

  var SL_TH_1 = FExtension.store.get("SL_TH_1");
  if(SL_TH_1=="1")  GEBI("SL_TH_1").checked = true;
  else GEBI("SL_TH_1").checked = false;

  var SL_global_lng = FExtension.store.get("SL_global_lng");
  if(SL_global_lng=="true")  GEBI("SL_global_lng").checked = true;
  else GEBI("SL_global_lng").checked = false;

  var SL_no_detect = FExtension.store.get("SL_no_detect");
  if(SL_no_detect=="true")  GEBI("SL_no_detect").checked = true;
  else GEBI("SL_no_detect").checked = false;

  var SL_dict = FExtension.store.get("SL_dict");
  if(SL_dict=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  var mySL_show_back = FExtension.store.get("SL_show_back");
  if(mySL_show_back=="true")  GEBI("SL_show_back").checked = true;
  else GEBI("SL_show_back").checked = false;

  var mySL_Fontsize = FExtension.store.get("SL_Fontsize");
  var mySL_FontsizeSelect = GEBI("SL_Fontsize");
  for (var i = 0; i < mySL_FontsizeSelect.options.length; i++) {
    var mySL_FontsizeOption = mySL_FontsizeSelect.options[i];
    if (mySL_FontsizeOption.value == mySL_Fontsize) {
      mySL_FontsizeOption.selected = "true";
      break;
    }
  }

  // Hotkeys block

  var mySL_HKset = FExtension.store.get("SL_HKset").split("|");
  var mySL_HK = mySL_HKset[2];
  if(mySL_HK=="true")  GEBI("SL_HK1").checked = true;
  else GEBI("SL_HK1").checked = false;

  var mySL_HKset_inv = FExtension.store.get("SL_HKset_inv").split("|");
  var mySL_HK_inv = mySL_HKset_inv[2];
  if(mySL_HK_inv=="true")  GEBI("SL_HK2").checked = true;
  else GEBI("SL_HK2").checked = false;


  if(FExtension.store.get("SL_HK_gt1")!=""){
	GEBI('SRV1').value=FExtension.store.get("SL_HK_gt1");
	GEBI('SRV1').style.color="#000";
  } else {
	GEBI('SRV1').value="None";
	GEBI('SRV1').style.color="#ccc";
  }
  GEBI('SRV2').value=FExtension.store.get("SL_HK_gt2");
}

function save_options() {

 if(VERIFY_ALL_TABS(1) == true){
  var SL_select_S = GEBI("SL_langSrc_tr");
  var SL_select_T = GEBI("SL_langDst_tr");
  var SL_select_FS = GEBI("SL_Fontsize");
 
   if(SL_select_S.value!=SL_select_T.value){
	   if(GEBI("SL_TH_1").checked==true) FExtension.store.set("SL_TH_1", "1");
	   else FExtension.store.set("SL_TH_1", "0");
	   
	   
	   if(GEBI("SL_global_lng").checked==true){
		   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng").checked);
	
		   FExtension.store.set("SL_langSrc", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_bbl", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_wpt", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_it", SL_select_S.children[SL_select_S.selectedIndex].value);
	
		   FExtension.store.set("SL_langDst", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_bbl", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_wpt", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_it", SL_select_T.children[SL_select_T.selectedIndex].value);

		   FExtension.store.set("SL_no_detect", GEBI("SL_no_detect").checked);
		   FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect").checked);
		   FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect").checked);

		   FExtension.store.set("SL_langDst_name", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_wpt", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_bbl", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_it", SL_select_T.children[SL_select_T.selectedIndex].text);

	   	} else {
		   FExtension.store.set("SL_langDst_name", SL_select_T.children[SL_select_T.selectedIndex].text);
	   	   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng").checked);
	   	}

		//------TIME STAMP--------------
		new Date().getTime();
		FExtension.store.set("SL_TS", Date.now());
		//==============================
		var SL_langSrc_tr = SL_select_S.children[SL_select_S.selectedIndex].value;
		FExtension.store.set("SL_langSrc", SL_langSrc_tr);

		FExtension.store.set("SL_langSrc2",SL_langSrc_tr);

		var SL_langDst_tr = SL_select_T.children[SL_select_T.selectedIndex].value;
		FExtension.store.set("SL_langDst", SL_langDst_tr);
	
		FExtension.store.set("SL_no_detect", GEBI("SL_no_detect").checked);
	
		var SL_langDst_name = SL_select_T.children[SL_select_T.selectedIndex].text;
		FExtension.store.set("SL_langDst_name", SL_langDst_name);

 	        var SL_Fontsize = SL_select_FS.children[SL_select_FS.selectedIndex].value;
	        FExtension.store.set("SL_Fontsize", SL_Fontsize);

		FExtension.store.set("SL_dict", GEBI("SL_dictionary").checked);
		FExtension.store.set("SL_show_back", GEBI("SL_show_back").checked);

		FExtension.store.set("SL_translatorFK", SL_HK_SPLIT("SRV2",1));
		FExtension.store.set("SL_translatorFK_inv", SL_HK_SPLIT("SRV1",1));
	
		var SL_HKset = 3;
	        SL_HKset = SL_HKset + "|" + GET_CODE(SL_HK_SPLIT("SRV2",2));
	   	SL_HKset = SL_HKset + "|" + GEBI("SL_HK1").checked;	
		FExtension.store.set("SL_HKset", SL_HKset);

		FExtension.store.set("SL_HKset_inv", "3|90|"+GEBI("SL_HK2").checked);

		if(GEBI('SRV1').value!="None")	FExtension.store.set("SL_HK_gt1", GEBI('SRV1').value);
		else FExtension.store.set("SL_HK_gt1", "");
		FExtension.store.set("SL_HK_gt2", GEBI('SRV2').value);

		FExtension.store.set("SL_Flag", "FALSE");

		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest4();
	        FExtension.bg.FExtension.browser.refreshSettings();

	   	var SL_status = GEBI("SL_status");
	   	SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";

		setTimeout(function() {
		   SL_status.innerHTML = "";
		}, 2000);
   }else{ 
	  alert(FExtension.element('extS_T_L_diff'));
   }
 } else DO_IFRAME(1);
}

function GEBI(id){ return document.getElementById(id);}


function VERIFY(ob){
 GEBI('SRV1').style.background="#fff";
 GEBI('SRV2').style.background="#fff";
 GEBI('SL_kbd').style.display="none";
  if(GEBI('SRV1').value == GEBI('SRV2').value || GEBI('SRV2').value==""){
    GEBI('SL_kbd').style.display="block";
    GEBI('SL_kbd').style.width="150px;"
    GEBI('SL_kbd').style.marginLeft="150px;"
    GEBI('SRV1').style.background="#FFDFD7";
    GEBI('SRV2').style.background="#FFDFD7";
    if(GEBI('SRV2').value==""){ 
        GEBI('SL_kbd').style.background="#FFDFD7";
	GEBI('SL_kbd').innerHTML=FExtension.element('extEnterHK');
        GEBI('SRV1').style.background="#fff";
    }else{
	GEBI('SL_kbd').innerHTML=FExtension.element('extHKconflict');
        GEBI('SL_kbd').style.background="#FFDFD7";
    }	
    setTimeout(function() { SL_ACTIVE.value=SL_TMP;GEBI('SRV1').style.background="#fff";GEBI('SRV2').style.background="#fff"; }, 600);            
    if(GEBI('SRV1').value=="") NoneColor(1);
  return true;
  }else{
    if(GEBI('SRV1').value=="") GEBI('SRV1').style.background="#FFF"; 
    GEBI('SL_kbd').style.display="none";
    return false;
  }
}

