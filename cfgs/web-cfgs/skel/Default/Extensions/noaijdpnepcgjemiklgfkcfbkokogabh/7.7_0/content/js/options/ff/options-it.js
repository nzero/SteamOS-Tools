'use strict';
(function(){
	var c2=GEBI("SL_logo-link");
	c2.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp");
	},!1);
} )();
(function(){
	var pp=GEBI("SL_PP");
	pp.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2");
	},!1);
} )();

(function(){INIT();})();


(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);
})();



(function(){
	GEBI("SL_FK_box1").addEventListener("click",function(){
	        if(GEBI("SL_FK_box1").checked == true) GEBI("SL_FK_patch1").style.display='none';
	        else GEBI("SL_FK_patch1").style.display='block';
	},!1);
})();

(function(){
	GEBI("SL_FK_box2").addEventListener("click",function(){
	        if(GEBI("SL_FK_box2").checked == true) GEBI("SL_FK_patch2").style.display='none';
	        else GEBI("SL_FK_patch2").style.display='block';
	},!1);
})();


function INIT(){
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);   
  //*************************** inliner ***********************************
  GEBI("SL_style").value = FExtension.store.get("SL_style");
  GEBI("SL_style").style.backgroundColor = "#"+FExtension.store.get("SL_style");

  if(FExtension.store.get("SL_inject_brackets")=="true")  GEBI("SL_inject_brackets").checked = true;
  else GEBI("SL_inject_brackets").checked = false;
  
  if(FExtension.store.get("SL_inject_before")=="true")  GEBI("SL_inject_before").checked = true;
  else GEBI("SL_inject_before").checked = false;

  GEBI("SL_IT_HK1_1").value = FExtension.store.get("SL_inlinerFK1");
  GEBI("SL_IT_HK1_2").value = FExtension.store.get("SL_inlinerFK2");
  GEBI("SL_IT_HK2_1").value = FExtension.store.get("SL_shortcutInliner");
  GEBI("SL_IT_HK2_2").value = FExtension.store.get("SL_shortcutClean");
  
  if(FExtension.store.get("SL_line_break")=="true")  GEBI("SL_line_break").checked = true;
  else GEBI("SL_line_break").checked = false;
  
  if(FExtension.store.get("SL_whole_word")=="true")  GEBI("SL_whole_word").checked = true;
  else GEBI("SL_whole_word").checked = false;
  
  if(FExtension.store.get("SL_hide_translation")=="true")  GEBI("SL_hide_translation").checked = true;
  else GEBI("SL_hide_translation").checked = false;
  
  if(FExtension.store.get("SL_dictionary")=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  if(FExtension.store.get("SL_no_detect_it")=="true")  GEBI("SL_no_detect_it").checked = true;
  else GEBI("SL_no_detect_it").checked = false;

  // Hotkeys block
  if(FExtension.store.get("SL_FK_box1")=="true")  GEBI("SL_FK_box1").checked = true;
  else GEBI("SL_FK_box1").checked = false;

  if(FExtension.store.get("SL_FK_box2")=="true")  GEBI("SL_FK_box2").checked = true;
  else GEBI("SL_FK_box2").checked = false;

  if(GEBI("SL_FK_box1").checked==false) GEBI("SL_FK_patch1").style.display='block';
  else GEBI("SL_FK_patch1").style.display='none';

  if(GEBI("SL_FK_box2").checked==false) GEBI("SL_FK_patch2").style.display='block';
  else GEBI("SL_FK_patch2").style.display='none';
  // Hotkeys block

  //************************* end inliner *********************************

  GEBI("SL_langSrc_it").value=FExtension.store.get("SL_langSrc_it");
  GEBI("SL_langDst_it").value=FExtension.store.get("SL_langDst_it");

  if(FExtension.store.get("SL_TH_4")=="1")  GEBI("SL_TH_4").checked = true;
  else GEBI("SL_TH_4").checked = false;

}

