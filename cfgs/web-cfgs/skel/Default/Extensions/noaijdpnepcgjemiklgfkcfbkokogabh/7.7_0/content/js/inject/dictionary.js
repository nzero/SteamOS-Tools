'use strict';
var SL_DETECT="";
var DetLangName="";
var STOPLOOP=0;
var ImTranslator_theurl = "https://webmail.smartlinkcorp.com/";


var SLDetLngCodes =    new Array ();
var SLDetLngNames =    new Array ();
var SL_Lnum = SL_Languages.split(",");
for(var i = 0; i < SL_Lnum.length; i++){
        var SL_tmp = SL_Lnum[i].split(":");
	SLDetLngCodes.push(SL_tmp[0]);
	SLDetLngNames.push(SL_tmp[1]);
}

var SLDetLngCodesExt =    new Array ();
var SLDetLngNamesExt =    new Array ();
var SL_LnumExt = SL_LanguagesExt.split(",");
for(var i = 0; i < SL_LnumExt.length; i++){
        var SL_tmpExt = SL_LnumExt[i].split(":");
	SLDetLngCodesExt.push(SL_tmpExt[0]);
	SLDetLngNamesExt.push(SL_tmpExt[1]);
}


(function(){var w=GEBI("SL_switch");w.addEventListener("click",function(){langSWITCHER();},!1);} )();
(function(){var t=GEBI("SL_trans_button");t.addEventListener("click",function(){SL_DICTSUBMIT();},!1);} )();
(function(){var l1=GEBI("SL_langSrc");l1.addEventListener("change",function(){Switch();},!1);} )();
(function(){var l2=GEBI("SL_langDst");l2.addEventListener("change",function(){Switch();SL_DICTSUBMIT();},!1);} )();
(function(){var c=GEBI("SL_dst_delete");c.addEventListener("click",function(){DICTClear();},!1);} )();
(function(){var tts=GEBI("SL_dict_tts");tts.addEventListener("click",function(){SL_Voice();},!1);} )();
(function(){var pp=GEBI("SL_PP");pp.addEventListener("click",function(){startURL("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2");},!1);} )();
(function(){var c=GEBI("SL_copyright-link");c.addEventListener("click",function(){startURL("http://about.imtranslator.net/about/company/");},!1);} )();
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
	
(function(){SESSION();})();

function SL_Voice (){
   if(GEBI('SL_alert100'))GEBI('SL_alert100').style.display="none";
   var SL_lng = GEBI("SL_langSrc").value;
   SL_lng = SL_lng.replace("-TW","");
   SL_lng = SL_lng.replace("-CN","");
   var TTStext=GEBI('SL_DICTtext').value.replace(/<br>/g, " ");
   GEBI('SL_DICTtext').style.direction="ltr";
   GEBI('SL_DICTtext').style.textAlign="left";
   if(SL_lng=="ar" || SL_lng=="iw" || SL_lng=="fa" || SL_lng=="ur" || SL_lng=="yi"){
  	 GEBI('SL_DICTtext').style.direction="rtl";
	 GEBI('SL_DICTtext').style.textAlign="right";
   }
   setTimeout(function(){
     var SL_from = SL_DETECT;
     var DETECTEDlongName=DetLangName;

     for (var z=0; z<SLDetLngCodes.length; z++){
       if(SL_from==SLDetLngCodes[z]) { DETECTEDlongName=SLDetLngNames[z];break; }
     }
     if(GEBI("SL_langSrc").value=="auto") {SL_from=SL_DETECT; GEBI('SL_DETECTED').innerHTML = FExtension.element('extDetected') + " " + DETECTEDlongName;}
     SL_DETECT = SL_from;
     if(SL_from=="en"||SL_from=="es"||SL_from=="ru"||SL_from=="de"||SL_from=="pt"||SL_from=="fr"||SL_from=="it"||SL_from=="ko"||SL_from=="ja"||SL_from=="zh-CN"||SL_from=="zh-TW"){
                var dir = SL_from.replace("zh-TW","zh");
                dir = dir.replace("zh-CN","zh");
		startURL("http://text-to-speech.imtranslator.net/?dir="+dir+"&text="+encodeURIComponent(TTStext));
     }else{
              if(G_TTS.indexOf(SL_from)!=-1){
		if(TTStext.length>100){
		   TTStext=SetTTStextLimit(TTStext,95);
		   GEBI('SL_alert100').style.display="block";
		}
	        REMOTE_Voice(SL_from,TTStext);
	      }else alert(FExtension.element('extNo_Voice'));
     }
   },500);
}

