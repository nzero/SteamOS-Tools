'use strict';
var SL_GLOBAL_RECORDS=0;
var SL_GLOBAL_SEGMENTS=0;
var SL_SEGMENT_LIMIT=200;
var SLclr1="#BE3B34";
var SLclr2="green";
var SL_TMP_SRC="";
var CurIND = 0;
var noVoice = FExtension.element('extNo_Voice');

var SL_ListOfAvailableLanguages = SL_Languages;
var SL_ListOfAvailableLanguagesExt = SL_LanguagesExt;

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


(function(){var h=GEBI("SL_delete");h.addEventListener("click",function(){SL_delete_all();},!1);} )();
(function(){var h=GEBI("SL_delete_2");h.addEventListener("click",function(){SL_delete_all();},!1);} )();
(function(){window.addEventListener("load",function(e){SL_record_finder(e);},!1);} )();
(function(){window.addEventListener("click",function(){REMOTE_Voice_Close();},!1);} )();
(function(){GEBI('SL_H_SEARCH').addEventListener("keyup",function(){REMOTE_Voice_Close();SL_FASTTIPE();},!1);} )();
(function(){GEBI('SL_clear_box').addEventListener("click",function(){SL_FASTTIPE_DEL();},!1);} )();
(function(){GEBI('SL_export').addEventListener("click",function(){SL_save_content_to_file();},!1);} )();
(function(){GEBI('SL_export_2').addEventListener("click",function(){SL_save_content_to_file();},!1);} )();
(function(){GEBI('SL_SORT').addEventListener("change",function(){REMOTE_Voice_Close();SL_SORT();},!1);} )();


setTimeout(function() {
 (function(){if(GEBI('SL_form_closer'))GEBI('SL_form_closer').addEventListener("click",function(){SL_UN_PATCH();},!1);} )();
 (function(){if(GEBI('SL_save_button'))GEBI('SL_save_button').addEventListener("click",function(){SL_UN_PATCH();},!1);} )();
 (function(){if(GEBI('SL_TH_1'))GEBI('SL_TH_1').addEventListener("change",function(){SL_SAVE_TH(1);},!1);} )();
 (function(){if(GEBI('SL_TH_2'))GEBI('SL_TH_2').addEventListener("change",function(){SL_SAVE_TH(2);},!1);} )();
 (function(){if(GEBI('SL_TH_3'))GEBI('SL_TH_3').addEventListener("change",function(){SL_SAVE_TH(3);},!1);} )();
 (function(){if(GEBI('SL_TH_4'))GEBI('SL_TH_4').addEventListener("change",function(){SL_SAVE_TH(4);},!1);} )();
}, 1000);

(function(){
	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	INIT();
})();

function CONSTRUCTOR(){
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element('extTITLE')));
	GEBI('SLfeedback').appendChild(document.createTextNode(FExtension.element('extFeedback')));
	GEBI('SL_PP').title=FExtension.element('extContribution_ttl');
	GEBI('SL_options4').title=FExtension.element('extTrHist');
	GEBI('SL_History').appendChild(document.createTextNode(FExtension.element('extTHempty')));
	GEBI('SL_TH').appendChild(document.createTextNode(FExtension.element('extTrHist')));
	GEBI('SL_export_2').appendChild(document.createTextNode(FExtension.element('extExportTH')));
	GEBI('SL_delete_2').appendChild(document.createTextNode(FExtension.element('extClearTH')));
	GEBI('SL_search_box').title=FExtension.element('extSearch');
	GEBI('SL_clear_box').title=FExtension.element('extClearText');
	GEBI('SL_ALL').appendChild(document.createTextNode(FExtension.element('extAllRecords')));
	GEBI('SL_MOT').appendChild(document.createTextNode(FExtension.element('extMOT')));
	GEBI('SL_Dictionary').appendChild(document.createTextNode(FExtension.element('extDictionary')));
}


 window.addEventListener('mousedowm', function(e){
  setTimeout(function(e){
	tagClickDictTTS(e);
  },500);
 }, false);



function tagClickDictTTS(e){
 var SL_to = e.target.lang;
 var SL_text = e.target.title;
 if(e.target.id.indexOf("_listen")==-1){
  if(SL_to!="" && SL_text!=""){
   if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-TW"){
	   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(SL_text));
   } else {
     if(SL_to=="ar" || SL_to=="cs" || SL_to=="da" || SL_to=="nl" || SL_to=="fi" || SL_to=="el" || SL_to=="ht" || SL_to=="hi" || SL_to=="hu" || SL_to=="no" || SL_to=="pl" || SL_to=="sk" || SL_to=="sv" || SL_to=="th" || SL_to=="tr" || SL_to=="la"){
	 setTimeout(function(){
	        REMOTE_Voice(SL_to,SL_text);
	 }, 500);
     }else{
	alert(noVoice);
     }
     e.stopPropagation();
     e.cancelBubble = true;
   }
  }
 }
}

/*
function tagClickDictTTS_(e){
 var SL_to = e.target.lang;
 var SL_text = e.target.title;
 if(e.target.id.indexOf("_listen")==-1){
  if(SL_to!="" && SL_text!=""){
   if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-TW" || SL_to=="zh-CN"){
	   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(SL_text));
   } else {
     if(G_TTS.indexOf(SL_to)!=-1){
	 setTimeout(function(){
	        REMOTE_Voice(SL_to,SL_text);
	 }, 500);
     }else{
	alert(noVoice);
     }
     e.stopPropagation();
     e.cancelBubble = true;
   }
  }
 }
}
*/

function SL_UN_PATCH(){
    GEBI('SL_fieldset').style.opacity="1";
    GEBI('SL_History_Patch').style.display="none";
    GEBI('SL_fieldset').style.zIndex="100";
    GEBI('SL_History_Patch').style.zIndex="1";
}

