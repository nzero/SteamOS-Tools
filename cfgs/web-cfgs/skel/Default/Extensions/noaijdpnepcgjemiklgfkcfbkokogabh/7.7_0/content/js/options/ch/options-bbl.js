'use strict';
(function(){GEBI("SRV5").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV5"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV5").addEventListener("mouseout",function(){ NoneColor(5); SL_KBD(0);},!1); } )();
(function(){GEBI("SL_del5").addEventListener("click",function(){SL_del(5);},!1);} )();

(function(){GEBI("SL_ENABLE").addEventListener("click",function(){SL_Enable_ImTranslator_Bubble_SYNCHRO();},!1);} )();


(function(){window.addEventListener("mousemove",function(){NoneColor(5);},!1);} )();

(function(){
    window.addEventListener('load',function(){
       	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	var OB = GEBI('SL_langSrc_bbl');
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

	var OB3 = GEBI('SL_langDst_bbl');
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
	GEBI('SL_DetSoLaAu').appendChild(document.createTextNode(FExtension.element('extDetSoLaAu')));
	GEBI('SL_TR_op').appendChild(document.createTextNode(FExtension.element('extTR_op')));
	GEBI('SL_enable_dict').appendChild(document.createTextNode(FExtension.element('extEnable_Dict')));
	GEBI('SL_enable').appendChild(document.createTextNode(FExtension.element('extEnable')));
	GEBI('SL_Pin').appendChild(document.createTextNode(FExtension.element('extPin_ttl')));
	GEBI('SL_STB').appendChild(document.createTextNode(FExtension.element('extSTB')));
	GEBI('SL_TOMS').appendChild(document.createTextNode(FExtension.element('extTOMS')));
	GEBI('SL_TK').appendChild(document.createTextNode(FExtension.element('extTK')));
	GEBI('SL_del5').title=FExtension.element('extDelete');
	GEBI('SL_ChFS').appendChild(document.createTextNode(FExtension.element('extChFS')));
	GEBI('SL_FS_small').appendChild(document.createTextNode(FExtension.element('extFS_small')));
	GEBI('SL_FS_large').appendChild(document.createTextNode(FExtension.element('extFS_large')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element('extTrHist')));
	GEBI('SL_BblTH').appendChild(document.createTextNode(FExtension.element('extBblTH')));
	GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element('extSaveButton')));
}




function INIT(){
  window.resizeTo(480,(GEBI('SL_body').clientHeight+65));
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);

  var mySL_langSrc_bbl = FExtension.store.get("SL_langSrc_bbl");
  var mySL_langSrcSelect_bbl = GEBI("SL_langSrc_bbl");
  for (var i = 0; i < mySL_langSrcSelect_bbl.options.length; i++) {
    var mySL_langSrcOption_bbl = mySL_langSrcSelect_bbl.options[i];
    if (mySL_langSrcOption_bbl.value == mySL_langSrc_bbl) {
      mySL_langSrcOption_bbl.selected = "true";
      break;
    }
  }

  var mySL_langDst_bbl = FExtension.store.get("SL_langDst_bbl");
  var mySL_langDstSelect_bbl = GEBI("SL_langDst_bbl");
  for (var i = 0; i < mySL_langDstSelect_bbl.options.length; i++) {
    var mySL_langDstOption_bbl = mySL_langDstSelect_bbl.options[i];
    if (mySL_langDstOption_bbl.value == mySL_langDst_bbl) {
      mySL_langDstOption_bbl.selected = "true";
      break;
    }
  }

  var SL_TH_2 = FExtension.store.get("SL_TH_2");
  if(SL_TH_2=="1")  GEBI("SL_TH_2").checked = true;
  else GEBI("SL_TH_2").checked = false;


  var SL_ENABLE = FExtension.store.get("SL_ENABLE");
  if(SL_ENABLE=="true")  GEBI("SL_ENABLE").checked = true;
  else GEBI("SL_ENABLE").checked = false;

  var SL_global_lng_bbl = FExtension.store.get("SL_global_lng_bbl");
  if(SL_global_lng_bbl=="true")  GEBI("SL_global_lng_bbl").checked = true;
  else GEBI("SL_global_lng_bbl").checked = false;

  var SL_no_detect_bbl = FExtension.store.get("SL_no_detect_bbl");
  if(SL_no_detect_bbl=="true")  GEBI("SL_no_detect_bbl").checked = true;
  else GEBI("SL_no_detect_bbl").checked = false;

  var mySL_Fontsize_bbl = FExtension.store.get("SL_Fontsize_bbl");
  var mySL_FontsizeSelect_bbl = GEBI("SL_Fontsize_bbl");
  for (var i = 0; i < mySL_FontsizeSelect_bbl.options.length; i++) {
    var mySL_FontsizeOption_bbl = mySL_FontsizeSelect_bbl.options[i];
    if (mySL_FontsizeOption_bbl.value == mySL_Fontsize_bbl) {
      mySL_FontsizeOption_bbl.selected = "true";
      break;
    }
  }

  var SL_dict = FExtension.store.get("SL_dict_bbl");
  if(SL_dict=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  var SL_translation_mos_bbl = FExtension.store.get("SL_translation_mos_bbl");
  if(SL_translation_mos_bbl=="true")  GEBI("SL_translation_mos_bbl").checked = true;
  else GEBI("SL_translation_mos_bbl").checked = false;

  var SL_pin_bbl = FExtension.store.get("SL_pin_bbl");
  if(SL_pin_bbl=="true")  GEBI("SL_pin_bbl").checked = true;
  else GEBI("SL_pin_bbl").checked = false;

  var SL_show_button_bbl = FExtension.store.get("SL_show_button_bbl");
  if(SL_show_button_bbl=="true")  GEBI("SL_show_button_bbl").checked = true;
  else GEBI("SL_show_button_bbl").checked = false;

  if(FExtension.store.get("SL_HK_bb1")!=""){
	GEBI('SRV5').value=FExtension.store.get("SL_HK_bb1");
	GEBI('SRV5').style.color="#000";
  } else {
	GEBI('SRV5').value="None";
	GEBI('SRV5').style.color="#ccc";
  }
  SL_Enable_ImTranslator_Bubble_SYNCHRO();
}

function save_options() {
 if(VERIFY_ALL_TABS(5) == true){
  var SL_select_S_bbl = GEBI("SL_langSrc_bbl");
  var SL_select_T_bbl = GEBI("SL_langDst_bbl");
  var SL_select_FS_bbl = GEBI("SL_Fontsize_bbl");

  if(SL_select_S_bbl.value!=SL_select_T_bbl.value){

   if(GEBI("SL_TH_2").checked==true) FExtension.store.set("SL_TH_2", "1");
   else FExtension.store.set("SL_TH_2","0");

   if(GEBI("SL_global_lng_bbl").checked==true){

	   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_bbl").checked);

	   FExtension.store.set("SL_langSrc", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langSrc_bbl", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langSrc_wpt", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langSrc_it", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);

	   FExtension.store.set("SL_langDst", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langDst_bbl", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langDst_wpt", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);
	   FExtension.store.set("SL_langDst_it", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);

	   FExtension.store.set("SL_no_detect", GEBI("SL_no_detect_bbl").checked);
	   FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect_bbl").checked);
	   FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect_bbl").checked);

	   FExtension.store.set("SL_langDst_name_wpt", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].text);

   } else {

	   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_bbl").checked);
	   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_bbl").checked);
   }	
	var SL_langSrc_bbl = SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value;
	FExtension.store.set("SL_langSrc_bbl", SL_langSrc_bbl);

	var SL_langDst_bbl = SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value;
	FExtension.store.set("SL_langDst_bbl", SL_langDst_bbl);

	FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect_bbl").checked);

	FExtension.store.set("SL_ENABLE", GEBI("SL_ENABLE").checked);

	var SL_langDst_name_bbl = SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].text;
	FExtension.store.set("SL_langDst_name_bbl", SL_langDst_name_bbl);

        FExtension.store.set("SL_dict_bbl", GEBI("SL_dictionary").checked);
	
	if(GEBI('SRV5').value!="None")	FExtension.store.set("SL_HK_bb1", GEBI('SRV5').value);
	else FExtension.store.set("SL_HK_bb1", "");


	//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
	//==============================
   

		if(GEBI("SL_global_lng_bbl").checked==true){
			FExtension.store.set("SL_langDst_name", SL_langDst_name_bbl);
			FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_bbl);
			FExtension.store.set("SL_langDst_name_gt", SL_langDst_name_bbl);
			FExtension.store.set("SL_langDst_name_it", SL_langDst_name_bbl);
		}
		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest4();
	        FExtension.bg.FExtension.browser.refreshSettings();

		if(GEBI("SL_ENABLE").checked==false) FExtension.bg.ImTranslatorBG.SL_callbackRequestToChangeRightClickMenu(0);
		else FExtension.bg.ImTranslatorBG.SL_callbackRequestToChangeRightClickMenu(1);




   var SL_Fontsize_bbl = SL_select_FS_bbl.children[SL_select_FS_bbl.selectedIndex].value;
   FExtension.store.set("SL_Fontsize_bbl", SL_Fontsize_bbl);

   var SL_translation_mos_bbl = GEBI("SL_translation_mos_bbl").checked;
   FExtension.store.set("SL_translation_mos_bbl", SL_translation_mos_bbl);

   var SL_pin_bbl = GEBI("SL_pin_bbl").checked;
   FExtension.store.set("SL_pin_bbl", SL_pin_bbl);

   var SL_show_button_bbl = GEBI("SL_show_button_bbl").checked;
   FExtension.store.set("SL_show_button_bbl", SL_show_button_bbl);


   if (FExtension.bg.FExtension.browserInject && FExtension.bg.FExtension.browserInject.getBrowserName() == 'firefox') {
	FExtension.bg.document.getElementById("Bubble-menu").label="Pop-Up Bubble translation to " + FExtension.store.get("SL_langDst_name_bbl");
   }

   var SL_status = GEBI("SL_status");
   SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";
   setTimeout(function() {
	   SL_status.innerHTML = "";
   }, 2000);
  }else alert(FExtension.element('extS_T_L_diff'));
 } else DO_IFRAME(5);
}

function GEBI(id){ return document.getElementById(id);}

function VERIFY(ob){
 INIT_AUTO_HK(ob.id.replace('SRV',''));
}

function SL_Enable_ImTranslator_Bubble_SYNCHRO(){
    if(GEBI("SL_ENABLE").checked == false) GEBI('SL_ENJECT').style.color='red';
    else GEBI('SL_ENJECT').style.color='black';
}