function SL_DICTSUBMIT(){ document.location="../popup/dictionary.html?text="+encodeURIComponent(GEBI('SL_DICTtext').value); }

function tagClick(e){
   var SL_to = GEBI(e.target.id).lang;
   SL_to=SL_to.replace("-TW","");
   SL_to=SL_to.replace("-CN","");
	   if(SL_to=="en"||SL_to=="es"||SL_to=="ru"||SL_to=="de"||SL_to=="pt"||SL_to=="fr"||SL_to=="it"||SL_to=="ko"||SL_to=="ja"||SL_to=="zh"){
		   startURL("http://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(GEBI(e.target.id).title));
	   } else {
             if(G_TTS.indexOf(SL_to)!=-1){
        	REMOTE_Voice(SL_to,GEBI(e.target.id).title);
	     }else alert(FExtension.element('extNo_Voice'));
	   }
   e.stopPropagation();
   e.cancelBubble = true;
}


function CONSTRUCTOR(){
	window.resizeTo(480,(GEBI('SL_body').clientHeight+45));
	window.addEventListener('load',function(){


		var OB = GEBI('SL_langSrc');
		var OB1 = document.createElement('option');
		var v = document.createAttribute("value");
		v.value = "auto";
		OB1.setAttributeNode(v);
		OB1.appendChild(document.createTextNode(FExtension.element('extDetect_language_from_box')));
		OB.appendChild(OB1); 
		for(var J=0; J < SLDetLngCodes.length; J++){
		    var OB2 = document.createElement('option');
		    v = document.createAttribute("value");
		    v.value = SLDetLngCodes[J];
		    OB2.setAttributeNode(v);
		    OB2.appendChild(document.createTextNode(SLDetLngNames[J].replace("&#160;"," ")));
		    OB.appendChild(OB2);
		}
		var OB3 = GEBI('SL_langDst');
		for(J=0; J < SLDetLngCodes.length; J++){
		    var OB4 = document.createElement('option');
		    v = document.createAttribute("value");
		    v.value = SLDetLngCodes[J];
		    OB4.setAttributeNode(v);
		    OB4.appendChild(document.createTextNode(SLDetLngNames[J].replace("&#160;"," ")));
		    OB3.appendChild(OB4);
		}
	  if(localStorage["SL_Flag"]=="FALSE") {var mySL_langSrc = localStorage["SL_langSrc"]; localStorage["SL_langSrc2"]=localStorage["SL_langSrc"];}
	  else	var mySL_langSrc = localStorage["SL_langSrc2"];
	  GEBI('SL_langSrc').value = mySL_langSrc;
	  if(localStorage["SL_Flag"]=="FALSE") {var mySL_langDst = localStorage["SL_langDst"]; localStorage["SL_langDst2"]=localStorage["SL_langDst"]; localStorage["SL_Flag"]="TRUE";}
	  else	var mySL_langDst = localStorage["SL_langDst2"];
	  GEBI('SL_langDst').value = mySL_langDst;

	  FExtension.bg.ImTranslatorBG.SL_callbackRequest2_();

	},!1);
	
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element('extTITLE')));
	GEBI('SLoptions').appendChild(document.createTextNode(FExtension.element('extOptions')));
	GEBI('SLhistory').appendChild(document.createTextNode(FExtension.element('extHistory')));
	GEBI('SLhelp').appendChild(document.createTextNode(FExtension.element('extHelp')));
	GEBI('SLfeedback').appendChild(document.createTextNode(FExtension.element('extFeedback')));
	GEBI('SL_PP').title=FExtension.element('extContribution_ttl');
	GEBI('SL_dst_delete').title=FExtension.element('extClearText');
	GEBI('SL_dict_tts').title=FExtension.element('extListen');
