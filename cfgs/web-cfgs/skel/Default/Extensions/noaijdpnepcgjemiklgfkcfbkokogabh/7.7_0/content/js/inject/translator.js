//'use strict';
try{
TranslatorIM = {
	ImTranslator_theurl: "https://webmail.smartlinkcorp.com/",
        myWindow:null,
	SL_FLAG: 0,
	SL_SETINTERVAL_ST: 0,
	SL_BALLON_W: 450,
	SL_BALLON_H: 85,
	SL_MoveX: "-1000px",
	SL_MoveY: "-1000px",
	SL_Xdelta: 0,
	SL_Ydelta: 0,
	SL_FROMlng: "en",
	SL_TEMP_TEXT: "",
	SL_temp_result: "",
	SL_temp_result2: "",
	SL_Balloon_translation_limit: 10000,
	SL_PLANSHET_LIMIT: 10000,
	SL_GLOBAL_X1: 0,
	SL_GLOBAL_X2: 0,
	SL_GLOBAL_Y1: 0,
	SL_GLOBAL_Y2: 0,
	SL_TSold: 0,
	SL_TS: 0,
	SL_VirtualPIN: 0,
	SL_DETECT: "en",
	SL_IS_DICTIONARY: 0,
        SL_EVENT: "",
	SL_KEYCOUNT: { length: 0 },
	SL_KEYSTRING: "",
	SL_TEMPKEYSTRING: "",
	SL_MSG: "",
	//-------------------Globals for TRANSFER from BBL to PLANSHET
	SL_TRANSFER_SRC: "en",
	SL_TRANSFER_DST: "es",
	SL_TRANSFER_DET: "true",
	//-------------------Globals for TRANSFER from BBL to PLANSHET
        SL_dict_bbl: "true",
	//-------------------STORAGE
	SL_ENABLE: false,
	SL_OnOff_BTN: "",
	SL_OnOff_PIN: "",
	SL_OnOff_HK: "",
	SL_langSrc: "",
	SL_langDst: "",
	SL_FontSize: "",
	SL_TH_2: "",
	SL_TH_4: "",
	SL_HK: "",
	SL_HK2: "",
	SL_actualkey: "",
	LNGforHISTORY: "",
	//-------------------STORAGE

	//-------------------SESSION
	SL_SID_PIN: "",
	SL_SID_TO: "",
	SL_SID_FROM: "",
	SL_SID_FONT: "",
	SL_SID_TEMP_TARGET: "",
	SL_SID_TEMP_SOURCE: "",
	SL_TMPbox: "true",
	//-------------------SESSION

	//-------------------INLINER
	SL_FK_box1: true,
	SL_inlinerFK1: "Alt",
	SL_inliner: "T",
	SL_FK_box2: true,
	SL_inlinerFK2: "Ctrl",
	SL_clean: "X",
	//-------------------INLINER

	//------------------ NEW HOT KEYS
	SL_HK_gt1: "Ctrl + Alt + Z",
	SL_HK_gt2: "Alt + Z",
	SL_HK_it1: "Alt + C",
	SL_HK_it2: "Alt + X",
	SL_HK_bb1: "Alt",
	//------------------ NEW HOT KEYS

        TempActiveObjId: "",

	// CHECKBOX FOR BLANK GT
        SL_GT_INV: true,

	SL_ListOfAvailableLanguages: SL_Languages,
        SL_ListOfAvailableLanguagesExt: SL_LanguagesExt,
	



	dblclick:function(e){
//		if(TranslatorIM.SL_ENABLE=="true") TranslatorIM.SL_ShowButton();
		if(TranslatorIM.SL_OnOff_HK=="true" && TranslatorIM.SL_ENABLE=="true"){
			var DBHOTKEYSline1=TranslatorIM.SL_HK_bb1.replace(" + ",":|").toLowerCase()+":|";
			DBHOTKEYSline1=DBHOTKEYSline1.replace(" + ",":|");
			var HOTKEYSline = TranslatorIM.HOTKEYS_line();
			if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline1,HOTKEYSline)==true) TranslatorIM.SL_ShowBalloon();
		}
	},



	mousedown:function(e){
        	FExtension.browserInject.setEvent(e);

                TranslatorIM.SL_OBJ_BUILDER();                
		var target = e.target || e.srcElement;
		var id = target.id;
                TranslatorIM.TempActiveObjId = id;
		if(id != "SL_button" && id !="SL_TTS_voice") {
                        TranslatorIM.SL_CLOBALPosition(e, 0);
			TranslatorIM.SL_HideButton();
		}
	},
	mouseup:function(e){
		var doc = FExtension.browserInject.getDocument();

                TranslatorIM.SL_CLOBALPosition(e, 1);
	        TranslatorIM.SL_EVENT=e;
        	FExtension.browserInject.setEvent(e);
		TranslatorIM.QuickInitTranslators(e);

        	TranslatorIM.SL_GOOGLE_WPT();
		if (FExtension.browserInject.getBrowserName() == 'firefox') {
		        var doc = FExtension.browserInject.getDocument();
			if(FBrowserInjectFirefox.prototype.getSelectionText().toString() != ""){
				if(FExtension.store.get("Context4")=="true") document.getElementById("Inline-menu").style.display="block";
				if(FExtension.store.get("Context3")=="true") document.getElementById("Bubble-menu").style.display="block";
        		} else  {
				if(FExtension.store.get("Context4")=="true") document.getElementById("Inline-menu").style.display="none";
				if(FExtension.store.get("Context3")=="true") document.getElementById("Bubble-menu").style.display="none";
			}
		}
	},
	keydown:function(e){                
		setTimeout(function() {
	    	if(!TranslatorIM.SL_KEYCOUNT[e.keyCode] && TranslatorIM.SL_KEYCOUNT.length<3)   {
        		TranslatorIM.SL_KEYCOUNT[e.keyCode] = true;
		        TranslatorIM.SL_KEYCOUNT.length++;
			TranslatorIM.SL_KEYSTRING=TranslatorIM.SL_KEYSTRING+e.keyCode+":|";
                	if(TranslatorIM.SL_KEYSTRING!="")TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_KEYSTRING;
		}
		}, 300);
        },



	keyup:function(e){ 
		var theSLtext=window.getSelection().toString();
		theSLtext = theSLtext.replace(/(^\s+|\s+$)/g, '');
//		if(theSLtext==""){
			var HOTKEYSline = TranslatorIM.HOTKEYS_line();
			var theresponse = TranslatorIM.SL_MSG.split("~");
			var theresponse2 = theresponse[1].split("|");
			var thekey4 = theresponse2[1];
			var theresponse4 = theresponse[4].split("|");
			var INLINER_CLEAN_ONOFF = theresponse4[0];
			var INL_CL_HK1 = theresponse4[1];
			var INL_CL_HK2 = theresponse4[2];

			//ImTranslator Blank
			var DBHOTKEYSline1=TranslatorIM.SL_HK_gt2.replace(" + ",":|").toLowerCase()+":|";
               		DBHOTKEYSline1=DBHOTKEYSline1.replace(" + ",":|");
			//Inline clean
			var DBHOTKEYSline2=TranslatorIM.SL_HK_it2.replace(" + ",":|").toLowerCase()+":|";
               		DBHOTKEYSline2=DBHOTKEYSline2.replace(" + ",":|");
			if(INLINER_CLEAN_ONOFF=="true"){
				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline2,HOTKEYSline)==true) inlinerInjectClean();
			}
			if(TranslatorIM.SL_GT_INV == "true"){
				if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline1,HOTKEYSline)==true) setTimeout(function() {TranslatorIM.HotKeysWindow(e);}, 100);
			}
			TranslatorIM.SL_closer(e);

//	 	}
        },

	QuickInitTranslators: function(e){
                var HOTKEYSline = TranslatorIM.HOTKEYS_line();
		setTimeout(function() {
		    if(TranslatorIM.SL_MSG!="" || TranslatorIM.SL_MSG!="undefuned"){
			var theresponse = TranslatorIM.SL_MSG.split("~");
			var theresponse1 = theresponse[0].split("|");
			var thekey2 = theresponse1[1];

                        if(theresponse[3].indexOf("|")!=-1){
				var theresponse3 = theresponse[3].split("|");
				var INLINER_ONOFF = theresponse3[0];
				var INL_HK1 = theresponse3[1];
				var INL_HK2 = theresponse3[2];
				var theresponse4 = theresponse[4].split("|");
			}
			//Balloon
			var DBHOTKEYSline1=TranslatorIM.SL_HK_bb1.replace(" + ",":|").toLowerCase()+":|";
			DBHOTKEYSline1=DBHOTKEYSline1.replace(" + ",":|");
			//ImTranslator Blank
			var DBHOTKEYSline2=TranslatorIM.SL_HK_gt1.replace(" + ",":|").toLowerCase()+":|";
			DBHOTKEYSline2=DBHOTKEYSline2.replace(" + ",":|");
			//Inline Translation
			var DBHOTKEYSline3=TranslatorIM.SL_HK_it1.replace(" + ",":|").toLowerCase()+":|";
			DBHOTKEYSline3=DBHOTKEYSline3.replace(" + ",":|");
			theSLtext=window.getSelection().toString();
			theSLtext = theSLtext.replace(/(^\s+|\s+$)/g, '');

			if(theSLtext!=""){
			   	if(TranslatorIM.SL_OnOff_BTN=="true" && theSLtext.indexOf("Google - Map Data")==-1 && theSLtext!="." && theSLtext!="," && theSLtext!="?" && theSLtext!="!" && theSLtext!=":" && theSLtext!=";" && theSLtext!="-"){
				 	 if(TranslatorIM.SL_ENABLE=="true")TranslatorIM.SL_ShowButton();
				}
				if(TranslatorIM.SL_OnOff_HK=="true" && TranslatorIM.SL_ENABLE=="true"){
					if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline1,HOTKEYSline)==true) TranslatorIM.SL_ShowBalloon();
				}

				if(theresponse1[2]=="true"){
					if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline2,HOTKEYSline)==true) TranslatorIM.HotKeysWindow(e);
				}
				if(INLINER_ONOFF=="true"){
					if(TranslatorIM.SL_SYNC_FILTER(DBHOTKEYSline3,HOTKEYSline)==true) runinliner();
				}

			}	
		    }	
		}, 200);
		setTimeout(function() {
			TranslatorIM.SL_closer(e);
			HOTKEYSline="";
		}, 500);
	},

	SL_SYNC_FILTER: function (l1,l2){
	        if(l1!=":|"){
		        var LINE1 = l1.split(":|");
		        var LINE2 = l2.split(":|");
	        	var CNT1 = LINE1.length-1;
		        var CNT2 = LINE2.length-1; 
		        var cnt=0;
                	var CNTlimit=3;
		        if(CNT1 == CNT2){
				CNTlimit = CNT1;
	        		for(var i=0; i<CNT1; i++){
		        		for(var j=0; j<CNT2; j++){
						if(LINE1[i]==LINE2[j]){
							cnt++; 	
						}
					}
				}
			}
			if(cnt>=CNTlimit) return true;
			else return false;
		} else {
		 if(l2=="") return true;
		 else return false;
		}
	},

	SL_closer:function(e){
		setTimeout(function() {TranslatorIM.SL_KEYCOUNT = { length: 0 }; TranslatorIM.SL_KEYSTRING="";TranslatorIM.SL_TEMPKEYSTRING="";}, 100);
        },

	HOTKEYS_line: function(){
                TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_TEMPKEYSTRING.replace("18:|","Alt:|");
                TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_TEMPKEYSTRING.replace("17:|","Ctrl:|");
                TranslatorIM.SL_TEMPKEYSTRING=TranslatorIM.SL_TEMPKEYSTRING.replace("16:|","Shift:|");
		var TMP1= TranslatorIM.SL_TEMPKEYSTRING.split(":|");
		var NUM = TMP1.length-1;
		var HOTKEY = Array();
		var HOTKEYSline="";
		var cnt=0;
		for(var x=0; x<NUM; x++){
		    if(TMP1[x]!="Alt" && TMP1[x]!="Ctrl" && TMP1[x]!="Shift") HOTKEY[x]=String.fromCharCode(TMP1[x]);
		    else HOTKEY[x]=TMP1[x];
                    HOTKEYSline=HOTKEYSline+HOTKEY[x]+":|";
                    if(TMP1[x]=="Alt")cnt++;
                    if(TMP1[x]=="Ctrl")cnt++;
		}
		if(cnt==2){
                  HOTKEYSline=HOTKEYSline.replace("Alt:|","");
                  HOTKEYSline=HOTKEYSline.replace("Ctrl:|","");
                  HOTKEYSline="Ctrl:|Alt:|"+HOTKEYSline;
		}
		return HOTKEYSline.toLowerCase();
	},

	init: function(){	
	        var doc = FExtension.browserInject.getDocument();



                
                TranslatorIM.SL_GOOGLE_WPT();

        	doc.addEventListener('mousedown', TranslatorIM.mousedown,!1);
        	doc.addEventListener('dblclick', TranslatorIM.dblclick,!1);

	        doc.addEventListener('mouseup', TranslatorIM.mouseup,!1);

        	doc.addEventListener('keydown', TranslatorIM.keydown,!1);
        	doc.addEventListener('keyup', TranslatorIM.keyup,!1);

        	doc.addEventListener('mousedown', document.focus,!1);
/*
		try{
	            doc.addEventListener("load", function(){
				setTimeout('TranslatorIM.SL_Hider()',500); 

			}, false);
		}catch(e){
			//alter(e);
		}
	
*/	
		(function(){                        
			var SL_d=!0,SL_e=null,SL_g=!1,SL_j,
			SL_k=function(SL_a){
				return SL_a.replace(/^\s+|\s+$/g,"")
			},
			SL_o=function(SL_a,SL_b){
				return function(){
					return SL_b.apply(SL_a,arguments)
					}
			 },
			 SL_p=function(SL_a){
			  if(SL_a&&SL_a.tagName){
				  var SL_b=SL_a.tagName.toLowerCase();
				  if("input"==SL_b||"textarea"==SL_b)
					  return SL_d;
			  }
			  for(;SL_a;SL_a=SL_a.parentNode)
				  if(SL_a.isContentEditable)
					  return SL_d;
			  	   return SL_g;
			  },
			  SL_r=/[0-9A-Za-z]/,
			  SL_A=function(){
				  FExtension.browserInject.extensionSendRequest({type:"initialize"},SL_o(this,
				  function(SL_a){
					  this.SL_B=SL_a.instanceId;
					  FExtension.browserInject.addOnRequestListener(SL_z);
				  })
			  )}
			  var SL_x=function(SL_a,SL_b,SL_c){
				  FExtension.browserInject.getDocument().addEventListener?SL_c.addEventListener(SL_a,SL_b,SL_g):SL_c.attachEvent("on"+SL_a,SL_b)
			  },
			  SL_w=function(){};
			  var SL_z=function(SL_a,SL_b,SL_c){
		                  if(FExtension.browserInject.getBrowserName() == 'firefox'){
                		      if(SL_a && "get_selection"==SL_a.type || SL_b && "get_selection"==SL_b.type){
		                          SL_a=SL_k(FExtension.browserInject.getSelectionText());
                		          SL_c({selection:SL_a});
		                      }
                		  }else{
		                      "get_selection"==SL_a.type&&(SL_a=SL_k(FExtension.browserInject.getSelectionText()))&&SL_c({selection:SL_a})
                		  }
			  };
			  window.SLInstance=new SL_A;  

/*
			  try{
				if(document.location.href.indexOf('acid3.acidtests.org')!=-1){
					setTimeout('TranslatorIM.SL_OBJ_BUILDER()',1000); 
				} else TranslatorIM.SL_OBJ_BUILDER();
			  }catch(e){
				//alter(e);
			  }

*/
		 


			  FExtension.browserInject.extensionSendMessage({greeting: FExtension.store.getLocalStorage().length}, function(response) {
				  FExtension.browserInject.setStyle();
		      });
		})();
	},


    addEvent: function (element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, callback);
        }
    },

    openFeedback: function(){
        FExtension.browserInject.openNewTab(FExtension.browserInject.getURL('feedback.html', false));
    },
	
	SL_Links: function(ob,todo){
		FExtension.browserInject.getDocument().getElementById(ob).style.display=todo;
	},