function save_options() {
	var SL_select_S_it = GEBI("SL_langSrc_it");
	var SL_select_T_it = GEBI("SL_langDst_it");
	var SL_select_IT_HK1_1 = GEBI("SL_IT_HK1_1");
	var SL_select_IT_HK1_2 = GEBI("SL_IT_HK1_2");
	var SL_select_IT_HK2_1 = GEBI("SL_IT_HK2_1");
	var SL_select_IT_HK2_2 = GEBI("SL_IT_HK2_2");

	if(SL_select_S_it.value!=SL_select_T_it.value){

	   if(GEBI("SL_TH_4").checked==true) FExtension.store.set("SL_TH_4", "1");
	   else FExtension.store.set("SL_TH_4","0");

	   //*************************** inliner ***********************************
	   FExtension.store.set("SL_style", GEBI("SL_style").value);
	   FExtension.store.set("SL_inject_brackets", GEBI("SL_inject_brackets").checked+'');
	   FExtension.store.set("SL_inject_before", GEBI("SL_inject_before").checked+'');
	   FExtension.store.set("SL_shortcutInliner", SL_select_IT_HK1_2.value);
	   FExtension.store.set("SL_shortcutClean", SL_select_IT_HK2_2.value);
	   FExtension.store.set("SL_line_break", GEBI("SL_line_break").checked + '');
	   FExtension.store.set("SL_whole_word", GEBI("SL_whole_word").checked + '');
	   FExtension.store.set("SL_hide_translation", GEBI("SL_hide_translation").checked + '');
	   FExtension.store.set("SL_dictionary", GEBI("SL_dictionary").checked + '');
	   //************************* end inliner *********************************

		FExtension.store.set("SL_langSrc_it", SL_langSrc_it.value);		
		FExtension.store.set("SL_langDst_it", SL_langDst_it.value);
		FExtension.store.set("SL_langDst_name_it", SL_select_T_it.children[SL_select_T_it.selectedIndex].text);
		FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect_it").checked);

	    if(Resolve_the_HK_conflicts()>0 && (GEBI("SL_FK_box1").checked==true || GEBI("SL_FK_box2").checked==true)){
        	GEBI("SL_HKerrorFF").style.display="block";
	        Create_the_HK_iframe();
	    } else {

		FExtension.store.set("SL_FK_box1", GEBI("SL_FK_box1").checked);
		FExtension.store.set("SL_FK_box2", GEBI("SL_FK_box2").checked);

		FExtension.store.set("SL_inlinerFK1", SL_select_IT_HK1_1.value);
		FExtension.store.set("SL_inlinerFK2", SL_select_IT_HK1_2.value);

		FExtension.store.set("SL_shortcutInliner", SL_select_IT_HK2_1.value);
		FExtension.store.set("SL_shortcutClean", SL_select_IT_HK2_2.value);

		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.FBrowserFirefox.prototype.ResetContextMenuData();
	        FExtension.bg.FExtension.browser.refreshSettings();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest6();

		if (FExtension.bg.FExtension.browserInject) {
			FExtension.bg.document.getElementById("Inline-menu").label="Inline translation to " + FExtension.store.get("SL_langDst_name_it");
		}

        	var SL_status = GEBI("SL_status");
		SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";
		setTimeout(function() {
			SL_status.innerHTML = " Options saved";
		}, 1000);
		setTimeout(function() {
			SL_status.innerHTML = "";
		}, 2000);
	    }
	}else alert("Source language and target language must be different");
}

function GEBI(id){ return document.getElementById(id);}

function Resolve_the_HK_conflicts(){
  var response=0;
  var HK = new Array(11);
  HK[0] = FExtension.store.get("SL_GLOBAL_HK_1");
  HK[1] = FExtension.store.get("SL_GLOBAL_HK_2");
  var TEMPhk="0";
  if(FExtension.store.get("SL_translation_mos_bbl")=="true") TEMPhk="1";
  HK[2]=TEMPhk+"|"+FExtension.store.get("SL_MOSHK_bbl");
  HK[3] = FExtension.store.get("SL_GLOBAL_HK_3");
  TEMPhk="0";
  if(GEBI("SL_FK_box1").checked==true) TEMPhk="1";
  HK[4]=TEMPhk+"|"+GEBI("SL_IT_HK1_1").value+"|"+GEBI("SL_IT_HK1_2").value;
  TEMPhk="0";
  if(GEBI("SL_FK_box2").checked==true) TEMPhk="1";
  HK[5]=TEMPhk+"|"+GEBI("SL_IT_HK2_1").value+"|"+GEBI("SL_IT_HK2_2").value;
  HK[6] = FExtension.store.get("SL_GLOBAL_HK_4");
  HK[7] = FExtension.store.get("SL_GLOBAL_HK_5");
  HK[8] = FExtension.store.get("SL_GLOBAL_HK_6");
  HK[9] = FExtension.store.get("SL_GLOBAL_HK_7");
  HK[10] = FExtension.store.get("SL_GLOBAL_HK_8");
  for(var i=0; i<HK.length; i++){
   for(var j=0; j<HK.length; j++){
     if(HK[i]==HK[j] && i!=j) response++;
   }
  }
  return response;
}

function Create_the_HK_iframe(){
 var frame = document.getElementById('SLHK');
 if(frame) frame.parentNode.removeChild(frame);
 if(!document.getElementById("SLHK")){
    var die = document.createElement("iframe");
    die.src =  "hotkeys.html?id=3";
    die.name = "SLHK";
    die.id = "SLHK";
    die.width="99%";
    die.height="360px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SLHKset').appendChild(die);
    GEBI("SL_HKerrorFF").style.height="75%";
 }
}