//	GEBI('SL_DETECTED').appendChild(document.createTextNode(FExtension.element('extDetected')));
	GEBI('SL_DETECTED').appendChild(document.createTextNode("Loading..."));
	GEBI('SL_switch').title=FExtension.element('extSwitch_languages_ttl');
	GEBI('SL_trans_button').value=FExtension.element('extTrButton');
	GEBI('SL_BG').appendChild(document.createTextNode(FExtension.element('extResTrans')));
	GEBI('SL_powered').appendChild(document.createTextNode(FExtension.element('extPowered')));
	GEBI('SL_DICTsource').appendChild(document.createTextNode(FExtension.element('extDictionary')));
       	GEBI('SL_translate_container').style.opacity="1";
}



function SESSION(){        
  CONSTRUCTOR();
  window.addEventListener('load', function(){
   setTimeout(function(){
    var tags1 = document.getElementsByClassName("TTS1");
    for (var i=0; i<tags1.length; i++) tags1[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
    var tags2 = document.getElementsByClassName("TTS2");
    for (var i=0; i<tags2.length; i++) tags2[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
    var tags3 = document.getElementsByClassName("_V");
    for (var i=0; i<tags3.length; i++) tags3[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
   },1000);
  }, false);

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
                        if(localStorage["SL_session"] != resp){
                        	localStorage["SL_session"]=resp;
				localStorage["SL_Flag"]="FALSE";
			}
		}
  }
  ajaxRequest.open("GET", baseUrl, true);
  ajaxRequest.send(null);
  setTimeout(function(){SL_DICT()},250); //WAS 500 ms
}

function SL_DICT(){
 GEBI('SL_DICTsource').innerHTML=""; 
 if(localStorage["SL_Flag"]=="FALSE") {var mySL_langSrc = localStorage["SL_langSrc"]; localStorage["SL_langSrc2"]=localStorage["SL_langSrc"];}
 else	var mySL_langSrc = localStorage["SL_langSrc2"];
 GEBI('SL_langSrc').value = mySL_langSrc;
 if(localStorage["SL_Flag"]=="FALSE") {var mySL_langDst = localStorage["SL_langDst"]; localStorage["SL_langDst2"]=localStorage["SL_langDst"]; localStorage["SL_Flag"]="TRUE";}
 else	var mySL_langDst = localStorage["SL_langDst2"];
 GEBI('SL_langDst').value = mySL_langDst;
 var baseUrl="https://clients5.google.com/translate_a/t";
 var text = GEBI('SL_DICTtext').value;

 if(GEBI('SL_DICTtext').value=="")text = decodeURIComponent(GET_CGI());
 text=text.replace(/#/g,"");
 text=text.replace(/%/g,"");
 text=text.replace(/\./gi,"");
 text=text.replace(/\)/gi,"");
 text=text.replace(/\(/gi,"");
 text=text.replace(/\"/gi,"");
 text=text.replace(/\«/gi,"");
 text=text.replace(/\»/gi,"");

 GEBI('SL_DICTtext').value=text;
 if(text!=""){
  var tmpdir = GET_CGIforDir();
  if (tmpdir != ""){
        var DIRS = tmpdir.split("|");
	GEBI('SL_langDst').value = DIRS[1];
	GEBI('SL_langSrc').value = DIRS[0];
  }
  GEBI('SL_DICTtext').style.direction="ltr";
  GEBI('SL_DICTtext').style.textAlign="left";
  if(GEBI('SL_langSrc').value=="ar" || GEBI('SL_langSrc').value=="iw" || GEBI('SL_langSrc').value=="fa" || GEBI('SL_langSrc').value=="ur" || GEBI('SL_langSrc').value=="yi"){
  	GEBI('SL_DICTtext').style.direction="rtl";
	GEBI('SL_DICTtext').style.textAlign="right";
  }
  DODetection(text);
  setTimeout(function(){
  GEBI("SL_DETECTED").innerHTML="Loading...";

        var SLIDL = setInterval(function(){
		if(SL_DETECT!="") {
        	        clearInterval(SLIDL);
			GEBI("SL_DETECTED").style.visibility="visible";
			FExtension.store.set("SL_langDst_name", GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text);         
			FExtension.bg.ImTranslatorBG.SL_callbackRequest2();



		        var SrcLng = GEBI('SL_langSrc').value;
		        var DstLng = GEBI('SL_langDst').value;
		        if(localStorage["SL_no_detect"]=="true" || GEBI('SL_langSrc').value=="auto"){
				SrcLng = SL_DETECT;
				if(SL_DETECT==GEBI('SL_langDst').value) DstLng = GEBI('SL_langSrc').value;
			}
			var SL_Params="client=dict&sl="+SrcLng+"&tl="+DstLng+"&q="+GEBI('SL_DICTtext').value + "&tbb=1&ie=UTF-8&oe=UTF-8";
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
					var mySourceLang = GEBI("SL_langSrc").value;
					var myTargetLang = GEBI("SL_langDst").value;
		                        var resp = ajaxRequest.responseText;
                		        var temp = SL_DICTparser(resp);
		                        resp = temp[1] + temp[0];
					GEBI('SL_DICTsource').innerHTML=resp;
					var ForHistory=temp[0];			
      				        if (localStorage["SL_TH_1"]==1){
		                         var SLnow = new Date();
					 SLnow=SLnow.toString();
		                         var TMPtime=SLnow.split(" ");
                		         var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
		                         var HISTORYtype=6;
                		         if(resp.indexOf('id=_X')==-1) HISTORYtype=1;
		                         var LNGfrom = GEBI("SL_langSrc").value;
                		         if(GEBI("SL_langSrc").value=="auto" || localStorage["SL_no_detect"]=="true") LNGfrom = SL_DETECT;
					 setTimeout(function(){
	        		                 localStorage["SL_History"]=GEBI('SL_DICTtext').value + "~~" + ForHistory + "~~" + LNGfrom + "|" + GEBI("SL_langDst").value + "~~"+ localStorage["THE_URL"] +"~~"+CurDT+"~~"+HISTORYtype+"^^" + localStorage["SL_History"];
					 },500);
                		        }
				}
			}
			ajaxRequest.open("POST", baseUrl, true);
		        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		        ajaxRequest.send(SL_Params);
		} 
	},50);  

  }, 300);
 } else {
	GEBI("SL_DETECTED").style.display='none';
	alert(FExtension.element('extNo_Text'));
 }	
}

function GEBI(id){ return document.getElementById(id);}

function GET_CGIforDir(){
 var resp="";
  if(window.location.search.indexOf("dir=")>-1){
   var text=window.location.search.split("dir=");
   if(text[1].indexOf("&text=")>-1){
    var text2=text[1].split("&text=");
    resp=text2[0];
   }else  resp=text[1];
  }
 return resp;
}

function GET_CGI(){
 var resp="";
  if(window.location.search.indexOf("text=")>-1){
   var text=window.location.search.split("text=");
   resp=text[1];
  }
 return resp;
}

function langSWITCHER(){
 if(GEBI("SL_langSrc").value!="auto"){
  var temp=GEBI("SL_langDst").value;
  GEBI("SL_langDst").value=GEBI("SL_langSrc").value;
  GEBI("SL_langSrc").value=temp;
  Switch();
 }else alert(FExtension.element('extDisabled'));
}

function Switch(){
 localStorage["SL_langSrc2"]=GEBI('SL_langSrc').value;
 localStorage["SL_langDst2"]=GEBI('SL_langDst').value;
 localStorage["SL_langDst_name"] = GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text;
 chrome.extension.getBackgroundPage().SL_callbackRequest2();
}


function DICTClear(){
 GEBI('SL_DICTsource').innerHTML="";
 GEBI('SL_DICTtext').value="";
 GEBI('SL_DICTtext').focus();
 GEBI('SL_dict_tts').style.display='none';
}

function REMOTE_Voice (dir, text){
//  var baseUrl = 'http://translate.google.com/translate_tts?ie=utf-8&tl='+dir+'&q='+encodeURIComponent(text);

  var TS = Math.floor(Date.now() / 1000);
  var length = decodeURIComponent(text).length;
  var baseUrl = 'https://translate.google.com/translate_tts?ts='+TS+'&ie=UTF-8&tl='+dir+'&total=1&idx=0&textlen='+length+'client=t&q='+decodeURIComponent(text);

  var frame = GEBI('lbframe');
  if(frame)	frame.parentNode.removeChild(frame);
  if(!GEBI("lbframe")){
//     window.resizeTo(480,(GEBI('SL_body').clientHeight+65));
     var die=document.createElement("iframe");
     die.src="";
     die.name="lbframe";
     die.id="lbframe";
     die.width="454px";
     die.height="38px";
     die.scrolling="no";
     die.frameBorder="0";
     GEBI('SL_player3').appendChild(die);
     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', baseUrl);
     audioElement.setAttribute('preload', 'auto');
     audioElement.setAttribute('controls', '');
     audioElement.setAttribute('autoplay', '');
     audioElement.setAttribute('id', 'SLmedia');
     audioElement.setAttribute('name', 'SLmedia');
     audioElement.setAttribute('style', 'width:444px');
     window.frames["lbframe"].document.body.appendChild (audioElement);
     window.frames["lbframe"].document.body.appendChild (audioElement);
     var ao = window.frames["lbframe"].GEBI('SLmedia');
     if(ao)	ao.parentNode.removeChild(ao);     
     setTimeout(function(){
       var audioElement = document.createElement('audio');
       audioElement.setAttribute('src', baseUrl);
       audioElement.setAttribute('preload', 'auto');
       audioElement.setAttribute('controls', '');
       audioElement.setAttribute('autoplay', '');
       audioElement.setAttribute('id', 'SLmedia');
       audioElement.setAttribute('name', 'SLmedia');
       audioElement.setAttribute('style', 'width:444px');
       window.frames["lbframe"].document.body.appendChild (audioElement);
       window.frames["lbframe"].document.body.style.marginTop='0px';
       window.frames["lbframe"].document.body.style.marginLeft='0px';
       GEBI('SL_player').style.display="block";
       GEBI('SL_player').style.height="38px";
       GEBI('SL_player').style.width="454px";
     }, 1000);
  }
}

function SL_TTSicn(lng,st){
 var OUT="";
 if(lng!="ar" && lng!="iw" && lng!="fa" && lng!="ur" && lng!="yi"){
  if(st==0){
   GEBI("SL_DICTtext").style.direction="ltr";
   GEBI("SL_DICTtext").style.textAlign="left";
  }
  OUT=1;
 } else {
  if(st==0){
   GEBI("SL_DICTtext").style.direction="rtl";
   GEBI("SL_DICTtext").style.textAlign="right";
  }
  OUT=2;
 }
 return(OUT);
}


function SL_DICTparser(resp){
   var PARTS = new Array();
   var SL_to = GEBI('SL_langDst').value;
   if(SL_DETECT==GEBI('SL_langDst').value) SL_to = GEBI('SL_langSrc').value;

   var SL_from = GEBI('SL_langSrc').value;
   var DETECTEDlng=SL_DETECT;
   var parsedRES="";
   var parsedTRANS="";
   var DETECTEDlongName=DetLangName;
   for (var z=0; z<SLDetLngCodes.length; z++){
       if(DETECTEDlng==SLDetLngCodes[z]) {SL_DETECT=SLDetLngCodes[z]; DETECTEDlongName=SLDetLngNames[z];break; }
   }
   var SL_LABLE="";

   if(localStorage["SL_no_detect"]=="true" || GEBI('SL_langSrc').value=="auto") SL_LABLE = FExtension.element('extDetected') + " " + DETECTEDlongName;
   GEBI('SL_DETECTED').innerHTML = SL_LABLE;
   if(localStorage["SL_no_detect"]=="true" || GEBI('SL_langSrc').value=="auto"){
         var OLD_FROM = GEBI("SL_langSrc").value;

         if(OLD_FROM!="auto"){
            if(DETECTEDlng==GEBI("SL_langDst").value){
		GEBI("SL_langDst").value=OLD_FROM;
		GEBI("SL_langSrc").value=DETECTEDlng;
	    }
//	 }else{ 
//		GEBI("SL_langSrc").value=localStorage["SL_langSrc"];
	 }
   }   

   var Tr1=resp.split('dict":[');
   var Tr2=Tr1[0].split('trans":"');
   var Tr3=Tr2[1].split('"');
   var TRANSLATION = Tr3[0];
   var WAY = SL_TTSicn(DETECTEDlng,0);
   var WAY2 = SL_TTSicn(GEBI('SL_langDst').value,1);
   var FAKE="";
   if(SL_DETECT=="en" || SL_DETECT=="es" || SL_DETECT=="ru" || SL_DETECT=="de" || SL_DETECT=="pt" || SL_DETECT=="fr" || SL_DETECT=="it" || SL_DETECT=="ko" || SL_DETECT=="ja" || SL_DETECT=="zh-CN" || SL_DETECT=="zh-TW" || SL_DETECT=="ar" || SL_DETECT=="cs" || SL_DETECT=="da" || SL_DETECT=="nl" || SL_DETECT=="fi" || SL_DETECT=="el" || SL_DETECT=="ht" || SL_DETECT=="hi" || SL_DETECT=="hu" || SL_DETECT=="no" || SL_DETECT=="pl" || SL_DETECT=="sk" || SL_DETECT=="sv" || SL_DETECT=="th" || SL_DETECT=="tr" || SL_DETECT=="la" && G_TTS.indexOf(SL_DETECT)==-1){
//   if(SL_DETECT=="en" || SL_DETECT=="es" || SL_DETECT=="ru" || SL_DETECT=="de" || SL_DETECT=="pt" || SL_DETECT=="fr" || SL_DETECT=="it" || SL_DETECT=="ko" || SL_DETECT=="ja" || SL_DETECT=="zh-CN" || SL_DETECT=="zh-TW" && G_TTS.indexOf(SL_DETECT)==-1){
           GEBI('SL_dict_tts').style.display='block';
	   if(resp.indexOf("reverse_translation")!=-1){
	      if(WAY == 1) 	FAKE = "<div id=_X><div id=_XL><div class=TTS"+WAY+" id=SL_000  lang=\""+DETECTEDlng+"\" title=\""+GEBI("SL_DICTtext").value+"\"></div></div><div id=_XR style='font-weight:bold;font-size:14px;'>" + GEBI("SL_DICTtext").value + "</div></div>";
	      else    	FAKE = "<div id=_X><div id=_FL><div class=TTS"+WAY+" id=SL_000 lang=\""+DETECTEDlng+"\" title=\""+GEBI("SL_DICTtext").value+"\"></div></div><div id=_FR>" + GEBI("SL_DICTtext").value + "</div></div>";
	   } else {
	      if(WAY == "1"){
	 	parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
	      } else {
	 	parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
	      }
	   }
   } else {
           GEBI('SL_dict_tts').style.display='none';
	   if(resp.indexOf("reverse_translation")!=-1){
	      if(WAY == 1) 	FAKE = "<div id=_X><div id=_XR style='font-weight:bold;font-size:14px;'>" + GEBI("SL_DICTtext").value + "</div></div>";
	      else    	FAKE = "<div id=_X><div id=_FR>" + GEBI("SL_DICTtext").value + "</div></div>";
	   } else {
	      if(WAY == "1"){
	 	parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
	      } else {
	 	parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
	      }
	   }
   }
   parsedRES = parsedTRANS+"<br>";
   if(resp.indexOf('pos":"')!=-1){
	var D1=Tr1[1].split('pos":"');
	var D2="", cnt=0;
	for(var i=1; i < D1.length; i++){
		D2=D1[i].split('"');
		PARTS[cnt++]=D2[0];
	}
        var j,k,T,T1,T2,R,R1,R2,A,A1,Rline,article,article2;
	for(i = 0; i < PARTS.length; i++){
		parsedRES = parsedRES + "<div id=_Y>" +PARTS[i] + "</div>";
		T=Tr1[1].split(PARTS[i]+'","terms":["');
		T1=T[1].split('"],');
                T1[0]=T1[0].replace(/"/g,"");
		T2=T1[0].split(',');
		for(j = 0; j < T2.length; j++){
		        R=Tr1[1].split('"word":"' + T2[j] + '","reverse_translation":[');
			if(R[1] != undefined){
				R1=R[1].split('"]');
				R1[0]=R1[0].replace(/"/g,"");
			        R2=R1[0].split(',');
		        	article="";
		        	article2="";
			        if(PARTS[i]=="noun" && R[1].indexOf('previous_word') != -1){
				        A=R[1].split('previous_word":"');
				        A1=A[1].split('"');
				        article="<x id=_ART>" + A1[0] + "</x> ";
				        article2 = A1[0] + " ";
				}
			        Rline="";
				for(k = 0; k < R2.length; k++){
					if(k < (R2.length-1))	Rline = Rline + "<a class=_ALNK href='dictionary.html?dir="+ SL_from + "|" + SL_to +"&text=" + encodeURIComponent(R2[k]) + "'>" + R2[k] + "</a>, ";
					else			Rline = Rline + "<a class=_ALNK href='dictionary.html?dir="+ SL_from + "|" + SL_to +"&text=" + encodeURIComponent(R2[k]) + "'>" + R2[k] + "</a>";
				}
				var SL_TTS = article + T2[j];
				if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-CN" || SL_to=="zh-TW" || SL_to=="ar" || SL_to=="cs" || SL_to=="da" || SL_to=="nl" || SL_to=="fi" || SL_to=="el" || SL_to=="ht" || SL_to=="hi" || SL_to=="hu" || SL_to=="no" || SL_to=="pl" || SL_to=="sk" || SL_to=="sv" || SL_to=="th" || SL_to=="tr" || SL_to=="la" && G_TTS.indexOf(SL_to)==-1){
//				if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-CN" || SL_to=="zh-TW" && G_TTS.indexOf(SL_to)==-1){
				   if(WAY2==1) SL_TTS = "<div id=_X><div id=_XL><div class=_V id=\"SL_"+i+j+"\" lang=\""+SL_to+"\" title=\"" + T2[j] + "\"></div></div><div id=_XR>" + article + T2[j] + "</div></div>";
				   else SL_TTS = "<div id=_X><div id=_FL><div class=TTS"+WAY2+" id=\"SL_"+i+j+"\" lang=\""+SL_to+"\" title=\"" + T2[j] + "\"></div></div><div id=_XR>" + article + T2[j] + "</div></div>";
				}			
				parsedRES = parsedRES + "<div id=_A><div id=_AL>" + SL_TTS + "</div><div id=_AR>" + Rline + "</div></div>";
			} else {
				if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-CN" || SL_to=="zh-TW" || SL_to=="ar" || SL_to=="cs" || SL_to=="da" || SL_to=="nl" || SL_to=="fi" || SL_to=="el" || SL_to=="ht" || SL_to=="hi" || SL_to=="hu" || SL_to=="no" || SL_to=="pl" || SL_to=="sk" || SL_to=="sv" || SL_to=="th" || SL_to=="tr" || SL_to=="la" && G_TTS.indexOf(SL_to)==-1){
//				if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-CN" || SL_to=="zh-TW" && G_TTS.indexOf(SL_to)==-1){
				   SL_TTS = "<div id=_X><div id=_XL><div class=_V id=\"SL_"+i+j+"\" lang=\""+SL_to+"\" title=\"" + T2[j] + "\"></div></div><div id=_XR>" + article + T2[j] + "</div></div>";
				}else{
				   SL_TTS = "<div id=_X><div id=_XR>" + T2[j] + "</div></div>";
				}
				if(WAY2==1) parsedRES = parsedRES + "<div id=_A><div id=_AL>" + SL_TTS + "</div></div>";
				else{
					if(SL_to!="iw"){
						parsedRES = parsedRES + "<div id=_A><div id=_FL class=TTS"+WAY2+">" + SL_TTS + "</div></div>";
					}
				}
			}
		}
		parsedRES = parsedRES + "<br>";
	}
    } else parsedRES = parsedTRANS;
      if(parsedRES.indexOf("_A")!=-1){
	    setTimeout(function(){
	     SL_ALIGNER1(GEBI('SL_langDst').value);
	     SL_ALIGNER2(DETECTEDlng)
	    },5);
      } else setTimeout(function(){ SL_ALIGNER3(DETECTEDlng,GEBI('SL_langDst').value);},5);
 return [parsedRES, FAKE];
}

function DOSLDetection(myTransText) {
        var baseUrl = "http://imtranslator.net/detect-g.asp?fl=zh&text="+escape(myTransText);
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
		        if(resp=="zh") resp="zh-CN";
		        if(resp=="zt") resp="zh-TW";
                        SL_DETECT = resp;
		}
	}
	ajaxRequest.open("POST", baseUrl, true);
	ajaxRequest.send(null); 
}