function INIT(){
 window.resizeTo(480,(GEBI('SL_body').clientHeight+35));
 window.addEventListener("load",function(){ FF_WINDOW_ALIGNER();},!1);
 if(FExtension.store.get("SL_TH_1")==0 && FExtension.store.get("SL_TH_2")==0 && FExtension.store.get("SL_TH_3")==0 && FExtension.store.get("SL_TH_4")==0){
    GEBI('SL_fieldset').style.opacity="0.1";
    GEBI('SL_History_Patch').style.display="block";
    GEBI('SL_fieldset').style.zIndex="1";
    GEBI('SL_History_Patch').style.zIndex="100";
    if(SL_get_browser() == "Firefox") GEBI('SL_History_Patch').style.marginLeft="150px";
    GEBI('SL_History_Form').innerHTML = '<div align=right><img style="padding:3px;cursor:pointer;" src="../../img/util/delete.png" id="SL_form_closer" style="cursor:pointer;" title="'+FExtension.element('extClose')+'"></div><table width="100%"><tr><td width="5%"><input type="checkbox" id="SL_TH_1" name="SL_TH_1" value="0" tabindex="1"></td><td width="95%">ImTranslator: '+FExtension.element('extEnTH')+'</td></tr></table>';
    GEBI('SL_History_Form').innerHTML = GEBI('SL_History_Form').innerHTML + '<table width="100%"><tr><td width="5%"><input type="checkbox" id="SL_TH_4" name="SL_TH_4" value="0" tabindex="2"></td><td width="95%">Inline Translator: '+FExtension.element('extInTH')+'</td></tr></table>';
    GEBI('SL_History_Form').innerHTML = GEBI('SL_History_Form').innerHTML + '<table width="100%"><tr><td width="5%"><input type="checkbox" id="SL_TH_2" name="SL_TH_2" value="0" tabindex="2"></td><td width="95%">Pop-up Bubble: '+FExtension.element('extBblTH')+'</td></tr></table>'; 	     
    GEBI('SL_History_Form').innerHTML = GEBI('SL_History_Form').innerHTML + '<table width="100%"><tr><td width="5%"><input type="checkbox" id="SL_TH_3" name="SL_TH_3" value="0" tabindex="3"></td><td width="95%">Web Translation: '+FExtension.element('extWpTH')+'</td></tr></table>';
    GEBI('SL_History_Form').innerHTML = GEBI('SL_History_Form').innerHTML + '<div align="right"><button id="SL_save_button" tabindex="4">'+FExtension.element('extContinue')+'</button></div>';
    GEBI('SL_History_Form').innerHTML = GEBI('SL_History_Form').innerHTML + '<div class="SL_SMALL">'+FExtension.element('extPrivacy')+'</div>';
 }else{
    GEBI('SL_fieldset').style.opacity="1";
    GEBI('SL_History_Patch').style.display="none";
    GEBI('SL_fieldset').style.zIndex="100";
    GEBI('SL_History_Patch').style.zIndex="1";
 }
  var mySL_HISTORY = FExtension.store.get("SL_History").replace(/'dictionary.html/g,"'../../html/popup/dictionary.html");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");

    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      TMP_HIST[z] = TMP_HIST[z].replace(/<br>/g,"");
      var TMP = TMP_HIST[z].split("~~");
      var TMP_SRC=TMP[0].replace(/@/g,"<br>");
      var TMP_DST=TMP[1].replace(/@/g,"<br>");

      var TMP_DIR = TMP[2].split("|");
      var DIR_from = SL_GET_LANG_NAME(TMP_DIR[0]);
      var DIR_to   = SL_GET_LANG_NAME(TMP_DIR[1]);

      TMP[1]=SL_ALIGNER(TMP[1],TMP_DIR[0],TMP_DIR[1]);
      var title="";
      var color="#fff";
      switch(TMP[5])
	{
	case '1': title="ImTranslator"; color="#FFFAE8"; break;
	case '2': title="Pop-up Bubble Translator"; color="#F2FFFD"; break;
	case '3': title="Webpage translation"; color="#FFF0E8"; break;
	case '4': title=FExtension.element('extMOT'); color="#E5FFE1"; break;
	case '5': title="Inline translator"; color="#FDEBFB"; break;
	case '6': title=FExtension.element('extDictionary'); color="#fbfbfb"; break;
	}
      var WAY1 = SL_TTSicn(TMP_DIR[0]);
      var WAY2 = SL_TTSicn(TMP_DIR[1]);
      var TTS1="";
      var TTS2="";
      var BUTTONS="";

      if(TMP[5]!='6'){
        TTS1 = "<img src='../../img/util/speak.png' lang='"+TMP_DIR[1]+"' id='SL_src_listen"+z+"'  class='SLIMG1' align='left' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
	TTS2 = "<img src='../../img/util/speak.png' lang='"+TMP_DIR[0]+"' id='SL_tar_listen"+z+"'  class='SLIMG2' align='right' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
      	BUTTONS = "<img src='../../img/util/split.png' id='SL_split"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSplit')+"'>&nbsp; <img src='../../img/util/open.png' id='SL_open"+z+"' style='cursor:pointer;' title='"+FExtension.element('extExpand')+"'>&nbsp; ";
      }
      if(TMP_SRC.length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')     TMP_SRC=TMP_SRC.substring(0,SL_SEGMENT_LIMIT)+" ...";
      if(TMP[1].length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')      TMP[1]=TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...";
      var NOURL="";


      if(TMP[5]=='3' || TMP[5]=='4'){
	TTS1=TTS1.replace(":visible",":hidden");
	TTS2=TTS2.replace(":visible",":hidden");
        BUTTONS="";
      } else {
        if(TMP[3].indexOf("{empty}")!=-1)NOURL="display:none;visibility:hidden";
      }

      if(TMP[5]=='6' && DIR_from != "Auto"){
        if(isTTSready(TMP_DIR[0])==true)  TTS2="<div id='SL_src_listen"+z+"' lang='"+TMP_DIR[0]+"' style='cursor:pointer;margin-bottom:5px;margin-left:5px;margin-right:5px;' class=TTS"+WAY1+" title='"+TMP_SRC+"' ></div>";
//        if(TMP_DST.indexOf("_XR")==-1){
//           if(isTTSready(TMP_DIR[0])==true) TTS1="<div id='SL_tar_listen"+z+"' lang='"+TMP_DIR[0]+"' style='cursor:pointer;margin-bottom:5px;margin-left:5px;margin-right:5px;' class=TTS"+WAY1+" title='"+TMP_SRC+"' ></div>";
//        }
      }

      var TheClass1=SL_LTR_RTL(TMP_DIR[0]);
      var TheClass2=SL_LTR_RTL(TMP_DIR[1]);
      var TheWidth="";
      var CONTROLS="<div align='right' class='SL_h_info'><table width='98%' height='15' border=0 cellpadding=0 cellspasing=0><tr><td width='170' class='SL_h_TD' valign='bottom'>"+TMP[4]+"</td><td width='160' valign='bottom' class='SL_h_TD'><span lang='"+TMP_DIR[0]+"|"+TMP_DIR[1]+"' class='DIRS'>"+SL_GET_LANG_NAME(TMP_DIR[0])+">"+SL_GET_LANG_NAME(TMP_DIR[1])+ "</span></td><td width='80' align=right valign='bottom'>" + BUTTONS + "<img src='../../img/util/url.png' id='SL_url"+z+"' style='cursor:pointer;"+NOURL+"' title='"+FExtension.element('extSeeSource')+"'>&nbsp; <img src='../../img/util/basket.png' id='SL_delete"+z+"' style='cursor:pointer;' title='"+FExtension.element('extDelRecord')+"'></td></tr></table></div>";

      if(TheClass1=="SL_rtl") TheWidth="90%";

      if(TMP[5]=='3' || TMP[5]=='4'){
        TMP[1] = TMP[0];
 	TMP_HISTORY_LIST = TMP_HISTORY_LIST + "<div align='right' class='SL_h_info'><table width='98%' height='15' border=0 cellpadding=0 cellspasing=0><tr><td width='170' class='SL_h_TD' valign='bottom'>"+TMP[4]+"</td><td width='160' valign='bottom' class='SL_h_TD'>"+SL_GET_LANG_NAME(TMP_DIR[0])+">"+SL_GET_LANG_NAME(TMP_DIR[1])+ "</td><td width='80' align=right valign='bottom'>" + BUTTONS + "<img src='../../img/util/url.png' id='SL_url"+z+"' style='cursor:pointer;"+NOURL+"' title='"+FExtension.element('extSeeSource')+"'>&nbsp; <img src='../../img/util/basket.png' id='SL_delete"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSeeSource')+"'></td></tr></table></div><div class='SL_History_4URLS' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' style='color:"+SLclr1+";cursor:pointer;' class='"+TheClass1+"'>"+TMP_SRC + "</div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' style='color:"+SLclr2+";cursor:pointer;' class='"+TheClass2+"'>"+TMP[1]+"</div></div><br>"; 
      } else{
       if(TMP[5]=='6'){
         if(WAY1!=1)  	TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='width:98%;overflow:hidden;'><div style='float:right'>" +TTS2+ "</div><div class=SRC id='SRC"+z+"' style='float:right;'>"+TMP_SRC + "</div><br><div id='DST"+z+"'>"+TMP[1]+ " "+ TTS1+"</div></div><br>";
  	 else 		TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='width:98%;overflow:hidden;'><div style='float:left'>" +TTS2+ "</div><div class=SRC id='SRC"+z+"' style='float:left;'>"+TMP_SRC + "</div><br><br><div id='DST"+z+"'>"+TMP[1]+ " "+ TTS1+"</div></div><br>";
       } else {

	   switch(WAY1+"|"+WAY2)
		{
		case "1|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
		case "1|2":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
		case "2|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
		case "2|2": 	TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
	 	}
       }	
      }	
    }
    GEBI('SL_History').innerHTML = TMP_HISTORY_LIST;   
    GEBI('SL_H_SEARCH').focus();
    OnOffTTSicon();
  }

 window.resizeTo(480,(GEBI('SL_body').clientHeight+35));
}

function SL_LTR_RTL(dir){
 var TheClass="SL_ltr";
 if(dir=="ar" || dir=="iw" || dir=="fa" || dir=="ur" || dir=="yi") var TheClass="SL_rtl";
 return(TheClass);
}

function GEBI(id){ return document.getElementById(id);}

function SL_delete_all(){
 var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
 if(isMac==false)  var r=confirm(FExtension.element('extDoYou'));
 else r=true;
 if (r==true){
    FExtension.store.set("SL_History", "");
    document.location.reload();
 }
}

