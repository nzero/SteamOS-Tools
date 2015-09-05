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
 case 1: FExtension.browserPopup.openNewTab("http://imtranslator.net/translation/"); break;
 case 2: FExtension.browserPopup.openNewTab("http://imtranslator.net/compare/"); break;
 case 3: FExtension.browserPopup.openNewTab("http://imtranslator.net/translate-and-speak/"); break;
 case 4: FExtension.browserPopup.openNewTab("http://dictionary.imtranslator.net"); break;
 case 5: FExtension.browserPopup.openNewTab("http://imtranslator.net/partners.asp"); break;
  }
}

(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);
})();


(function(){INIT();})();


function INIT(){
  window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);
  GEBI("WSP1x").value=FExtension.store.get("WSP1x");
  GEBI("WSP1y").value=FExtension.store.get("WSP1y");
  GEBI("WSP2x").value=FExtension.store.get("WSP2x");
  GEBI("WSP2y").value=FExtension.store.get("WSP2y");
  GEBI("WSP3x").value=FExtension.store.get("WSP3x");
  GEBI("WSP3y").value=FExtension.store.get("WSP3y");
  GEBI("WSP4x").value=FExtension.store.get("WSP4x");
  GEBI("WSP4y").value=FExtension.store.get("WSP4y");
  GEBI("WSP5x").value=FExtension.store.get("WSP5x");
  GEBI("WSP5y").value=FExtension.store.get("WSP5y");
  GEBI("WSP6x").value=FExtension.store.get("WSP6x");
  GEBI("WSP6y").value=FExtension.store.get("WSP6y");
  GEBI("WSP7x").value=FExtension.store.get("WSP7x");
  GEBI("WSP7y").value=FExtension.store.get("WSP7y");
}

function save_options(){
  FExtension.store.set("WSP1x",GEBI("WSP1x").value);
  FExtension.store.set("WSP1y",GEBI("WSP1y").value);
  FExtension.store.set("WSP2x",GEBI("WSP2x").value);
  FExtension.store.set("WSP2y",GEBI("WSP2y").value);
  FExtension.store.set("WSP3x",GEBI("WSP3x").value);
  FExtension.store.set("WSP3y",GEBI("WSP3y").value);
  FExtension.store.set("WSP4x",GEBI("WSP4x").value);
  FExtension.store.set("WSP4y",GEBI("WSP4y").value);
  FExtension.store.set("WSP5x",GEBI("WSP5x").value);
  FExtension.store.set("WSP5y",GEBI("WSP5y").value);
  FExtension.store.set("WSP6x",GEBI("WSP6x").value);
  FExtension.store.set("WSP6y",GEBI("WSP6y").value);
  FExtension.store.set("WSP7x",GEBI("WSP7x").value);
  FExtension.store.set("WSP7y",GEBI("WSP7y").value);

	var SL_status = GEBI("SL_status");
	SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";

	setTimeout(function() {
	   SL_status.innerHTML = " - Options saved";
	}, 1000);
	setTimeout(function() {
	   SL_status.innerHTML = "";
	}, 2000);
}


function imtranslator_initialCoordinates(ob){
 var digits="0123456789";
 var temp="";
 for (var i=0;i<ob.value.length;i++){
 temp=ob.value.substring(i,i+1)
  if (digits.indexOf(temp)==-1){
     alert("Must be digits only! [between 0 and 700]");
     i=0;
     ob.value="";
   }else{
     if(ob.value>700){
	alert("Must be between 0 and 700");
        ob.value=700;
     }
   }
 }
 ob.value=ob.value*1;
}

function imtranslator_imtranslatorResetter (){
 GEBI("WSP1x").value=100;
 GEBI("WSP1y").value=100;
 GEBI("WSP2x").value=500;
 GEBI("WSP2y").value=10;
 GEBI("WSP3x").value=700;
 GEBI("WSP3y").value=10;
 GEBI("WSP4x").value=500;
 GEBI("WSP4y").value=10;
 GEBI("WSP5x").value=500;
 GEBI("WSP5y").value=10;
 GEBI("WSP6x").value=500;
 GEBI("WSP6y").value=10;
 GEBI("WSP7x").value=500;
 GEBI("WSP7y").value=10;
}
