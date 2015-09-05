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
	GEBI("WPT_HK").addEventListener("click",function(){
	        if(GEBI("WPT_HK").checked == true) GEBI("SL_FK_patch0ZIP").style.display='none';
	        else GEBI("SL_FK_patch0ZIP").style.display='block';
	},!1);
})();


function INIT(){
	window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);

	GEBI("SL_langSrc_wpt").value=FExtension.store.get("SL_langSrc_wpt");
	GEBI("SL_langDst_wpt").value=FExtension.store.get("SL_langDst_wpt");

	var tempHK2 = FExtension.store.get("SL_GLOBAL_HK_8").split("|");
	if(tempHK2[0]==1) GEBI("WPT_HK").checked=true;
	if(GEBI("WPT_HK").checked == true){
		GEBI("SL_FK_patch0ZIP").style.display='none';
	}else GEBI("SL_FK_patch0ZIP").style.display='block';
	GEBI("SL_WPT_HK1_1").value=tempHK2[1];
	GEBI("SL_WPT_HK1_2").value=tempHK2[2];

	if(FExtension.store.get("SL_TH_3")=="1")  GEBI("SL_TH_3").checked = true;
	else GEBI("SL_TH_3").checked = false;
}

function save_options() {
	var SL_select_S_wpt = GEBI("SL_langSrc_wpt");
	var SL_select_T_wpt = GEBI("SL_langDst_wpt");

	if(SL_select_S_wpt.value!=SL_select_T_wpt.value){

		if(GEBI("SL_TH_3").checked==true) FExtension.store.set("SL_TH_3","1");
		else FExtension.store.set("SL_TH_3", "0");

		var SL_langSrc_wpt = SL_select_S_wpt.children[SL_select_S_wpt.selectedIndex].value;
		FExtension.store.set("SL_langSrc_wpt", SL_langSrc_wpt);
		
		var SL_langDst_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].value;
		FExtension.store.set("SL_langDst_wpt", SL_langDst_wpt);
		
		var SL_langDst_name_wpt = SL_select_T_wpt.children[SL_select_T_wpt.selectedIndex].text;
		FExtension.store.set("SL_langDst_name_wpt", SL_langDst_name_wpt);

		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.FBrowserFirefox.prototype.ResetContextMenuData();

		if (FExtension.bg.FExtension.browserInject) {
			FExtension.bg.document.getElementById("imtranslator3-1").label="Translate this page to " + FExtension.store.get("SL_langDst_name_wpt");
			FExtension.bg.document.getElementById("imtranslator3-2").label="Mouseover translation to " + FExtension.store.get("SL_langDst_name_wpt");
		}

	    if(Resolve_the_HK_conflicts()>0 && GEBI("WPT_HK").checked==true){
        	GEBI("SL_HKerrorFF").style.display="block";
	        Create_the_HK_iframe();
		window.resizeTo(783,(GEBI('SL_body').clientHeight+100));
	    } else {

	  	var TEMPhk="0";
  		if(GEBI("WPT_HK").checked==true) TEMPhk="1";
	  	FExtension.store.set("SL_GLOBAL_HK_8", TEMPhk+"|"+GEBI("SL_WPT_HK1_1").value+"|"+GEBI("SL_WPT_HK1_2").value);

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
  if(FExtension.store.get("SL_FK_box1")=="true") TEMPhk="1";
  HK[4]=TEMPhk+"|"+FExtension.store.get("SL_inlinerFK1")+"|"+FExtension.store.get("SL_inlinerFK2");
  TEMPhk="0";
  if(FExtension.store.get("SL_FK_box2")=="true") TEMPhk="1";
  HK[5]=TEMPhk+"|"+FExtension.store.get("SL_shortcutInliner")+"|"+FExtension.store.get("SL_shortcutClean");
  HK[6] = FExtension.store.get("SL_GLOBAL_HK_4");
  HK[7] = FExtension.store.get("SL_GLOBAL_HK_5");
  HK[8] = FExtension.store.get("SL_GLOBAL_HK_6");
  HK[9] = FExtension.store.get("SL_GLOBAL_HK_7");
  TEMPhk="0";
  if(GEBI("WPT_HK").checked==true) TEMPhk="1";
  HK[10]=TEMPhk+"|"+GEBI("SL_WPT_HK1_1").value+"|"+GEBI("SL_WPT_HK1_2").value;
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
    die.src =  "hotkeys.html?id=4";
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

