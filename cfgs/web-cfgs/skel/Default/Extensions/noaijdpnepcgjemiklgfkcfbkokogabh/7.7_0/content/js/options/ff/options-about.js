'use strict';
function GEBI(id){ return document.getElementById(id);}

(function(){
	var c2=GEBI("SL_logo-link");
	c2.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("http://imtranslator.net/");
	},!1);
} )();
(function(){
	var pp=GEBI("SL_PP");
	pp.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2");
	},!1);
} )();

(function(){var sv1=GEBI("SL_service1");sv1.addEventListener("click",function(){Service(1);},!1);} )();
(function(){var sv2=GEBI("SL_service2");sv2.addEventListener("click",function(){Service(2);},!1);} )();
(function(){var sv3=GEBI("SL_service3");sv3.addEventListener("click",function(){Service(3);},!1);} )();
(function(){var sv4=GEBI("SL_service4");sv4.addEventListener("click",function(){Service(4);},!1);} )();
(function(){var sv5=GEBI("SL_service5");sv5.addEventListener("click",function(){Service(5);},!1);} )();


function Service(id){
 switch(id)
  {
 case 1:
	 FExtension.browserPopup.openNewTab("http://imtranslator.net/translation/");
	 //chrome.tabs.create({"url": "http://imtranslator.net/translation/"}); 
	 break;
 case 2: 
	 FExtension.browserPopup.openNewTab("http://imtranslator.net/compare/");
	 //chrome.tabs.create({"url": "http://imtranslator.net/compare/"}); 
	 break;
 case 3: 
	 FExtension.browserPopup.openNewTab("http://imtranslator.net/translate-and-speak/");
	 //chrome.tabs.create({"url": "http://imtranslator.net/translate-and-speak/"}); 
	 break;
 case 4: 
	 FExtension.browserPopup.openNewTab("http://dictionary.imtranslator.net");
	 //chrome.tabs.create({"url": "http://dictionary.imtranslator.net"}); 
	 break;
 case 5: 
	 FExtension.browserPopup.openNewTab("http://imtranslator.net/partners.asp");
	 //chrome.tabs.create({"url": "http://imtranslator.net/partners.asp"}); 
	 break;
  }
}

(function(){INIT();})();


function INIT(){
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);
}
