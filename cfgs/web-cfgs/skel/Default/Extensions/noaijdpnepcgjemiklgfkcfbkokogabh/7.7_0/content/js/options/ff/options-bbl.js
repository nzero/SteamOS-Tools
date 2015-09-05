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
(function(){var hk=GEBI("SL_translation_mos_bbl");hk.addEventListener("click",function(){SL_HK_onoff();},!1);} )();
(function(){var hks=GEBI("SL_MOSHK_bbl");hks.addEventListener("change",function(){SL_HK_check();},!1);} )();
(function(){var btn=GEBI("SL_show_button_bbl");btn.addEventListener("click",function(){SL_HKS_check();},!1);} )();
(function(){var enable=GEBI("SL_ENABLE");enable.addEventListener("click",function(){SL_ENABLE_check();},!1);} )();


(function(){INIT();})();


(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);
})();

function SL_ENABLE_check(){
  if(GEBI('SL_ENABLE').checked==false) GEBI('SL_BIGpatch').style.display='block';
  else GEBI('SL_BIGpatch').style.display='none';

}


function SL_HKS_check(){
 if(GEBI('SL_MOSHK_bbl').value=="None") GEBI('SL_MOSHK_bbl').value="Alt";
}

function SL_HK_check(){
 if(GEBI('SL_MOSHK_bbl').value=="None") GEBI('SL_show_button_bbl').checked=false;
}

function SL_HK_onoff(){
  if(GEBI('SL_translation_mos_bbl').checked==false) GEBI('SL_patch').style.display='block';
  else GEBI('SL_patch').style.display='none';
}

function INIT(){
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);

  GEBI("SL_langSrc_bbl").value=FExtension.store.get("SL_langSrc_bbl");
  GEBI("SL_langDst_bbl").value=FExtension.store.get("SL_langDst_bbl");

  if(FExtension.store.get("SL_TH_2")=="1")  GEBI("SL_TH_2").checked = true;
  else GEBI("SL_TH_2").checked = false;

  if(FExtension.store.get("SL_ENABLE")=="true")  GEBI("SL_ENABLE").checked = true;
  else GEBI("SL_ENABLE").checked = false;

  if(FExtension.store.get("SL_no_detect_bbl")=="true")  GEBI("SL_no_detect_bbl").checked = true;
  else GEBI("SL_no_detect_bbl").checked = false;

  GEBI("SL_Fontsize_bbl").value=FExtension.store.get("SL_Fontsize_bbl");

  if(FExtension.store.get("SL_pin_bbl")=="true")  GEBI("SL_pin_bbl").checked = true;
  else GEBI("SL_pin_bbl").checked = false;

  if(FExtension.store.get("SL_show_button_bbl")=="true")  GEBI("SL_show_button_bbl").checked = true;
  else GEBI("SL_show_button_bbl").checked = false;

  GEBI("SL_MOSHK_bbl").value=FExtension.store.get("SL_MOSHK_bbl");

  if(FExtension.store.get("SL_translation_mos_bbl")=="true")  GEBI("SL_translation_mos_bbl").checked = true;
  else GEBI("SL_translation_mos_bbl").checked = false;

  if(FExtension.store.get("SL_dict_bbl")=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  SL_ENABLE_check();
  SL_HK_onoff();
}

function save_options() {
  var SL_select_S_bbl = GEBI("SL_langSrc_bbl");
  var SL_select_T_bbl = GEBI("SL_langDst_bbl");
  var SL_select_FS_bbl = GEBI("SL_Fontsize_bbl");
  var SL_MOSHK_bbl = GEBI("SL_MOSHK_bbl");

  if(SL_select_S_bbl.value!=SL_select_T_bbl.value){

   if(GEBI("SL_TH_2").checked==true) FExtension.store.set("SL_TH_2", "1");
   else FExtension.store.set("SL_TH_2","0");

   FExtension.store.set("SL_langSrc_bbl", SL_select_S_bbl.children[SL_select_S_bbl.selectedIndex].value);
   FExtension.store.set("SL_langDst_bbl", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].value);
   FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect_bbl").checked);
   FExtension.store.set("SL_ENABLE", GEBI("SL_ENABLE").checked);
   FExtension.store.set("SL_langDst_name_bbl", SL_select_T_bbl.children[SL_select_T_bbl.selectedIndex].text);


   //------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
   //==============================

   FExtension.bg.FBrowserFirefox.prototype.ResetContextMenuData();
   FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
   FExtension.bg.ImTranslatorBG.SL_callbackRequest6();

   FExtension.store.set("SL_Fontsize_bbl", SL_select_FS_bbl.children[SL_select_FS_bbl.selectedIndex].value);
   FExtension.store.set("SL_translation_mos_bbl", GEBI("SL_translation_mos_bbl").checked);
   FExtension.store.set("SL_pin_bbl", GEBI("SL_pin_bbl").checked);
   FExtension.store.set("SL_show_button_bbl", GEBI("SL_show_button_bbl").checked);
   FExtension.store.set("SL_MOSHK_bbl", SL_MOSHK_bbl.children[SL_MOSHK_bbl.selectedIndex].value);

   FExtension.store.set("SL_dict_bbl", GEBI("SL_dictionary").checked);

   if (FExtension.bg.FExtension.browserInject) {
	FExtension.bg.document.getElementById("Bubble-menu").label="Pop-Up Bubble translation to " + FExtension.store.get("SL_langDst_name_bbl");
   }

   var SL_status = GEBI("SL_status");
   SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";
   setTimeout(function() {
   SL_status.innerHTML = " - Options saved";
   }, 1000);
   setTimeout(function() {
   SL_status.innerHTML = "";
   }, 2000);
  }else alert("Source language and target language must be different");
}

function GEBI(id){ return document.getElementById(id);}

(function(){var sv1=GEBI("SL_service1");sv1.addEventListener("click",function(){Service(1);},!1);} )();
(function(){var sv2=GEBI("SL_service2");sv2.addEventListener("click",function(){Service(2);},!1);} )();
(function(){var sv3=GEBI("SL_service3");sv3.addEventListener("click",function(){Service(3);},!1);} )();
(function(){var sv4=GEBI("SL_service4");sv4.addEventListener("click",function(){Service(4);},!1);} )();
(function(){var sv5=GEBI("SL_service5");sv5.addEventListener("click",function(){Service(5);},!1);} )();


function Service(id){
 switch(id)
  {
 case 1: FExtension.browserPopup.openNewTab("http://imtranslator.net/translation/"); break;
 case 2: FExtension.browserPopup.openNewTab("http://imtranslator.net/compare/"); break;
 case 3: FExtension.browserPopup.openNewTab("http://imtranslator.net/translate-and-speak/"); break;
 case 4: FExtension.browserPopup.openNewTab("http://dictionary.imtranslator.net"); break;
 case 5: FExtension.browserPopup.openNewTab("http://imtranslator.net/partners.asp"); break;
  }
}
