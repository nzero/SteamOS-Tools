'use strict';
var SL_KSET = new Array(16,"Shift",17,"Ctrl",18,"Alt",48,"0",49,"1",50,"2",51,"3",52,"4",53,"5",54,"6",55,"7",58,"8",57,"9",81,"Q",87,"W",69,"E",82,"R",84,"T",89,"Y",85,"U",73,"I",79,"O",80,"P",65,"A",83,"S",68,"D",70,"F",71,"G",72,"H",74,"J",75,"K",76,"L",90,"Z",88,"X",67,"C",86,"V",66,"B",78,"N",77,"M");
var SL_KSET_taken = new Array("Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + T","Ctrl + O","Ctrl + S","Ctrl + D","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + N","Shift + 8","Shift + B","Shift + J","Shift + M","Alt + 8","Alt + F","Ctrl + Shift + B","Ctrl + Shift + J","Ctrl + Shift + M","Ctrl + Shift + D","Shift + P","Shift + I","Shift + G","0","D","J","E","G","F","R","S","P","Y");
var SL_KEYCOUNT = { length: 0 };
var SL_KEYSTRING = "";
var SL_TEMPKEYSTRING = "";
var SL_ACTIVE="";
var SL_TMP="";

(function(){GEBI("SL_logo-link").addEventListener("click",function(){ FExtension.browserPopup.openNewTab("http://imtranslator.net/Translator-for-Chrome-Imtranslator.asp");	},!1); })();
(function(){GEBI("SL_PP").addEventListener("click",function(){	FExtension.browserPopup.openNewTab("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GD9D8CPW8HFA2"); },!1); } )();
(function(){GEBI("SL_save_button").addEventListener("click",function(){save_options();},!1);})();

(function(e){
	window.addEventListener("keydown",function(e){
	        var ob = SL_ACTIVE;
	          if(ob){
		    	if(!SL_KEYCOUNT[e.keyCode] && SL_KEYCOUNT.length<3)   {
        			SL_KEYCOUNT[e.keyCode] = true;
		        	SL_KEYCOUNT.length++;
                                var key=GET_KEY(e.keyCode);
				SL_KEYSTRING=SL_KEYSTRING+key+":|";
        	        	if(SL_KEYSTRING!="") SL_TEMPKEYSTRING=SL_KEYSTRING;
			}
		        ob.value="";
		  }
		setTimeout(function() {HK_CATCHER(SL_TEMPKEYSTRING,":|",ob);DO_VERIFY(ob); SL_KEYCOUNT = { length: 0 }; SL_KEYSTRING="";SL_TEMPKEYSTRING="";}, 1500);

	},!1);
})();

function FINISHING(ob){
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
  

function SL_KBD(st){
 if(st==1){
	 GEBI('SL_kbd').style.display='block';
	 GEBI('SL_kbd').innerHTML = FExtension.element('extUseHK');
         GEBI('SL_kbd').style.background="#FFF";
 }else GEBI('SL_kbd').style.display='none';
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
  ob.style.color="#000";
  if(VERIFY(ob)==false)  INIT_AUTO_HK(ob.id.replace('SRV',''));  
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

function INIT_AUTO_HK(st){
        var box = new Array(5);
        box[0]=FExtension.store.get('SL_HK_gt1');
        box[1]=FExtension.store.get('SL_HK_gt2');
        box[2]=FExtension.store.get('SL_HK_it1');
        box[3]=FExtension.store.get('SL_HK_it2');
        box[4]=FExtension.store.get('SL_HK_bb1');
        var cnt=0;
        for(var i=0; i<box.length; i++){
		if(GEBI('SRV'+st).value==box[i] && st != (i+1)) cnt++; 	
	}
	if(box[1]=="" || box[3]=="") cnt++;
        if(cnt>0){
		DO_IFRAME(st);
		return false;
	} else return true;
}
function DO_IFRAME(st){
		if(GEBI('autohotkeys')){
		  var frame = GEBI('autohotkeys');
		  if(frame)	frame.parentNode.removeChild(frame);
		}
		if(!GEBI("autohotkeys")){
		    var die = document.createElement("iframe");
		    die.src = "autohotkeys.html?"+st;
		    die.name = "autohotkeys";
		    die.id="autohotkeys";
		    die.width="420px";
		    var H = GEBI('SL_canvas').offsetHeight-20;
		    die.height=H+"px";
                    die.background="#eee";
		    die.scrolling="no";
		    die.frameBorder="0";
		    GEBI('SL_AUTOKEYS').style.display='block';
		    GEBI('SL_AUTOKEYS').style.height=H;
		    GEBI('SL_AUTOKEYS').appendChild(die);
		}
}

function VERIFY_ALL_TABS(st){
        var box = new Array(5);
        if(st==1 || st == 2){
	        box[1]=GEBI('SRV1').value;
        	box[2]=GEBI('SRV2').value;
        } else {
	        box[1]=FExtension.store.get('SL_HK_gt1');
        	box[2]=FExtension.store.get('SL_HK_gt2');
        }
        if(st==3 || st == 4){
	        box[3]=GEBI('SRV3').value;
        	box[4]=GEBI('SRV4').value;
        } else {
	        box[3]=FExtension.store.get('SL_HK_it1');
        	box[4]=FExtension.store.get('SL_HK_it2');
        }
        if(st==5){
        	box[5]=GEBI('SRV5').value;
        } else {
	        box[5]=FExtension.store.get('SL_HK_bb1');
        }

        var cnt=0;
        for(var i=1; i<=box.length-1; i++){
                if(box[i]=="")box[i]="None";
	        for(var j=i+1; j<=box.length-1; j++){
		   	if(box[j]=="")box[j]="None";
			if(box[i]==box[j]) cnt++;
		}
	}

	if(box[2]=="" || box[4]=="") cnt++;

	if(cnt>0) DO_IFRAME(st);
	else return true;
}

function VERIFY_TAKEN(ob){
  for(var i=0; i<SL_KSET_taken.length; i++){
     if(ob.value == SL_KSET_taken[i]){
        ob.style.background="#FFDFD7";
	GEBI('SL_kbd').style.display="block";
	GEBI('SL_kbd').style.width="150px;"
	GEBI('SL_kbd').style.marginLeft="150px;"
        GEBI('SL_kbd').style.background="#FFDFD7";
	GEBI('SL_kbd').innerHTML="'"+ob.value.replace(/\s/g,"")+"' " + FExtension.element('extResByChrome');
        ob.value=SL_TMP;
        setTimeout(function() {ob.style.background="#FFF";}, 850);
     }
  }
}

function DO_VERIFY(ob){
  FINISHING(ob); 
  VERIFY(ob);
  VERIFY_TAKEN(ob);
//  VERIFY_ALL_TABS(ob.id.replace("SRV",""));
}

function SL_del(ob){
 GEBI('SRV'+ob).value="None";
 GEBI('SRV'+ob).style.color="#ccc";
 VERIFY_ALL_TABS(ob);
}

function NoneColor(st){
 if(GEBI("SRV"+st).value=="None" || GEBI("SRV"+st).value==""){
	GEBI("SRV"+st).style.color='#ccc';
	GEBI("SRV"+st).value='None';
 } else GEBI("SRV"+st).style.color='#000';
}