function SL_ALIGNER1(SL_to){
 var nums=document.getElementsByTagName("div").length;
 if(SL_to!="ar" && SL_to!="iw" && SL_to!="fa" && SL_to!="ur" && SL_to!="yi"){
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AL")	 document.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AL")	 document.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
}

function SL_ALIGNER2(SL_from){
 var nums=document.getElementsByTagName("div").length;
 if(SL_from!="ar" && SL_from!="iw" && SL_from!="fa" && SL_from!="ur" && SL_from!="yi"){
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AR")	 document.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AR")	 document.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
}

function SL_ALIGNER3(SL_from,SL_to){
 if(SL_to=="ar" || SL_to=="iw" || SL_to=="fa" || SL_to=="ur" || SL_to=="yi")	GEBI("SL_DICTsource").style.textAlign='right';
 else	GEBI("SL_DICTsource").style.textAlign='left';
 if(SL_from=="ar" || SL_from=="iw" || SL_from=="fa" || SL_from=="ur" || SL_from=="yi")	GEBI("SL_DICTtext").style.textAlign='right';
 else	GEBI("SL_DICTtext").style.textAlign='left';
}

function DODetection(myTransText) {

  if(myTransText=="") myTransText = GEBI("SL_DICTtext").value;
  if(myTransText!=""){

    var cntr = myTransText.split(" ");
    var newTEXT = myTransText;
    if(cntr.length<=1)  newTEXT = myTransText+" "+myTransText;

    var num = Math.floor((Math.random() * SL_GEO.length)); 
    var theRegion = SL_GEO[num];
    var baseUrl = 'https://' + 'translate.google.'+theRegion+'/translate_a/single?client=t&sl=auto&tl=en&hl=en&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&q='+encodeURIComponent(truncStrByWord(myTransText+' '+newTEXT,100));


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
		if(ajaxRequest.readyState == 4){
                        var resp = ajaxRequest.responseText;

                        var captcha=0;
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


        	                var thetemp=GEBI("SL_langSrc").value.replace("zh-TW","zt");
                	        thetemp=thetemp.replace("zh-CN","zh");
				SL_DETECT = resp;

				var cnt=0;
        	                for (var i=0;i<SLDetLngCodes.length;i++){
					if(resp == SLDetLngCodes[i]){cnt=1; SL_DETECT = SLDetLngCodes[i];}
				}

				if(cnt==0){
	        	                for (var i=0;i<SLDetLngCodesExt.length;i++){
						if(resp == SLDetLngCodesExt[i]) {SL_DETECT = SLDetLngCodesExt[i]; DetLangName = SLDetLngNamesExt[i];}
					}
				}

			} else 	SLDetectPATCH(myTransText);
		}
	}
	ajaxRequest.open("POST", baseUrl, true);
	ajaxRequest.send(null); 
 }                                
}                                 