function SL_record_finder(){
    var tags = document.getElementsByClassName("_V");
    for (var i=0; i<tags.length; i++){
         tags[i].id="SL_0"+i;
	 tags[i].addEventListener('mousedown', function(e){ tagClickDictTTS(e) }, false);
    }
    var tags1 = document.getElementsByClassName("TTS1");
    for (i=0; i<tags1.length; i++){
         tags1[i].id="SL_0"+i;
	 tags1[i].addEventListener('mousedown', function(e){ tagClickDictTTS(e) }, false);
    }
    var tags2 = document.getElementsByClassName("TTS2");
    for (i=0; i<tags2.length; i++){
         tags2[i].id="SL_0"+i;
	 tags2[i].addEventListener('mousedown', function(e){ tagClickDictTTS(e) }, false);
    }

    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
     if(GEBI("SL_delete"+z)){
      GEBI("SL_delete"+z).onclick=function(z){
          SL_DELETE_ONE(this.id.replace("SL_delete",""));
      };
      GEBI("SL_url"+z).onclick=function(z){
          SL_SEE_URL(this.id.replace("SL_url",""),2);
      };
      if(GEBI("SL_src_listen"+z)){
       GEBI("SL_src_listen"+z).onclick=function(z){
          SL_TTS(1,this.id.replace("SL_src_listen",""));
       };
      }
      if(GEBI("SL_tar_listen"+z)){
       GEBI("SL_tar_listen"+z).onclick=function(z){
          SL_TTS(2,this.id.replace("SL_tar_listen",""));
       };
      }
      if(GEBI("SL_open"+z)){
       GEBI("SL_open"+z).onclick=function(z){
          SL_OPEN(this.id.replace("SL_open",""));
       };
      }
      if(GEBI("SL_split"+z)){
       GEBI("SL_split"+z).onclick=function(z){
          var tmp = CurIND = this.id.replace("SL_split","");
          SL_SPLIT(tmp);
          CurIND = tmp;
       };
      }

      if(GEBI("NEWSRC"+z)){
       var SLsrc=GEBI("NEWSRC"+z).innerHTML.replace(/<\/?[^>]+(>|$)/g, "")
       SLsrc=SLsrc.substring(0,4);
       if(SLsrc=="http"){
        GEBI("NEWSRC"+z).onclick=function(z){
          SL_SEE_URL(this.id.replace("NEWSRC",""),1);
        };
       }
      }

      if(GEBI("NEWDST"+z)){
       var SLdst=GEBI("NEWDST"+z).innerHTML.replace(/<\/?[^>]+(>|$)/g, "")
       SLdst=SLdst.substring(0,4);
       if(SLdst=="http"){
        GEBI("NEWDST"+z).onclick=function(z){
          SL_SEE_URL(this.id.replace("NEWDST",""),0);
        };
       }
      }

      for(var t=0; t<SL_GLOBAL_SEGMENTS; t++){
       if(GEBI("NEWSRC_"+z+"_"+t)){
        var ZZ=z;
        var TT=t;
        GEBI("NEWSRC_"+z+"_"+t).onclick=function(){
          SL_TTS_SEGMENT(0,this);
        };
        GEBI("NEWDST_"+z+"_"+t).onclick=function(){
          SL_TTS_SEGMENT(1,this);
        };
       }
      }
     }
    }
}

function SL_DELETE_ONE(ind){
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      if(ind != z){
       TMP_HISTORY_LIST = TMP_HISTORY_LIST + TMP_HIST[z]+"^^"; 
      }
    }
    FExtension.store.set("SL_History", TMP_HISTORY_LIST);
    document.location.reload();
  }
}

function SL_SEE_URL(ind,st){
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      if(ind == z){
       var TMP = TMP_HIST[z].split("~~");
       var TMPurl = TMP[3];
       if(st==1){
         var theURL = TMP[3].split("&u=");
         TMP[3] = theURL[1];
       }else{
         if(st==2 && (TMP[5]=='3' || TMP[5]=='4' || TMP[5]=='6')){
          var theURL = TMP[3].split("&u=");
          TMP[3] = theURL[1];
         }
       }

       if(TMP[3]==undefined)        FExtension.browserPopup.openNewTab(TMPurl);
       else        FExtension.browserPopup.openNewTab(TMP[3]);
      }
    }
  }
}

function SL_GET_LANG_NAME(code){
  var resp="Auto";
  var SL_TMPTMP1=SL_ListOfAvailableLanguages.split(",")
  for (var i = 0; i < SL_TMPTMP1.length; i++) {
    var SL_TMPTMP2 = SL_TMPTMP1[i].split(":");
    if (SL_TMPTMP2[0] == code) {
      resp = SL_TMPTMP2[1];
    }
  }
  return(resp);
}

function SL_TTS(st,ind){
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      if(ind == z){
       var TMP = TMP_HIST[z].split("~~");
       var TMP_DIR = TMP[2].split("|");
       TMP[0] =TMP[0].replace(/<br>/g," ");
       TMP[0] =TMP[0].replace(/@/g," ");
       TMP[1] =TMP[1].replace(/<br>/g," ");
       if(st==1){
           var SL_to = TMP_DIR[0];
           SL_to = SL_to.replace("zh-CN","zh");
           SL_to = SL_to.replace("zh-TW","zh");

	   if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh" || SL_to=="zt"){
		   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(TMP[0]));
	   }else{
		   if(SL_to=="ar" || SL_to=="cs" || SL_to=="da" || SL_to=="nl" || SL_to=="fi" || SL_to=="el" || SL_to=="ht" || SL_to=="hi" || SL_to=="hu" || SL_to=="no" || SL_to=="pl" || SL_to=="sk" || SL_to=="sv" || SL_to=="th" || SL_to=="tr" || SL_to=="la"){
			setTimeout(function(){
	        		REMOTE_Voice(SL_to,TMP[0]);
			}, 500);
		   }else{
			alert(noVoice);
		   }

	   }
       }else{
           var SL_from = TMP_DIR[1];
           SL_from = SL_from.replace("zh-CN","zh");
           SL_from = SL_from.replace("zh-TW","zh");
	   if(SL_from=="en" || SL_from=="es" || SL_from=="ru" || SL_from=="de" || SL_from=="pt" || SL_from=="fr" || SL_from=="it" || SL_from=="ko" || SL_from=="ja" || SL_from=="zh" || SL_from=="zt"){
		   TMP[1] = HTMLstripper(TMP[1]);
		   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_from+"&text="+encodeURIComponent(TMP[1]));
	   }else{
		   if(SL_from=="ar" || SL_from=="cs" || SL_from=="da" || SL_from=="nl" || SL_from=="fi" || SL_from=="el" || SL_from=="ht" || SL_to=="hi" || SL_from=="hu" || SL_from=="no" || SL_from=="pl" || SL_from=="sk" || SL_from=="sv" || SL_from=="th" || SL_from=="tr" || SL_from=="la"){
			setTimeout(function(){
	        		REMOTE_Voice(SL_from,TMP[1]);
			}, 500);

		   }else{
			alert(noVoice);
		   }
           }
       }
      }
    }
  }
}

/*
function SL_TTS_(st,ind){
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      if(ind == z){
       var TMP = TMP_HIST[z].split("~~");
       var TMP_DIR = TMP[2].split("|");
       TMP[0] =TMP[0].replace(/<br>/g," ");
       TMP[0] =TMP[0].replace(/@/g," ");
       TMP[1] =TMP[1].replace(/<br>/g," ");
       if(st==1){
           var SL_to = TMP_DIR[0];
           SL_to = SL_to.replace("zh-CN","zh");
           SL_to = SL_to.replace("zh-TW","zh");

	   if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh" || SL_to=="zt"){
		   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(TMP[0]));
	   }else{
		   if(G_TTS.indexOf(SL_to)!=-1){
			setTimeout(function(){
	        		REMOTE_Voice(SL_to,TMP[0]);
			}, 500);

		   }else{
			alert(noVoice);
		   }

	   }
       }else{
           var SL_from = TMP_DIR[1];
           SL_from = SL_from.replace("zh-CN","zh");
           SL_from = SL_from.replace("zh-TW","zh");
	   if(SL_from=="en" || SL_from=="es" || SL_from=="ru" || SL_from=="de" || SL_from=="pt" || SL_from=="fr" || SL_from=="it" || SL_from=="ko" || SL_from=="ja" || SL_from=="zh" || SL_from=="zt"){
		   TMP[1] = HTMLstripper(TMP[1]);
		   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_from+"&text="+encodeURIComponent(TMP[1]));
	   }else{
		   if(G_TTS.indexOf(SL_from)!=-1){
			setTimeout(function(){
	        		REMOTE_Voice(SL_from,TMP[1]);
			}, 500);

		   }else{
			alert(noVoice);
		   }
           }
       }
      }
    }
  }
}
*/

