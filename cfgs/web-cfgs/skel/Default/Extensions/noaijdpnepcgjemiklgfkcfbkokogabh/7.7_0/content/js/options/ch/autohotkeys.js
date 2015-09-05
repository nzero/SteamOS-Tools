'use strict';
var SL_KSET = new Array(16,"Shift",17,"Ctrl",18,"Alt",48,"0",49,"1",50,"2",51,"3",52,"4",53,"5",54,"6",55,"7",58,"8",57,"9",81,"Q",87,"W",69,"E",82,"R",84,"T",89,"Y",85,"U",73,"I",79,"O",80,"P",65,"A",83,"S",68,"D",70,"F",71,"G",72,"H",74,"J",75,"K",76,"L",90,"Z",88,"X",67,"C",86,"V",66,"B",78,"N",77,"M");
var SL_KSET_taken = new Array("Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + T","Ctrl + O","Ctrl + S","Ctrl + D","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + N","Shift + 8","Shift + B","Shift + J","Shift + M","Alt + 8","Alt + F","Ctrl + Shift + B","Ctrl + Shift + J","Ctrl + Shift + M","Ctrl + Shift + D","Shift + P","Shift + I","Shift + G","0","D","J","E","G","F","R","S","P","Y");
var SL_KEYCOUNT = { length: 0 };
var SL_KEYSTRING = "";
var SL_TEMPKEYSTRING = "";
var SL_ACTIVE="";
var SL_ACTIVE_TAB=1;
var SL_TMP="";
var TMP="";
(function(){GEBI("SRV1").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1,1);},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){ SL_KBD(1,0);},!1); } )();
(function(){GEBI("SRV2").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV2"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1,1);},!1); } )();
(function(){GEBI("SRV2").addEventListener("mouseout",function(){ SL_KBD(1,0);},!1); } )();
(function(){GEBI("SRV3").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV3"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(2,1);},!1); } )();
(function(){GEBI("SRV3").addEventListener("mouseout",function(){ SL_KBD(2,0);},!1); } )();
(function(){GEBI("SRV4").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV4"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(2,1);},!1); } )();
(function(){GEBI("SRV4").addEventListener("mouseout",function(){ SL_KBD(2,0);},!1); } )();
(function(){GEBI("SRV5").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV5"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(3,1);},!1); } )();
(function(){GEBI("SRV5").addEventListener("mouseout",function(){ SL_KBD(3,0);},!1); } )();
(function(){GEBI("SL_save_button").addEventListener("click",function(){save_options();},!1);})();
(function(){GEBI("SL_save_button").addEventListener("mouseout",function(){close_msg();},!1);})();

(function(){GEBI("SL_form_closer").addEventListener("click",function(){SL_close();},!1);} )();

(function(){GEBI("SL_del1").addEventListener("click",function(){NoneColor(1);SL_del(1);},!1);} )();
(function(){GEBI("SL_del3").addEventListener("click",function(){NoneColor(3);SL_del(3);},!1);} )();
(function(){GEBI("SL_del5").addEventListener("click",function(){NoneColor(5);SL_del(5);},!1);} )();

function CONSTRUCTOR(){
	GEBI('SL_h4').appendChild(document.createTextNode(FExtension.element('extHKconflict')));
	GEBI('SL_form_closer').title=FExtension.element('extClose');
	GEBI('SL_ClearTr').appendChild(document.createTextNode(FExtension.element('extClearTr')));
	GEBI('SL_TOMS1').appendChild(document.createTextNode(FExtension.element('extTOMS')));
	GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element('extInvTr')));

	GEBI('SL_TOMS2').appendChild(document.createTextNode(FExtension.element('extTOMS')));
	GEBI('SL_TOMS3').appendChild(document.createTextNode(FExtension.element('extTOMS')));
	GEBI('SL_del1').title=FExtension.element('extDelete');
	GEBI('SL_del3').title=FExtension.element('extDelete');
	GEBI('SL_del5').title=FExtension.element('extDelete');
	GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element('extSaveHK')));
}

(function(e){
	window.addEventListener("load",function(e){
		CONSTRUCTOR();
		var str = window.location.toString();
		var line = str.split("?");
		if(line.length>1) SL_ACTIVE_TAB = line[1];


	        if(SL_ACTIVE_TAB==1 || SL_ACTIVE_TAB == 2){
			if(window['top'].GEBI("SL_HK1").checked==true)  GEBI("SRVBox1").checked = true;
			else GEBI("SRVBox1").checked = false;

			if(window['top'].GEBI("SL_HK2").checked==true)  GEBI("SRVBox2").checked = true;
			else GEBI("SRVBox2").checked = false;
		} else {
			var OP1 = FExtension.store.get("SL_HKset_inv").split("|");
			if(OP1[2]=="true")  GEBI("SRVBox2").checked = true;
			else GEBI("SRVBox2").checked = false;

			var OP2 = FExtension.store.get("SL_HKset").split("|");
			if(OP2[2]=="true")  GEBI("SRVBox1").checked = true;
			else GEBI("SRVBox1").checked = false; 
		}

	        if(SL_ACTIVE_TAB==3 || SL_ACTIVE_TAB == 4){
			if(window['top'].GEBI("SL_FK_box1").checked==true)  GEBI("SRVBox3").checked = true;
			else GEBI("SRVBox3").checked = false;

			if(window['top'].GEBI("SL_FK_box2").checked==true)  GEBI("SRVBox4").checked = true;
			else GEBI("SRVBox4").checked = false;
		} else {
			var OP3 = FExtension.store.get("SL_FK_box1"); 
			if(OP3=="true")  GEBI("SRVBox3").checked = true;
			else GEBI("SRVBox3").checked = false;

			var OP4 = FExtension.store.get("SL_FK_box2"); 
			if(OP4=="true")  GEBI("SRVBox4").checked = true;
			else GEBI("SRVBox4").checked = false;
		}

	        if(SL_ACTIVE_TAB==5){
			if(window['top'].GEBI("SL_translation_mos_bbl").checked==true)  GEBI("SRVBox5").checked = true;
			else GEBI("SRVBox5").checked = false;
		} else {
			var OP5 = FExtension.store.get("SL_translation_mos_bbl");
			if(OP5=="true")  GEBI("SRVBox5").checked = true;
			else GEBI("SRVBox5").checked = false;
		}

	        if(SL_ACTIVE_TAB==1 || SL_ACTIVE_TAB == 2){
		        GEBI('SRV1').value=window['top'].GEBI('SRV1').value;
	        	GEBI('SRV2').value=window['top'].GEBI('SRV2').value;
		} else {
		        GEBI('SRV1').value=FExtension.store.get('SL_HK_gt1');
	        	GEBI('SRV2').value=FExtension.store.get('SL_HK_gt2');
	        }
	        if(SL_ACTIVE_TAB==3 || SL_ACTIVE_TAB == 4){
		        GEBI('SRV3').value=window['top'].GEBI('SRV3').value;
	        	GEBI('SRV4').value=window['top'].GEBI('SRV4').value;
	        } else {
		        GEBI('SRV3').value=FExtension.store.get('SL_HK_it1');
		        GEBI('SRV4').value=FExtension.store.get('SL_HK_it2');
		}
	        if(SL_ACTIVE_TAB==5){
		        GEBI('SRV5').value=window['top'].GEBI('SRV5').value;
		} else {
		        GEBI('SRV5').value=FExtension.store.get('SL_HK_bb1');
		}
		SetAllNone();
		VERIFY_ALL();
	},!1);
} )();

(function(e){
	window.addEventListener("keydown",function(e){
	          var ob = SL_ACTIVE;
		  TMP = ob.value;
	          if(ob){
		    	if(!SL_KEYCOUNT[e.keyCode] && SL_KEYCOUNT.length<3)   {
        			SL_KEYCOUNT[e.keyCode] = true;
		        	SL_KEYCOUNT.length++;
                                var key=GET_KEY(e.keyCode);
				SL_KEYSTRING=SL_KEYSTRING+key+":|";
        	        	if(SL_KEYSTRING!="") SL_TEMPKEYSTRING=SL_KEYSTRING;
			}
		  }
		setTimeout(function() {HK_CATCHER(SL_TEMPKEYSTRING,":|",ob);VERIFY_TAKEN(ob);FINISHING(ob); SL_KEYCOUNT = { length: 0 }; SL_KEYSTRING="";SL_TEMPKEYSTRING="";}, 1500);
	},!1);
})();

function FINISHING(ob){

 SL_KBD(1,0);
 SL_KBD(2,0);
 SL_KBD(3,0);
 if(ob.value!=""){
  var NewLine="";
  var ctrl="";
  var alt="";
  var shift="";
  var tmp = ob.value.split(" + ");
  for (var i=0; i<tmp.length; i++){
    if(tmp[i] == "Ctrl") ctrl=tmp[i];
    if(tmp[i] == "Alt") alt=tmp[i];
    if(tmp[i] == "Shift") shift=tmp[i];
  }
  if(ctrl!="") NewLine = NewLine + ctrl + " + ";
  if(alt!="") NewLine = NewLine + alt + " + ";
  if(shift!="") NewLine = NewLine + shift + " + ";
  for (i=0; i<tmp.length; i++){
    if(tmp[i] != "Ctrl" && tmp[i] != "Alt" && tmp[i] != "Shift") NewLine = NewLine + tmp[i] + " + ";
  }
  tmp = NewLine.split(" + ");
  NewLine="";
  for (var i=0; i<tmp.length-1; i++){
    if(i<tmp.length-2) NewLine = NewLine + tmp[i] + " + ";
    else NewLine = NewLine + tmp[i];
  }
 ob.value=NewLine;
 }
}
  

function SL_KBD(ob,st){
 if(ob!=0){
    if(st==1){
	 GEBI('SL_kbd'+ob).style.display='block';
         GEBI('SL_kbd'+ob).style.background="#FFF";
	 GEBI('SL_kbd'+ob).innerHTML = FExtension.element('extUseHK');
    }else GEBI('SL_kbd'+ob).style.display='none';
 }
}

function HK_CATCHER(str,pat,ob){
 if(str!=""){
  str = str.replace(":|:|:|",":|");
  str = str.replace(":|:|",":|");
  var LINE = str.split(pat); 
  var newLINE="";
  var CNT = LINE.length;
  if(pat==":|") LINE.length-1;
  for (var i = 0; i < LINE.length-1; i++) {
    if(LINE[i]!=""){
      if(i<(LINE.length-2)) newLINE=newLINE + LINE[i] + " + ";
      else newLINE=newLINE + LINE[i];
    }
  }
 
  ob.value=newLINE;
  NoneColor(ob.id.replace('SRV',''));
  FINISHING(SL_ACTIVE);
  VERIFY_TAKEN(SL_ACTIVE);
  VERIFY(newLINE);  
 }
}

function GET_KEY(key){
 var out="";
 for(var i = 0; i < SL_KSET.length; i+=2){
     if(key.toString() == SL_KSET[i].toString()) {out=SL_KSET[i+1]; break;}
 }
 return(out);
}

function GET_CODE(key){
 var out="";
 for(var i = 1; i < SL_KSET.length; i+=2){
     if(key.toString() == SL_KSET[i].toString()) {out=SL_KSET[i+1]; break;}
 }
 return(out);
}



function SL_HK_SPLIT(ob, st){
  var tmp = GEBI(ob).value.split(" + ");
  var hks1="";
  var hks2="";
  for(var i=0; i<tmp.length; i++){
     if(tmp[i].length>1) hks1=hks1+tmp[i]+" + ";
     else hks2=hks2+tmp[i]+" + ";
  }
  hks1=hks1.substring(0,hks1.length-3);
  hks2=hks2.substring(0,hks2.length-3);
  if(st==1) return(hks1);
  else return(hks2);
}


function SL_close(){  window.frames['top'].GEBI('SL_AUTOKEYS').style.display='none';}


function GEBI(id){ return document.getElementById(id);}


function save_options(){
 if(VERIFY_ALL_BEFORE()==true){

	if(GEBI('SRV1').value!="None")	FExtension.store.set("SL_HK_gt1", GEBI('SRV1').value);
	else FExtension.store.set("SL_HK_gt1", "");

	 FExtension.store.set('SL_HK_gt2',GEBI('SRV2').value);

	if(GEBI('SRV3').value!="None")	FExtension.store.set("SL_HK_it1", GEBI('SRV3').value);
	else FExtension.store.set("SL_HK_it1", "");

	 FExtension.store.set('SL_HK_it2',GEBI('SRV4').value);

	if(GEBI('SRV5').value!="None")	FExtension.store.set('SL_HK_bb1',GEBI('SRV5').value);
	else FExtension.store.set("SL_HK_bb1", "");

	 

	 FExtension.store.set("SL_HKset","3|0|" + GEBI("SRVBox1").checked);
	 FExtension.store.set("SL_HKset_inv","3|0|" + GEBI("SRVBox2").checked);

	 FExtension.store.set("SL_FK_box1", GEBI("SRVBox3").checked);
	 FExtension.store.set("SL_FK_box2", GEBI("SRVBox4").checked);
	 FExtension.store.set("SL_translation_mos_bbl", GEBI("SRVBox5").checked);

         if(SL_ACTIVE_TAB==1 || SL_ACTIVE_TAB == 2){
	        window['top'].GEBI('SRV1').value=GEBI('SRV1').value;
	        window['top'].GEBI('SRV2').value=GEBI('SRV2').value;
		window['top'].GEBI("SL_HK1").checked=GEBI("SRVBox1").checked;
		window['top'].GEBI("SL_HK2").checked=GEBI("SRVBox2").checked;
         }
         if(SL_ACTIVE_TAB==3 || SL_ACTIVE_TAB == 4){
	        window['top'].GEBI('SRV3').value=GEBI('SRV3').value;
	        window['top'].GEBI('SRV4').value=GEBI('SRV4').value;
         }
         if(SL_ACTIVE_TAB==5){
	        window['top'].GEBI('SRV5').value=GEBI('SRV5').value;
         }
   	 var SL_status = GEBI("SL_status");
	 SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";
         setTimeout(function() {
	   SL_status.innerHTML = "";
	   SL_close(); 
	 }, 2000);
 }
}

function SL_HK_onoff(ob,patch){
  if(GEBI(ob).checked==false) GEBI(patch).style.display='block';
  else GEBI(patch).style.display='none';
}


function VERIFY(ob){
        var box = new Array(5);
        box[1]=GEBI('SRV1');
        box[2]=GEBI('SRV2');
        box[3]=GEBI('SRV3');
        box[4]=GEBI('SRV4');
        box[5]=GEBI('SRV5');

       	box[1].style.background="#fff";
        box[2].style.background="#fff";
        box[3].style.background="#fff";
       	box[4].style.background="#fff";
        box[5].style.background="#fff";

        var cnt=0;

        for(var i=1; i<=box.length-1; i++){
	        for(var j=i+1; j<=box.length-1; j++){
			if(box[i].value==box[j].value){
				cnt++; 	
				GEBI(box[i].id).style.background="#FFDFD7";
				GEBI(box[j].id).style.background="#FFDFD7";
			}
		}
		if(box[2].value==""){
		   	box[2].value = TMP;
			GEBI(box[2].id).style.background="#FFDFD7";
		}
		if(box[4].value==""){   
		   	box[4].value = TMP;
			GEBI(box[4].id).style.background="#FFDFD7";
		}
	}
	VERIFY_ALL_BEFORE();
	if(cnt>1)  return false;
    	else 	   return true;
}

function VERIFY_ALL(){
        GEBI("SL_kbd4").innerHTML="";
        var box = new Array(5);
        if(SL_ACTIVE_TAB==1 || SL_ACTIVE_TAB == 2){
	        box[1]=window['top'].GEBI('SRV1');
        	box[2]=window['top'].GEBI('SRV2');
        } else {
	        box[1]=GEBI('SRV1');
        	box[2]=GEBI('SRV2');
        }
        if(SL_ACTIVE_TAB==3 || SL_ACTIVE_TAB == 4){
	        box[3]=window['top'].GEBI('SRV3');
        	box[4]=window['top'].GEBI('SRV4');
        } else {
	        box[3]=GEBI('SRV3');
        	box[4]=GEBI('SRV4');
        }
        if(SL_ACTIVE_TAB==5){
        	box[5]=window['top'].GEBI('SRV5');
        } else {
	        box[5]=GEBI('SRV5');
        }

        var cnt=0;
       	box[1].style.background="#fff";
        box[2].style.background="#fff";
        box[3].style.background="#fff";
       	box[4].style.background="#fff";
        box[5].style.background="#fff";

        for(var i=1; i<=box.length-1; i++){
	        for(var j=i+1; j<=box.length-1; j++){
			if(box[i].value==box[j].value){
				cnt++; 	
				GEBI(box[i].id).style.background="#FFDFD7";
				GEBI(box[j].id).style.background="#FFDFD7";
			}
		}
	}

	if(cnt>0) return false;
	else return true;
}
function VERIFY_ALL_BEFORE(){
        var box = new Array(5);
	box[1]=GEBI('SRV1');
        box[2]=GEBI('SRV2');
	box[3]=GEBI('SRV3');
        box[4]=GEBI('SRV4');
	box[5]=GEBI('SRV5');
        var cnt=0;
       	box[1].style.background="#fff";
        box[2].style.background="#fff";
        box[3].style.background="#fff";
       	box[4].style.background="#fff";
        box[5].style.background="#fff";

        for(var i=1; i<=box.length-1; i++){
	        for(var j=i+1; j<=box.length-1; j++){
			if(box[i].value==box[j].value){
				cnt++; 	
				GEBI(box[i].id).style.background="#FFDFD7";
				GEBI(box[j].id).style.background="#FFDFD7";
			}
		}
	}
        close_msg();
	var cnt2=0;
        if(box[1].value=="") cnt2++;
        if(box[3].value=="") cnt2++;
        if(box[5].value=="") cnt2++;

	if(cnt>0){
		GEBI("SL_kbd4").style.display='block';
		GEBI("SL_kbd4").style.width='250px';
		GEBI("SL_kbd4").style.marginLeft='105px';
          	GEBI("SL_kbd4").innerHTML=FExtension.element('extHKconflict');
		return false;
	}else return true;
}

function VERIFY_TAKEN(ob){
  var pat = ob.id.replace("SRV","");
  switch(pat){
   case "1":
   case "2": pat=1; break;
   case "3":
   case "4": pat=2; break;
   case "5": pat=3; break;
  }
  for(var i=0; i<SL_KSET_taken.length; i++){
     if(ob.value == SL_KSET_taken[i]){
        ob.style.background="#FFDFD7";
	GEBI('SL_kbd'+pat).style.display="block";
	GEBI('SL_kbd'+pat).style.width="150px;"
	GEBI('SL_kbd'+pat).style.marginLeft="150px;"
        GEBI('SL_kbd'+pat).style.background="#FFDFD7";
	GEBI('SL_kbd'+pat).innerHTML="'"+ob.value.replace(/\s/g,"")+"' " + FExtension.element('extResByChrome');
        ob.value=SL_TMP;
     }
  }
}


function SL_del(ob){
 GEBI('SRV'+ob).value="";
 GEBI('SRV'+ob).value="None";
 GEBI('SRV'+ob).style.color="#ccc";
 VERIFY_ALL_BEFORE(ob);
}
function close_msg(){
 GEBI("SL_kbd4").style.display='none';
 GEBI("SL_kbd4").innerHTML="";
}

function SetAllNone(){
        var box = new Array(5);
	box[1]=GEBI('SRV1');
        box[2]=GEBI('SRV2');
	box[3]=GEBI('SRV3');
        box[4]=GEBI('SRV4');
	box[5]=GEBI('SRV5');
        var cnt=0;
        for(var i=1; i<=box.length-1; i++){
           if(box[i].value=="" || box[i].value=="None"){
              box[i].value="None";
	      box[i].style.color='#ccc';
	   }
	}
}

function NoneColor(st){
 if(st==1 || st==3 || st==5){
   if(GEBI("SRV"+st).value=="None" || GEBI("SRV"+st).value==""){
	GEBI("SRV"+st).style.color='#ccc';
	GEBI("SRV"+st).value='None';
   } else GEBI("SRV"+st).style.color='#000';
 }
}