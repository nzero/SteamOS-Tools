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
	GEBI("GT_HK").addEventListener("click",function(){
	        if(GEBI("GT_HK").checked == true) GEBI("SL_FK_patch0ZIP").style.display='none';
	        else GEBI("SL_FK_patch0ZIP").style.display='block';
	},!1);
})();




function INIT(){
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);

  GEBI("SL_langSrc_tr").value=FExtension.store.get("SL_langSrc");
  GEBI("SL_langDst_tr").value=FExtension.store.get("SL_langDst");

  var SL_no_detect = FExtension.store.get("SL_no_detect");
  if(SL_no_detect=="true")  GEBI("SL_no_detect").checked = true;
  else GEBI("SL_no_detect").checked = false;

  var mySL_show_back = FExtension.store.get("SL_show_back");
  if(mySL_show_back=="true")  GEBI("SL_show_back").checked = true;
  else GEBI("SL_show_back").checked = false;

  GEBI("SL_Fontsize").value=FExtension.store.get("SL_Fontsize");

  var tempHK2 = FExtension.store.get("SL_GLOBAL_HK_2").split("|");
  if(tempHK2[0]==1) GEBI("GT_HK").checked=true;
  if(GEBI("GT_HK").checked == true){
	GEBI("SL_FK_patch0ZIP").style.display='none';
  }else GEBI("SL_FK_patch0ZIP").style.display='block';
  GEBI("SL_GT_HK1_1").value=tempHK2[1];
  GEBI("SL_GT_HK1_2").value=tempHK2[2];

  if(FExtension.store.get("SL_TH_1") == "0") GEBI("SL_TH_1").checked = false;
  else GEBI("SL_TH_1").checked = true;

  if(FExtension.store.get("SL_dict") == "true") GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

}

function save_options() {
  var SL_select_S = GEBI("SL_langSrc_tr");
  var SL_select_T = GEBI("SL_langDst_tr");
  var SL_select_FS = GEBI("SL_Fontsize");
  var SL_select_HK1 = GEBI("SL_GT_HK1_1");
  var SL_select_HK2 = GEBI("SL_GT_HK1_2");
  
   if(SL_select_S.value!=SL_select_T.value){
   
	FExtension.store.set("SL_langSrc", SL_select_S.value);
	FExtension.store.set("SL_langDst", SL_select_T.value);
	FExtension.store.set("SL_langSrc2",SL_select_S.value);
	FExtension.store.set("SL_no_detect", GEBI("SL_no_detect").checked);

	FExtension.bg.ImTranslatorBG.SL_callbackRequest();
	FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
	        
	FExtension.store.set("SL_show_back", GEBI("SL_show_back").checked);
	FExtension.store.set("SL_Fontsize",SL_select_FS.value);	

    if(Resolve_the_HK_conflicts()>0 && GEBI("GT_HK").checked==true){
        GEBI("SL_HKerrorFF").style.display="block";
        Create_the_HK_iframe();
    } else {

  	var TEMPhk="0";
	if(GEBI("GT_HK").checked==true) TEMPhk="1";
  	FExtension.store.set("SL_GLOBAL_HK_2", TEMPhk+"|"+GEBI("SL_GT_HK1_1").value+"|"+GEBI("SL_GT_HK1_2").value);

	if(GEBI("SL_TH_1").checked == true) FExtension.store.set("SL_TH_1","1");
	else FExtension.store.set("SL_TH_1","0");

	FExtension.store.set("SL_dict",GEBI("SL_dictionary").checked);

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
  var TEMPhk="0";
  if(GEBI("GT_HK").checked==true) TEMPhk="1";
  HK[1]=TEMPhk+"|"+GEBI("SL_GT_HK1_1").value+"|"+GEBI("SL_GT_HK1_2").value;
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
    die.src =  "hotkeys.html?id=2";
    die.name = "SLHK";
    die.id = "SLHK";
    die.width="99%";
    die.height="370px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SLHKset').appendChild(die);
    GEBI("SL_HKerrorFF").style.height="75%";
 }
}