function SL_OPEN(ind){
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      if(ind == z){
       TMP_HIST[z] = TMP_HIST[z].replace(/<br>/g,"");
       var TMP = TMP_HIST[z].split("~~");
       TMP[0]=TMP[0].replace(/@/g,"<br>");
       var TMP_SRC=TMP[0].replace(/@/g,"<br>");
       var TMP_DST=TMP[1].replace(/@/g,"<br>");
       var TMP_DIR = TMP[2].split("|");
       var DIR_from = SL_GET_LANG_NAME(TMP_DIR[0]);
       var DIR_to   = SL_GET_LANG_NAME(TMP_DIR[1]);
       var DS=TMP_DIR[0];
       var DT=TMP_DIR[1];

       TMP[1]=SL_ALIGNER(TMP[1],TMP_DIR[0],TMP_DIR[1]);
       var title="";
       var color="#fff";
       switch(TMP[5]){
	case '1': title="ImTranslator"; color="#FFFAE8"; break;
	case '2': title="Pop-up Bubble Translator"; color="#F2FFFD"; break;
	case '3': title="Webpage translation"; color="#FFF0E8"; break;
	case '4': title=FExtension.element('extMOT'); color="#E5FFE1"; break;
	case '5': title="Inline translator"; color="#FDEBFB"; break;
	case '6': title=FExtension.element('extDictionary'); color="#fbfbfb"; break;
       }

       var TTS1="";
       var TTS2="";
       var WAY1 = SL_TTSicn(TMP_DIR[0]);
       var WAY2 = SL_TTSicn(TMP_DIR[1]);

       if(TMP[5]!='6'){
	 TTS1 = "<img src='../../img/util/speak.png' id='SL_src_listen"+z+"'  class='SLIMG1' align='left' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
	 TTS2 = "<img src='../../img/util/speak.png' id='SL_tar_listen"+z+"'  class='SLIMG2' align='right' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
       }

       var TheClass1=SL_LTR_RTL(TMP_DIR[0]);
       var TheClass2=SL_LTR_RTL(TMP_DIR[1]);

       if(GEBI("SRC"+ind).outerHTML.indexOf(" ...")!=-1 || TMP[0].length < SL_SEGMENT_LIMIT  || TMP[1].length < SL_SEGMENT_LIMIT){
           GEBI("SRC"+ind).innerHTML="";
           GEBI("DST"+ind).innerHTML="";
	   switch(WAY1+"|"+WAY2) {
		case "1|1":     GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP[0] + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div><br>"; break;
		case "1|2":     GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP[0] + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div><br>"; break;
		case "2|1":     GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[0]+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div><br>"; break;
		case "2|2": 	GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[0]+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div><br>"; break;
  	   }
           GEBI("SL_open"+ind).title=FExtension.element('extCollapse');
       }else{
           GEBI("SRC"+ind).innerHTML="";
           GEBI("DST"+ind).innerHTML="";
	   switch(WAY1+"|"+WAY2) {
		case "1|1":     GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP[0].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div><br>"; break;
		case "1|2":     GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP[0].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div><br>"; break;
		case "2|1":     GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+TMP[0].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div><br>"; break;
		case "2|2": 	GEBI("SRC"+ind).innerHTML = "<div id='SRC"+ind+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+TMP[0].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+ind+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...</div></div><br>"; break;
  	   }
           GEBI("SL_open"+ind).title=FExtension.element('extExpand');
       }
      }
    OnOffTTSicon();
    }
  SL_record_finder();
  }
}


function SL_FASTTIPE(){
 var FT = GEBI('SL_H_SEARCH').value;
 if(FT == "") document.location.reload();
 else{
  var mySL_HISTORY = FExtension.store.get("SL_History");
  mySL_HISTORY = mySL_HISTORY.replace(/<br>/g," ");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;

    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      var TMP = TMP_HIST[z].split("~~");
      var TMP_SRC=TMP[0].replace(/@/g,"<br>");
      var TMP_DST=TMP[1].replace(/@/g,"<br>");
      var TMP_DIR = TMP[2].split("|");
      TMP[1]=SL_ALIGNER(TMP[1],TMP_DIR[0],TMP_DIR[1]);
      var title="";
      var color="#fff";
      switch(TMP[5])
	{
	case '1': title="ImTranslator"; color="#FFFAE8"; break;
	case '2': title="Pop-up Bubble Translator"; color="#F2FFFD"; break;
	case '3': title="Webpage translation"; color="#FFF0E8"; break;
	case '4': title=FExtension.element('extMOT'); color="#E5FFE1"; break;
	case '5': title="Inline translator"; color="#FDEBFB"; break;
	case '6': title=FExtension.element('extDictionary'); color="#fbfbfb"; break;
	}

      var DIR_from = SL_GET_LANG_NAME(TMP_DIR[0]);
      var DIR_to   = SL_GET_LANG_NAME(TMP_DIR[1]);
      var F = TMP_DIR[0];
      var DS=TMP_DIR[0];
      var DT=TMP_DIR[1];

      var WAY1 = SL_TTSicn(TMP_DIR[0]);
      var WAY2 = SL_TTSicn(TMP_DIR[1]);
      var TTS1="";
      var TTS2="";
      var BUTTONS="";

      var flag=0;
      if(TMP[5]!='6'){
	TTS1 = "<img src='../../img/util/speak.png' id='SL_src_listen"+z+"'  class='SLIMG1' align='left' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
	TTS2 = "<img src='../../img/util/speak.png' id='SL_tar_listen"+z+"'  class='SLIMG2' align='right' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
      	BUTTONS = "<img src='../../img/util/split.png' id='SL_split"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSplit')+"'>&nbsp; <img src='../../img/util/open.png' id='SL_open"+z+"' style='cursor:pointer;' title='"+FExtension.element('extExpand')+"'>&nbsp; ";
      }

      if(TMP_SRC.length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')     TMP_SRC=TMP_SRC.substring(0,SL_SEGMENT_LIMIT)+" ...";
      if(TMP[1].length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')      TMP[1]=TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...";
      var NOURL="";
      var MouseOver="";

      if(TMP[5]=='3' || TMP[5]=='4'){
	TTS1=TTS1.replace(":visible",":hidden");
	TTS2=TTS2.replace(":visible",":hidden");
        BUTTONS="";
        TMP[1] = TMP_SRC;
	MouseOver=";cursor:pointer;";
      } else {
        if(TMP[3].indexOf("{empty}")!=-1)NOURL="display:none;visibility:hidden";
      }
           
      if(TMP[5]=='6' && DIR_from != "Auto"){
        if(isTTSready(TMP_DIR[0])==true) TTS2="<div id='SL_src_listen"+z+"' lang='"+TMP_DIR[0]+"' style='cursor:pointer;margin-bottom:5px;margin-left:5px;margin-right:5px;' class=TTS"+WAY1+" title='"+TMP_SRC+"' ></div>";
//        if(TMP_DST.indexOf("_XR")==-1){
//           if(isTTSready(TMP_DIR[0])==true) TTS1="<div id='SL_tar_listen"+z+"' lang='"+TMP_DIR[0]+"' style='cursor:pointer;margin-bottom:5px;margin-left:5px;margin-right:5px;' class=TTS"+WAY1+" title='"+TMP_SRC+"' ></div>";
//        }
      }
      
      var STYLE="<font color=white style='background:#BE3B34;'>";

      if(TMP_SRC.indexOf(FT)!=-1 || TMP[1].indexOf(FT)!=-1 || TMP[3].indexOf(FT)!=-1 || TMP[4].indexOf(FT)!=-1 || DIR_from.indexOf(FT)!=-1 || DIR_to.indexOf(FT)!=-1){
        TMP_SRC=TMP_SRC.replace(FT,"<font "+STYLE+FT+"</font>");
        if(TMP[5]=='6'){
          flag=STRIP_HTML(FT,TMP[1],STYLE+FT);
        }
        if(flag==0){
          TMP[1]=TMP[1].replace(FT,"<font "+STYLE+FT+"</font>");
        }
        TMP[4]=TMP[4].replace(FT,"<font "+STYLE+FT+"</font>");
        DIR_from=DIR_from.replace(FT,"<font "+STYLE+FT+"</font>");
        DIR_to=DIR_to.replace(FT,"<font "+STYLE+FT+"</font>");
        var TheClass1=SL_LTR_RTL(TMP_DIR[0]);
        var TheClass2=SL_LTR_RTL(TMP_DIR[1]);
	var TheWidth="";
	var CONTROLS="<div align='right' class='SL_h_info'><table width='98%' height='15' border=0 cellpadding=0 cellspasing=0><tr><td width='170' class='SL_h_TD' valign='bottom'>"+TMP[4]+"</td><td width='160' valign='bottom' class='SL_h_TD'><span lang='"+TMP_DIR[0]+"|"+TMP_DIR[1]+"' class='DIRS'>"+SL_GET_LANG_NAME(TMP_DIR[0])+">"+SL_GET_LANG_NAME(TMP_DIR[1])+ "</span></td><td width='80' align=right valign='bottom'>" + BUTTONS + "<img src='../../img/util/url.png' id='SL_url"+z+"' style='cursor:pointer;"+NOURL+"' title='"+FExtension.element('extSeeSource')+"'>&nbsp; <img src='../../img/util/basket.png' id='SL_delete"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSeeSource')+"'></td></tr></table></div>";
	if(TheClass1=="SL_rtl") TheWidth="90%";
	      if(TMP[5]=='3' || TMP[5]=='4'){
	        TMP[1] = TMP[0];
	 	TMP_HISTORY_LIST = TMP_HISTORY_LIST + "<div align='right' class='SL_h_info'><table width='98%' height='15' border=0 cellpadding=0 cellspasing=0><tr><td width='170' class='SL_h_TD' valign='bottom'>"+TMP[4]+"</td><td width='160' valign='bottom' class='SL_h_TD'>"+SL_GET_LANG_NAME(TMP_DIR[0])+">"+SL_GET_LANG_NAME(TMP_DIR[1])+ "</td><td width='80' align=right valign='bottom'>" + BUTTONS + "<img src='../../img/util/url.png' id='SL_url"+z+"' style='cursor:pointer;"+NOURL+"' title='"+FExtension.element('extSeeSource')+"'>&nbsp; <img src='../../img/util/basket.png' id='SL_delete"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSeeSource')+"'></td></tr></table></div><div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' style='color:"+SLclr1+";cursor:pointer;' class='"+TheClass1+"'>"+TMP_SRC + "</div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' style='color:"+SLclr2+";cursor:pointer;' class='"+TheClass2+"'>"+TMP[1]+"</div></div><br>"; 
	      }else{
		       if(TMP[5]=='6'){
        		 if(WAY1!=1)  	TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='width:98%;overflow:hidden;'><div style='float:right'>" +TTS2+ "</div><div id='SRC"+z+"' style='float:right;' class=SRC>"+TMP_SRC + "</div><br><div id='DST"+z+"'>"+TMP[1]+ " "+ TTS1+"</div></div><br>";
	  		 else 		TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='width:98%;overflow:hidden;'><div style='float:left'>" +TTS2+ "</div><div id='SRC"+z+"' style='float:left;' class=SRC>"+TMP_SRC + "</div><br><br><div id='DST"+z+"'>"+TMP[1]+ " "+ TTS1+"</div></div><br>";
		       } else {
			   switch(WAY1+"|"+WAY2){
				case "1|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
				case "1|2":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
				case "2|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
				case "2|2": 	TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
 	 		   }
		       }	
	      }	
      }
    }
    if(TMP_HISTORY_LIST=="") TMP_HISTORY_LIST="No records found";
    GEBI('SL_History').innerHTML = TMP_HISTORY_LIST;
    OnOffTTSicon();
  }
 SL_record_finder();
 GEBI('SL_H_SEARCH').focus();
 }
}

