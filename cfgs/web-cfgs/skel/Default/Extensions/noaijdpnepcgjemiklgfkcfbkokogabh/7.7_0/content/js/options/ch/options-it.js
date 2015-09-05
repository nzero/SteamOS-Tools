'use strict';
(function(){GEBI("SRV3").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV3"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV4").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV4"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV3").addEventListener("mouseout",function(){NoneColor(3); SL_KBD(0);},!1); } )();
(function(){GEBI("SRV4").addEventListener("mouseout",function(){ SL_KBD(0);},!1); } )();
(function(){GEBI("SL_del3").addEventListener("click",function(){SL_del(3);},!1);} )();

(function(){GEBI('SL_inject_before').addEventListener("click",function(){ OneOfTwo(1); },!1);} )();
(function(){GEBI('SL_hide_translation').addEventListener("click",function(){ OneOfTwo(2); },!1);} )();

(function(){window.addEventListener("mousemove",function(){NoneColor(3);},!1);} )();

(function(){
    window.addEventListener('load',function(){
	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	var OB = GEBI('SL_langSrc_it');
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

	var OB3 = GEBI('SL_langDst_it');
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
	GEBI('SL_HotKeys').appendChild(document.createTextNode(FExtension.element('extHotKeys')));
	GEBI('SL_TOMS').appendChild(document.createTextNode(FExtension.element('extTOMS')));
	GEBI('SL_ClearTr').appendChild(document.createTextNode(FExtension.element('extClearTr')));
	GEBI('SL_del3').title=FExtension.element('extDelete');
	GEBI('SL_Appearance').appendChild(document.createTextNode(FExtension.element('extAppearance')));
	GEBI('SL_Color').appendChild(document.createTextNode(FExtension.element('extColor')));
	GEBI('SL_EIB').appendChild(document.createTextNode(FExtension.element('extEIB')));
	GEBI('SL_IBO').appendChild(document.createTextNode(FExtension.element('extIBO')));
	GEBI('SL_LB').appendChild(document.createTextNode(FExtension.element('extLB')));
	GEBI('SL_ABW').appendChild(document.createTextNode(FExtension.element('extABW')));
	GEBI('SL_HO').appendChild(document.createTextNode(FExtension.element('extHO')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element('extTrHist')));
	GEBI('SL_InTH').appendChild(document.createTextNode(FExtension.element('extInTH')));
	GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element('extSaveButton')));
}


(function(e){
	document.addEventListener("click",function(e){
	      if(e.target.id!="SL_style" && GEBI("SL_CL")){
		 GEBI("SL_CL").style.display='none';
		 GEBI("SL_style").style.background='#'+GEBI("SL_style").value;
	      }
	},!1);
} )();

(function(e){
	GEBI('SL_style').addEventListener("keydown",function(e){
	      GEBI("SL_style").style.background='#'+GEBI("SL_style").value;
	},!1);
} )();

(function(e){
	GEBI('SL_style').addEventListener("keyup",function(e){
	      GEBI("SL_style").style.background='#'+GEBI("SL_style").value;
	},!1);
} )();

(function(e){
	GEBI('SL_style').addEventListener("click",function(e){
		setTimeout(function() {
		      GEBI("SL_style").focus();
		      GEBI("SL_style").select();
		}, 300);

	},!1);
} )();



function INIT(){
  window.resizeTo(480,(GEBI('SL_body').clientHeight+65));
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);   
  //*************************** inliner ***********************************
  var SL_style = GEBI("SL_style");
  var SL_style_tr = FExtension.store.get("SL_style");
  SL_style.value = SL_style_tr;
  SL_style.style.backgroundColor = "#"+SL_style_tr;
  
  var SL_inject_brackets_tr = FExtension.store.get("SL_inject_brackets"); 
  if(SL_inject_brackets_tr=="true")  GEBI("SL_inject_brackets").checked = true;
  else GEBI("SL_inject_brackets").checked = false;
  
  var SL_inject_before_tr = FExtension.store.get("SL_inject_before"); 
  if(SL_inject_before_tr=="true"){
	GEBI("SL_inject_before").checked = true;
	if(GEBI('SL_hide_translation').checked==true) GEBI('SL_hide_translation').checked = false;
  }else GEBI("SL_inject_before").checked = false;

  var SL_line_break_tr = FExtension.store.get("SL_line_break"); 
  if(SL_line_break_tr=="true")  GEBI("SL_line_break").checked = true;
  else GEBI("SL_line_break").checked = false;
  
  var SL_whole_word_tr = FExtension.store.get("SL_whole_word"); 
  if(SL_whole_word_tr=="true")  GEBI("SL_whole_word").checked = true;
  else GEBI("SL_whole_word").checked = false;
  
  var SL_hide_translation_tr = FExtension.store.get("SL_hide_translation"); 
  if(SL_hide_translation_tr=="true"){
	GEBI("SL_hide_translation").checked = true;
	if(GEBI('SL_inject_before').checked==true) GEBI('SL_inject_before').checked = false;
  }else GEBI("SL_hide_translation").checked = false;
  
  var SL_dictionary_tr = FExtension.store.get("SL_dictionary"); 
  if(SL_dictionary_tr=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  var SL_no_detect_tr = FExtension.store.get("SL_no_detect_it");
  if(SL_no_detect_tr=="true")  GEBI("SL_no_detect_it").checked = true;
  else GEBI("SL_no_detect_it").checked = false;

  // Hotkeys block
  var SL_FK_box1 = FExtension.store.get("SL_FK_box1"); 
  if(SL_FK_box1=="true")  GEBI("SL_FK_box1").checked = true;
  else GEBI("SL_FK_box1").checked = false;

  var SL_FK_box2 = FExtension.store.get("SL_FK_box2"); 
  if(SL_FK_box2=="true")  GEBI("SL_FK_box2").checked = true;
  else GEBI("SL_FK_box2").checked = false;

  // Hotkeys block



  //************************* end inliner *********************************

	if(FExtension.store.get("SL_HK_it1")!=""){
		GEBI('SRV3').value=FExtension.store.get("SL_HK_it1");
		GEBI('SRV3').style.color="#000";
	} else {
		GEBI('SRV3').value="None";
		GEBI('SRV3').style.color="#ccc";
	}

        GEBI('SRV4').value = FExtension.store.get("SL_HK_it2");

	var mySL_langSrc_it = FExtension.store.get("SL_langSrc_it");
	var mySL_langSrcSelect_it = GEBI("SL_langSrc_it");
	for (var i = 0; i < mySL_langSrcSelect_it.options.length; i++) {
		var mySL_langSrcOption_it = mySL_langSrcSelect_it.options[i];
		if (mySL_langSrcOption_it.value == mySL_langSrc_it) {
			mySL_langSrcOption_it.selected = "true";
			break;
		}
	}

	var mySL_langDst_it = FExtension.store.get("SL_langDst_it");
	var mySL_langDstSelect_it = GEBI("SL_langDst_it");
	for (var i = 0; i < mySL_langDstSelect_it.options.length; i++) {
		var mySL_langDstOption_it = mySL_langDstSelect_it.options[i];
		if (mySL_langDstOption_it.value == mySL_langDst_it) {
			mySL_langDstOption_it.selected = "true";
			break;
		}
	}

        var SL_TH_4 = FExtension.store.get("SL_TH_4");
        if(SL_TH_4=="1")  GEBI("SL_TH_4").checked = true;
        else GEBI("SL_TH_4").checked = false;

	var SL_global_lng_it = FExtension.store.get("SL_global_lng_it");
	if(SL_global_lng_it=="true")  GEBI("SL_global_lng_it").checked = true;
	else GEBI("SL_global_lng_it").checked = false;

}

function save_options() {
 if(VERIFY_ALL_TABS(3) == true){
	var SL_select_S_it = GEBI("SL_langSrc_it");
	var SL_select_T_it = GEBI("SL_langDst_it");

	if(SL_select_S_it.value!=SL_select_T_it.value){

	   if(GEBI("SL_TH_4").checked==true) FExtension.store.set("SL_TH_4", "1");
	   else FExtension.store.set("SL_TH_4","0");

	   //*************************** inliner ***********************************
	   var SL_style = GEBI("SL_style");
	   FExtension.store.set("SL_style", SL_style.value);
	   
	   var SL_inject_brackets = GEBI("SL_inject_brackets");
	   FExtension.store.set("SL_inject_brackets", SL_inject_brackets.checked+'');
	   
	   var SL_inject_before = GEBI("SL_inject_before");
	   FExtension.store.set("SL_inject_before", SL_inject_before.checked+'');
	   
	   var SL_line_break = GEBI("SL_line_break");
	   FExtension.store.set("SL_line_break", SL_line_break.checked + '');
	   
	   var SL_whole_word = GEBI("SL_whole_word");
	   FExtension.store.set("SL_whole_word", SL_whole_word.checked + '');
	   
	   var SL_hide_translation = GEBI("SL_hide_translation");
	   FExtension.store.set("SL_hide_translation", SL_hide_translation.checked + '');
	   
	   var SL_dictionary = GEBI("SL_dictionary");
	   FExtension.store.set("SL_dictionary", SL_dictionary.checked + '');
	   
	   //************************* end inliner *********************************

		if(GEBI("SL_global_lng_it").checked==true){

			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_it").checked);
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_it").checked);
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_it").checked);
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_it").checked);

			FExtension.store.set("SL_langSrc", SL_select_S_it.children[SL_select_S_it.selectedIndex].value);
			FExtension.store.set("SL_langSrc_bbl", SL_select_S_it.children[SL_select_S_it.selectedIndex].value);
			FExtension.store.set("SL_langSrc_wpt", SL_select_S_it.children[SL_select_S_it.selectedIndex].value);
			FExtension.store.set("SL_langSrc_it", SL_select_S_it.children[SL_select_S_it.selectedIndex].value);

			FExtension.store.set("SL_langDst", SL_select_T_it.children[SL_select_T_it.selectedIndex].value);
			FExtension.store.set("SL_langDst_bbl", SL_select_T_it.children[SL_select_T_it.selectedIndex].value);
			FExtension.store.set("SL_langDst_wpt", SL_select_T_it.children[SL_select_T_it.selectedIndex].value);
			FExtension.store.set("SL_langDst_it", SL_select_T_it.children[SL_select_T_it.selectedIndex].value);

			FExtension.store.set("SL_langDst_name_it", SL_select_T_it.children[SL_select_T_it.selectedIndex].text);

			FExtension.store.set("SL_no_detect", GEBI("SL_no_detect_it").checked);
			FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect_it").checked);
			FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect_it").checked);

		} else {

			FExtension.store.set("SL_global_lng", GEBI("SL_global_lng_it").checked);
			FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng_it").checked);
			FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng_it").checked);
			FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng_it").checked);
		}	

		var SL_langSrc_it = SL_select_S_it.children[SL_select_S_it.selectedIndex].value;
		FExtension.store.set("SL_langSrc_it", SL_langSrc_it);
		
		var SL_langDst_it = SL_select_T_it.children[SL_select_T_it.selectedIndex].value;
		FExtension.store.set("SL_langDst_it", SL_langDst_it);
		
		var SL_langDst_name_it = SL_select_T_it.children[SL_select_T_it.selectedIndex].text;
		FExtension.store.set("SL_langDst_name_it", SL_langDst_name_it);

		FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect_it").checked);

		FExtension.store.set("SL_FK_box1", GEBI("SL_FK_box1").checked);
		FExtension.store.set("SL_FK_box2", GEBI("SL_FK_box2").checked);

		if(GEBI('SRV3').value!="None")	FExtension.store.set("SL_HK_it1", GEBI('SRV3').value);
		else FExtension.store.set("SL_HK_it1", "");

		FExtension.store.set("SL_HK_it2", GEBI('SRV4').value);


//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
//==============================



		if(GEBI("SL_global_lng_it").checked==true){
			FExtension.store.set("SL_langDst_name", SL_langDst_name_it);
			FExtension.store.set("SL_langDst_name_bbl", SL_langDst_name_it);
			FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_it);
		}

		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest4();
	        FExtension.bg.FExtension.browser.refreshSettings();

		if (FExtension.bg.FExtension.browserInject && SL_get_browser() == 'Firefox') {
			FExtension.bg.document.getElementById("Inline-menu").label="Inline translation to " + FExtension.store.get("SL_langDst_name_it");
		}

        	var SL_status = GEBI("SL_status");
		SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";
		setTimeout(function() {
			SL_status.innerHTML = "";
		}, 2000);
	}else 	  alert(FExtension.element('extS_T_L_diff'));
 } else DO_IFRAME(3);
}

