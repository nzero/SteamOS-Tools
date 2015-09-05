var LIMIT=10000;
var LIMITsplit=150;
var TTSDetLang="";
var DetLang="";
var DetLangName="";
var BackDetLang="en";
var SL_no_detect="";
var CATCHED_TEXT=0;
var CLOSER=0;
var ImTranslator_theurl = "https://webmail.smartlinkcorp.com/";

'use strict';

var LANGS =    new Array ();
var SL_Lnum = SL_Languages.split(",");
for(var i = 0; i < SL_Lnum.length; i++) LANGS.push(SL_Lnum[i]);

var LANGSext = new Array ();
var SL_LnumExt = SL_LanguagesExt.split(",");
for(var i = 0; i < SL_LnumExt.length; i++) LANGSext.push(SL_LnumExt[i]);

(function(){
	var y=GEBI("SL_backbox");
	y.addEventListener("click",function(){
		Switch();
		if(GEBI("SL_backbox").checked==true){
			LOADBackTranslate("");
		}
		SetBackWindow(); 
	},!1);
})();




(function(){var w=GEBI("SL_switch");w.addEventListener("click",function(){langSWITCHER();},!1);} )();
(function(){var q=GEBI("SL_switch");q.addEventListener("mouseover",function(){SwitchButton(0);},!1);q.addEventListener("mouseout",function(){SwitchButton(1);},!1);} )();
(function(){var s1=GEBI("SL_src_delete");s1.addEventListener("click",function(){ClearSource();},!1);} )();
(function(){var t1=GEBI("SL_dst_delete");t1.addEventListener("click",function(){GEBI("SL_target").value="";},!1);} )();
(function(){var s2=GEBI("SL_src_copy");s2.addEventListener("click",function(){CopyToClipBoard(0);},!1);} )();
(function(){var t2=GEBI("SL_dst_copy");t2.addEventListener("click",function(){CopyToClipBoard(1);},!1);} )();
(function(){var q1=GEBI("SL_src_font");q1.addEventListener("click",function(){FontSizeState();FontSize();},!1);} )();
(function(){var q2=GEBI("SL_dst_font");q2.addEventListener("click",function(){FontSizeState();FontSize();},!1);} )();
(function(){var q3=GEBI("SL_bck_font");q3.addEventListener("click",function(){FontSizeState();FontSize();},!1);} )();
(function(){var v1=GEBI("SL_src_tts");v1.addEventListener("click",function(){startTTS("SL_source");},!1);} )();
(function(){var v2=GEBI("SL_dst_tts");v2.addEventListener("click",function(){startTTS("SL_target");},!1);} )();
(function(){var cmp=GEBI("SL_src_compare");cmp.addEventListener("click",function(){startCompare("SL_source");},!1);} )();
(function(){var cmp2=GEBI("SL_src_compare2");cmp2.addEventListener("click",function(){startCompare("SL_source");},!1);} )();
(function(){var c=GEBI("SL_copyright-link");c.addEventListener("click",function(){startCopyright();},!1);} )();
(function(){var c2=GEBI("SL_logo-link");c2.addEventListener("click",function(){startCopyright();},!1);} )();
(function(){var tr=GEBI("SL_trans_button");tr.addEventListener("click",function(){Loader(1);REMOTE_Voice_Close();},!1);} )();

(function(){
	var pp=GEBI("SL_PP");
	pp.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2");
	},!1);
} )();
(function(){var l1=GEBI("SL_comp_link");l1.addEventListener("click",function(){Service(2);},!1);} )();
(function(){var l2=GEBI("SL_tas_link");l2.addEventListener("click",function(){Service(3);},!1);} )();