function STRIP_HTML(w,str,st){
 return 1;
}


function SL_FASTTIPE_DEL(){
 GEBI('SL_H_SEARCH').value='';
 SL_FASTTIPE();
}


function SL_save_content_to_file(){
    var content = FExtension.store.get("SL_History");
    var T0,T1,T2,T3,T4,T5,T6,T7,t,r=0,POS,TR,RT;
    var TMP_HIST=content.split("^^");
    var TMP_HISTORY_LIST="Date,Time,Translation tool,Source url,Translation direction,Source text,Translation,Part of speech,Reverse translation"+",\r,\n";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;

    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      var TMP = TMP_HIST[z].split("~~");
      var TMP_SRC=TMP[0].replace(/@/g," ");
      TMP_SRC=TMP_SRC.replace(/"/g,"'");
      var TMP_DST=TMP[1].replace(/<br>/g," ");
      TMP_DST=TMP_DST.replace(/"/g,"'");
      TMP_SRC = "\""+TMP_SRC+"\"";
      TMP_DST = "\""+TMP_DST+"\"";
      var TMP_DIR = TMP[2].split("|");
      var DIR_from = SL_GET_LANG_NAME(TMP_DIR[0]);
      var DIR_to   = SL_GET_LANG_NAME(TMP_DIR[1]);
      DIR_from = DIR_from.replace("&nbsp;"," ");
      DIR_to   = DIR_to.replace("&nbsp;"," ");
      var title="ImTranslator";

      switch(TMP[5])
	{
	case '1': title="ImTranslator"; break;
	case '2': title="Pop-up Bubble Translator"; break;
	case '3': title="Webpage translation"; break;
	case '4': title=FExtension.element('extMOT'); break;
	case '5': title="Inline translator"; break;
	case '6': title=FExtension.element('extDictionary'); break;
	}

	if(TMP[5]!='6'){
	        TMP_HISTORY_LIST = TMP_HISTORY_LIST + TMP[4] + "," + title + "," + TMP[3] + "," + DIR_from + ">" + DIR_to + "," + TMP_SRC + "," + TMP_DST + ",,,,\r\n"; 
	} else {
	   if(TMP_HIST[z].indexOf("<div")!=-1){
		TMP_DST=TMP_DST.replace(/<a\b[^>]*>/ig,"");
		TMP_DST=TMP_DST.replace(/<\/a>/ig,"");
		T1 = TMP_DST.split("<div id=_Y>");

                if(T1.length>1){
		  for(t=1; t<T1.length; t++){
                    T2 = T1[t].split("</div>");
                    POS = T2[0];
                    T3 = T1[t].split("<div id=_AL>");

                    for(r=1; r<T3.length; r++){
                 	T5 = T3[r].split("</div>");
  	                TR = T5[0].replace(/(<([^>]+)>)/ig,"");
  	                if(TR==""){
                 	 T4 = T3[r].split("<div id=_XR>");
                 	 T5 = T4[1].split("</div");
  	                 TR = T5[0].replace(/(<([^>]+)>)/ig,"");
  	                }
  	                if(T3[r].indexOf("<div id=_AR>")!=-1){
                  		T6 = T3[r].split("<div id=_AR>");
                 		T7 = T6[1].split("</div>");
  	                	RT = T7[0].replace(/(<([^>]+)>)/ig,"");
                        	RT = RT.replace(/,/ig,";");
                        } else RT="";

	            	if(t==1 && r==1){
			 TMP_HISTORY_LIST = TMP_HISTORY_LIST + TMP[4] + "," + title + "," + TMP[3] + "," + DIR_from + ">" + DIR_to + "," + TMP_SRC + "," + TR + "," + POS + "," + RT + "\r\n"; 
	            	}else{
			 TMP_HISTORY_LIST = TMP_HISTORY_LIST +",,,,,," + TR + "," + POS + "," + RT + "\r\n"; 
			}
	            }
	          }
	        } else {
		  T0 = TMP_DST.split("<div id=_X>");
		  for(t=1; t<T0.length; t++){
                    T2 = T0[t].split("</div>");
                    POS = T2[0];
                    T3 = T0[t].split("<div id=_XL>");

                    for(r=1; r<T3.length; r++){
                 	T5 = T3[r].split("</div>");
  	                TR = T5[0].replace(/(<([^>]+)>)/ig,"");
  	                if(TR==""){
                 	 T4 = T3[r].split("<div id=_XR>");
                 	 T5 = T4[1].split("</div");
  	                 TR = T5[0].replace(/(<([^>]+)>)/ig,"");
  	                }
			TMP_HISTORY_LIST = TMP_HISTORY_LIST + TMP[4] + "," + title + "," + TMP[3] + "," + DIR_from + ">" + DIR_to + "," + TMP_SRC + "," + TR + "\r\n"; 
	            }
	          }
		}
	    } else {
		TMP_HISTORY_LIST = TMP_HISTORY_LIST + TMP[4] + "," + title + "," + TMP[3] + "," + DIR_from + ">" + DIR_to + "," + TMP_SRC + "," + TMP_DST + ",,,,\r\n"; 
	    }
	}
    }

 TMP_HISTORY_LIST = TMP_HISTORY_LIST.replace(/(<([^>]+)>)/ig, "");   

 var filename = "export.csv";
 console.log("doSave(): called.");
 if(0==content.length)return alert(FExtension.element('extNoTHtoExport')),void 0;
 window.URL=window.URL||window.webkitURL;
 var b=document.createElement("a"),c=new Blob([TMP_HISTORY_LIST],{type:"application/octet-stream"});
 var encodedUri = encodeURI(TMP_HISTORY_LIST);
 b.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodedUri);
 b.setAttribute("download",filename);
 b.click();
}

