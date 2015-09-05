(function(){
    window.addEventListener('load',function(){
	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
    },!1);
})();

function CONSTRUCTOR(){
	GEBI('SL_h2').appendChild(document.createTextNode(chrome.i18n.getMessage('extTITLE')));
	GEBI('SLfeedback').appendChild(document.createTextNode(chrome.i18n.getMessage('extFeedback')));
	GEBI('SL_PP').title=chrome.i18n.getMessage('extContribution_ttl');
	GEBI('SL_BG').appendChild(document.createTextNode(chrome.i18n.getMessage('extChTrApp')));
	GEBI('SL_options4').title=chrome.i18n.getMessage('extTrHist');
}
function GEBI(id){ return document.getElementById(id);}