/*
	SL_Hider: function(){
		if(FExtension.browserInject.getDocument().getElementById("SL_shadow_translator")){
			FExtension.browserInject.getDocument().getElementById("SL_shadow_translator").style.display='none';
		}
	},
*/
	StartImTranslatorWindow: function(){
		 var tmpSLstr = FExtension.browserInject.getSelectionText();
		 if(tmpSLstr=="")  tmpSLstr=" ";

		 FExtension.browserInject.extensionSendMessage({greeting: tmpSLstr}, function(response) {
			 //chrome.extension.sendMessage({greeting: tmpSLstr}, function(response) {
             if(response){
			    //console.log(response.farewell);
             }
		 });
	},
	SL_rightclick: function() {
	    var rightclick;
	    var e = window.event;
            if(e=='undefined') e=TranslatorIM.SL_EVENT;
	    if (e.which) 
	    	rightclick = (e.which == 3);
	    else if (e.button) 
	    	rightclick = (e.button == 2);
	    return (rightclick);
	},
	//---------------BUTTON
	SL_ShowButton: function(){

        var doc = FExtension.browserInject.getDocument();
//        TranslatorIM.REMOTE_Voice_Close();
		if(TranslatorIM.SL_OnOff_BTN == "true"){
		   if(doc.getElementById("SL_shadow_translator")){
			if(doc.getElementById("SL_shadow_translator").style.backgroundColor==''){
			//	if(TranslatorIM.SL_rightclick() == false){
					var theSLtext=FExtension.browserInject.getSelectionText();
					if(theSLtext!=""){
						TranslatorIM.SL_CLOBALPosition(window.e, 0);
						doc.getElementById("SL_shadow_translator").style.backgroundColor="";
						doc.getElementById('SL_button').style.display="block";
						TranslatorIM.SL_GetButtonCurPosition(TranslatorIM.SL_GLOBAL_X1, TranslatorIM.SL_GLOBAL_Y1, TranslatorIM.SL_GLOBAL_X2, TranslatorIM.SL_GLOBAL_Y2);
					}
				}
			//}
		   }
		}
	},
	SL_HideButton: function(){
         var doc = FExtension.browserInject.getDocument();
		 var SLdivField=doc.getElementById("SL_button");
		 if(SLdivField){
			 TranslatorIM.SL_addEvent(SLdivField, 'mouseover', TranslatorIM.SL_addButtonColor);
			 TranslatorIM.SL_addEvent(SLdivField, 'mouseout', TranslatorIM.SL_removeButtonColor);

			 if(SLdivField.style.opacity!="1"){ 
				 TranslatorIM.SL_CLOBALPosition(window.e, 1);
				 SLdivField.style.display="none"; 
		   
				 if(doc.getElementById("SL_shadow_translator").style.display!="block") TranslatorIM.SL_addEvent(SLdivField, 'mousedown', TranslatorIM.SL_ShowBalloon);
				 else TranslatorIM.SL_CloseBalloon();
			 }
		 }
	},
	SL_addButtonColor: function() {
		var SLdivField = FExtension.browserInject.getDocument().getElementById("SL_button");
		SLdivField.style.opacity = "1";
	},
	SL_removeButtonColor: function() {
		var SLdivField = FExtension.browserInject.getDocument().getElementById("SL_button");
		SLdivField.style.opacity = "0.4";
	},
	SL_GetButtonCurPosition: function (X1,Y1,X2,Y2) {
	        var doc = FExtension.browserInject.getDocument();
		var AVR_X=(X1+X2)/2;
        	var AVR_Y=(Y1+Y2)/2;
	        var PRESENT_Y=0;
        	var MAX_Y=0;
	        var MIN_Y=0;

        	if(Y1-Y2<0) {MIN_Y=Y1;MAX_Y=Y2;}
	        else {MIN_Y=Y2;MAX_Y=Y1;}

	        if(MIN_Y > doc.body.scrollTop+30)PRESENT_Y = MIN_Y - 30;
	        else PRESENT_Y = MAX_Y + 10;

	        var SLdivField = doc.getElementById("SL_button");

	        //	TranslatorIM.SL_MoveX =AVR_X+"px";
        	//	TranslatorIM.SL_MoveY=PRESENT_Y+"px";
	        //--------Corrector-----------------------
	        var Y4use = Y1 - 30;
	        var X4use = X1 - 30;
        	if(Y4use < 20)
	        	Y4use = 0;
        	//        if(document.body.offsetHeight<Y4use) Y4use=document.body.offsetHeight-50;
	        //--------Corrector-----------------------

        	TranslatorIM.SL_MoveY = Y4use + "px";
	        TranslatorIM.SL_MoveX = X4use + "px";

	        var SL_MoveY = TranslatorIM.SL_MoveY;
        	var SL_MoveX = TranslatorIM.SL_MoveX;
	        if(FExtension.browserInject.getBrowserName() == 'firefox'){
        	    var win = document.commandDispatcher.focusedWindow;
	            if(win.frameElement){
        	        var rec = win.frameElement.getBoundingClientRect();
                	var SL_MoveY = Y4use + rec.y + "px";
	                var SL_MoveX = X4use + rec.x + "px";
        	    }
	        }
	        
	        SLdivField.style.left = SL_MoveX;
        	SLdivField.style.top = SL_MoveY;
		},

	SL_CLOBALPosition: function(e, state) {
		e = TranslatorIM.SL_EVENT;
	        var doc = FExtension.browserInject.getDocument();
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;

		if(e){
			if (e.pageX || e.pageY){
				posx = e.pageX;
				posy = e.pageY;
			}
			else if (e.clientX || e.clientY){
				posx = e.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft;
				posy = e.clientY + doc.body.scrollTop + doc.documentElement.scrollTop;
			}
		}



		if(state==0){
			TranslatorIM.SL_GLOBAL_X1 = posx;
			TranslatorIM.SL_GLOBAL_Y1 = posy;
		}else{
			TranslatorIM.SL_GLOBAL_X2 = posx;
			TranslatorIM.SL_GLOBAL_Y2 = posy;
		}

	},
	//---------------BUTTON
	//---------------BALLOON
	SL_ShowBalloon: function(){
	        //TranslatorIM.REMOTE_Voice_Close();

	        TranslatorIM.SL_HideButton();

	        var doc = FExtension.browserInject.getDocument();
		try{
			doc.onmousemove = null;			
		}catch(e){
			console.log(e);
		}

		var SLdivField = doc.getElementById("SL_shadow_translator");
		var SLdivField2 = doc.getElementById("SL_button");
		SLdivField2.style.display = "none";
		doc.getElementById('SL_planshet').style.background = "#F4F5F5 url('"+FExtension.browserInject.getURL('content/img/util/bg2.png')+"')";
		doc.getElementById('SL_shadow_translation_result').style.background = "#FFF url('"+FExtension.browserInject.getURL('content/img/util/bg.png')+"')";
		doc.getElementById('SL_Balloon_options').style.background = "#F4F5F5 url('"+FExtension.browserInject.getURL('content/img/util/bg3.png')+"')";
		var SLselect = doc.getElementById("SL_lng_to");
		var SLselectFROM = doc.getElementById("SL_lng_from");
		var SLloc = doc.getElementById("SLloc");
		var SLswitch = doc.getElementById('SL_switch_b');

		TranslatorIM.SL_TMPbox = TranslatorIM.SL_NODETECT_bbl;

		if(TranslatorIM.SL_TS==TranslatorIM.SL_TSold){
			if(doc.getElementById('SLloc').checked==false) TranslatorIM.SL_TMPbox = "false";
			else TranslatorIM.SL_TMPbox = "true";
		}else{
			if(TranslatorIM.SL_TMPbox=="true") doc.getElementById('SLloc').checked=false;
			else doc.getElementById('SLloc').checked=true;
		}


		if(SLdivField.style.backgroundColor==""){
			TranslatorIM.SL_GetTransCurPosition();
			var theSLtext = FExtension.browserInject.getSelectionText();
			if(theSLtext != ""){
				theSLtext = theSLtext.substring(0, TranslatorIM.SL_Balloon_translation_limit);
				var OBJ = doc.getElementById('SL_pin');

				if(theSLtext.length > TranslatorIM.SL_Balloon_translation_limit) {
					TranslatorIM.SL_addBalloonColor();
					TranslatorIM.SL_removeBalloonColor();
					doc.onscroll = TranslatorIM.SL_FLOATER;
					TranslatorIM.SL_VirtualPIN = 1;					
				        OBJ.style.className = 'SL_pin_off';
					OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-on.png')+")";
					OBJ.title=chrome.i18n.getMessage('extUnPin_ttl');
					TranslatorIM.SL_FLOATER();
				}else{
					var evt = window.event;
					SLdivField.style.backgroundColor = "#FEFEFE";
					setTimeout(function() { 

					if(TranslatorIM.SL_SID_PIN != "") TranslatorIM.SL_OnOff_PIN = TranslatorIM.SL_SID_PIN;

					if(TranslatorIM.SL_OnOff_PIN == "false") doc.getElementById('SL_pin').style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-off.png')+")";
					else  doc.getElementById('SL_pin').style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-on.png')+")";


                                                if(doc.getElementById('SL_pin').style.background.indexOf('pin-on.png')!=-1){TranslatorIM.SL_FLOATER();}
						if(TranslatorIM.SL_SID_TEMP_TARGET != "") SLselect.value = TranslatorIM.SL_SID_TEMP_TARGET;
					}, 150);     
				}
				theSLtext = theSLtext.replace(/\n/ig,"@"); 
				theSLtext = theSLtext.replace(/(^\s+|\s+$)/g, '');

				//TranslatorIM.DODetection(theSLtext);

				TranslatorIM.SL_TEMP_TEXT = theSLtext;
				var win = null;
				if(FExtension.browserInject.getBrowserName() == 'firefox'){
					win = document.commandDispatcher.focusedWindow;
				}
				//setTimeout(function() { 
					TranslatorIM.SL_BALLOON_TRANSLATION(theSLtext,evt,0, win);
				//}, 750);     


				TranslatorIM.SL_addEvent(SLdivField, 'mouseup', TranslatorIM.SL_ShowBalloon);
			    	TranslatorIM.SL_addEvent(SLdivField, 'mousedown', TranslatorIM.SL_CloseBalloon);
			    	TranslatorIM.SL_addEvent(SLdivField, 'mouseover', TranslatorIM.SL_addBalloonColor);
			    	TranslatorIM.SL_addEvent(SLdivField, 'mouseout', TranslatorIM.SL_removeBalloonColor);
			    	TranslatorIM.SL_addEvent(SLselect, 'change', TranslatorIM.SL_retranslate);
			    	TranslatorIM.SL_addEvent(SLselectFROM, 'change', TranslatorIM.SL_retranslate);
			    	TranslatorIM.SL_addEvent(SL_switch_b, 'click', TranslatorIM.SL_flip);
			    	TranslatorIM.SL_addEvent(SLloc, 'click', TranslatorIM.SL_locker);  


			    	if(theSLtext.indexOf(' ')!=-1){
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result"), 'mousedown', TranslatorIM.SL_bring_UP);
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result2"), 'mouseout', TranslatorIM.SL_bring_DOWN);
			    	}else{
				    TranslatorIM.SL_addEvent(doc.getElementById("SL_shadow_translation_result"), 'mousedown', TranslatorIM.ClickInside);
			    	}

			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_lng_to"), 'mousedown', TranslatorIM.SL_SCROLL);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_lng_to"), 'mouseout', TranslatorIM.SL_bring_DOWN);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_bbl_donate"), 'click', TranslatorIM.SL_Donate);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_TTS_voice"), 'click', TranslatorIM.SL_Voice);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_copy"), 'click', TranslatorIM.SL_CopyToClipBoard);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_bbl_font"), 'click', TranslatorIM.SL_Font);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_pin"), 'click', TranslatorIM.SL_pinme);
			    	TranslatorIM.SL_addEvent(doc.getElementById("SL_TH"), 'click', TranslatorIM.SL_hist);

			    	try{ doc.onscroll = TranslatorIM.SL_FLOATER; } catch(e){ console.log(e); }
			    	TranslatorIM.SL_addBalloonColor();
			    	TranslatorIM.SL_removeBalloonColor();
			    	setTimeout(function() { 
			    	doc.getElementById("SL_button").style.display = "none";
			    }, 10);    
			}
		}		 
		var OBJ = doc.getElementById('SL_shadow_translation_result');
		var OBJ2 = doc.getElementById('SL_shadow_translation_result2');
		// FONT SIZE icon
		var OBJ3 = doc.getElementById('SL_bbl_font');
		if(TranslatorIM.SL_SID_FONT != "") TranslatorIM.SL_FontSize = TranslatorIM.SL_SID_FONT;
		if(TranslatorIM.SL_FontSize != OBJ.style.fontSize){
			if(TranslatorIM.SL_FontSize == "16px"){
				OBJ.style.fontSize = "16px";
				OBJ.style.lineHeight = "22px";
				OBJ2.style.fontSize = "16px";
				OBJ2.style.lineHeight = "22px";
			}else{
				OBJ.style.fontSize = "12px";
			   	OBJ.style.lineHeight = "18px";
			   	OBJ2.style.fontSize = "12px";
			   	OBJ2.style.lineHeight = "18px";
			}
			TranslatorIM.SL_FontSize = OBJ.style.fontSize;
		}
		if(TranslatorIM.SL_FontSize == "16px")   OBJ3.className="SL_font_on";
		if(TranslatorIM.SL_FontSize == "12px")   OBJ3.className="SL_font_off";
		// COPY icon
		doc.getElementById('SL_copy').className="SL_copy_hand";
		// TRANSLATION HISTORY icon
		doc.getElementById('SL_TH').className="SL_TH";

		setTimeout(function() { 
                        var SLdivField2=FExtension.browserInject.getDocument().getElementById("SL_button");
			if(SLdivField2) SLdivField2.style.display = "none";
		}, 1300); 

	},

	SL_locker: function(){	
	        var doc = FExtension.browserInject.getDocument();
		if(doc.getElementById('SLloc').checked==false) TranslatorIM.SL_TMPbox=="true";
		else TranslatorIM.SL_TMPbox=="false";
		TranslatorIM.SL_retranslate();
	},

	SL_flip: function(){
	        var doc = FExtension.browserInject.getDocument();
		try{ doc.onmousemove = null; }catch(e) { console.log(e); }
		var SLselTO=doc.getElementById("SL_lng_to");
		var SLselFROM=doc.getElementById("SL_lng_from");
		if(SLselFROM.value!="auto"){
		   var TMP = SLselTO.value;
		   SLselTO.value=SLselFROM.value;
		   SLselFROM.value=TMP;
		   TranslatorIM.SL_retranslate();
		} else alert(chrome.i18n.getMessage('extDisabled'));
	},

        SL_hist: function(){
		window.open(FExtension.browserInject.getURL('history.html', true),"ImTranslator:Translation_History");
	},

	SL_SYN: function(ob){
		TranslatorIM.SL_retranslate();
	},
	SL_ALIGN: function(COORD){
		var theMainOBJ=FExtension.browserInject.getDocument().getElementById('SL_shadow_translator');
		var RESP=0;
		if(COORD=="x"){
			RESP=TranslatorIM.SL_BALLON_W/2;
		    var theX = (TranslatorIM.SL_GLOBAL_X1 + TranslatorIM.SL_GLOBAL_X2) / 2;
		    RESP = Math.ceil(theX - RESP);
		    if(RESP < 0) 
		    	RESP=5;
		    if(RESP > FExtension.browserInject.getDocument().body.clientWidth - TranslatorIM.SL_BALLON_W - 5) 
		    	RESP = FExtension.browserInject.getDocument().body.clientWidth - TranslatorIM.SL_BALLON_W - 5;
		    if(FExtension.browserInject.getDocument().body.scrollLeft > 0)
		    	RESP = RESP + FExtension.browserInject.getDocument().body.scrollLeft;
		}else{
		    var MIN = TranslatorIM.SL_GLOBAL_Y1;
		    var MAX = TranslatorIM.SL_GLOBAL_Y2;
		    if(MIN > TranslatorIM.SL_GLOBAL_Y2){
		    	MIN = TranslatorIM.SL_GLOBAL_Y2;
		    	MAX = TranslatorIM.SL_GLOBAL_Y1;
		    }
		    if((MIN - FExtension.browserInject.getDocument().body.scrollTop) > TranslatorIM.SL_BALLON_H)  
		    	RESP = MIN - TranslatorIM.SL_BALLON_H - 5;
		    else  
		    	RESP = MAX + 5;
		    if(RESP < 0) 
		    	RESP = 5;
		}
		return RESP;
	},
	SL_bring_UP: function(){
		if(window.event.which!=3){
			var theMainOBJ = FExtension.browserInject.getDocument().getElementById('SL_shadow_translator');
			var theOBJ = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result');
			var theOBJ2 = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result2');
			var ToLng = FExtension.browserInject.getDocument().getElementById('SL_lng_to').value;
			theOBJ2.style.display = 'block';
			theOBJ2.style.marginTop = theMainOBJ.offsetTop + 30 + "px";
			theOBJ2.style.marginLeft = theMainOBJ.offsetLeft + 1 + "px";
			theOBJ.style.visibility = "hidden";
//			theOBJ2.innerHTML = TranslatorIM.SL_temp_result;

                        theOBJ2.style.direction="ltr";
                        theOBJ2.style.textAlign="left";
			if(ToLng=="ar" || ToLng=="iw" || ToLng=="fa" || ToLng=="ur" || ToLng=="yi"){
                          theOBJ2.style.direction="rtl";
                          theOBJ2.style.textAlign="right";
			}
		}
	},
	SL_bring_DOWN: function(){
		var theOBJ = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result');
		var theOBJ2 = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result2');
		theOBJ2.style.display = 'none';
		theOBJ.style.visibility = "visible";
	},
	SL_retranslate:function(){
		TranslatorIM.SL_removeBalloonColor();
		TranslatorIM.SL_addBalloonColor();
		TranslatorIM.REMOTE_Voice_Close();
		var theSLtext = FExtension.browserInject.getSelectionText();
		if(theSLtext == "") theSLtext = TranslatorIM.SL_TEMP_TEXT;
		theSLtext=theSLtext.replace(/\n/ig,"@"); 
		TranslatorIM.SL_BALLOON_TRANSLATION(theSLtext,window.event, 1);
	},
	SL_CloseBalloon: function() {
           var doc = FExtension.browserInject.getDocument();
           

           TranslatorIM.REMOTE_Voice_Close();
	   if(window.innerWidth-window.event.pageX>20){
		var SLdivField = FExtension.browserInject.getDocument().getElementById("SL_shadow_translator");
		if(FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result2').style.display == "none"){
			TranslatorIM.SL_Xdelta = window.event.pageX - SLdivField.offsetLeft;
			TranslatorIM.SL_Ydelta = window.event.pageY - SLdivField.offsetTop;

			TranslatorIM.SL_addEvent(SLdivField, 'mouseover', TranslatorIM.SL_addBalloonColor);
			TranslatorIM.SL_addEvent(SLdivField, 'mouseout', TranslatorIM.SL_removeBalloonColor);
		  
			if(SLdivField.style.backgroundColor == ""){
				SLdivField.style.display = 'none';
                                doc.getElementById('SL_balloon_obj').alt="0";
			}else{
				var evt = window.event;
				TranslatorIM.SL_MoveX = evt.pageX + "px";
				TranslatorIM.SL_MoveY = evt.pageY + "px";
				try{
					FExtension.browserInject.getDocument().onmousemove = TranslatorIM.SL_GetTransCurPosition;
				}catch(e){
					console.log(e);
				}
			}
		}
		// TranslatorIM.SL_GLOBAL_X1 = window.event.pageX;
		// TranslatorIM.SL_GLOBAL_Y1 = window.event.pageY;
	    }

	},
	SL_addBalloonColor: function() {
	        var doc = FExtension.browserInject.getDocument();
                doc.getElementById('SL_balloon_obj').alt="1";
		var SLdivField = doc.getElementById("SL_shadow_translator");
		SLdivField.style.backgroundColor = "#FEFEFE";
		SLdivField.style.boxShadow = "5px 5px 55px #000";
	},
	SL_removeBalloonColor: function() {
        	var doc = FExtension.browserInject.getDocument();
                doc.getElementById('SL_balloon_obj').alt="1";
		var SLdivField = doc.getElementById("SL_shadow_translator");
		SLdivField.style.backgroundColor = "";
		SLdivField.style.boxShadow = "5px 5px 15px #BAB9B5";
	},
	SL_addEvent: function( obj, type, fn ) {
		if (obj) {
			if ( obj.attachEvent ) {
				obj['e'+type+fn] = fn;
				obj[type+fn] = function(){ obj['e'+type+fn]( window.event ); }
				obj.attachEvent( 'on'+type, obj[type+fn] );
			} else 	obj.addEventListener(type, fn, false);
		}
	},






	SL_GetTransCurPosition: function(e) {

	  if(e){
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY)	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) {
			posx = e.clientX + FExtension.browserInject.getDocument().body.scrollLeft + FExtension.browserInject.getDocument().documentElement.scrollLeft;
			posy = e.clientY + FExtension.browserInject.getDocument().body.scrollTop + FExtension.browserInject.getDocument().documentElement.scrollTop;
		}
		var SLdivField = FExtension.browserInject.getDocument().getElementById("SL_shadow_translator");

	        if(TranslatorIM.SL_SID_PIN == "false"){
			var DELTA = 0;
			if (FExtension.browserInject.getDocument().body.scrollHeight > FExtension.browserInject.getDocument().body.clientHeight) 
				DELTA = 25;
			if(posx - TranslatorIM.SL_Xdelta > 1 && posx - TranslatorIM.SL_Xdelta < window.innerWidth - TranslatorIM.SL_BALLON_W - DELTA)  TranslatorIM.SL_MoveX = posx - TranslatorIM.SL_Xdelta + "px";
			TranslatorIM.SL_MoveY = posy - TranslatorIM.SL_Ydelta + "px";
			SLdivField.style.left = TranslatorIM.SL_MoveX;
			SLdivField.style.top = TranslatorIM.SL_MoveY;
		}else{
			TranslatorIM.SL_MoveX = posx - TranslatorIM.SL_Xdelta + "px";
			TranslatorIM.SL_MoveY = posy - TranslatorIM.SL_Ydelta + "px";
			SLdivField.style.left = TranslatorIM.SL_MoveX;
			SLdivField.style.top = TranslatorIM.SL_MoveY;
		}
	   }	

	},

	SL_IMG_LOADER: function(){
	        var ext = FExtension.browserInject;
		var doc = ext.getDocument()
            	doc.getElementById('SL_pin').style.background='url('+ext.getURL('content/img/util/pin-on.png')+')';
            	doc.getElementById('SL_button').style.background='url('+ext.getURL('content/img/util/imtranslator-s.png')+')';
            	doc.getElementById('bubblelogo').style.background='url('+ext.getURL('content/img/util/imtranslator-s.png')+')';
            	doc.getElementById('SL_bbl_donate').style.background='url('+ext.getURL('content/img/util/donate2.png')+')';
            	doc.getElementById('SL_TTS_voice').style.background='url('+ext.getURL('content/img/util/tts-voice.png')+')';
            	doc.getElementById('SL_switch_b').style.background='url('+ext.getURL('content/img/util/switchb.png')+')';
            	doc.getElementById('SL_copy').style.background='url('+ext.getURL('content/img/util/copy_hand.png')+')';
            	doc.getElementById('SL_bbl_font').style.background='url('+ext.getURL('content/img/util/font-off.png')+')';
            	doc.getElementById('SL_TH').style.background='url('+ext.getURL('content/img/util/history.png')+')';
	    	doc.getElementById('SL_alert100').style.background="url('"+ext.getURL('content/img/util/bg2.png')+"')";
	    	doc.getElementById('SL_planshet').style.background="#F4F5F5 url('"+ext.getURL('content/img/util/bg2.png')+"')";
	    	doc.getElementById('SL_shadow_translation_result').style.background="#FFF url('"+ext.getURL('content/img/util/bg.png')+"')";
	    	doc.getElementById('SL_Balloon_options').style.background="#FFF url('"+ext.getURL('content/img/util/bg3.png')+"')";
	},

	//---------------BALLOON
	SL_LanguageBuilder: function(lng,st){
		var TEMPlng1 = TranslatorIM.SL_ListOfAvailableLanguages.split(",");
		var TEMPlng2;
		var COLLECTOR = "";
		if(st==0){
		   if(lng=="auto") COLLECTOR="<option selected value='auto'>Detect language</option>";
		   else COLLECTOR="<option value='auto'>Detect language</option>";
		 }
		var ACTIVE;
		for(var i=0; i<TEMPlng1.length; i++){
		     TEMPlng2=TEMPlng1[i].split(":");
		     ACTIVE="";
		     if(TEMPlng2[0]==lng) ACTIVE=" selected ";
		     COLLECTOR=COLLECTOR+"<option "+ACTIVE+" value='"+TEMPlng2[0]+"'>"+TEMPlng2[1]+"</option>";
		}
	 return COLLECTOR;
	},

	DODetection: function(myTransText) {
		var doc = FExtension.browserInject.getDocument();
		TranslatorIM.SL_SETINTERVAL_ST=0;
		var AUTO = doc.getElementById('SLloc').checked;
		if(AUTO==false){
		  if(myTransText!=""){
		    myTransText = myTransText.replace(/|/g,"");
		    myTransText = myTransText.replace(/&/g,"");
		    myTransText = myTransText.replace(/$/g,"");
		    myTransText = myTransText.replace(/^/g,"");
		    myTransText = myTransText.replace(/~/g,"");
		    myTransText = myTransText.replace(/`/g,"");
		    myTransText = myTransText.replace(/@/g,"");
		    myTransText = myTransText.replace(/%/g," ");

		    var num = Math.floor((Math.random() * SL_GEO.length)); 
		    var theRegion = SL_GEO[num];
		    var cntr = myTransText.split(" ");
                    var newTEXT = myTransText;
		    if(cntr.length<=1)  newTEXT = myTransText+" "+myTransText;

		    var baseUrl = 'https://' + 'translate.google.'+theRegion+'/translate_a/single?client=t&sl=auto&tl=en&hl=en&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&q='+encodeURIComponent(truncStrByWord(newTEXT,100));


// By VK----------------------------------------------------
//		    var baseUrl = 'http://imtranslator.net';
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
						alert(chrome.i18n.getMessage('extError1'));
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

						DetLang = resp;

						if(DetLang=="zh-CN"){ TranslatorIM.SLDetector(myTransText);}

                                                TranslatorIM.SL_FLAG=0;
						var LANGS = TranslatorIM.SL_ListOfAvailableLanguagesExt.split(",");
						for (var i = 0; i < LANGS.length; i++){
							var templang = LANGS[i].split(":");
							if(DetLang == templang[0]){ 
							        var tmp = doc.getElementById('SL_lng_from').value;
								if(tmp == "" || tmp == "auto") tmp = TranslatorIM.SL_langSrc;
								DetLang=tmp;
								TranslatorIM.SL_FLAG=1;
							}
						}



		                        	TranslatorIM.LNGforHISTORY = DetLang;
			                        TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
						TranslatorIM.SL_SID_TO   = doc.getElementById('SL_lng_to').value;
						if(TranslatorIM.SL_TS!=TranslatorIM.SL_TSold){
							doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc;
							doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst;
							TranslatorIM.SL_TSold=TranslatorIM.SL_TS; 
						}else{
						        if(TranslatorIM.SL_SID_TO!=""){
								doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
								doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
							}
						}
			                        if(doc.getElementById('SL_lng_to').value==resp && doc.getElementById('SL_lng_from').value!="auto"){
			                                var TMP=doc.getElementById('SL_lng_to').value;
			                                doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
		        	                        doc.getElementById('SL_lng_from').value = TMP;
		                	        }else{
		                        	        if(doc.getElementById('SL_lng_from').value!="auto") doc.getElementById('SL_lng_from').value=DetLang;
						}
					        TranslatorIM.SL_SETINTERVAL_ST=1;
					} else 	TranslatorIM.SLDetector(myTransText);
				}
			}
			ajaxRequest.open("POST", baseUrl, true);
			ajaxRequest.send(null); 
		  }
		 }else{
		      	TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
			TranslatorIM.SL_SID_TO  = doc.getElementById('SL_lng_to').value;
			if(TranslatorIM.SL_TS!=TranslatorIM.SL_TSold){
				doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc;
				doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst;
				TranslatorIM.SL_TSold=TranslatorIM.SL_TS; 
			}else{
	        		if(TranslatorIM.SL_SID_TO!=""){
					doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
					doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
				}
			}
			TranslatorIM.SL_SETINTERVAL_ST=1;
		 }
	},



	SLDetector: function(myTransText) {
		var doc = FExtension.browserInject.getDocument();
		TranslatorIM.SL_SETINTERVAL_ST=0;
		var AUTO = doc.getElementById('SLloc').checked;
		if(AUTO==false){
		  if(myTransText!=""){
		    myTransText = myTransText.replace(/|/g,"");
		    myTransText = myTransText.replace(/&/g,"");
		    myTransText = myTransText.replace(/$/g,"");
		    myTransText = myTransText.replace(/^/g,"");
		    myTransText = myTransText.replace(/~/g,"");
		    myTransText = myTransText.replace(/`/g,"");
		    myTransText = myTransText.replace(/@/g,"");
		    myTransText = myTransText.replace(/%/g," ");

		    var theLIMIT = 100;
		    var SLDImTranslator_url = TranslatorIM.ImTranslator_theurl+"ld.php?tr=bl&text="+encodeURIComponent(truncStrByWord(myTransText,theLIMIT));

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
						alert(chrome.i18n.getMessage('extError1'));
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
				if(ajaxRequest.readyState == 4){

		                        var resp = ajaxRequest.responseText;

					if(resp.indexOf('#|#')!=-1){
				 	  	var tmp=decodeURIComponent(resp);
						var tmp2 = tmp.split("#|#");
					  	resp=tmp2[0];                       
						var DetLang = resp;
						DetLang=DetLang.replace("zh","zh-CN");
						DetLang=DetLang.replace("zt","zh-TW");
                                                TranslatorIM.SL_FLAG=0;
						var LANGS = TranslatorIM.SL_ListOfAvailableLanguagesExt.split(",");
						for (var i = 0; i < LANGS.length; i++){
							var templang = LANGS[i].split(":");
							if(DetLang == templang[0]){ 
							        var tmp = doc.getElementById('SL_lng_from').value;
								if(tmp == "" || tmp == "auto") tmp = TranslatorIM.SL_langSrc;
								DetLang=tmp;
								TranslatorIM.SL_FLAG=1;
							}
						}


		                        	TranslatorIM.LNGforHISTORY = DetLang;
			                        TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
						TranslatorIM.SL_SID_TO   = doc.getElementById('SL_lng_to').value;
						if(TranslatorIM.SL_TS!=TranslatorIM.SL_TSold){
							doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc;
							doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst;
							TranslatorIM.SL_TSold=TranslatorIM.SL_TS; 
						}else{
						        if(TranslatorIM.SL_SID_TO!=""){
								doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
								doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
							}
						}



			                        if(doc.getElementById('SL_lng_to').value==resp && doc.getElementById('SL_lng_from').value!="auto"){
			                                var TMP=doc.getElementById('SL_lng_to').value;
			                                doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
		        	                        doc.getElementById('SL_lng_from').value = TMP;
		                	        }else{
		                        	        if(doc.getElementById('SL_lng_from').value!="auto") doc.getElementById('SL_lng_from').value=DetLang;
						}
					        TranslatorIM.SL_SETINTERVAL_ST=1;


					} else 	{
						var DetLang = "hmn";

                                                TranslatorIM.SL_FLAG=0;
						var LANGS = TranslatorIM.SL_ListOfAvailableLanguagesExt.split(",");
						for (var i = 0; i < LANGS.length; i++){
							var templang = LANGS[i].split(":");
							if(DetLang == templang[0]){ 
							        var tmp = doc.getElementById('SL_lng_from').value;
								if(tmp == "" || tmp == "auto") tmp = TranslatorIM.SL_langSrc;
								DetLang=tmp;
								TranslatorIM.SL_FLAG=1;
							}
						}


		                        	TranslatorIM.LNGforHISTORY = DetLang;
			                        TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
						TranslatorIM.SL_SID_TO   = doc.getElementById('SL_lng_to').value;
						if(TranslatorIM.SL_TS!=TranslatorIM.SL_TSold){
							doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc;
							doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst;
							TranslatorIM.SL_TSold=TranslatorIM.SL_TS; 
						}else{
						        if(TranslatorIM.SL_SID_TO!=""){
								doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
								doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
							}
						}



			                        if(doc.getElementById('SL_lng_to').value==resp && doc.getElementById('SL_lng_from').value!="auto"){
			                                var TMP=doc.getElementById('SL_lng_to').value;
			                                doc.getElementById('SL_lng_to').value = doc.getElementById('SL_lng_from').value;
		        	                        doc.getElementById('SL_lng_from').value = TMP;
		                	        }else{
		                        	        if(doc.getElementById('SL_lng_from').value!="auto") doc.getElementById('SL_lng_from').value=DetLang;
						}
					        TranslatorIM.SL_SETINTERVAL_ST=1;
					}
				}
			}
			ajaxRequest.open("POST", SLDImTranslator_url, true);
			ajaxRequest.send(null); 
		  }
		 }else{
		      	TranslatorIM.SL_SID_FROM = doc.getElementById('SL_lng_from').value;
			TranslatorIM.SL_SID_TO  = doc.getElementById('SL_lng_to').value;
			if(TranslatorIM.SL_TS!=TranslatorIM.SL_TSold){
				doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc;
				doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst;
				TranslatorIM.SL_TSold=TranslatorIM.SL_TS; 
			}else{
	        		if(TranslatorIM.SL_SID_TO!=""){
					doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
					doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
				}
			}
			TranslatorIM.SL_SETINTERVAL_ST=1;
		 }
	},


        theLastStageTranslator: function (){

	},

	DOSLDetection: function(myTransText) {
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
					alert(chrome.i18n.getMessage('extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
		        var resp = ajaxRequest.responseText;
		        if(resp=="zh") 
		        	resp="zh-CN";
		        if(resp=="zt") 
		        	resp="zh-TW";
		        TranslatorIM.SL_DETECT = resp;

			}
		}
		ajaxRequest.open("POST", baseUrl, true);
		ajaxRequest.send(null); 
	},
	truncStrByWord: function(str, length){
		if(str != "undefined"){
			if(str.length > 25){
				length = length - 25;
				var thestr = str;
				if (str.length > length) {
					str = str.substring(0, length);
					str = str.replace(new RegExp("/(.{1,"+length+"})\b.*/"), "$1");    // VK - cuts str to max length without splitting words.
					var str2 = thestr.substring(length, (length+25));
					var tempstr = str2.split(" ");
					var tmp = "";
					for (var i = 0; i < tempstr.length - 1; i++){
						tmp = tmp + tempstr[i] + " ";
					} 
					str = str + tmp;
				}
			} else 
				str = str + " ";
		}
		return str;
	},

	SL_Donate: function(){
		window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2', null, null, null, false, false);
	},

	SL_Voice: function(){
           var doc = FExtension.browserInject.getDocument();
	   doc.getElementById('SL_alert100').style.display="none";
	   var SL_to = doc.getElementById("SL_lng_to").value;
	   SL_to = SL_to.replace("-TW","");
	   SL_to = SL_to.replace("-CN","");
	   var TTStext=TranslatorIM.SL_temp_result.replace(/<br>/g, " ");

	   if(SL_to=="en"||SL_to=="es"||SL_to=="ru"||SL_to=="de"||SL_to=="pt"||SL_to=="fr"||SL_to=="it"||SL_to=="ko"||SL_to=="ja"||SL_to=="zh"){
		   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(TTStext));
	   }else{
	     if(G_TTS.indexOf(SL_to)!=-1){
		if(TTStext.length>100){
		   TTStext=TranslatorIM.SetTTStextLimit(TTStext,95);
		   doc.getElementById('SL_alert100').style.display="block";
		}
	        TranslatorIM.REMOTE_Voice(SL_to,TTStext);
	     }else{
		alert(chrome.i18n.getMessage('extNo_Voice'));
	     }
	   }
	},

	SetTTStextLimit: function(text,limit){
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
	},

	REMOTE_Voice: function(dir, text){
	  var TS = Math.floor(Date.now() / 1000);
	  var length = decodeURIComponent(text).length;
	  var baseUrl = 'https://translate.google.com/translate_tts?ts='+TS+'&ie=UTF-8&tl='+dir+'&total=1&idx=0&textlen='+length+'client=t&q='+decodeURIComponent(text);
//	  var baseUrl = 'http://translate.google.com/translate_tts?ts='+TS+'&ie=utf-8&tl='+dir+'&q='+decodeURIComponent(text);
          var doc = FExtension.browserInject.getDocument();

          var frame = doc.getElementById('lbframe');
	  if(frame)	frame.parentNode.removeChild(frame);
	  if(!doc.getElementById("lbframe")){

	    var die=doc.createElement("iframe");
	    die.src="";
	    die.name="lbframe";
	    die.id="lbframe";
	    die.width="451px";
	    die.height="30px";
	    die.scrolling="no";
	    die.frameBorder="0";
	    doc.getElementById('SL_player2').appendChild(die);

	     var audioElement = doc.createElement('audio');
	     audioElement.setAttribute('src', baseUrl);
	     audioElement.setAttribute('preload', 'auto');
	     audioElement.setAttribute('controls', '');
	     audioElement.setAttribute('autoplay', '');
	     audioElement.setAttribute('id', 'SLmedia');
	     audioElement.setAttribute('name', 'SLmedia');
	     audioElement.setAttribute('style', 'width:450px;height:30px;');
	     doc.getElementById('SL_player2').style.display="block";
	     doc.getElementById('SL_player2').style.height="30px";
	     doc.getElementById('SL_player2').style.width="451px";
	     doc.getElementById('SL_player2').appendChild (audioElement);


             var ifr = window.frames["lbframe"];
	     ifr.document.body.appendChild (audioElement);
	     var ao = ifr.document.getElementById('SLmedia');
	     if(ao)	ao.parentNode.removeChild(ao);



		     var audioElement = doc.createElement('audio');
		     audioElement.setAttribute('src', baseUrl);
		     audioElement.setAttribute('preload', 'auto');
		     audioElement.setAttribute('controls', '');
		     audioElement.setAttribute('autoplay', '');
		     audioElement.setAttribute('id', 'SLmedia');
		     audioElement.setAttribute('name', 'SLmedia');
		     audioElement.setAttribute('style', 'width:450px');

		     var audioframe = document.getElementById('audio');
		     if(audioframe)	audioframe.parentNode.removeChild(audioframe);

		     ifr.document.body.appendChild (audioElement);
		     ifr.document.body.style.marginTop='0px';
		     ifr.document.body.style.marginLeft='0px';

		     doc.getElementById('SL_player2').style.display="block";
		     doc.getElementById('SL_player2').style.height="30px";
		     doc.getElementById('SL_player2').style.width="451px";

		

	  }
	},


	REMOTE_Voice_Close: function(){
	       if(window.event.target.lang==""){
	  	  var doc = FExtension.browserInject.getDocument();
		  if(doc.getElementById('SL_alert100')) doc.getElementById('SL_alert100').style.display="none";
		  doc.getElementById('SL_player2').style.display="none";
		  doc.getElementById('SL_player2').style.height="0px";
		  doc.getElementById('SL_player2').style.width="0px";
		  var frame = doc.getElementById('lbframe');
		  if(frame)	frame.parentNode.removeChild(frame);
		}    

	},

	SL_CopyToClipBoard: function(){
		var OBJ = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result');
		OBJ.contentEditable = true;
		OBJ.unselectable = "off";
		OBJ.focus();
		FExtension.browserInject.getDocument().execCommand('SelectAll');
		FExtension.browserInject.getDocument().execCommand("Copy", false, null);
	},
	SL_Font: function(){
		var OBJ = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result');
		var OBJ2 = FExtension.browserInject.getDocument().getElementById('SL_shadow_translation_result2');
		var OBJ3 = FExtension.browserInject.getDocument().getElementById('SL_bbl_font');
		if(TranslatorIM.SL_FontSize == OBJ.style.fontSize){
			if(OBJ3.style.background.indexOf('font-off.png')!=-1){
				OBJ.style.fontSize = "16px";
				OBJ.style.lineHeight = "22px";
				OBJ2.style.fontSize = "16px";
				OBJ2.style.lineHeight = "22px";
				OBJ3.className = "SL_font_on";
				OBJ3.style.background="url("+FExtension.browserInject.getURL('content/img/util/font-on.png')+")";
				TranslatorIM.SL_FontSize = "16px";
			}else{
				OBJ.style.fontSize = "12px";
				OBJ.style.lineHeight = "18px";
				OBJ2.style.fontSize = "12px";
				OBJ2.style.lineHeight = "18px";
				OBJ3.className = "SL_font_off";
				OBJ3.style.background="url("+FExtension.browserInject.getURL('content/img/util/font-off.png')+")";
				TranslatorIM.SL_FontSize = "12px";
			}
			TranslatorIM.SL_SID_FONT = TranslatorIM.SL_FontSize;
		}
	},
	SL_pinme: function(){
		var OBJ = FExtension.browserInject.getDocument().getElementById('SL_pin');
		if(OBJ.style.background.indexOf("pin-off.png")!=-1){
			OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-on.png')+")";
			OBJ.className = "SL_pin_on";
			OBJ.title = chrome.i18n.getMessage('extUnPin_ttl');
			TranslatorIM.SL_SID_PIN = "true";
			TranslatorIM.SL_FLOATER();
		}else{
			OBJ.className = "SL_pin_off";
			OBJ.title = chrome.i18n.getMessage('extPin_ttl');
			OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-off.png')+")";
			if(TranslatorIM.SL_VirtualPIN == 0){
				TranslatorIM.SL_SID_PIN = "false";
                                FExtension.browserInject.getDocument().getElementById("SL_shadow_translator").style.left=(FExtension.browserInject.getDocument().getElementById("SL_shadow_translator").style.left.replace("px","")-40)+"px";
			}
		}   
	},
	SL_FLOATER: function(){
		var OBJ = FExtension.browserInject.getDocument().getElementById('SL_pin');
		if(OBJ.style.background.indexOf('pin-on.png')!=-1){
			var THEobj = FExtension.browserInject.getDocument().getElementById("SL_shadow_translator");
			THEobj.style.top = TranslatorIM.SL_getScrollY() + (window.innerHeight / 2 - 150) + "px";
			THEobj.style.left = (window.innerWidth - 450 - 30) + "px";
		}
	},
	SL_getScrollY: function(){
		var scrOfY = 0;
		if( FExtension.browserInject.getDocument().body && FExtension.browserInject.getDocument().body.scrollTop ) {
			scrOfY = FExtension.browserInject.getDocument().body.scrollTop;
		} else if( FExtension.browserInject.getDocument().documentElement && FExtension.browserInject.getDocument().documentElement.scrollTop  ) {
			scrOfY = FExtension.browserInject.getDocument().documentElement.scrollTop;
		}
		return scrOfY;
	},

	SL_GOOGLE_WPT: function(){
		if(FExtension.browserInject.getDocument().getElementById("wtgbr")){ 
			FExtension.browserInject.getDocument().getElementById("wtgbr").style.display = 'none';
			FExtension.browserInject.getDocument().getElementById("gt-bbar").style.display = 'none';
			FExtension.browserInject.getDocument().getElementById("clp-btn").style.display = 'none';
			FExtension.browserInject.getDocument().getElementById("contentframe").style.marginTop = '-60px';

			var frames = FExtension.browserInject.getDocument().getElementsByTagName('iframe');
			for(var i = 0; i < frames.length; i++){
			   if(frames[i].name=='c'){ frames[i].sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation"; break; }
			}

		} 
	},
	HotKeysWindow: function(e){
		 var s = FExtension.browserInject.getSelectionText();
		 s=s.substring(0,TranslatorIM.SL_PLANSHET_LIMIT);

//		 if(s!=""){
		  chrome.extension.sendMessage({greeting: "hello"}, function(response) {
	              if(response){
		        //console.log(response.farewell);
        	      }
		  });
		  s=s.replace(/(^[\s]+|[\s]+$)/g, '');
		  var theQ=s.split(" ").length;
		  if(s.match(/[$-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
 		  if(TranslatorIM.SL_dict_bbl=="false") theQ=100;

		  if (s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;


		  if(theQ==1 && s!=""){
			  setTimeout(function(){
				window.blur(); 
				var location="";
				if(FExtension.browser.getBrowserName() == 'firefox') location = FExtension.browserInject.getURL('xul/popup/dictionary.html', false)+"?text="+encodeURIComponent(s);
				else location = FExtension.browserInject.getURL('content/html/popup/dictionary.html')+"?text="+encodeURIComponent(s);
				var winWidth = 480 ;
				var winHeight = 655 ;
				var posLeft = ( screen.width - winWidth ) / 2 ;
				var posTop = ( screen.height - winHeight ) / 2 ;
				TranslatorIM.myWindow = window.open(location,'ImTranslator','width=' + winWidth + ',height=' + winHeight +',top=' + posTop + ',left=' +  posLeft + ',resizable=no,scrollbars=no,toolbar=no,titlebar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no');
				TranslatorIM.myWindow.focus();
			  },500);
		   }else{
			  setTimeout(function(){
				window.blur(); 
				var location="";
				if(FExtension.browser.getBrowserName() == 'firefox') location = FExtension.browserInject.getURL('xul/popup/translator.html', false)+"?text="+encodeURIComponent(s);
				else location = FExtension.browserInject.getURL('content/html/popup/translator.html')+"?text="+encodeURIComponent(s);
				var winWidth = 480 ;
				var winHeight = 655 ;
				var posLeft = ( screen.width - winWidth ) / 2 ;
				var posTop = ( screen.height - winHeight ) / 2 ;
				TranslatorIM.myWindow = window.open(location,'ImTranslator','width=' + winWidth + ',height=' + winHeight +',top=' + posTop + ',left=' +  posLeft + ',resizable=no,scrollbars=no,toolbar=no,titlebar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no');
				TranslatorIM.myWindow.focus();
			  },500);
		   }
//		 }
	},

	SL_BALLOON_TRANSLATION: function(myTransText,evt,st) {
		var doc = FExtension.browserInject.getDocument();
		TranslatorIM.SL_IS_DICTIONARY=0;
		doc.getElementById('SL_TTS_voice').style.display='block';
		doc.getElementById('SL_bbl_font_patch').style.display='none';
		var AUTO = TranslatorIM.SL_langSrc;
		TranslatorIM.DODetection(myTransText);
		var SLIDL = setInterval(function(){if(TranslatorIM.SL_SETINTERVAL_ST==1) {TranslatorIM.SL_EXECUTE_TRANSLATION(myTransText,evt,st);clearInterval(SLIDL);} },10);  

	},

	SL_EXECUTE_TRANSLATION: function(myTransText,evt,st, win) {

	        var doc = FExtension.browserInject;
	        var doc2 = doc.getDocument();
	        var S = doc2.getElementById('SL_lng_from').value;
	        var T = doc2.getElementById('SL_lng_to').value;
		myTransText = myTransText.replace(/#/g,"");
		myTransText = myTransText.replace(/%/g,"");
		if(myTransText != ""){

                        doc2.getElementById('SL_balloon_obj').alt="1";

		        myTransText=myTransText.replace(/(^[\s]+|[\s]+$)/g, '');

		       	var theQ=myTransText.split(" ").length;
			if(myTransText.match(/[$-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;

		        if(TranslatorIM.SL_dict_bbl=="false") theQ=100;

			var baseUrl = "https://translate.google.com/";
			var Stemp=S;
			if(Stemp=="en" || TranslatorIM.SL_FLAG==1) Stemp="auto";
			var SL_Params = "hl=en&langpair="+Stemp+"|"+T+"&q=" + encodeURIComponent(myTransText) + "&tbb=1&ie=UTF-8&oe=UTF-8";

			if(theQ==1){
				baseUrl = "https://clients5.google.com/translate_a/t";
				myTransText=myTransText.replace(/\./gi,"");
				myTransText=myTransText.replace(/\)/gi,"");
				myTransText=myTransText.replace(/\(/gi,"");
				myTransText=myTransText.replace(/\"/gi,"");
				SL_Params = "client=dict&sl="+Stemp+"&tl="+T+"&q=" + unescape(myTransText) + "&tbb=1&ie=UTF-8&oe=UTF-8";
			}
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
						alert(chrome.i18n.getMessage('extError1'));
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
				if(ajaxRequest.readyState == 4){
					var resp = ajaxRequest.responseText;
					if(resp.indexOf('<span id=result_box class="long_text">') > -1)  var ImtranslatorGoogleResult1 = resp.split('<span id=result_box class="long_text">');
					else var ImtranslatorGoogleResult1 = resp.split('<span id=result_box class="short_text">');
                        		if(theQ>1){
						var ImtranslatorGoogleResult2 = ImtranslatorGoogleResult1[1].split('</span></div>');
						var ImtranslatorGoogleResult3 = ImtranslatorGoogleResult2[0].replace(/<br>/ig,'@');
						ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&#39;/ig,"'");
						ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&quot;/ig,"'");
						ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&amp;/ig,"&");
						ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig,"");
						var ImtranslatorGoogleResult4 = ImtranslatorGoogleResult3.replace(/@/ig,"<br>");
//						var ImtranslatorGoogleResult4 = S + "|" + T + "<br>"+ImtranslatorGoogleResult3.replace(/@/ig,"<br>");
						var HID=2;
					} else {

					        var resp = TranslatorIM.SL_DICTparser(resp);

						var idtmp="";
						var ImtranslatorGoogleResult4=resp;
						var HID=6;
						if(resp.indexOf('id=_X')==-1) HID=2;
					}
					var ImtranslatorGoogleResult5="";
					if(ImtranslatorGoogleResult4 != ""){
						doc2.getElementById('SL_shadow_translation_result').innerHTML=ImtranslatorGoogleResult4;
						doc2.getElementById('SL_shadow_translation_result2').innerHTML=ImtranslatorGoogleResult4;
                                                TranslatorIM.SL_temp_result=ImtranslatorGoogleResult4;
						if (TranslatorIM.SL_TH_2 == 1){
			 				if(theQ==1){
								var TEMresp = ImtranslatorGoogleResult4.split("<br>");
								if(TEMresp.length>2){
									for(var k=0; k<TEMresp.length; k++){
										if(k>0)ImtranslatorGoogleResult5 = ImtranslatorGoogleResult5 + TEMresp[k];
									}
								} else ImtranslatorGoogleResult5 = ImtranslatorGoogleResult4;
							} else ImtranslatorGoogleResult5 = ImtranslatorGoogleResult4;

							var SLnow = new Date();
							SLnow = SLnow.toString();
							var TMPtime = SLnow.split(" ");
							var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];
				                        var LNGfrom = S;
				                        if(S=="auto" || doc2.getElementById("SLloc").checked == false) var LNGfrom = TranslatorIM.LNGforHISTORY;
							doc.runtimeSendMessage({greeting: myTransText + "~~" + ImtranslatorGoogleResult5 + "~~" + LNGfrom + "|" + T + "~~"+ doc2.location+"~~"+CurDT+"~~"+HID+"^^"}, function(response) {
								if(response){ 
								//	console.log(response.farewell); 
								}
							});
						}
					}	

					doc2.getElementById('SL_shadow_translation_result').style.direction = "ltr";
					doc2.getElementById('SL_shadow_translation_result').style.textAlign = "left";

					if(T == "ar" || T == "iw" || T == "fa" || T == "ur" || T == "yi"){
						doc2.getElementById('SL_shadow_translation_result').style.direction = "rtl";
						doc2.getElementById('SL_shadow_translation_result').style.textAlign = "right";
					}
					doc2.getElementById('SL_shadow_translator').style.display = 'block';
					TranslatorIM.SL_temp_result = ImtranslatorGoogleResult4;
					if(doc2.getElementById('SL_shadow_translator').offsetHeight > 100) TranslatorIM.SL_BALLON_H = doc2.getElementById('SL_shadow_translator').offsetHeight;
					if(st!=3){
						if(st == 0){
							var OBJ = doc2.getElementById('SL_pin');
							if(OBJ.style.background.indexOf('pin-off.png')!=-1){
								var SLdivField = doc2.getElementById("SL_shadow_translator");
								var virtualX = TranslatorIM.SL_ALIGN('x');
								var virtualY = TranslatorIM.SL_ALIGN('y');
								TranslatorIM.SL_MoveX = virtualX+"px";
								TranslatorIM.SL_MoveY = virtualY+"px";
								SLdivField.style.display = 'block';
								SLdivField.style.top = TranslatorIM.SL_MoveY;
								SLdivField.style.left = TranslatorIM.SL_MoveX;
							}
							var SL_MoveY = TranslatorIM.SL_MoveY;
							var SL_MoveX = TranslatorIM.SL_MoveX;

							if(doc.getBrowserName() == 'firefox' && win){
								if(win.frameElement){
									var rec = win.frameElement.getBoundingClientRect();
									var SL_MoveY = virtualY + rec.y + "px";
									var SL_MoveX = virtualX + rec.x + "px";
								}
							}
						        if(SLdivField){
								SLdivField.style.top = SL_MoveY;
								SLdivField.style.left = SL_MoveX;
							}
						}	

						var MIN = TranslatorIM.SL_GLOBAL_Y1;
						var MAX = TranslatorIM.SL_GLOBAL_Y2;
						if(MIN > TranslatorIM.SL_GLOBAL_Y2){
							MIN = TranslatorIM.SL_GLOBAL_Y2;
							MAX = TranslatorIM.SL_GLOBAL_Y1;
						}
						var AVR = MAX-MIN;
						if(AVR >= (window.innerHeight - 275)){
							TranslatorIM.SL_VirtualPIN = 1;
							var OBJ = doc2.getElementById('SL_pin');
							OBJ.className = "SL_pin_on";
							OBJ.title = chrome.i18n.getMessage('extUnPin_ttl');
							OBJ.style.background="url("+FExtension.browserInject.getURL('content/img/util/pin-on.png')+")";
							TranslatorIM.SL_FLOATER();
						}else 	TranslatorIM.SL_VirtualPIN = 0;

					}
				}
			}
		}
		ajaxRequest.open("POST", baseUrl, true);
		ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.send(SL_Params);
	},





	SL_DICTparser: function (resp){
		TranslatorIM.SL_IS_DICTIONARY=1;
	        var ext = FExtension.browserInject;
		var doc = ext.getDocument();
		doc.getElementById('SL_player2').style.display="none";
		var parsedRES="",parsedTRANS="";
		var PARTS = new Array();
		var SL_to = doc.getElementById('SL_lng_to').value;
		var SL_from = doc.getElementById('SL_lng_from').value;
		var ttsurl=ext.getURL('content/img/util/tts.png');


		var SLDetLngCodes =    new Array ();
		var SLDetLngNames =    new Array ();
		var SL_Lnum = SL_Languages.split(",");
		for(var i = 0; i < SL_Lnum.length; i++){
		        var SL_tmp = SL_Lnum[i].split(":");
			SLDetLngCodes.push(SL_tmp[0]);
			SLDetLngNames.push(SL_tmp[1]);
		}


		var Dt1=resp.split('src":"');
		var Dt2=Dt1[1].split('"');
		var DETECTEDlng=Dt2[0];
		var DETECTEDlongName="English";
		for (var z=0; z<SLDetLngCodes.length; z++){
			if(DETECTEDlng==SLDetLngCodes[z]) { DETECTEDlongName=SLDetLngNames[z];break; }
		}
		for (var z=0; z<SLDetLngNames.length; z++){
			if(SL_from==SLDetLngNames[z]) { SL_from=SLDetLngCodes[z];break; }
		}
		var Tr1=resp.split('dict":[');
		var Tr2=Tr1[0].split('orig":"');

		var Tr3=Tr2[1].split('"');
		var TRANSLATION = Tr3[0];
		var Gurl=FExtension.browserInject.getURL('content/html/popup/dictionary.html');
		var WAY = TranslatorIM.SL_TTSicn(DETECTEDlng);

		var WAY2 = TranslatorIM.SL_TTSicn(SL_to);
		var SL_DETECT = DETECTEDlng;
		if(SL_DETECT=="en" || SL_DETECT=="es" || SL_DETECT=="ru" || SL_DETECT=="de" || SL_DETECT=="pt" || SL_DETECT=="fr" || SL_DETECT=="it" || SL_DETECT=="ko" || SL_DETECT=="ja" || SL_DETECT=="zh-CN" || SL_DETECT=="zh-TW" || SL_DETECT=="ar" || SL_DETECT=="cs" || SL_DETECT=="da" || SL_DETECT=="nl" || SL_DETECT=="fi" || SL_DETECT=="el" || SL_DETECT=="ht" || SL_DETECT=="hi" || SL_DETECT=="hu" || SL_DETECT=="no" || SL_DETECT=="pl" || SL_DETECT=="sk" || SL_DETECT=="sv" || SL_DETECT=="th" || SL_DETECT=="tr" || SL_DETECT=="la" && G_TTS.indexOf(SL_DETECT)==-1){
//		if(SL_DETECT=="en" || SL_DETECT=="es" || SL_DETECT=="ru" || SL_DETECT=="de" || SL_DETECT=="pt" || SL_DETECT=="fr" || SL_DETECT=="it" || SL_DETECT=="ko" || SL_DETECT=="ja" || SL_DETECT=="zh-TW" || SL_DETECT=="zh-CN" && G_TTS.indexOf(SL_DETECT)==-1){
			if(resp.indexOf("reverse_translation")!=-1){
				if(WAY == 1) 	parsedTRANS = "<div id=_X><div id=_XL><div class=TTS"+WAY+" id=SL_000 style=\"background:url("+ttsurl+");\" lang=\""+DETECTEDlng+"\" title=\""+TRANSLATION+"\"></div></div><div id=_XR align=left style='margin-left:5px;font-weight:bold;font-size:14px;'>" + TRANSLATION + "</div></div>";
				else    	parsedTRANS = "<div id=_X><div id=_FL><div class=TTS"+WAY+" id=SL_000 style=\"background:url("+ttsurl+");\" lang=\""+DETECTEDlng+"\" title=\""+TRANSLATION+"\"></div></div><div id=_FR>" + TRANSLATION + "</div></div>";
			} else {
				if(WAY == "1") parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
				else parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
			}
		} else {
			if(resp.indexOf("reverse_translation")!=-1){
				if(WAY == 1) 	parsedTRANS = "<div id=_X><div id=_XR align=left style='margin-left:5px;font-weight:bold;font-size:14px;'>" + TRANSLATION + "</div></div>";
				else    	parsedTRANS = "<div id=_X><div id=_FR>" + TRANSLATION + "</div></div>";
			} else {
				if(WAY == "1") parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
				else parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
			}
		}

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
							if(k < (R2.length-1))	Rline = Rline + "<a class=_ALNK title=\""+R2[k]+"\" id='SL_" +j+"_"+ k + "' href='"+Gurl+"?dir="+ SL_from + "|" + SL_to +"&text=" + encodeURIComponent(R2[k]) + "'>" + R2[k] + "</a>, ";
							else			Rline = Rline + "<a class=_ALNK title=\""+R2[k]+"\" id='SL_" +j+"_"+ k + "' href='"+Gurl+"?dir="+ SL_from + "|" + SL_to +"&text=" + encodeURIComponent(R2[k]) + "'>" + R2[k] + "</a>";
						}
						var SL_TTS = article + T2[j];
						if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-CN" || SL_to=="zh-TW" || SL_to=="ar" || SL_to=="cs" || SL_to=="da" || SL_to=="nl" || SL_to=="fi" || SL_to=="el" || SL_to=="ht" || SL_to=="hi" || SL_to=="hu" || SL_to=="no" || SL_to=="pl" || SL_to=="sk" || SL_to=="sv" || SL_to=="th" || SL_to=="tr" || SL_to=="la" && G_TTS.indexOf(SL_to)==-1){
//						if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-TW" || SL_to=="zh-CN" && G_TTS.indexOf(SL_to)==-1){
						   if(WAY2==1) SL_TTS = "<div id=_X><div id=_XL><div class=_V id=\"SL_"+i+j+"\" style=\"background:url("+ttsurl+");\" lang=\""+SL_to+"\" title=\"" + T2[j] + "\"></div></div><div id=_XR>" + article + T2[j] + "</div></div>";
						   else SL_TTS = "<div id=_X><div id=_FL><div class=TTS"+WAY2+" id=\"SL_"+i+j+"\" style=\"background:url("+ttsurl+");\" lang=\""+SL_to+"\" title=\"" + T2[j] + "\"></div></div><div id=_XR>" + article + T2[j] + "</div></div>";
						}				
						parsedRES = parsedRES + "<div id=_A><div id=_AL>" + SL_TTS + "</div><div id=_AR>" + Rline + "</div></div>";
					  } else {
						if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-CN" || SL_to=="zh-TW" || SL_to=="ar" || SL_to=="cs" || SL_to=="da" || SL_to=="nl" || SL_to=="fi" || SL_to=="el" || SL_to=="ht" || SL_to=="hi" || SL_to=="hu" || SL_to=="no" || SL_to=="pl" || SL_to=="sk" || SL_to=="sv" || SL_to=="th" || SL_to=="tr" || SL_to=="la" && G_TTS.indexOf(SL_to)==-1){
//						if(SL_to=="en" || SL_to=="es" || SL_to=="ru" || SL_to=="de" || SL_to=="pt" || SL_to=="fr" || SL_to=="it" || SL_to=="ko" || SL_to=="ja" || SL_to=="zh-TW" || SL_to=="zh-CN"  && G_TTS.indexOf(SL_to)==-1){
						   SL_TTS = "<div id=_X><div id=_XL><div class=_V id=\"SL_"+i+j+"\" style=\"background:url("+ttsurl+");\" lang=\""+SL_to+"\" title=\"" + T2[j] + "\"></div></div><div id=_XR>" + article + T2[j] + "</div></div>";
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
		    doc.getElementById('SL_TTS_voice').style.display='none';
		    doc.getElementById('SL_bbl_font_patch').style.display='block';
		    } else {
		   	Tr2=Tr1[0].split('trans":"');
	   		Tr3=Tr2[1].split('"');
		   	parsedTRANS = Tr3[0];
		        doc.getElementById('SL_TTS_voice').style.display='block';
		    }
		 if(parsedRES==""){
		   doc.getElementById('SL_shadow_translation_result').style.direction="ltr";
		   doc.getElementById('SL_shadow_translation_result').style.textAlign="left";
		   if(SL_to=="ar" || SL_to=="iw" || SL_to=="fa" || SL_to=="ur" || SL_to=="yi"){
			 doc.getElementById('SL_shadow_translation_result').style.direction="rtl";
			 doc.getElementById('SL_shadow_translation_result').style.textAlign="right";
		   }
		 } 
		 parsedRES = parsedTRANS +"<br>"+ parsedRES;
		 SL_temp_result2 = parsedRES;
		 setTimeout(function(){
		     TranslatorIM.SL_ALIGNER1(SL_to);
		     TranslatorIM.SL_ALIGNER2(DETECTEDlng);
		 },5);
		 return parsedRES;

	},


SL_ALIGNER1: function (SL_to){
 var doc = FExtension.browserInject.getDocument();
 var nums=doc.getElementsByTagName("div").length;
 if(SL_to!="ar" && SL_to!="iw" && SL_to!="fa" && SL_to!="ur" && SL_to!="yi"){
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AL")	 doc.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AL")	 doc.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
},

SL_ALIGNER2: function (SL_from){
 var doc = FExtension.browserInject.getDocument();
 var nums=doc.getElementsByTagName("div").length;
 if(SL_from!="ar" && SL_from!="iw" && SL_from!="fa" && SL_from!="ur" && SL_from!="yi"){
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AR")	 doc.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(doc.getElementsByTagName("div")[I].id == "_AR")	 doc.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
},

SL_TTSicn: function (lng){
 var doc = FExtension.browserInject.getDocument();
 var OUT="";
 if(lng!="ar" && lng!="iw" && lng!="fa" && lng!="ur" && lng!="yi")  OUT=1;
 else   OUT=2;
 return(OUT);
},





	ClickInside: function(event){
		 var target = event.target || event.srcElement;
		 var id = target.id
		 var className = target.className;
		 if(className == "_V") 	 TranslatorIM.tagClick(event,id);
		 if(className == "TTS1") TranslatorIM.tagClick(event,id);
		 if(className == "TTS2") TranslatorIM.tagClick(event,id);
		 if(className == "_ALNK") {
		    var tags = FExtension.browserInject.getDocument().getElementsByClassName("_ALNK");
		    for (var j=0; j<tags.length; j++){
		         tags[j].href='#';
			 tags[j].addEventListener('mouseup', function(e){ TranslatorIM.UrltagClick(e) }, false);
		    }
		 }
	},


	tagClick: function(event,id){
		   var doc = FExtension.browserInject.getDocument();
		   var SL_from = doc.getElementById('SL_lng_from').value;
		   doc.getElementById("SL_000").lang=SL_from;
		   event.target.onmousemove = function () {TranslatorIM.SL_ShowBalloon();}
		   var SL_to = doc.getElementById(id).lang;
		   SL_to=SL_to.replace("zh-CN","zh");
		   SL_to=SL_to.replace("zh-TW","zh");

		   if(doc.getElementById('SL_lng_from').value=="auto" || doc.getElementById("SLloc").checked == false) {if(id=="SL_000") SL_to = TranslatorIM.LNGforHISTORY;}
		   else{ 
			if(id=="SL_000"){
				SL_to = SL_from;

				// By VK . A patch------------------------------------
				if(SL_to.length>7)SL_to="en";
				// By VK . A patch------------------------------------
			}

		   }
		   if(SL_to=="en"||SL_to=="es"||SL_to=="ru"||SL_to=="de"||SL_to=="pt"||SL_to=="fr"||SL_to=="it"||SL_to=="ko"||SL_to=="ja"||SL_to=="zh"){
			   window.open("http://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(doc.getElementById(event.target.id).title));
		   } else {
		     if(G_TTS.indexOf(SL_to)!=-1){
        		TranslatorIM.REMOTE_Voice(SL_to,doc.getElementById(event.target.id).title);
		     }else alert(chrome.i18n.getMessage('extNo_Voice'));     
		   }
		   event.stopPropagation();
		   event.cancelBubble = true;
	},







	UrltagClick: function(e){
		e.target.onmousemove = function () {TranslatorIM.SL_ShowBalloon();}
		FExtension.browserInject.getDocument().getElementById(e.target.id).href='#';
		FExtension.browserInject.getDocument().getElementById(e.target.id).style.cursor='pointer';
		var txt = FExtension.browserInject.getDocument().getElementById(e.target.id).title;
		setTimeout(function() { 
			TranslatorIM.SL_BALLOON_TRANSLATION(txt,null,3); 
		}, 150);   
		e.stopPropagation();
		e.cancelBubble = true;       
	},



	SL_SCROLL: function(){
		TranslatorIM.SL_bring_UP();
	},


	SL_OBJ_BUILDER: function(){

                  var doc = FExtension.browserInject.getDocument();


                  var btn = doc.getElementById('SL_button');
                  if(btn){
                      return;
                  }
	          var container = doc.body;

 



                  if(container){


		  var newElem = doc.createElement ("div");
		  var newElemid = doc.createAttribute("id");
		  newElemid.value = "SL_balloon_obj";
	          newElem.setAttributeNode(newElemid);
		  var newElemtp = doc.createAttribute("alt");
		  newElemtp.value = "0";
	          newElem.setAttributeNode(newElemtp);

		  //---------------------------
		  

			  var OB = doc.createElement('div');
			  var id = doc.createAttribute("id");
			  id.value = "SL_button";
		          OB.setAttributeNode(id);
 			  var cl = doc.createAttribute("class");
			  cl.value = "ImTranslatorLogo";
	        	  OB.setAttributeNode(cl);
		          newElem.appendChild(OB);

		        
			  OB1 = doc.createElement('div');
			  id = doc.createAttribute("id");
			  id.value = "SL_shadow_translation_result2";
		          OB1.setAttributeNode(id);
		          newElem.appendChild(OB1);

			  OB2 = doc.createElement('div');
			  id = doc.createAttribute("id");
			  id.value = "SL_shadow_translator";
	        	  OB2.setAttributeNode(id);
		          newElem.appendChild(OB2);

				  OB3 = doc.createElement('div');
				  id = doc.createAttribute("id");
				  id.value = "SL_planshet";
	        		  OB3.setAttributeNode(id);

					OB4 = doc.createElement('div');
					id = doc.createAttribute("id");
					id.value = "SL_TB";
	        			OB4.setAttributeNode(id);

						var OB5 = doc.createElement('div');
						id = doc.createAttribute("id");
						id.value = "bubblelogo";
					        OB5.setAttributeNode(id);
				 		cl = doc.createAttribute("class");
						cl.value = "ImTranslatorLogo";
	        				OB5.setAttributeNode(cl);
					        OB4.appendChild(OB5);

				        	var OB6 = doc.createElement("table");
						id = doc.createAttribute("id");
						id.value = "SL_tables";
						OB6.setAttributeNode(id);
						var cs = doc.createAttribute("cellspacing");
						cs.value = "1";
						OB6.setAttributeNode(cs);

						        var OB7 = doc.createElement("tr");
						        OB6.appendChild(OB7); 

							        var OB8 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB8.setAttributeNode(cl);
								var w = doc.createAttribute("width");
								w.value = "10%";
								OB8.setAttributeNode(w);
								var a = doc.createAttribute("align");
								a.value = "right";
								OB8.setAttributeNode(a);
							        OB7.appendChild(OB8);

								        var OB9 = doc.createElement("input");
									id = doc.createAttribute("id");
									id.value = "SLloc";
									OB9.setAttributeNode(id);
									var ty = doc.createAttribute("type");
									ty.value = "checkbox";
									OB9.setAttributeNode(ty);
									var ti = doc.createAttribute("title");
									ti.value = chrome.i18n.getMessage('extLock_in_language');
									OB9.setAttributeNode(ti);
				        				OB8.appendChild(OB9); 

							        var OB10 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB10.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "20%";
								OB10.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "left";
								OB10.setAttributeNode(a);
							        OB7.appendChild(OB10);

									var OB11 = doc.createElement("select");
									id = doc.createAttribute("id");
									id.value = "SL_lng_from";
									OB11.setAttributeNode(id);

										var OB12 = doc.createElement('option');
										var v = document.createAttribute("value");
										v.value = "auto";
										OB12.setAttributeNode(v);
										OB12.appendChild(doc.createTextNode(chrome.i18n.getMessage('extDetect_language_from_box')));
										OB11.appendChild(OB12); 

										var MENU = TranslatorIM.SL_ListOfAvailableLanguages.split(",");
										for(var J=0; J < MENU.length; J++){
										    var CURlang3 = MENU[J].split(":");
										    OB12 = doc.createElement('option');
										    v = doc.createAttribute("value");
										    v.value = CURlang3[0];
										    OB12.setAttributeNode(v);
										    OB12.appendChild(doc.createTextNode(CURlang3[1].replace("&#160;"," ")));
										    OB11.appendChild(OB12);
										}							                       

								        OB10.appendChild(OB11);

							        var OB13 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB13.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "3";
								OB13.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB13.setAttributeNode(a);
							        OB7.appendChild(OB13);

									var OB14 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_switch_b";
								        OB14.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = chrome.i18n.getMessage('extSwitch_languages_ttl');
					        			OB14.setAttributeNode(ti);
								        OB13.appendChild(OB14);

							        var OB15 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB15.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "20%";
								OB15.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "left";
								OB15.setAttributeNode(a);
							        OB7.appendChild(OB15);

									var OB16 = doc.createElement("select");
									id = doc.createAttribute("id");
									id.value = "SL_lng_to";
									OB16.setAttributeNode(id);
									        var thelang = "es";
										if(TranslatorIM.SL_langDst!="" && TranslatorIM.SL_SID_TO=="") thelang = TranslatorIM.SL_langDst;
										if(TranslatorIM.SL_langDst=="" && TranslatorIM.SL_SID_TO!="") thelang = TranslatorIM.SL_SID_TO;
										for(J=0; J < MENU.length; J++){
										    CURlang3 = MENU[J].split(":");
										    option = doc.createElement('option');
										    if(CURlang3[0] == thelang){
											    var sel = doc.createAttribute("selected");
											    sel.value = "selected";
											    option.setAttributeNode(sel);
										    }
										    v = doc.createAttribute("value");
										    v.value = CURlang3[0];
										    option.setAttributeNode(v);
										    option.appendChild(doc.createTextNode(CURlang3[1].replace("&#160;"," ")));
										    OB16.appendChild(option);
										}							                       

								        OB15.appendChild(OB16);									

							        var OB17 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB17.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "5%";
								OB17.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB17.setAttributeNode(a);
							        OB7.appendChild(OB17);

									OB17.appendChild(doc.createTextNode(" "));

							        var OB18 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB18.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB18.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB18.setAttributeNode(a);
							        OB7.appendChild(OB18);

									var OB19 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_TTS_voice";
								        OB19.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = chrome.i18n.getMessage('extListen_ttl');
					        			OB19.setAttributeNode(ti);
								        OB18.appendChild(OB19);

							        var OB20 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB20.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB20.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB20.setAttributeNode(a);
							        OB7.appendChild(OB20);

									var OB21 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_copy";
								        OB21.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = chrome.i18n.getMessage('extCopy_ttl');
					        			OB21.setAttributeNode(ti);
							 		cl = doc.createAttribute("class");
									cl.value = "SL_copy";
					        			OB21.setAttributeNode(cl);
								        OB20.appendChild(OB21);

							        var OB22 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB22.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB22.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB22.setAttributeNode(a);
							        OB7.appendChild(OB22);

									var OB23 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_bbl_font_patch";
								        OB23.setAttributeNode(id);
							 		var js = doc.createAttribute("onclick");
									js.value = "alert(chrome.i18n.getMessage('extNot_available'))";
					        			OB23.setAttributeNode(js);
								        OB22.appendChild(OB23);

									var OB24 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_bbl_font";
								        OB24.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = chrome.i18n.getMessage("extFont_Size_ttl");
					        			OB24.setAttributeNode(ti);
							 		cl = doc.createAttribute("class");
									cl.value = "SL_bbl_font";
					        			OB24.setAttributeNode(cl);
								        OB22.appendChild(OB24);

							        var OB25 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB25.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB25.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "center";
								OB25.setAttributeNode(a);
							        OB7.appendChild(OB25);

									var OB26 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_TH";
								        OB26.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = chrome.i18n.getMessage("extHistory_ttl");
					        			OB26.setAttributeNode(ti);
								        OB25.appendChild(OB26);

							        var OB27 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB27.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "18%";
								OB27.setAttributeNode(w);
							        OB7.appendChild(OB27);

							        var OB28 = doc.createElement("td");
								cl = doc.createAttribute("class");
								cl.value = "SL_td";
								OB28.setAttributeNode(cl);
								w = doc.createAttribute("width");
								w.value = "8%";
								OB28.setAttributeNode(w);
								a = doc.createAttribute("align");
								a.value = "right";
								OB28.setAttributeNode(a);
							        OB7.appendChild(OB28);

									var OB29 = doc.createElement('div');
									id = doc.createAttribute("id");
									id.value = "SL_pin";
								        OB29.setAttributeNode(id);
							 		ti = doc.createAttribute("title");
									ti.value = chrome.i18n.getMessage("extPin_ttl");
					        			OB29.setAttributeNode(ti);
								        OB28.appendChild(OB29);

						OB4.appendChild(OB6);
			        	OB3.appendChild(OB4);
		        	OB2.appendChild(OB3);

				var OB30 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_shadow_translation_result";
			        OB30.setAttributeNode(id);
			        OB2.appendChild(OB30);

				var OB31 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_player2";
			        OB31.setAttributeNode(id);
			        OB2.appendChild(OB31);

				var OB32 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_alert100";
			        OB32.setAttributeNode(id);
			        OB2.appendChild(OB32);

					OB32.appendChild(doc.createTextNode(chrome.i18n.getMessage("extTTS_Limit")));

				var OB33 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_bbl_donate";
			        OB33.setAttributeNode(id);
				ti = doc.createAttribute("title");
				ti.value = chrome.i18n.getMessage("extContribution_ttl");
			        OB33.setAttributeNode(ti);
			        OB2.appendChild(OB33);

				var OB34 = doc.createElement('div');
				id = doc.createAttribute("id");
				id.value = "SL_Balloon_options";
			        OB34.setAttributeNode(id);
			        OB2.appendChild(OB34);

					var OB35 = doc.createElement('a');
					hr = doc.createAttribute("href");
					hr.value = FExtension.browserInject.getURL('content/html/options/options-bbl.html');
				        OB35.setAttributeNode(hr);
					var tar = doc.createAttribute("target");
					tar.value = "_blank";
				        OB35.setAttributeNode(tar);
					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB35.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = chrome.i18n.getMessage("extOptions_ttl");
				        OB35.setAttributeNode(ti);
				        OB34.appendChild(OB35);

					OB35.appendChild(doc.createTextNode(chrome.i18n.getMessage("extOptions")));

					OB34.appendChild(doc.createTextNode(" : "));

					var OB36 = doc.createElement('a');
					hr = doc.createAttribute("href");
					hr.value = FExtension.browserInject.getURL('content/html/options/history.html');
				        OB36.setAttributeNode(hr);
					var tar = doc.createAttribute("target");
					tar.value = "_blank";
				        OB36.setAttributeNode(tar);
					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB36.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = chrome.i18n.getMessage("extHistory_ttl");
				        OB36.setAttributeNode(ti);
				        OB34.appendChild(OB36);

					OB36.appendChild(doc.createTextNode(chrome.i18n.getMessage("extHistory")));

					OB34.appendChild(doc.createTextNode(" : "));

					var OB37 = doc.createElement('a');
					hr = doc.createAttribute("href");
					hr.value = "http://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/chrome-bubble-translator/";
				        OB37.setAttributeNode(hr);
					var tar = doc.createAttribute("target");
					tar.value = "_blank";
				        OB37.setAttributeNode(tar);
					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB37.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = chrome.i18n.getMessage("extHelp_ttl");
				        OB37.setAttributeNode(ti);
				        OB34.appendChild(OB37);

					OB37.appendChild(doc.createTextNode(chrome.i18n.getMessage("extHelp")));

					OB34.appendChild(doc.createTextNode(" : "));

					var OB38 = doc.createElement('a');
					hr = doc.createAttribute("href");
					hr.value = FExtension.browserInject.getURL('content/html/options/feedback.html');
				        OB38.setAttributeNode(hr);
					var tar = doc.createAttribute("target");
					tar.value = "_blank";
				        OB38.setAttributeNode(tar);
					cl = doc.createAttribute("class");
					cl.value = "SL_options";
				        OB38.setAttributeNode(cl);
					ti = doc.createAttribute("title");
					ti.value = chrome.i18n.getMessage("extFeedback_ttl");
				        OB38.setAttributeNode(ti);
				        OB34.appendChild(OB38);

					OB38.appendChild(doc.createTextNode(chrome.i18n.getMessage("extFeedback")));


		  //---------------------------
		  

                  if(container.tagName == "FRAMESET"){
                      container.parentNode.insertBefore(newElem, container.nextSibling);
                  }else{
                    container.appendChild (newElem);
		    doc.getElementById("SL_balloon_obj").style.display='block';

                  }
                  doc.getElementById('SL_shadow_translation_result2').style.display="none";
		  TranslatorIM.SL_IMG_LOADER();
		  }
                  if (FExtension.browserInject.getBrowserName() == 'firefox') {
                    TranslatorIM.addEvent(doc.getElementById('openFeedback'), 'click', function(){ FExtension.browserInject.openNewTab(FExtension.browserInject.getURL('feedback.html', false))});
                    TranslatorIM.addEvent(doc.getElementById('openHistory'), 'click', function(){ FExtension.browserInject.openNewTab(FExtension.browserInject.getURL('history.html', false))});
                    TranslatorIM.addEvent(doc.getElementById('openOption'), 'click', function(){ FExtension.browserInject.openNewTab(FExtension.browserInject.getURL('options-bbl.html', true))});
                  }

               

                   if(doc.getElementById("SL_balloon_obj")){

			  if(self!=top){
                	       container.removeChild (doc.getElementById("SL_balloon_obj"));
			  }
/*
        	          var id = TranslatorIM.TempActiveObjId;                                                                                    
       	        	  if(!window.getSelection().anchorNode && id != "SL_button" && id !="SL_TTS_voice" && id !="SL_lng_from" && id !="SL_lng_to" && id !="SLloc") container.removeChild (doc.getElementById("SL_balloon_obj"));
	               	  else {doc.getElementById("SL_balloon_obj").style.display='block';}
*/
			  if(doc.getElementById('SL_tables')){						
	        	         var escaper = doc.getElementById('SL_tables').offsetWidth;		
       	          		 if((escaper != 0 && escaper > 410) && TranslatorIM.TempActiveObjId !="SL_button") container.removeChild (doc.getElementById("SL_balloon_obj"));
			  }


		   }



           FExtension.browserInject.extensionSendMessage({greeting: FExtension.store.getLocalStorage().length}, function(response) {
             if(response && response.farewell){
                var theresponse = response.farewell.split("~");
                var theresponse1 = theresponse[2].split("|");

                TranslatorIM.SL_MSG=response.farewell;
                TranslatorIM.SL_langSrc=theresponse1[0];
                TranslatorIM.SL_langDst=theresponse1[1];
                var CHbox=theresponse1[7];


		if(TranslatorIM.SL_TS==TranslatorIM.SL_TSold && TranslatorIM.SL_SID_FROM!=""){
	                doc.getElementById('SL_lng_from').value=TranslatorIM.SL_SID_FROM;
	                doc.getElementById('SL_lng_to').value=TranslatorIM.SL_SID_TO;
			if(TranslatorIM.SL_TMPbox=="true") doc.getElementById('SLloc').checked=false;
			else doc.getElementById('SLloc').checked=true;
		} else {
	                doc.getElementById('SL_lng_from').value=TranslatorIM.SL_langSrc;
	                doc.getElementById('SL_lng_to').value=TranslatorIM.SL_langDst;
			if(CHbox=="true") doc.getElementById('SLloc').checked=false;
			else doc.getElementById('SLloc').checked=true;
		}




            }

          });

	}

}






if(FExtension.browser.isLocalStoragePreset()){
	TranslatorIM.init();
}else{
	var appcontent = window.document.getElementById("appcontent");
	appcontent.addEventListener("DOMContentLoaded", function(){
	TranslatorIM.init();
        init();
	}, false);
}
window.addEventListener("DOMContentLoaded", TranslatorIM.SL_GOOGLE_WPT(), false);

}catch(e){
//	alert(chrome.i18n.getMessage('extError2'));
}