function SL_SORT() {
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
      TMP_HIST[z] = TMP_HIST[z].replace(/<br>/g,"");
      var TMP = TMP_HIST[z].split("~~");
      var TMP_SRC=TMP[0].replace(/@/g,"<br>");
      var TMP_DST=TMP[1].replace(/@/g,"<br>");
      var TMP_DIR = TMP[2].split("|");
      TMP[1]=SL_ALIGNER(TMP[1],TMP_DIR[0],TMP_DIR[1]);

      var title="";
      var color="#fff";
      switch(TMP[5])
	{
	case '1': title="ImTranslator"; color="#FFFAE8"; break;
	case '2': title="Pop-up Bubble Translator"; color="#F2FFFD"; break;
	case '3': title="Webpage translation"; color="#FFF0E8"; break;
	case '4': title=FExtension.element('extMOT'); color="#E5FFE1"; break;
	case '5': title="Inline translator"; color="#FDEBFB"; break;
	case '6': title=FExtension.element('extDictionary'); color="#fbfbfb"; break;
	}
      var DIR_from = SL_GET_LANG_NAME(TMP_DIR[0]);
      var DIR_to   = SL_GET_LANG_NAME(TMP_DIR[1]);
      var F=TMP_DIR[1];
      var DS=TMP_DIR[0];
      var DT=TMP_DIR[1];


      var WAY1 = SL_TTSicn(TMP_DIR[0]);
      var WAY2 = SL_TTSicn(TMP_DIR[1]);
      var TTS1="";
      var TTS2="";
      var BUTTONS="";

      if(TMP[5]!='6'){
	TTS1 = "<img src='../../img/util/speak.png' id='SL_src_listen"+z+"'  class='SLIMG1' align='left' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
	TTS2 = "<img src='../../img/util/speak.png' id='SL_tar_listen"+z+"'  class='SLIMG2' align='right' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
        BUTTONS = "<img src='../../img/util/split.png' id='SL_split"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSplit')+"'>&nbsp; <img src='../../img/util/open.png' id='SL_open"+z+"' style='cursor:pointer;' title='"+FExtension.element('extExpand')+"'>&nbsp; ";
      }
      if(TMP_SRC.length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')     TMP_SRC=TMP_SRC.substring(0,SL_SEGMENT_LIMIT)+" ...";
      if(TMP[1].length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')      TMP[1]=TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...";
      var NOURL="";
      var MouseOver="";

      if(TMP[5]=='3' || TMP[5]=='4'){
	TTS1=TTS1.replace(":visible",":hidden");
	TTS2=TTS2.replace(":visible",":hidden");
      } else {
        if(TMP[3].indexOf("{empty}")!=-1)NOURL="display:none;visibility:hidden";
      }

      if(TMP[5]=='6' && DIR_from != "Auto"){
        if(isTTSready(TMP_DIR[0])==true) TTS2="<div id='SL_src_listen"+z+"' lang='"+TMP_DIR[0]+"' style='cursor:pointer;margin-bottom:5px;margin-left:5px;margin-right:5px;' class=TTS"+WAY1+" title='"+TMP_SRC+"' ></div>";
//        if(TMP_DST.indexOf("_XR")==-1){
//           if(isTTSready(TMP_DIR[0])==true) TTS1="<div id='SL_tar_listen"+z+"' lang='"+TMP_DIR[0]+"' style='cursor:pointer;margin-bottom:5px;margin-left:5px;margin-right:5px;' class=TTS"+WAY1+" title='"+TMP_SRC+"' ></div>";
//        }
      }

      
      var STYLE="<font color=white style='background:#BE3B34;'>";
      if(TMP[5]==GEBI("SL_SORT").value || GEBI("SL_SORT").value == 0){
	      var TheClass1=SL_LTR_RTL(TMP_DIR[0]);
	      var TheClass2=SL_LTR_RTL(TMP_DIR[1]);
	      var TheWidth="";
	      var CONTROLS="<div align='right' class='SL_h_info'><table width='98%' height='15' border=0 cellpadding=0 cellspasing=0><tr><td width='170' class='SL_h_TD' valign='bottom'>"+TMP[4]+"</td><td width='160' valign='bottom' class='SL_h_TD'><span lang='"+TMP_DIR[0]+"|"+TMP_DIR[1]+"' class='DIRS'>"+SL_GET_LANG_NAME(TMP_DIR[0])+">"+SL_GET_LANG_NAME(TMP_DIR[1])+ "</span></td><td width='80' align=right valign='bottom'>" + BUTTONS + "<img src='../../img/util/url.png' id='SL_url"+z+"' style='cursor:pointer;"+NOURL+"' title='"+FExtension.element('extSeeSource')+"'>&nbsp; <img src='../../img/util/basket.png' id='SL_delete"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSeeSource')+"'></td></tr></table></div>";

	      if(TheClass1=="SL_rtl") TheWidth="90%";

	      if(TMP[5]=='3' || TMP[5]=='4'){
	        TMP[1] = TMP[0];
	 	TMP_HISTORY_LIST = TMP_HISTORY_LIST + "<div align='right' class='SL_h_info'><table width='98%' height='15' border=0 cellpadding=0 cellspasing=0><tr><td width='170' class='SL_h_TD' valign='bottom'>"+TMP[4]+"</td><td width='160' valign='bottom' class='SL_h_TD'>"+SL_GET_LANG_NAME(TMP_DIR[0])+">"+SL_GET_LANG_NAME(TMP_DIR[1])+ "</td><td width='80' align=right valign='bottom'>" + BUTTONS + "<img src='../../img/util/url.png' id='SL_url"+z+"' style='cursor:pointer;"+NOURL+"' title='"+FExtension.element('extSeeSource')+"'>&nbsp; <img src='../../img/util/basket.png' id='SL_delete"+z+"' style='cursor:pointer;' title='"+FExtension.element('extSeeSource')+"'></td></tr></table></div><div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' style='color:"+SLclr1+";cursor:pointer;' class='"+TheClass1+"'>"+TMP_SRC + "</div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' style='color:"+SLclr2+";cursor:pointer;' class='"+TheClass2+"'>"+TMP[1]+"</div></div><br>"; 
	      } else{
	       if(TMP[5]=='6'){
        	 if(WAY1!=1)  	TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='width:98%;overflow:hidden;'><div style='float:right'>" +TTS2+ "</div><div id='SRC"+z+"' style='float:right;' class=SRC>"+TMP_SRC + "</div><br><div id='DST"+z+"'>"+TMP[1]+ " "+ TTS1+"</div></div><br>";
	  	 else 		TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='width:98%;overflow:hidden;'><div style='float:left'>" +TTS2+ "</div><div id='SRC"+z+"' style='float:left;' class=SRC>"+TMP_SRC + "</div><br><br><div id='DST"+z+"'>"+TMP[1]+ " "+ TTS1+"</div></div><br>";
	       } else {

		   switch(WAY1+"|"+WAY2){
			case "1|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
			case "1|2":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
			case "2|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
			case "2|2": 	TMP_HISTORY_LIST = TMP_HISTORY_LIST + CONTROLS + "<div class='SL_History_block' id='SL_History_block"+z+"' title='"+title+"' style='background:"+color+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
		   }

	       }	
	      }	
      }

    }
    if(TMP_HISTORY_LIST=="") TMP_HISTORY_LIST="No records found";
    GEBI('SL_History').innerHTML = TMP_HISTORY_LIST;   
    if(GEBI('SL_H_SEARCH').value!="")SL_FASTTIPE();
    OnOffTTSicon();
  }
 SL_record_finder();
}

function SL_SPLIT(ind){
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    SL_GLOBAL_RECORDS=TMP_HIST.length-1;
    for(var z=0; z<SL_GLOBAL_RECORDS; z++){
     if(z==ind){
       var TMP = TMP_HIST[z].split("~~");
       SL_TMP_SRC = TMP[0];
       var TMP_SRC = TMP[0].replace(/@/g," ");
       var TMP_DST = TMP[1].replace(/<br>/g," ");
       var TMP_DIR = TMP[2].replace("|","/");
       if(GEBI("SL_History_block"+ind).style.background=="rgb(255, 255, 255)") SL_REBUILD_SECTOR(ind);
       else var resp = SL_DO_SPLIT(TMP_DIR,TMP_SRC,ind,TMP_DST);
     }
    }
  }
}

function SL_REBUILD_SECTOR(ind){
 GEBI("SL_History_block"+ind).style.background="rgb(242, 255, 253)";
  var mySL_HISTORY = FExtension.store.get("SL_History");
  if(mySL_HISTORY!=""){
    GEBI("SL_split"+ind).title=FExtension.element('extSplit');
    GEBI("SL_open"+ind).style.visibility='visible';
    GEBI("SL_open"+ind).style.width='13px';
    var TMP_HIST=mySL_HISTORY.split("^^");
    var TMP_HISTORY_LIST="";
    var z = ind;
      TMP_HIST[z] = TMP_HIST[z].replace(/<br>/g,"");
      var TMP = TMP_HIST[z].split("~~");
      var TMP_SRC=TMP[0].replace(/@/g,"<br>");
      var TMP_DIR = TMP[2].split("|");
      var DS=TMP_DIR[0];
      var DT=TMP_DIR[1];
      var title="";
      var color="#fff";
      switch(TMP[5])
	{
	case '1': title="ImTranslator"; color="#FFFAE8"; break;
	case '2': title="Pop-up Bubble Translator"; color="#F2FFFD"; break;
	case '3': title="Webpage translation"; color="#FFF0E8"; break;
	case '4': title=FExtension.element('extMOT'); color="#E5FFE1"; break;
	case '5': title="Inline translator"; color="#FDEBFB"; break;
	case '6': title=FExtension.element('extDictionary'); color="#fbfbfb"; break;
	}
      var DIR_from = SL_GET_LANG_NAME(TMP_DIR[0]);
      var DIR_to   = SL_GET_LANG_NAME(TMP_DIR[1]);

      var WAY1 = SL_TTSicn(TMP_DIR[0]);
      var WAY2 = SL_TTSicn(TMP_DIR[1]);
      var TTS1="";
      var TTS2="";

      if(TMP[5]!='6'){
	 TTS1 = "<img src='../../img/util/speak.png' id='SL_src_listen"+z+"'  class='SLIMG1' align='left' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
	 TTS2 = "<img src='../../img/util/speak.png' id='SL_tar_listen"+z+"'  class='SLIMG2' align='right' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
      }
      if(TMP_SRC.length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')     TMP_SRC=TMP_SRC.substring(0,SL_SEGMENT_LIMIT)+" ...";
      if(TMP[1].length > SL_SEGMENT_LIMIT && TMP[5]!='3' && TMP[5]!='6')      TMP[1]=TMP[1].substring(0,SL_SEGMENT_LIMIT)+" ...";

      if(TMP[5]==GEBI("SL_SORT").value || GEBI("SL_SORT").value == 0){
	      var TheClass1=SL_LTR_RTL(TMP_DIR[0]);
	      var TheClass2=SL_LTR_RTL(TMP_DIR[1]);
	      switch(WAY1+"|"+WAY2){
		case "1|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + "<div id='SL_History_block"+z+"' title='"+title+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
		case "1|2":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + "<div id='SL_History_block"+z+"' title='"+title+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;'>"+TMP_SRC + "</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
		case "2|1":     TMP_HISTORY_LIST = TMP_HISTORY_LIST + "<div id='SL_History_block"+z+"' title='"+title+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" +TTS1.replace('SL_src_listen','SL_tar_listen')+ "</div><div style='float:left;width:90%;margin-left:5px;'>"+ TMP[1]+"</div></div></div><br>"; break;
		case "2|2": 	TMP_HISTORY_LIST = TMP_HISTORY_LIST + "<div id='SL_History_block"+z+"' title='"+title+"'><div id='SRC"+z+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2.replace('SL_tar_listen','SL_src_listen')+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP_SRC+"</div></div> <hr color='#CCC' size=1 width='99%'><div id='DST"+z+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-left:8px;'>"+TTS2+ "</div><div style='float:right;margin-top:5px;width:90%'>"+ TMP[1]+"</div></div></div><br>"; break;
	      }
      }
     GEBI("SL_History_block"+ind).innerHTML=TMP_HISTORY_LIST;
     SL_record_finder();
     OnOffTTSicon();
  }
}

function SL_DO_SPLIT(dir,text,ind,trans){
        var baseUrl = "http://imtranslator.net/split.asp?dir="+dir+"&text="+encodeURIComponent(text); 

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
                        SL_SPLIT_VIEW(ajaxRequest.responseText,ind,trans,dir);
		}
	}
	ajaxRequest.open("GET", baseUrl, true);
        ajaxRequest.send(null);
}