function SLDetectPATCH(theText){
        SLDetector(theText);
        setTimeout(function() { 
	        var lng = SL_DETECT;
		if(lng!='un'){
			SL_DETECT = lng;
			var templang="";
                        for (var i=0;i<LANGS.length;i++){
       	                        templang=LANGS[i].split(":");
				if(lng == templang[0]){ lng = templang[1]; SL_DETECT = templang[0]; DetLangName = lng;}
                       	}

			GEBI("SL_detect").innerHTML = FExtension.element('extDetected') + " "+DetLangName;
		} else {
			SL_DETECT = "en";
			GEBI("SL_detect").innerHTML = FExtension.element('DetectedEn');
		}
	}, 100);
}

function SLDetector (text){
	if(text=="") text = GEBI("SL_source").value;
  	var theLIMIT = 100;                            
	var SLDImTranslator_url = ImTranslator_theurl+"ld.php?tr=pl_d&text="+encodeURIComponent(truncStrByWord(text,theLIMIT));
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
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    SL_DETECT="en";

        		            if(tmp2[0].length>0 && tmp2[0].length<7) SL_DETECT=tmp2[0];
                		    if(document.getElementById('SL_langSrc').value!=SL_DETECT){
	                		    if(tmp2[0]!="un"){
						GEBI("SL_detect").innerHTML = FExtension.element('extDetected')+" "+DetLangName;
					    }
			            }
			    	} else SL_DETECT="en";
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
}





function truncStrByWord(str, length){
 if(str!="undefined"){
  if(str.length>25){
   length=length-25;
   var thestr=str;
   if (str.length > length) {
      	str = str.substring (0, length);
	str = str.replace(new RegExp("/(.{1,"+length+"})\b.*/"), "$1")    // VK - cuts str to max length without splitting words.
      str2 = thestr.substring(length, (length+25));
      tempstr=str2.split(" ");
      tmp="";
      
      for (i=0; i<tempstr.length-1; i++){
          tmp = tmp+tempstr[i]+" ";
      } 
      str=str+tmp;
   }
  } else str = str+" ";
 }
 return str;
}

function startURL(url){ FExtension.browserPopup.openNewTab(url); }