function GEBI(id){ return document.getElementById(id);}


function VERIFY(ob){
 GEBI('SRV3').style.background="#fff";
 GEBI('SRV4').style.background="#fff";
 GEBI('SL_kbd').style.display="none";
  if(GEBI('SRV3').value == GEBI('SRV4').value || GEBI('SRV4').value==""){
    GEBI('SL_kbd').style.display="block";
    GEBI('SL_kbd').style.width="150px;"
    GEBI('SL_kbd').style.marginLeft="150px;"
    GEBI('SRV3').style.background="#FFDFD7";
    GEBI('SRV4').style.background="#FFDFD7";
    if(GEBI('SRV4').value==""){ 
        GEBI('SL_kbd').style.background="#FFDFD7";
	GEBI('SL_kbd').innerHTML=FExtension.element('extEnterHK');
        GEBI('SRV3').style.background="#fff";
    }else{
	GEBI('SL_kbd').innerHTML=FExtension.element('extHKconflict');
        GEBI('SL_kbd').style.background="#FFDFD7";
    }	
    setTimeout(function() { SL_ACTIVE.value=SL_TMP;GEBI('SRV3').style.background="#fff";GEBI('SRV4').style.background="#fff"; }, 600);            
  return true;
  }else{
    if(GEBI('SRV3').value=="") GEBI('SRV3').style.background="#FFF"; 
    GEBI('SL_kbd').style.display="none";
    return false;
  }
}

function OneOfTwo(st){
 if(st==1){
  if(GEBI('SL_inject_before').checked == true) GEBI('SL_hide_translation').checked = false;
 } else {
  if(GEBI('SL_hide_translation').checked == true) GEBI('SL_inject_before').checked = false;
 }
}