function SL_SPLIT_VIEW(result,ind,trans,dir){
 var TMP_result = result.split("<#>");
  if(TMP_result.length<=2){
       var TMP_res = SL_TMP_SRC.replace(/@/g,"<#>");
       TMP_res = TMP_res+"<#>";
       TMP_result = TMP_res.split("<#>");
  }
  GEBI("SL_History_block"+ind).style.background="#FFF";
  GEBI("SL_History_block"+ind).innerHTML="";
  GEBI("SL_open"+ind).style.visibility='hidden';
  GEBI("SL_open"+ind).style.width='0px';
  GEBI("SL_split"+ind).title=FExtension.element('extUndoSplit');
  var TMP_DIR = dir.split("/");
  SL_GLOBAL_SEGMENTS=TMP_result.length-1;
  
  var WAY1 = SL_TTSicn(TMP_DIR[0]);
  var WAY2 = SL_TTSicn(TMP_DIR[1]);

//alert(TMP_result.length-1);
  for(var i=0; i<TMP_result.length-1; i++){
     var TheClass1=SL_LTR_RTL(TMP_DIR[0]);
     var TheClass2=SL_LTR_RTL(TMP_DIR[1]);
     var DIR_from = SL_GET_LANG_NAME(TMP_DIR[0]);
     var DIR_to   = SL_GET_LANG_NAME(TMP_DIR[1]);

     var TTS1 = "<img src='../../img/util/speak.png' id='SL_src_listen_"+ind+"_100"+i+"' class='SLIMG1' align='left' code='"+TMP_DIR[0]+"' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
     var TTS2 = "<img src='../../img/util/speak.png' id='SL_tar_listen_"+ind+"_1000"+i+"' class='SLIMG2' align='right' code='"+TMP_DIR[1]+"' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
     var TTS3 = "<img src='../../img/util/speak.png' id='SL_src_listen_"+ind+"_1000"+i+"' class='SLIMG1' align='left' code='"+TMP_DIR[1]+"' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
     var TTS4 = "<img src='../../img/util/speak.png' id='SL_tar_listen_"+ind+"_10000"+i+"' class='SLIMG1' align='left' code='"+TMP_DIR[1]+"' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[1])+"'>";
     var TTS5 = "<img src='../../img/util/speak.png' id='SL_src_listen_"+ind+"_100000"+i+"' class='SLIMG2' align='right' code='"+TMP_DIR[0]+"' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
     var TTS6 = "<img src='../../img/util/speak.png' id='SL_tar_listen_"+ind+"_1000000"+i+"' class='SLIMG2' align='right' code='"+TMP_DIR[0]+"' title='"+FExtension.element('extListenTo')+" "+SL_GET_LANG_NAME(TMP_DIR[0])+"'>";
     
     switch(WAY1+"|"+WAY2) {
	case "1|1":     GEBI('SL_History_block'+ind).innerHTML=GEBI("SL_History_block"+ind).innerHTML+"<div id='NEWSRC_"+ind+"_"+i+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;color:green;'>"+TMP_result[i] + "</div></div>"; GEBI('SL_History_block'+ind).innerHTML=GEBI("SL_History_block"+ind).innerHTML+"<div id='NEWDST_"+ind+"_"+i+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS3 + "</div><div id='theDST_"+ind+"_"+i+"' style='float:left;width:90%;margin-left:5px;color:red;'>"+SL_TRANS(TMP_result[i],dir,i,ind)+ "</div></div>";break;
	case "1|2":     GEBI('SL_History_block'+ind).innerHTML=GEBI("SL_History_block"+ind).innerHTML+"<div id='NEWSRC_"+ind+"_"+i+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS1 + "</div><div style='float:left;width:90%;margin-left:5px;color:green;'>"+TMP_result[i] + "</div></div>";GEBI('SL_History_block'+ind).innerHTML=GEBI("SL_History_block"+ind).innerHTML+"<div id='NEWDST_"+ind+"_"+i+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-top:-5px'>" + TTS2 + "</div><div id='theDST_"+ind+"_"+i+"' style='float:right;width:90%;margin-right:10px;color:red;'>"+SL_TRANS(TMP_result[i],dir,i,ind)+ "</div></div>";break;
	case "2|1":     GEBI('SL_History_block'+ind).innerHTML=GEBI("SL_History_block"+ind).innerHTML+"<div id='NEWSRC_"+ind+"_"+i+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-top:-5px;'>" + TTS5 + "</div><div style='float:right;width:90%;margin-right:10px;color:green;'>"+TMP_result[i] + "</div></div>";GEBI('SL_History_block'+ind).innerHTML=GEBI("SL_History_block"+ind).innerHTML+"<div id='NEWDST_"+ind+"_"+i+"' class='"+TheClass2+"' style='overflow:hidden;'><div style='float:left;width:20px;'>" + TTS4 + "</div><div id='theDST_"+ind+"_"+i+"' style='float:left;width:90%;color:red;'>"+SL_TRANS(TMP_result[i],dir,i,ind)+ "</div></div>";break;
	case "2|2":     GEBI('SL_History_block'+ind).innerHTML=GEBI('SL_History_block'+ind).innerHTML+"<div id='NEWSRC_"+ind+"_"+i+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-top:-5px;'>" + TTS5 + "</div><div style='float:right;width:90%;margin-right:10px;color:green;'>"+TMP_result[i] + "</div></div>";GEBI('SL_History_block'+ind).innerHTML=GEBI("SL_History_block"+ind).innerHTML+"<div id='NEWDST_"+ind+"_"+i+"' class='"+TheClass1+"' style='overflow:hidden;'><div style='float:right;width:20px;margin-top:-5px;'>" + TTS6 + "</div><div style='float:right;width:90%;margin-right:10px;color:red;'>"+TMP_result[i] + "</div>"+"<hr color='#CCC' size='1' width='99%'></div>";break;
     }
  }
  SL_record_finder();
  OnOffTTSicon();
}

function SL_TRANS(text,dir,ind1,ind2){
        var TMP_DIR = dir.split("/");
        var baseUrl = "https://translate.google.com/";
	var SL_Params = "hl=en&langpair="+TMP_DIR[0]+"|"+TMP_DIR[1]+"&q="+encodeURIComponent(text)+"&tbb=1&ie=UTF-8&oe=UTF-8";
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
			GEBI("theDST_"+ind2+"_"+ind1).innerHTML = ReadyToUseGoogleText+"<hr color='#CCC' size='1' width='99%'>";
		}
	}
	ajaxRequest.open("POST", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajaxRequest.send(SL_Params);
}