(function(){var Starget1=GEBI("SL_target");Starget1.addEventListener("keydown",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Starget2=GEBI("SL_target");Starget2.addEventListener("paste",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Starget3=GEBI("SL_target");Starget3.addEventListener("drop",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Ssource1=GEBI("SL_source");Ssource1.addEventListener("keydown",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Ssource2=GEBI("SL_source");Ssource2.addEventListener("paste",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Ssource3=GEBI("SL_source");Ssource3.addEventListener("drop",function(){REMOTE_Voice_Close();},!1);} )();

(function(){GEBI("SL_posterSRC").addEventListener("click",function(){SLShowHideAlert100('none','SRC');SL_GotIt('SRC');CLOSER=0;},!1);} )();
(function(){GEBI("SL_posterDST").addEventListener("click",function(){SLShowHideAlert100('none','DST');SL_GotIt('DST');CLOSER=0;},!1);} )();

(function(){GEBI("SL_GotItSRC").addEventListener("click",function(){SL_GotItStorage('SRC');CLOSER=0;},!1);} )();
(function(){GEBI("SL_GotItDST").addEventListener("click",function(){SL_GotItStorage('DST');CLOSER=0;},!1);} )();

(function(){GEBI("SL_CloseMeSRC").addEventListener("click",function(){SLShowHideAlert100('none','SRC');CLOSER=1;},!1);} )();
(function(){GEBI("SL_CloseMeDST").addEventListener("click",function(){SLShowHideAlert100('none','DST');CLOSER=1;},!1);} )();



(function(){
	var l1=GEBI("SL_langSrc");
	l1.addEventListener("change",function(){
		Switch();
	},!1);
} )();
(function(){
	var l2=GEBI("SL_langDst");
	l2.addEventListener("change",function(){
		Switch();
	},!1);
} )();


//(function(){ window.addEventListener('blur',function(){self.close();},!1);} )();


(function(){
    window.addEventListener('blur',function(){
        FExtension.browserPopup.addOnMessageListener(
            function(request, sender, sendResponse) {
                if (request.greeting == "hello"){
                    self.close();
                }
                if (request.greeting == "hello2"){
                    self.close();
                }
            }
        );
    },!1);
})();


function GEBI(id){
	return document.getElementById(id);
}

function CONSTRUCTOR(){
	window.resizeTo(480,610);
       	GEBI('SL_translate_container').style.opacity="1";
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element('extTITLE')));
                                                                    
	GEBI('SLoptions').appendChild(document.createTextNode(FExtension.element('extOptions')));
	GEBI('SLhistory').appendChild(document.createTextNode(FExtension.element('extHistory')));
	GEBI('SLhelp').appendChild(document.createTextNode(FExtension.element('extHelp')));
	GEBI('SLfeedback').appendChild(document.createTextNode(FExtension.element('extFeedback')));

	GEBI('SL_PP').title=FExtension.element('extContribution_ttl');
	GEBI('OrText').appendChild(document.createTextNode(FExtension.element('extOriginalText')));
	GEBI('OTlimit').appendChild(document.createTextNode(FExtension.element('extTrLimit').replace("XXX",LIMIT.toLocaleString())));
	GEBI('SL_tts_limit').appendChild(document.createTextNode(FExtension.element('extTTS_Limit')));
	GEBI('SL_tts_limit2').appendChild(document.createTextNode(FExtension.element('extTTS_Limit')));

	GEBI('SL_CloseMeSRC').title=FExtension.element('extClose');
	GEBI('SL_GotItSRC').appendChild(document.createTextNode(FExtension.element('extIGetIt')));
	GEBI('SL_ClosePosterSRC').appendChild(document.createTextNode(FExtension.element('extOk')));

	GEBI('SL_CloseMeDST').title=FExtension.element('extClose');
	GEBI('SL_GotItDST').appendChild(document.createTextNode(FExtension.element('extIGetIt')));
	GEBI('SL_ClosePosterDST').appendChild(document.createTextNode(FExtension.element('extOk')));

	GEBI('SL_src_delete').title=FExtension.element('extClearText');
	GEBI('SL_src_copy').title=FExtension.element('extCopyText');
	GEBI('SL_src_font').title=FExtension.element('extFont_Size_ttl');
	GEBI('SL_src_tts').title=FExtension.element('extListen');
	GEBI('SL_src_compare').title=FExtension.element('extCompare');

	GEBI('SL_dst_delete').title=FExtension.element('extClearText');
	GEBI('SL_dst_copy').title=FExtension.element('extCopyText');
	GEBI('SL_dst_font').title=FExtension.element('extFont_Size_ttl');
	GEBI('SL_dst_tts').title=FExtension.element('extListen');
	GEBI('SL_src_compare2').title=FExtension.element('extCompare');
	GEBI('SL_bck_font').title=FExtension.element('extFont_Size_ttl');

	GEBI('SL_detect').appendChild(document.createTextNode(FExtension.element('extDetected')));
	GEBI('SL_switch').title=FExtension.element('extSwitch_languages_ttl');
	GEBI('SL_trans_button').value=FExtension.element('extTrButton');
	GEBI('SL_BG').appendChild(document.createTextNode(FExtension.element('extResTrans')));
	GEBI('SL_BT').appendChild(document.createTextNode(FExtension.element('extBackTrans')));
	//GEBI('SL_CMP_TR').appendChild(document.createTextNode(FExtension.element('extCmpTr')));
	//GEBI('SL_TR_SP').appendChild(document.createTextNode(FExtension.element('extTr_Sp')));
	GEBI('SL_powered').appendChild(document.createTextNode(FExtension.element('extPowered')));



	var OB = GEBI('SL_langSrc');
	var OB1 = document.createElement('option');
	var v = document.createAttribute("value");
	v.value = "auto";
	OB1.setAttributeNode(v);
	OB1.appendChild(document.createTextNode(FExtension.element('extDetect_language_from_box')));
	OB.appendChild(OB1); 
	for(var J=0; J < LANGS.length; J++){
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    var TMP1 = LANGS[J].split(":");
	    v.value = TMP1[0];
	    OB2.setAttributeNode(v);
	    OB2.appendChild(document.createTextNode(TMP1[1].replace("&#160;"," ")));
	    OB.appendChild(OB2);
	}
	var OB3 = GEBI('SL_langDst');
	for(J=0; J < LANGS.length; J++){
	    var OB4 = document.createElement('option');
	    v = document.createAttribute("value");
	    var TMP2 = LANGS[J].split(":");
	    v.value = TMP2[0];
	    OB4.setAttributeNode(v);
	    OB4.appendChild(document.createTextNode(TMP2[1].replace("&#160;"," ")));
	    OB3.appendChild(OB4);
	}

	if(localStorage["SL_Flag"]=="FALSE") {var mySL_langSrc = localStorage["SL_langSrc"]; localStorage["SL_langSrc2"]=localStorage["SL_langSrc"];}
	else	var mySL_langSrc = localStorage["SL_langSrc2"];
	GEBI('SL_langSrc').value = mySL_langSrc;
	if(localStorage["SL_Flag"]=="FALSE") {var mySL_langDst = localStorage["SL_langDst"]; localStorage["SL_langDst2"]=localStorage["SL_langDst"]; localStorage["SL_Flag"]="TRUE";}
	else	var mySL_langDst = localStorage["SL_langDst2"];
	GEBI('SL_langDst').value = mySL_langDst;


}

function SESSION(){        
        CONSTRUCTOR();

	var baseUrl = "http://imtranslator.net/session.asp"; 
	var ajaxRequest;	
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert(FExtension.element('extError1'));
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
	            var resp = ajaxRequest.responseText;
        	    if(FExtension.store.get("SL_session") != resp){
            		FExtension.store.set("SL_session", resp);
	            	FExtension.store.set("SL_Flag", "FALSE");
		    }
		}
	}

	ajaxRequest.open("GET", baseUrl, true);
	ajaxRequest.send(null);
    	setTimeout(function(){
    	  START();
    	  SetBackWindow()
        },350); //WAS 500 ms
}

(function(){

	SESSION();
	var b=null,d=b,e=b,k=function(a){
		a.target="_blank";

    	setTimeout(function(){
		Loader(0);
		window.focus();
		LTR_RTL("SL_source");
	},200);

	},n=function(){
		var a;
		if(a=e.value.replace(/^\s+|\s+$/g,""))
			FExtension.browserPopup.sendRequest({type:"html",eventKey:c,query:a},l);

	},d=GEBI("SL_trans_button"),e=GEBI("SL_source");
	e.focus();
	FExtension.browserPopup.executeForSelectedTab(b,function(a){

		FExtension.browserPopup.tabSendRequest(a.id,{type:"get_selection"},function(a){

			GEBI("SL_target").focus(); 
			GEBI("SL_source").focus();

			if(a && a.selection!=""){
				CATCHED_TEXT=1;
				DETECT(a.selection);
		        }
		        
			if(a) a.selection&&(e.value=a.selection.substring(0,LIMIT),n())
		})
	});
	k(e);
	d.addEventListener("click",function(){
		//DETECT(e.value);
	},!1); 
})();








function SL_Links(ob,todo){
	GEBI(ob).style.display=todo;
}



function ClearSource(){
	GEBI("SL_source").value="";
}

function Switch(){
	FExtension.store.set("SL_langSrc2", GEBI('SL_langSrc').value);
	FExtension.store.set("SL_langDst2", GEBI('SL_langDst').value);
	FExtension.store.set("SL_show_back2", GEBI('SL_backbox').checked);
	FExtension.store.set("SL_Fonsize2", GEBI('SL_source').style.fontSize);
	FExtension.store.set("SL_Flag", "TRUE");
	FExtension.store.set("SL_langDst_name", GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text);

	if(FExtension.bg.ImTranslatorBG){
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
	}
	//chrome.extension.getBackgroundPage().SL_callbackRequest2();
}


function START(){   
	//var manifestData = chrome.app.getDetails();
	FExtension.bg.FExtension.browser.getVersion(function(version){
		if (FExtension.store.get("SL_Version") != version){
			FExtension.store.set("SL_Version", version);
			FExtension.bg.browser.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp");
		}
	});
	
	/*var version = FExtension.browserPopup.getVersion();
  	if (FExtension.store.get("SL_Version") != version){
		FExtension.store.set("SL_Version", version);
		FExtension.browserPopup.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp");
  	}*/

	if(FExtension.store.get("SL_Flag")=="FALSE")  
		var mySL_langSrc = FExtension.store.get("SL_langSrc");
	else					
		var mySL_langSrc = FExtension.store.get("SL_langSrc2");

	var mySL_langSrcSelect = GEBI("SL_langSrc");
	for (var i = 0; i < mySL_langSrcSelect.options.length; i++) {
		var mySL_langSrcOption = mySL_langSrcSelect.options[i];
		if (mySL_langSrcOption.value == mySL_langSrc) {
			mySL_langSrcOption.selected = "true";
			break;
		}
	}

	if(FExtension.store.get("SL_Flag")=="FALSE")  
		var mySL_langDst = FExtension.store.get("SL_langDst");
	else					
		var mySL_langDst = FExtension.store.get("SL_langDst2");
	var mySL_langDstSelect = GEBI("SL_langDst");
	for (var i = 0; i < mySL_langDstSelect.options.length; i++) {
		var mySL_langDstOption = mySL_langDstSelect.options[i];
		if (mySL_langDstOption.value == mySL_langDst) {
			mySL_langDstOption.selected = "true";
			break;
		}
	}
	if(FExtension.store.get("SL_Flag")=="FALSE")  
		var mySL_backbox = FExtension.store.get("SL_show_back");
	else					
		var mySL_backbox = FExtension.store.get("SL_show_back2"); 

	if(mySL_backbox=="true")  
		GEBI("SL_backbox").checked = true;
	else 
		GEBI("SL_backbox").checked = false;


	if(FExtension.store.get("SL_Flag")=="FALSE")  
		var mySL_FS = FExtension.store.get("SL_Fontsize");
	else					
		var mySL_FS = FExtension.store.get("SL_Fontsize2");
  
	if(mySL_FS=="undefined") {
		GEBI('SL_source').style.fontSize="14px";
		GEBI('SL_target').style.fontSize="14px";
		if(GEBI('SL_back'))
			GEBI('SL_back').style.fontSize="14px";
	}else{
		GEBI('SL_source').style.fontSize = mySL_FS;
		GEBI('SL_target').style.fontSize = mySL_FS;
		if(GEBI('SL_back'))
			GEBI('SL_back').style.fontSize=mySL_FS;
	}

	//Update the CONTEXT menu---------
    setTimeout(function(){
    	if(FExtension.store.get("SL_langDst")!=GEBI("SL_langDst").value){
    		var SLSelect = GEBI("SL_langDst");
    		var SLText = SLSelect.options[SLSelect.selectedIndex].text;
    	} else 
    		SLText = FExtension.store.get("SL_langDst_name");
    	FExtension.store.set("SL_langDst_name", SLText);
    	try{
    		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
    	}catch(e){}
    	//chrome.extension.getBackgroundPage().SL_callbackRequest2();
    }, 30);
//Update the CONTEXT menu---------
}


function Loader(st){  
 setTimeout(function(){LTR_RTL("SL_source")},250); 
 if(GEBI("SL_source").value==""){
   window.focus();
   GEBI("SL_source").focus();
   var ARR = window.location.href.split("?text=");
   if(ARR[1]){
     var theTEXT= ARR[1].replace("%20%20","\n\n");
     CATCHED_TEXT=0;
     if(theTEXT!=""){
	   GEBI("SL_source").value=decodeURIComponent(theTEXT);
	   DETECT(GEBI("SL_source").value);
           CATCHED_TEXT=1;
     }   else alert(FExtension.element('extNo_Text'));
   }else{
    if(st==1) alert(FExtension.element('extNo_Text'));
   }
 }else{
   var s=GEBI("SL_source").value.replace(/(^[\s]+|[\s]+$)/g, '');
   if(s!=""){
	   var theQ=s.split(" ").length;
	   if(s.match(/[$-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
	   if(localStorage["SL_dict"]=="false") theQ=100;
	   if(s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;
	   if(theQ==1){
		if(FExtension.bg.FExtension.browser.getBrowserName() == 'firefox') window.location.href="../../xul/popup/dictionary.html?text="+encodeURIComponent(s);
		else window.location.href="../../html/popup/dictionary.html?text="+encodeURIComponent(s);
	   }else{
	   DETECT(GEBI("SL_source").value);
	   }
   }else alert(FExtension.element('extNo_Text'));
 }
}



function startCopyright(){ 
	FExtension.browserPopup.openNewTab("http://about.imtranslator.net/about/company/");
}

function startTTS(id){

 var SL_TTS_box=2;
 if(id=="SL_source") SL_TTS_box=1;
 var text = GEBI(id).value;

 if(text!=""){
  if(id=="SL_source")DODetection(GEBI(id).value,1);
  setTimeout(function(){
   var Resp="es";
   var SL_to="es";
   if(id=="SL_source" || id=="SL_back"){
    if(DetLang!="") Resp = DetLang;
    else Resp = GEBI("SL_langSrc").value;
   }else Resp = GEBI("SL_langDst").value;
   Resp = Resp.replace("-TW","");
   Resp = Resp.replace("-CN","");

   if(Resp=="en" || Resp=="es" || Resp=="ru" || Resp=="de" || Resp=="pt" || Resp=="fr" || Resp=="it" || Resp=="ko" || Resp=="ja" || Resp=="zh"){
	AutoForm(text, Resp, "http://text-to-speech.imtranslator.net/");
   }else{
    for (var i=0;i<LANGS.length;i++){
        var templang=LANGS[i].split(":");
	if(Resp == templang[0]){ Resp = templang[1]; SL_to=templang[0];}
    }
   if(SL_to!="auto"){   
     if(G_TTS.indexOf(SL_to)!=-1){
	if(text.length>100){
           var SLbox="SRC";
	   if(id=="SL_target") SLbox="DST";
	   if(localStorage["SL_GotIt"]!="1")	SLShowHideAlert100('block',SLbox);
	   else SL_GotIt(SL_TTS_box);	
	}else{
           REMOTE_Voice(SL_to,text,SL_TTS_box);
        }
     }else{
	alert(FExtension.element('extNo_Voice'));
     }
   } else {	  setTimeout(function(){startTTS("SL_source");}, 500);   }
  }
 }, 300);
 }else alert(FExtension.element('extNo_Text'));
}

function SetTTStextLimit(text,limit){
 text=text.replace(/(\r\n|\n|\r)/gm,"");
 var ttstexttmp=text.split(" ");
 var OutPut="";
 var OutPut_="";
 for(var i=0; i<ttstexttmp.length; i++){
     OutPut=OutPut+ttstexttmp[i]+" ";
     if(OutPut.length>limit) break;
     else OutPut_=OutPut_+ttstexttmp[i]+" ";
 }
 return(OutPut_);
}

function REMOTE_Voice (dir, text, box){

 document.getElementById('SL_TTS_player1').style.display='none';
 document.getElementById('SL_TTS_player2').style.display='none';
//  var baseUrl = 'http://translate.google.com/translate_tts?ie=utf-8&tl='+dir+'&q='+encodeURIComponent(text);
  var TS = Math.floor(Date.now() / 1000);
  var length = decodeURIComponent(text).length;
  var baseUrl = 'https://translate.google.com/translate_tts?ts='+TS+'&ie=UTF-8&tl='+dir+'&total=1&idx=0&textlen='+length+'client=t&q='+decodeURIComponent(text);


  var frame = document.getElementById('PL_lbframe');
  if(frame)	frame.parentNode.removeChild(frame);
  if(!document.getElementById("PL_lbframe")){
    var die=document.createElement("iframe");
    die.src="";
    die.name="PL_lbframe";
    die.id="PL_lbframe";
    die.width="448px";
    die.height="30px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SL_TTS_player'+box).appendChild(die);

     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', baseUrl);
     audioElement.setAttribute('preload', 'auto');
     audioElement.setAttribute('controls', 'controls');
     audioElement.setAttribute('autoplay', 'autoplay');
     audioElement.setAttribute('id', 'SLmedia');
     audioElement.setAttribute('name', 'SLmedia');
     audioElement.setAttribute('style', 'width:447px');
     window.frames["PL_lbframe"].document.body.appendChild (audioElement);
     var ao = window.frames["PL_lbframe"].document.getElementById('SLmedia');
     if(ao)	ao.parentNode.removeChild(ao);
     
    setTimeout(function(){
     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', baseUrl);
     audioElement.setAttribute('preload', 'auto');
     audioElement.setAttribute('controls', 'controls');
     audioElement.setAttribute('autoplay', 'autoplay');
     audioElement.setAttribute('id', 'SLmedia');
     audioElement.setAttribute('name', 'SLmedia');
     audioElement.setAttribute('style', 'width:447px');

     var audioframe = document.getElementById('audio');
     if(audioframe)	audioframe.parentNode.removeChild(audioframe);
     window.frames["PL_lbframe"].document.body.appendChild (audioElement);


     window.frames["PL_lbframe"].document.body.style.marginTop='0px';
     window.frames["PL_lbframe"].document.body.style.marginLeft='0px';
     document.getElementById('SL_TTS_player'+box).style.display="block";
     document.getElementById('SL_TTS_player'+box).style.height="30px";
     document.getElementById('SL_TTS_player'+box).style.width="448px";
   }, 1000);
  
  }
}

function REMOTE_Voice_Close (){
 document.getElementById('SL_TTS_player1').style.display='none';
 document.getElementById('SL_TTS_player2').style.display='none';
 var frame = document.getElementById('PL_lbframe');
 if(frame) frame.parentNode.removeChild(frame);
}


function startCompare(id){
	// var text = encodeURIComponent(GEBI(id).value);
	var text = GEBI(id).value;
	if(text!=""){
		var comparelangs="ar,bs,bg,ca,zh,zt,hr,cs,da,nl,en,et,fi,fr,de,el,ht,ha,iw,hi,hu,id,it,ja,ko,lv,lt,ms,mt,no,fa,pl,pt,ro,ru,sr,sk,sl,es,sv,th,tr,uk,ur,vi,cy";
		if(id=="SL_source")
			DODetection(GEBI(id).value);
		setTimeout(function(){
			if(DetLang!="") 
				var RespS = DetLang;
			else 
				var RespS = GEBI("SL_langSrc").value;
			RespS = RespS.replace("zh-TW","zt");
			RespS = RespS.replace("zh-CN","zh");
			var RespT = GEBI("SL_langDst").value;
			RespT = RespT.replace("zh-TW","zt");
			RespT = RespT.replace("zh-CN","zh");
			if(RespS!=RespT){
				if(comparelangs.indexOf(RespS)>-1 && comparelangs.indexOf(RespT)>-1){
					AutoForm(text, RespS+"/"+RespT, "http://imtranslator.net/compare/");
				}else{
					for (var i=0;i<LANGS.length;i++){
						var templangS=LANGS[i].split(":");
						if(RespS == templangS[0]) 
							RespS = templangS[1];
					}
					for (var j=0;j<LANGS.length;j++){
						var templangT=LANGS[j].split(":");
						if(RespT == templangT[0]) 
							RespT = templangT[1];
					}
					if(RespS!="auto"){
					        var msg=FExtension.element('extNo_TextCompare').replace("XXX",RespS);
					        msg=msg.replace("YYY",RespT);
						alert(msg);
					} else {	  
						setTimeout(function(){
							startCompare("SL_source");
						}, 500);  
					}
				}
			} //else  alert(FExtension.element('extS_T_L_diff'));
                                                       
		}, 300);
	} else  alert(FExtension.element('extNo_Text'));
}



function APPLstartDictionary(id){
	// var text = encodeURIComponent(GEBI(id).value);
	var text = GEBI(id).value;
	if(text!=""){
		var dictlangs="en/fr,en/de,en/it,en/pt,en/ru,en/es,es/en,fr/en,fr/de,fr/it,de/en,de/fr,it/en,it/fr,pt/en,ru/en";
		if(id=="SL_source")
			DODetection(GEBI(id).value);
		setTimeout(function(){
			if(DetLang!="") 
				var RespS = DetLang;
			else 
				var RespS = GEBI("SL_langSrc").value;
			RespS = RespS.replace("-TW","");
			RespS = RespS.replace("-CN","");

			var RespT = GEBI("SL_langDst").value;
			RespT = RespT.replace("-TW","");
			RespT = RespT.replace("-CN","");

			if(dictlangs.indexOf(RespS+"/"+RespT)>-1){
				var RespSlong = "english";
				var RespTlong = "spanish";
				for (var i=0;i<LANGS.length;i++){
					var templangS=LANGS[i].split(":");
					if(RespS == templangS[0]) 
						RespSlong = templangS[1];
				}
				for (var j=0;j<LANGS.length;j++){
					var templangT=LANGS[j].split(":");
					if(RespT == templangT[0]) 
						RespTlong = templangT[1];
				}
				var textlong = GEBI(id).value.substring(0,100);
				textlong = textlong.replace(/|/g,"");
				textlong = textlong.replace(/&/g,"");
				textlong = textlong.replace(/$/g,"");
				textlong = textlong.replace(/^/g,"");
				textlong = textlong.replace(/~/g,"");
				textlong = textlong.replace(/`/g,"");
				textlong = textlong.replace(/@/g,"");
				textlong = textlong.replace(/ /g,"_");
				var ext="";
				if(RespS=="ru" || RespT=="ru") 
					ext="-common-words-pro";
				AutoForm("", "", "http://dictionary.imtranslator.net/"+RespSlong.toLowerCase()+"-"+RespTlong.toLowerCase()+ext+"/"+textlong+"/");
			} else {
				for (i=0;i<LANGS.length;i++){
					templangS=LANGS[i].split(":");
					if(RespS == templangS[0]) 
						RespSlong = templangS[1];
				}
				for (j=0;j<LANGS.length;j++){
					templangT=LANGS[j].split(":");
					if(RespT == templangT[0]) 
						RespTlong = templangT[1];
				}
				var msg = FExtension.element('extNotDict').replace("XXX",RespSlong);
				msg = msg.replace("YYY",RespTlong);
				alert(msg);
			}
		}, 300);
	}else 
		FExtension.browserPopup.openNewTab("http://dictionary.imtranslator.net/");
	 	//chrome.tabs.create({"url": "http://dictionary.imtranslator.net/"});
}

function APPLstartTranslation(id){
	// var text = encodeURIComponent(GEBI(id).value);
	var text = GEBI(id).value;
	if(text!=""){
		var translationlangs="hy,az,eu,ka,la,bn,eo,gu,kn,lo,ta,te";
		if(id=="SL_source")
			DODetection(GEBI(id).value);
		setTimeout(function(){
			if(DetLang!="") 
				var RespS = DetLang;
			else 
				var RespS = GEBI("SL_langSrc").value;
			RespS = RespS.replace("-TW","");
			RespS = RespS.replace("-CN","");
			var RespT = GEBI("SL_langDst").value;
			RespT = RespT.replace("-TW","");
			RespT = RespT.replace("-CN","");
			if(RespS!=RespT){
				if(translationlangs.indexOf(RespS)>-1 || translationlangs.indexOf(RespT)>-1){
					for (var i=0;i<LANGS.length;i++){
						var templangS=LANGS[i].split(":");
						if(RespS == templangS[0]) 
							var RespSlong = templangS[1];
					}
					for (var j=0;j<LANGS.length;j++){
						var templangT=LANGS[j].split(":");
						if(RespT == templangT[0]) 
							var RespTlong = templangT[1];
					}

					var msg=FExtension.element('extLPNotSupported').replace("XXX",RespSlong);
					msg=msg.replace("YYY",RespTlong);
					alert(msg);
				} else     
					AutoForm(text, RespS+"/"+RespT, "http://imtranslator.net/translation/");
			} else 
				AutoForm(text, "", "http://imtranslator.net/translation/");
		}, 300);
	}else 
		FExtension.browserPopup.openNewTab("http://imtranslator.net/translation/");
	 	//chrome.tabs.create({"url": "http://imtranslator.net/translation/"});
}

function APPLstartCompare(id){
	// var text = encodeURIComponent(GEBI(id).value);
	var text = GEBI(id).value;
	if(text!=""){
		var comparelangs="ar,bs,bg,ca,zh,zt,hr,cs,da,nl,en,et,fi,fr,de,el,ht,ha,iw,hi,hu,id,it,ja,ko,lv,lt,ms,mt,no,fa,pl,pt,ro,ru,sr,sk,sl,es,sv,th,tr,uk,ur,vi,cy";
		if(id=="SL_source")
			DODetection(GEBI(id).value);
		setTimeout(function(){
			if(DetLang!="") 
				var RespS = DetLang;
			else 
				var RespS = GEBI("SL_langSrc").value;
			RespS = RespS.replace("-TW","");
			RespS = RespS.replace("-CN","");

			var RespT = GEBI("SL_langDst").value;
			RespT = RespT.replace("zh-TW","zt");
			RespT = RespT.replace("zh-CN","zh");

			if(RespS!=RespT){
				if(comparelangs.indexOf(RespS)>-1 && comparelangs.indexOf(RespT)>-1){
					AutoForm(text, RespS+"/"+RespT, "http://imtranslator.net/compare/");
				}else{
					for (var i=0;i<LANGS.length;i++){
						var templangS=LANGS[i].split(":");
						if(RespS == templangS[0]) var RespSlong = templangS[1];
					}
					for (var j=0;j<LANGS.length;j++){
						var templangT=LANGS[j].split(":");
						if(RespT == templangT[0]) var RespTlong = templangT[1];
					}	
				        var msg=FExtension.element('extNo_TextCompare').replace("XXX",RespSlong);
				        msg=msg.replace("YYY",RespTlong);
					alert(msg);
				}
			} else     
				AutoForm(text, "", "http://imtranslator.net/compare/");
		}, 300);
	} else      
		FExtension.browserPopup.openNewTab("http://imtranslator.net/compare/");
	 	//chrome.tabs.create({"url": "http://imtranslator.net/compare/"});
}

function AutoForm(text,dir,url){
    if(dir=="")dir="en/es";
    var tmpdir=dir.split("/");
    if(tmpdir[0]=="es" || tmpdir[0]=="fr" || tmpdir[0]=="it" || tmpdir[0]=="pt") text=unescape(encodeURIComponent(text));
    var submitForm = getNewSubmitForm();
    createNewFormElement(submitForm, "text", text);
    createNewFormElement(submitForm, "url", "CHROME");
    createNewFormElement(submitForm, "dir", dir);
    submitForm.action= url;
//    submitForm.target= "_blank";
    submitForm.setAttribute('target', '_blank');
    submitForm.submit();
}


function FontSize(){
	if(GEBI('SL_source').style.fontSize=="14px" || GEBI('SL_source').style.fontSize==""){
		GEBI('SL_source').style.fontSize="19px";
		GEBI('SL_target').style.fontSize="19px";
		if(GEBI('SL_back'))GEBI('SL_back').style.fontSize="19px";
	}else{
		GEBI('SL_source').style.fontSize="14px";
		GEBI('SL_target').style.fontSize="14px";
		if(GEBI('SL_back'))
			GEBI('SL_back').style.fontSize="14px";
	}
}

function FontSizeState(){
	if(GEBI('SL_source').style.fontSize=="14px" || GEBI('SL_source').style.fontSize==""){
		FExtension.store.set("SL_Fontsize2", "19px");
	}else{
		FExtension.store.set("SL_Fontsize2", "14px");
	}
	FExtension.store.set("SL_Flag", "TRUE");
}

function CopyToClipBoard(ctrl){
	if(ctrl==0){
		GEBI('SL_source').focus();
		var tempNode = GEBI('SL_source');
		tempNode.select();
		document.execCommand("copy");
	}else{
		GEBI('SL_target').focus();
		var tempNode = GEBI('SL_target');
		tempNode.select();
		document.execCommand("copy");
	}	
}

function SwitchButton(st){
	if(st==0) 	
		GEBI('SL_switch').src='../../img/util/switch2.png';
	else 		
		GEBI('SL_switch').src='../../img/util/switch.png';
}

function langSWITCHER(){
	if(GEBI("SL_langSrc").value!="auto"){
		var temp = GEBI("SL_langDst").value;
		GEBI("SL_langDst").value=GEBI("SL_langSrc").value;
		GEBI("SL_langSrc").value=temp;
		Switch();
	}else 
		alert(FExtension.element('extDisabled'));

}

function SetBackWindow(){
	if(GEBI("SL_backbox").checked==false){
		GEBI("SL_back").style.display="none";
        	GEBI("SL_bck_font").style.display="none";
		window.resizeTo(480,505);
	}else {
		GEBI("SL_back").style.display="block";
        	GEBI("SL_bck_font").style.display="block";
		window.resizeTo(480,610);
	}	
}


function DETECT(myTransText){
 GEBI("SL_source").focus();
 GEBI("SL_detect").style.visibility="hidden";
 SL_no_detect=FExtension.store.get("SL_no_detect");
 var SOURCELNG=localStorage["SL_langSrc"];
 if(FExtension.store.get("SL_langSrc2")!=null && FExtension.store.get("SL_langSrc2")!="") SOURCELNG=FExtension.store.get("SL_langSrc2");
 if(SL_no_detect=="true" || SOURCELNG=="auto") setTimeout(function(){DODetection(myTransText,0);}, 500);
 if(myTransText=="") myTransText = GEBI("SL_target").value;
   myTransText=myTransText.substring(0,LIMIT); 



    setTimeout(function(){
//     DetLang=DetLang.replace("zh","zh-CN");
     if(SL_no_detect=="true" || GEBI("SL_langSrc").value=="auto"){
          var OLD_FROM = GEBI("SL_langSrc").value;
          if(OLD_FROM!="auto"){
            if(DetLang==GEBI("SL_langDst").value){
		GEBI("SL_langDst").value=OLD_FROM;
		GEBI("SL_langSrc").value=DetLang;
	    }
	   }
//--------------------------------

//	 if(DetLangName) GEBI("SL_detect").innerHTML = FExtension.element('extDetected')+" "+DetLangName;
//         else GEBI("SL_langSrc").options[GEBI("SL_langSrc").selectedIndex].text;
//--------------------------------
        var SLIDL = setInterval(function(){
		if(DetLang!="" && DetLang!="zh-CN") {
			TranslateLOC(myTransText);
        	        clearInterval(SLIDL);
			GEBI("SL_detect").style.visibility="visible";
			FExtension.store.set("SL_langDst_name", GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text);         
			FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
			if(GEBI("SL_langSrc").value!="auto")                        SL_Flip_Langs(DetLang);
                        BackDetLang=DetLang;
			DetLang="";
		} 
	},50);  


       }else{
 	TranslateLOC(myTransText);
       }
     }, 50);

   



 setTimeout(function(){LTR_RTL("SL_source")},250); 
}



function LOADBackTranslate(myTransText){
	if(myTransText=="") myTransText = GEBI("SL_target").value;
	myTransText=myTransText.substring(0,LIMIT); 
	setTimeout(function(){
		BackTranslateLOC(myTransText);
	}, 500);

}

function truncStrByWord(str, length){
	if(str!="undefined"){
		if(str.length>25){
			length=length-25;
			var thestr=str;
			if (str.length > length) {
				str = str.substring (0, length);
				str = str.replace(new RegExp("/(.{1,"+length+"})\b.*/"), "$1")    // VK - cuts str to max length without splitting words.
				var str2 = thestr.substring(length, (length+25));
				var tempstr=str2.split(" ");
				var tmp="";
				for (var i=0; i<tempstr.length-1; i++){
					tmp = tmp+tempstr[i]+" ";
				} 
				str=str+tmp;
			}
		} else 
			str = str+" ";
	}
	return str;
}


function DODetection(myTransText,st) {

  if(st==0){
   GEBI("SL_detect").style.visibility="hidden";
   GEBI("SL_detect").innerHTML = "";
  }
  if(myTransText=="") myTransText = GEBI("SL_source").value;
  if(myTransText!=""){

    var cntr = myTransText.split(" ");
    var newTEXT = myTransText;
    if(cntr.length<=1)  newTEXT = myTransText+" "+myTransText;

    var num = Math.floor((Math.random() * SL_GEO.length)); 
    var theRegion = SL_GEO[num];

    var baseUrl = 'https://' + 'translate.google.'+theRegion+'/translate_a/single?client=t&sl=auto&tl=en&hl=en&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&q='+encodeURIComponent(truncStrByWord(newTEXT,100));
// By VK----------------------------------------------------
//    var baseUrl = 'http://imtranslator.net';
// By VK----------------------------------------------------

	var ajaxRequest;  
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert(FExtension.element('extError1'));
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	        var captcha = 0;
		if(ajaxRequest.readyState == 4){
                        var resp = ajaxRequest.responseText;
                        
			if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
		        if(resp.indexOf(',[["')!=-1) {

                                var GDImTranslator_lang=resp.split('",,,');
                                var CNT = GDImTranslator_lang.length-2;
				var GDImTranslator_lang1=GDImTranslator_lang[CNT].split(',"');
 				resp=GDImTranslator_lang1[GDImTranslator_lang1.length-1];
 				//By VK -----------
 				if(resp.length>10) {
					GDImTranslator_lang1=GDImTranslator_lang[1].split(',"');
 					resp=GDImTranslator_lang1[GDImTranslator_lang1.length-1];
	 				if(resp.length>10) resp = "en";
				}
 				//By VK -----------
				DetLang = resp;
        	                var thetemp=GEBI("SL_langSrc").value;


				if(resp=="zh-CN"){
					var resp1=DOSLDetection(myTransText);                                     		
					if(resp1==undefined) resp1=resp; 

					DetLang = resp1; 


				}

 				 if(SL_no_detect=="true" || thetemp=="auto" || resp!=thetemp){
				   DetLang = resp;
				   var shift=0;
	                           for (var i=0;i<LANGS.length;i++){
        	                        templang=LANGS[i].split(":");
					if(resp == templang[0]){shift=1; resp = templang[1]; DetLang = templang[0]; DetLangName = resp; break;}
                        	   }

                        	   if(shift==0){
	                	        for (i=0;i<LANGSext.length;i++){
        		                	        templang=LANGSext[i].split(":");
							if(resp == templang[0]){ resp = templang[1]; DetLang = templang[0]; DetLangName = resp; break;}
	                	       	}
	                	   }
				   if(st==0){
                                    if(GEBI("SL_langSrc").value!="auto") SL_Flip_Langs(DetLang);
				    GEBI("SL_detect").style.visibility="visible";
				    GEBI("SL_detect").innerHTML = FExtension.element('extDetected')+" "+resp;
				   }
	                           if(thetemp=="auto") GEBI("SL_langSrc").value="auto";
				 }  
				

			} else 	SLDetectPATCH(myTransText);
		}
	}
	ajaxRequest.open("POST", baseUrl, true);
	ajaxRequest.send(null);         
 }                                
}                                 




function DO_TTS_Detection(myTransText,st) {
  if(myTransText=="") myTransText = GEBI("SL_source").value;
  if(myTransText!=""){
    var cntr = myTransText.split(" ");
    var newTEXT = myTransText;
    if(cntr.length<=1)  newTEXT = myTransText+" "+myTransText;
    var num = Math.floor((Math.random() * SL_GEO.length)); 
    var theRegion = SL_GEO[num];
    var baseUrl = 'https://' + 'translate.google.'+theRegion+'/translate_a/single?client=t&sl=auto&tl=en&hl=en&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&q='+encodeURIComponent(truncStrByWord(newTEXT,100));
// By VK----------------------------------------------------
//    var baseUrl = 'http://imtranslator.net';
// By VK----------------------------------------------------

	var ajaxRequest;  
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert(FExtension.element('extError1'));
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	        var captcha = 0;
		if(ajaxRequest.readyState == 4){
                        var resp = ajaxRequest.responseText;
			if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
		        if(resp.indexOf(',[["')!=-1) {
                                var GDImTranslator_lang=resp.split('",,,');
                                var CNT = GDImTranslator_lang.length-2;
				var GDImTranslator_lang1=GDImTranslator_lang[CNT].split(',"');
 				resp=GDImTranslator_lang1[GDImTranslator_lang1.length-1];
				TTSDetLang = resp;
        	                var thetemp=GEBI("SL_langSrc").value;
				if(resp=="zh-CN"){
					var resp1=DOSLDetection(myTransText);                                     		
					if(resp1==undefined) resp1=resp; 
					TTSDetLang = resp1; 
				}
			} else 	SLDetectPATCH(myTransText);
		}
	}
	ajaxRequest.open("POST", baseUrl, true);
	ajaxRequest.send(null);         
 }                                
}                                 



function SL_Flip_Langs(lng){

   if(GEBI("SL_langDst").value == lng){
      var tmp = GEBI("SL_langDst").value;
      GEBI("SL_langDst").value = GEBI("SL_langSrc").value;
      GEBI("SL_langSrc").value = tmp;
   }
}

function SLDetectPATCH(theText){
        SLDetector(theText);
	GEBI("SL_detect").innerHTML="";
        setTimeout(function() { 
	        var lng = DetLang;
		if(lng!='un'){
			DetLang = lng;
			var templang="";
			var shift=0;
                        for (var i=0;i<LANGS.length;i++){
       	                        templang=LANGS[i].split(":");
				if(lng == templang[0]){ shift=1;lng = templang[1]; DetLang = templang[0]; DetLangName = lng;}
                       	}
                       	if(shift==0){
	                        for (i=0;i<LANGSext.length;i++){
        		       	        templang=LANGSext[i].split(":");
					if(lng == templang[0]){ lng = templang[1]; DetLang = templang[0]; DetLangName = lng;}
	                       	}
	                }

			GEBI("SL_detect").innerHTML = FExtension.element('extDetected')+" "+DetLangName;
		} else {
			DetLang = "en";
			GEBI("SL_detect").innerHTML = FExtension.element('extDetectedEn');
		}
	}, 300);
}

function SLDetector (text){
  	var theLIMIT = 100;
	var SLDImTranslator_url = ImTranslator_theurl+"ld.php?tr=pl&text="+encodeURIComponent(truncStrByWord(text,theLIMIT));
	if(text=="") text = GEBI("SL_source").value;
		var ajaxRequest;  
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					alert(FExtension.element('extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
                        	var tmp = ajaxRequest.responseText;
                        	tmp = tmp.replace("zh","zh-CN");
                        	tmp = tmp.replace("zt","zh-TW");
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    DetLang="en";

        		            if(tmp2[0].length>0 && tmp2[0].length<7) DetLang=tmp2[0];
                		    if(document.getElementById('SL_langSrc').value!=DetLang){
	                		    if(tmp2[0]!="un"){
                    				var shift=0;
		                	        for (var i=0;i<LANGS.length;i++){
        		                	        var templang=LANGS[i].split(":");
							if(DetLang == templang[0]){ shift=1; DetLang = templang[0]; DetLangName = templang[1]; break;}
		                	       	}

			                       	if(shift==0){
	                			        for (i=0;i<LANGSext.length;i++){
			        		       	        templang=LANGSext[i].split(":");
								if(lng == templang[0]){ DetLang = templang[0]; DetLangName = templang[1]; }
				                       	}
	                			}

						GEBI("SL_detect").innerHTML = FExtension.element('extDetected')+" "+DetLangName;

					    }
			            }
			    	} else DetLang="en";
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
}




function DOSLDetection(myTransText) {
	var baseUrl = "http://imtranslator.net/detect.asp?text="+escape(myTransText);
	var ajaxRequest;  
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert(FExtension.element('extError1'));
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	  if(ajaxRequest.readyState == 4){
		var resp = ajaxRequest.responseText;

		resp=resp.replace("zh","zh-CN");
		resp=resp.replace("zt","zh-TW");

		DetLang = resp;
                BackDetLang = DetLang;
		if(DetLang!="Error"){
                        var thetemp=resp;
		        for (var i=0;i<LANGS.length;i++){
       				var templang=LANGS[i].split(":");
				if(thetemp == templang[0]) {
					if(GEBI("SL_langSrc").value=="auto" || templang[0]!=thetemp){
					   GEBI("SL_langSrc").value="auto";
					}else{
//					   thetemp=thetemp.replace("zh","zh-CN");
//					   thetemp=thetemp.replace("zt","zh-TW");

 					   //GEBI("SL_langSrc").value=thetemp;
 					}
					GEBI("SL_detect").style.visibility="visible";
					GEBI("SL_detect").innerHTML = FExtension.element('extDetected')+" "+templang[1];
                                        if(GEBI("SL_langSrc").value!="auto") SL_Flip_Langs(DetLang);
                                        TranslateLOC(myTransText);
					resp = templang[1]; break;

				}
		        }
		}
        	return resp;
	  }
	}
	ajaxRequest.open("POST", baseUrl, true);
	ajaxRequest.send(null); 

}

function TranslateLOC(myTransText) {
	GEBI("SL_target").value="";
	if(GEBI("SL_backbox").checked==true)	GEBI("SL_back").value="";
	var mySourceLang = GEBI("SL_langSrc").value;
	var myTargetLang = GEBI("SL_langDst").value;
	if(myTransText=="") myTransText = GEBI("SL_source").value;
	myTransText=myTransText.replace(/#/g,"");
	myTransText=myTransText.replace(/%/g,"");

	if(myTransText!=""){
//		if(mySourceLang!=myTargetLang){
			GEBI('SL_indicator1').style.display='block';
			var baseUrl = "https://translate.google.com";
		        var SrcLng = mySourceLang;
		        if(SL_no_detect=="true" || mySourceLang=="auto") SrcLng = DetLang;

		        if(SrcLng=="en") SrcLng="auto";

			var SL_Params = "hl=en&langpair="+SrcLng+"|"+myTargetLang+"&q="+encodeURIComponent(myTransText)+"&tbb=1&ie=UTF-8&oe=UTF-8";
			var ajaxRequest;	
			try{
				ajaxRequest = new XMLHttpRequest();
			} catch (e){
				try{
					ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try{
						ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e){
						alert(FExtension.element('extError1'));
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
				if(ajaxRequest.readyState == 4){
	                	var resp = ajaxRequest.responseText;
			        if(resp.indexOf('<span id=result_box class="long_text">')>-1)         
			        	var ImtranslatorGoogleResult1=resp.split('<span id=result_box class="long_text">');
			        else
			        	var ImtranslatorGoogleResult1=resp.split('<span id=result_box class="short_text">');
		        
			        var ImtranslatorGoogleResult2=ImtranslatorGoogleResult1[1].split('</span></div>');
			        var ImtranslatorGoogleResult3=ImtranslatorGoogleResult2[0].replace(/<br>/ig,'@');
			        ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&#39;/ig,"'");
			        ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&quot;/ig,"'");
			        ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&amp;/ig,"&");
			        ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig,"");
			        var ReadyToUseGoogleText=ImtranslatorGoogleResult3.replace(/@/ig,"\n");
			        GEBI("SL_target").value = ReadyToUseGoogleText;
			        GEBI('SL_indicator1').style.display='none';
			                
			        if(GEBI("SL_backbox").checked==true)
			        	LOADBackTranslate("");

				        if (FExtension.store.get("SL_TH_1")==1){
				        	var SLnow = new Date();
				        	SLnow=SLnow.toString();
				        	var TMPtime=SLnow.split(" ");
			        		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
			        		if(mySourceLang=="auto") 
			        			mySourceLang=DetLang;
				        	if(CATCHED_TEXT==0) 
				        		FExtension.store.set("THE_URL", "{empty}");
				        	FExtension.store.set("SL_History", myTransText + "~~" + ReadyToUseGoogleText + "~~" + mySourceLang + "|" + myTargetLang + "~~"+ FExtension.store.get("THE_URL") +"~~"+CurDT+"~~1^^" + FExtension.store.get("SL_History"));
				        }
				}
			}
			ajaxRequest.open("POST", baseUrl, true);
			ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajaxRequest.send(SL_Params);
			LTR_RTL("SL_target");
		//} else 	alert(FExtension.element('extS_T_L_diff'));
	} else alert(FExtension.element('extNo_Text'));
}



function BackTranslateLOC(myTransText) {

 GEBI("SL_back").value="";
 var myTargetLang = GEBI("SL_langSrc").value;



 if((SL_no_detect=="true" || GEBI("SL_langDst").value=="auto") && BackDetLang!="")myTargetLang = BackDetLang;
 var mySourceLang = GEBI("SL_langDst").value;
 if(myTransText=="") myTransText = GEBI("SL_target").value;

 if(GEBI("SL_TTS_player1").style.display=='block' || GEBI("SL_TTS_player2").style.display=='block'){
   mySourceLang=GEBI("SL_langDst").value;
   myTargetLang=SL_GetLangCode();
 }


 if(myTransText!=""){
    GEBI('SL_indicator2').style.display='block';
        var baseUrl = "https://translate.google.com/";

        myTargetLang=myTargetLang.replace("zt","zh-TW")
	var SL_Params = "hl=en&langpair="+mySourceLang+"|"+myTargetLang+"&q="+encodeURIComponent(myTransText)+"&tbb=1&ie=UTF-8&oe=UTF-8";

	var ajaxRequest;	
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert(FExtension.element('extError1'));
				return false;
			}
		}
	}

	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
                        var resp = ajaxRequest.responseText;

		        if(resp.indexOf('<span id=result_box class="long_text">')>-1)         var ImtranslatorGoogleResult1=resp.split('<span id=result_box class="long_text">');
		        else                                                                  var ImtranslatorGoogleResult1=resp.split('<span id=result_box class="short_text">');

		        var ImtranslatorGoogleResult2=ImtranslatorGoogleResult1[1].split('</span></div>');
			var ImtranslatorGoogleResult3=ImtranslatorGoogleResult2[0].replace(/<br>/ig,'@');
			ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&#39;/ig,"'");
			ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&quot;/ig,"'");
			ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/&amp;/ig,"&");
			ImtranslatorGoogleResult3=ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig,"");
			var ReadyToUseGoogleText=ImtranslatorGoogleResult3.replace(/@/ig,"\n");
			GEBI("SL_back").value = ReadyToUseGoogleText;
			GEBI('SL_indicator2').style.display='none';
		}
	}
	ajaxRequest.open("POST", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajaxRequest.send(SL_Params);
        //LTR_RTL("SL_back");
 }
}


function LTR_RTL(ctrl){
	if(ctrl=="SL_source") 
		var myLang = GEBI("SL_langSrc").value;
	if(ctrl=="SL_target")
		var myLang = GEBI("SL_langDst").value;
	if(ctrl=="SL_back")   
		var myLang = GEBI("SL_langSrc").value;

	if(SL_no_detect=="true" || GEBI("SL_langSrc").value=="auto") MORE_LTR_RTL();

	GEBI(ctrl).dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="ur" || myLang=="yi") GEBI(ctrl).dir="rtl";
}

function MORE_LTR_RTL(){
 	var myLang = DetLang; 	
	GEBI("SL_source").dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="ur" || myLang=="yi") GEBI("SL_source").dir="rtl";

	myLang = GEBI("SL_langDst").value;
	GEBI("SL_target").dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="ur" || myLang=="yi") GEBI("SL_target").dir="rtl";

	myLang = DetLang;
	GEBI("SL_back").dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="ur" || myLang=="yi") GEBI("SL_back").dir="rtl";
}

function getNewSubmitForm(){
	var submitForm = document.createElement("FORM");
	document.body.appendChild(submitForm);
	submitForm.method = "POST";
	return submitForm;
}

function createNewFormElement(inputForm, elementName, elementValue){
	try{
		var newElement = document.createElement("<input name='"+elementName+"' type='hidden'>");
	}catch(err){   
		var newElement = document.createElement('input');
		newElement.setAttribute('type','hidden');
		newElement.setAttribute('name',elementName);
	} 
	inputForm.appendChild(newElement);
	newElement.value = elementValue;
	return newElement;
}

function SLShowHideAlert100(act,box){
 GEBI('SL_poster'+box).style.display=act; 
}

function SL_GotIt(box) {

if(box==1)box="SRC";
else      box="DST";
if(CLOSER==0 || localStorage["SL_GotIt"]!="1"){
 var SL_to="es";
 var SL_TTS_box="SL_target";
 var SL_TTS_boxNumber=2;
 SL_to = DetLang;
 if(box=="SRC"){ SL_TTS_box="SL_source"; SL_TTS_boxNumber=1; SL_to=GEBI('SL_langSrc').value;}
 var text = GEBI(SL_TTS_box).value;
 DO_TTS_Detection(text,1);
  setTimeout(function(){
   SL_to = TTSDetLang;
   var ALL_TTS = G_TTS + SL_TTS;
   if(ALL_TTS.indexOf(SL_to)==-1){
	 alert(FExtension.element('extNo_Voice')); return false;
   }else{
	 text=SetTTStextLimit(text,100);REMOTE_Voice(SL_to,text,SL_TTS_boxNumber);
   }
  }, 1000);
}
}

function SL_GotItStorage(box) { 
 SL_GotIt(box);
 SLShowHideAlert100("none",box);
 localStorage["SL_GotIt"]=1;
}

function Service(id){
	switch(id){
		case 1:	APPLstartTranslation("SL_source"); break;
		case 2: APPLstartCompare("SL_source"); break;
		case 3: FExtension.browserPopup.openNewTab("http://imtranslator.net/translate-and-speak/"); break;
		case 4: APPLstartDictionary("SL_source"); break;
		case 5: FExtension.browserPopup.openNewTab("http://imtranslator.net/partners.asp"); break;
	}
}
