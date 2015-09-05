'use strict';
(function(){var c2=GEBI("SL_logo-link");
	c2.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp");
	},!1);
})();
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
	GEBI("IMT_HK").addEventListener("click",function(){
	        if(GEBI("IMT_HK").checked == true) GEBI("SL_FK_patch0ZIP").style.display='none';
	        else GEBI("SL_FK_patch0ZIP").style.display='block';
	},!1);
})();






function INIT(){
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);

  GEBI("SL_langSrc_tr").value=FExtension.store.get("dirParentFrom");
  GEBI("SL_langDst_tr").value=FExtension.store.get("dirParentTo");

  if(FExtension.store.get("AutoDetect")=="true")  GEBI("SL_LNG_DET").checked = true;
  else GEBI("SL_LNG_DET").checked = false;

  if(FExtension.store.get("AutoBack")=="true")  GEBI("AutoBack").checked = true;
  else GEBI("AutoBack").checked = false;

  if(FExtension.store.get("AutoDictionary")=="true")  GEBI("AutoDictionary").checked = true;
  else GEBI("AutoDictionary").checked = false;

  if(FExtension.store.get("AutoTranslit")=="true")  GEBI("AutoTranslit").checked = true;
  else GEBI("AutoTranslit").checked = false;

  if(FExtension.store.get("AutoDecode")=="true")  GEBI("AutoDecode").checked = true;
  else GEBI("AutoDecode").checked = false;

  if(FExtension.store.get("AutoSpell")=="true")  GEBI("AutoSpell").checked = true;
  else GEBI("AutoSpell").checked = false;

  if(FExtension.store.get("provider"))  GEBI(FExtension.store.get("provider")).checked = true;

  if(FExtension.store.get("PrefTrans")==0)  GEBI("imtranslator").checked = true;
  else GEBI("imtranslator1").checked = true;

  var tempHK1 = FExtension.store.get("SL_GLOBAL_HK_1").split("|");
  if(tempHK1[0]==1) GEBI("IMT_HK").checked=true;
  if(GEBI("IMT_HK").checked == true){
	GEBI("SL_FK_patch0ZIP").style.display='none';
  }else GEBI("SL_FK_patch0ZIP").style.display='block';
  GEBI("SL_IMT_HK1_1").value=tempHK1[1];
  GEBI("SL_IMT_HK1_2").value=tempHK1[2];

  GEBI("SL_LOC").value=FExtension.store.get("locParent");  

}


function save_options() {
  var SL_select_S = GEBI("SL_langSrc_tr");
  var SL_select_T = GEBI("SL_langDst_tr");
  if(SL_select_S.value!=SL_select_T.value){
	FExtension.store.set("dirParentFrom", GEBI("SL_langSrc_tr").value);
	FExtension.store.set("dirParentTo", GEBI("SL_langDst_tr").value);
	FExtension.store.set("AutoDetect", GEBI("SL_LNG_DET").checked);

	var TEMPprovider="google";
  	if(GEBI("promt").checked==true) TEMPprovider="promt";
  	if(GEBI("microsoft").checked==true) TEMPprovider="microsoft";
  	if(GEBI("babylon").checked==true) TEMPprovider="babylon";
  	if(GEBI("google").checked==true) TEMPprovider="google";
	FExtension.store.set("provider", TEMPprovider);

  	if(GEBI("AutoBack").checked==true) FExtension.store.set("AutoBack", "true");
  	else FExtension.store.set("AutoBack", "false");

  	if(GEBI("AutoDecode").checked==true) FExtension.store.set("AutoDecode", "true");
  	else FExtension.store.set("AutoDecode", "false");

  	if(GEBI("AutoDictionary").checked==true) FExtension.store.set("AutoDictionary", "true");
  	else FExtension.store.set("AutoDictionary", "false");

  	if(GEBI("AutoSpell").checked==true) FExtension.store.set("AutoSpell", "true");
  	else FExtension.store.set("AutoSpell", "false");

  	if(GEBI("AutoTranslit").checked==true) FExtension.store.set("AutoTranslit", "true");
  	else FExtension.store.set("AutoTranslit", "false");

	var TEMPpreftrans="0";
  	if(GEBI("imtranslator").checked==true) TEMPpreftrans="0";
  	if(GEBI("imtranslator1").checked==true) TEMPpreftrans="1";
	FExtension.store.set("PrefTrans", TEMPpreftrans);

	FExtension.store.set("locParent", GEBI("SL_LOC").value);

    if(Resolve_the_HK_conflicts()>0 && GEBI("IMT_HK").checked==true){
        GEBI("SL_HKerrorFF").style.display="block";
        Create_the_HK_iframe();
    } else {
  	var TEMPhk="0";
  	if(GEBI("IMT_HK").checked==true) TEMPhk="1";
  	FExtension.store.set("SL_GLOBAL_HK_1", TEMPhk+"|"+GEBI("SL_IMT_HK1_1").value+"|"+GEBI("SL_IMT_HK1_2").value);

	FExtension.bg.ImTranslatorBG.SL_callbackRequest6();

	var SL_status = GEBI("SL_status");
	SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";

	setTimeout(function() {
	   SL_status.innerHTML = " - Options saved";
	}, 1000);
	setTimeout(function() {
	   SL_status.innerHTML = "";
	}, 2000);
     }	
  }else{ 
	  alert("Source language and target language must be different");
  }
}



function GEBI(id){ return document.getElementById(id);}


function Resolve_the_HK_conflicts(){
  var response=0;
  var HK = new Array(11);
  var TEMPhk="0";
  if(GEBI("IMT_HK").checked==true) TEMPhk="1";
  HK[0]=TEMPhk+"|"+GEBI("SL_IMT_HK1_1").value+"|"+GEBI("SL_IMT_HK1_2").value;
  HK[1] = FExtension.store.get("SL_GLOBAL_HK_2");
  TEMPhk="0";
  if(FExtension.store.get("SL_translation_mos_bbl")=="true") TEMPhk="1";
  HK[2]=TEMPhk+"|"+FExtension.store.get("SL_MOSHK_bbl");
  HK[3] = FExtension.store.get("SL_GLOBAL_HK_3");
  TEMPhk="0";
  if(FExtension.store.get("SL_FK_box1")=="true") TEMPhk="1";
  HK[4]=TEMPhk+"|"+FExtension.store.get("SL_inlinerFK1")+"|"+FExtension.store.get("SL_inlinerFK2");
  TEMPhk="0";
  if(FExtension.store.get("SL_FK_box2")=="true") TEMPhk="1";
  HK[5]=TEMPhk+"|"+FExtension.store.get("SL_shortcutInliner")+"|"+FExtension.store.get("SL_shortcutClean");
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
    die.src =  "hotkeys.html?id=1";
    die.name = "SLHK";
    die.id = "SLHK";
    die.width="99%";
    die.height="500px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SLHKset').appendChild(die);
 }
}