function REMOTE_Voice (dir, text){
  if(text.length>100){
	  text = text.substring(1, 100);
	  alert(FExtension.element('extTTS_Limit'));
  }
//  var baseUrl = 'http://translate.google.com/translate_tts?ie=utf-8&tl='+dir+'&q='+encodeURIComponent(text);
  var TS = Math.floor(Date.now() / 1000);
  var length = decodeURIComponent(text).length;
  var baseUrl = 'https://translate.google.com/translate_tts?ts='+TS+'&ie=UTF-8&tl='+dir+'&total=1&idx=0&textlen='+length+'client=t&q='+decodeURIComponent(text);


  var frame = document.getElementById('lbframe');
  if(frame)	frame.parentNode.removeChild(frame);
  if(!document.getElementById("lbframe")){
    var die=document.createElement("iframe");
    die.src="";
    die.name="lbframe";
    die.id="lbframe";
    die.width="447px";
    die.height="30px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SL_player4').appendChild(die);

     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', baseUrl);
     audioElement.setAttribute('preload', 'auto');
     audioElement.setAttribute('controls', '');
     audioElement.setAttribute('autoplay', '');
     audioElement.setAttribute('id', 'SLmedia');
     audioElement.setAttribute('name', 'SLmedia');
     audioElement.setAttribute('style', 'width:446px');
     window.frames["lbframe"].document.body.appendChild (audioElement);

     window.frames["lbframe"].document.body.appendChild (audioElement);
     var ao = window.frames["lbframe"].document.getElementById('SLmedia');
     if(ao)	ao.parentNode.removeChild(ao);
      
  setTimeout(function(){
     var audioElement = document.createElement('audio');
     audioElement.setAttribute('src', baseUrl);
     audioElement.setAttribute('preload', 'auto');
     audioElement.setAttribute('controls', '');
     audioElement.setAttribute('autoplay', '');
     audioElement.setAttribute('id', 'SLmedia');
     audioElement.setAttribute('name', 'SLmedia');
     audioElement.setAttribute('style', 'width:446px');

     var audioframe = document.getElementById('audio');
     if(audioframe)	audioframe.parentNode.removeChild(audioframe);

     window.frames["lbframe"].document.body.appendChild (audioElement);

     window.frames["lbframe"].document.body.style.marginTop='0px';
     window.frames["lbframe"].document.body.style.marginLeft='0px';

     document.getElementById('SL_player4').style.display="block";
     document.getElementById('SL_player4').style.height="30px";
     document.getElementById('SL_player4').style.width="447px";
   }, 1000);
  }
}

function REMOTE_Voice_Close(){
  document.getElementById('SL_player4').style.display="none";
  document.getElementById('SL_player4').style.height="0px";
  document.getElementById('SL_player4').style.width="0px";
  var frame = document.getElementById('lbframe');
  if(frame)	frame.parentNode.removeChild(frame);
}

function SL_TTS_SEGMENT(st,ob){
 var tts_code;
 var tts_code1;
 var code="en";
 var cleanText = "";
 tts_code = GEBI(ob.id).innerHTML.split('code="')
 tts_code1 = tts_code[1].split('"');
 code = tts_code1[0];
 cleanText = GEBI(ob.id).innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
 if(code=="en" || code=="es" || code=="ru" || code=="de" || code=="pt" || code=="fr" || code=="it" || code=="ko" || code=="ja" || code=="zh"){
   window.open("http://text-to-speech.imtranslator.net/?dir="+code+"&text="+encodeURIComponent(cleanText));
 }else{
     if(code=="ar" || code=="cs" || code=="da" || code=="nl" || code=="fi" || code=="el" || code=="ht" || code=="hi" || code=="hu" || code=="no" || code=="pl" || code=="sk" || code=="sv" || code=="th" || code=="tr" || code=="la"){
	setTimeout(function(){
	        REMOTE_Voice(code,cleanText);
	}, 500);

     }else{
	alert(noVoice);
     }
 }
}

/*
function SL_TTS_SEGMENT_(st,ob){
 var tts_code;
 var tts_code1;
 var code="en";
 var cleanText = "";
 tts_code = GEBI(ob.id).innerHTML.split('code="')
 tts_code1 = tts_code[1].split('"');
 code = tts_code1[0];
 cleanText = GEBI(ob.id).innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
 if(code=="en" || code=="es" || code=="ru" || code=="de" || code=="pt" || code=="fr" || code=="it" || code=="ko" || code=="ja" || code=="zh"){
   window.open("http://text-to-speech.imtranslator.net/?dir="+code+"&text="+encodeURIComponent(cleanText));
 }else{
     if(G_TTS.indexOf(code)!=-1){
	setTimeout(function(){
	        REMOTE_Voice(code,cleanText);
	}, 500);
     }else{
	alert(noVoice);
     }
 }
}
*/

function SL_SAVE_TH(ind){
 if(GEBI("SL_TH_"+ind).checked == true) FExtension.store.set("SL_TH_"+ind, "1");
 else FExtension.store.set("SL_TH_"+ind, "0");
}

function SL_ALIGNER(SRC,L1,L2){
 var OUT="";
 if(L2=="ar" || L2=="iw" || L2=="fa" || L2=="ur" || L2=="yi"){
     OUT = SRC.replace(/ id=_XR>/g, ' id=_XR style="text-align:right">');
     OUT = OUT.replace(/ id=_AL>/g, ' id=_AL style="text-align:right">');
 } else {
     OUT = SRC.replace(/ id=_XR>/g, ' id=_XR style="text-align:left">');
     OUT = OUT.replace(/ id=_AL>/g, ' id=_AL style="text-align:left">');
 }
 if(L1=="ar" || L1=="iw" || L1=="fa" || L1=="ur" || L1=="yi")   OUT = OUT.replace(/ id=_AR>/g, ' id=_AR style="text-align:right">');
 else 								OUT = OUT.replace(/ id=_AR>/g, ' id=_AR style="text-align:left">');

 if(OUT=="")OUT=SRC;
 return(OUT);
}


function SL_TTSicn(lng){
 var OUT="";
 if(lng!="ar" && lng!="iw" && lng!="fa" && lng!="ur" && lng!="yi"){
	OUT=1;
 } else {  
	OUT=2;
 }	
 return(OUT);
}

function HTMLstripper(str){
   var result = str.replace(/(<([^>]+)>)/ig, "");
   return (result);
}


function isTTSready(d){
	if(d=="en"||d=="es"||d=="ru"||d=="de"||d=="pt"||d=="fr"||d=="it"||d=="ko"||d=="ja"||d=="zh-TW"||d=="ar"||d=="cs"||d=="da"||d=="nl"||d=="fi"||d=="el"||d=="ht"||d=="hi"||d=="hu"||d=="no"||d=="pl"||d=="sk"||d=="sv"||d=="th"||d=="tr"||d=="la") return(true);
	else return(false);
}

/*
function isTTSready_(d){
	if(d=="en"||d=="es"||d=="ru"||d=="de"||d=="pt"||d=="fr"||d=="it"||d=="ko"||d=="ja"||d=="zh-TW"||d=="ar"||d=="cs"||d=="da"||d=="nl"||d=="fi"||d=="el"||d=="ht"||d=="hi"||d=="hu"||d=="no"||d=="pl"||d=="sk"||d=="sv"||d=="th"||d=="tr"||d=="la") return(true);
	else return(false);
}
*/


function OnOffTTSicon(){
 var BLOCK = document.getElementsByClassName('SL_History_block');
 var DIRS = document.getElementsByClassName('DIRS');
 var ICNS = "";
 var theDIRs = "";
 for(var i=0; i<BLOCK.length; i++){
      theDIRs = DIRS[i].lang.split("|");
      ICNS = BLOCK[i].getElementsByTagName('img');
      if(ICNS.length>0){
      if(isTTSready(theDIRs[0])!=true) document.getElementById(ICNS[0].id).style.display='none';
      if(isTTSready(theDIRs[1])!=true) document.getElementById(ICNS[1].id).style.display='none';
      document.getElementById(ICNS[0].id).title=FExtension.element('extListenTo')+" "+ SL_GET_LANG_NAME(theDIRs[0]);
      document.getElementById(ICNS[1].id).title=FExtension.element('extListenTo')+" "+ SL_GET_LANG_NAME(theDIRs[1]);
      }
 }
 OnOffTTSiconSPLIT();
}

function OnOffTTSiconSPLIT(ind){
 if(!ind) ind = CurIND;

 var mainBLOCK = document.getElementsByClassName('SL_History_block');
 var DIRS = document.getElementsByClassName('DIRS');
 var ICNS,theDIRs;
 for(var i=0; i<mainBLOCK.length; i++){
//  if(i==ind){
    theDIRs = DIRS[i].lang.split("|");
    ICNS = mainBLOCK[i].getElementsByTagName('img');
    for(var j=0; j<ICNS.length; j+=2){
	if(isTTSready(theDIRs[0])==false) document.getElementById(ICNS[j].id).style.display='none';
    }
    for(var j=1; j<ICNS.length; j+=2){
	if(isTTSready(theDIRs[1])==false) document.getElementById(ICNS[j].id).style.display='none';
    }
//  }
 }
}

