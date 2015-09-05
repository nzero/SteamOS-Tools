window.resizeTo(480,(GEBI('SL_body').clientHeight+35));
window.addEventListener("load",function(){ 
 CONSTRUCTOR();
 FF_WINDOW_ALIGNER();
},!1);
function GEBI(id){ return document.getElementById(id);}
(function(){
	var pp=GEBI("SL_PP");
	pp.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2");
	},!1);
} )();

function CONSTRUCTOR(){
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element('extTITLE')));
	GEBI('SLhistory').appendChild(document.createTextNode(FExtension.element('extHistory')));
	GEBI('SLoptions').appendChild(document.createTextNode(FExtension.element('extOptions')));
	GEBI('SL_PP').title=FExtension.element('extContribution_ttl');
}
