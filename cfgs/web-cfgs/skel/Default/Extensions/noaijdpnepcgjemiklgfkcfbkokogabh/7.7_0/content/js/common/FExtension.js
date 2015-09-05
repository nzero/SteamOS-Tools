var SL_Languages = chrome.i18n.getMessage('extLanguages');
var SL_LanguagesExt = chrome.i18n.getMessage('extLanguagesNew');
var SL_GEO = new Array ("com","ac","ad","ae","al","am","as","at","az","ba","be","bf","bg","bi","bj","bs","bt","by","ca","cat","cd","cf","cg","ch","ci","cl","cm","co.ao","co.bw","co.ck","co.cr","co.id","co.il","co.im","co.in","co.je","co.jp","co.ke","co.kr","co.ls","co.ma","co.mz","co.nz","co.th","co.tz","co.ug","co.uk","co.uz","co.ve","co.vi","co.za","co.zm","co.zw","com","com.af","com.ag","com.ai","com.ar","com.au","com.bd","com.bh","com.bn","com.bo","com.br","com.bz","com.co","com.cu","com.cy","com.do","com.ec","com.eg","com.et","com.fj","com.gh","com.gi","com.gt","com.hk","com.iq","com.jm","com.kh","com.kw","com.lb","com.ly","com.mm","com.mt","com.mx","com.my","com.na","com.nf","com.ng","com.ni","com.np","com.om","com.pa","com.pe","com.pg","com.ph","com.pk","com.pr","com.py","com.qa","com.sa","com.sb","com.sg","com.sl","com.sv","com.tj","com.tn","com.tr","com.tw","com.ua","com.uy","com.vc","com.vn","cv","cz","de","dj","dk","dm","dz","ee","es","fi","fm","fr","ga","ge","gg","gl","gm","gp","gr","gy","hn","hr","ht","hu","ie","im","iq","is","it","it.ao","je","jo","kg","ki","kz","la","li","lk","lt","lu","lv","md","me","mg","mk","ml","mn","ms","mu","mv","mw","ne","ng","nl","no","nr","nu","off.ai","pl","pn","ps","pt","ro","rs","ru","rw","sc","se","sh","si","sk","sm","sn","so","sr","st","td","tg","tk","tl","tm","tn","to","tt","vg","vu","ws");
var G_TTS = "ar,cs,da,nl,fi,el,ht,hi,hu,no,pl,sk,sv,th,tr,la";
var SL_TTS = "en,es,ru,de,pt,fr,it,ko,ja,zh-CN,zh-TW";
//var G_TTS = "~";
var FExtension = {
	config: {
		debugIsEnabled: true
	},

	extend: function(parentPrototype, child) {
		function CloneInternal(){};
		CloneInternal.prototype = parentPrototype;
		child.prototype.constructor = child;
		return new CloneInternal();
	},
	element: function(msg){
                return chrome.i18n.getMessage(msg);
	}
};

FExtension.alert_debug = function(msg) {
//	if (FExtension.config.debugIsEnabled)
//		window.alert(msg);
};

function FF_WINDOW_ALIGNER(){
 if(SL_get_browser() == 'Firefox'){
   var width = 783;
   GEBI('SL_translate_container').style.width=(width-40)+'px';
   if(GEBI('SL_feedback')) GEBI('SL_feedback').style.left='310px';
   if(GEBI('SL_donate')) GEBI('SL_donate').style.left='310px';
   if(GEBI('SL_tr_history')) GEBI('SL_tr_history').style.left='310px';
   if(GEBI('SL_options')) GEBI('SL_options').style.left='310px';  
   window.resizeTo(width,(GEBI('SL_body').clientHeight+50));
 }
}

function SL_get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return 'IE '+(tem[1]||'');
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return 'Opera '+tem[1];}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return M[0];
}