'use strict';
function GEBI(id){ return document.getElementById(id);}

(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);
})();


(function(){
	GEBI("HKbox1").addEventListener("click",function(){
		if(GEBI("HKbox1").checked==false) GEBI("SL_HK1").style.display='block';
		else GEBI("SL_HK1").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox2").addEventListener("click",function(){
		if(GEBI("HKbox2").checked==false) GEBI("SL_HK2").style.display='block';
		else GEBI("SL_HK2").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox3").addEventListener("click",function(){
		if(GEBI("HKbox3").checked==false) GEBI("SL_HK3").style.display='block';
		else GEBI("SL_HK3").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox4").addEventListener("click",function(){
		if(GEBI("HKbox4").checked==false) GEBI("SL_HK4").style.display='block';
		else GEBI("SL_HK4").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox5").addEventListener("click",function(){
		if(GEBI("HKbox5").checked==false) GEBI("SL_HK5").style.display='block';
		else GEBI("SL_HK5").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox6").addEventListener("click",function(){
		if(GEBI("HKbox6").checked==false) GEBI("SL_HK6").style.display='block';
		else GEBI("SL_HK6").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox7").addEventListener("click",function(){
		if(GEBI("HKbox7").checked==false) GEBI("SL_HK7").style.display='block';
		else GEBI("SL_HK7").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox8").addEventListener("click",function(){
		if(GEBI("HKbox8").checked==false) GEBI("SL_HK8").style.display='block';
		else GEBI("SL_HK8").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox9").addEventListener("click",function(){
		if(GEBI("HKbox9").checked==false) GEBI("SL_HK9").style.display='block';
		else GEBI("SL_HK9").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox10").addEventListener("click",function(){
		if(GEBI("HKbox10").checked==false) GEBI("SL_HK10").style.display='block';
		else GEBI("SL_HK10").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("HKbox11").addEventListener("click",function(){
		if(GEBI("HKbox11").checked==false) GEBI("SL_HK11").style.display='block';
		else GEBI("SL_HK11").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();



(function(){INIT();})();


function INIT(){

  var HKtemp=FExtension.store.get("SL_GLOBAL_HK_1").split("|");
  HK_controls_builder("SL_ctrl1","1",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox1").checked=true; GEBI("SL_HK1").style.display='none';}
  else  {GEBI("HKbox1").checked=false; GEBI("SL_HK1").style.display='block';}

  HKtemp=FExtension.store.get("SL_GLOBAL_HK_2").split("|");
  HK_controls_builder("SL_ctrl2","2",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox2").checked=true; GEBI("SL_HK2").style.display='none';}
  else  {GEBI("HKbox2").checked=false; GEBI("SL_HK2").style.display='block';}
                             
  TK_for_bubble("SL_ctrl3","3",FExtension.store.get("SL_MOSHK_bbl"));
  if(FExtension.store.get("SL_translation_mos_bbl")=="true") {GEBI("HKbox3").checked=true; GEBI("SL_HK3").style.display='none';}
  else  {GEBI("HKbox3").checked=false; GEBI("SL_HK3").style.display='block';}

  HK_controls_builder("SL_ctrl4","4",FExtension.store.get("SL_inlinerFK1"),FExtension.store.get("SL_inlinerFK2"));
  if(FExtension.store.get("SL_FK_box1")=="true") {GEBI("HKbox4").checked=true; GEBI("SL_HK4").style.display='none';}
  else  {GEBI("HKbox4").checked=false; GEBI("SL_HK4").style.display='block';}

  HK_controls_builder("SL_ctrl5","5",FExtension.store.get("SL_shortcutInliner"),FExtension.store.get("SL_shortcutClean"));
  if(FExtension.store.get("SL_FK_box2")=="true") {GEBI("HKbox5").checked=true; GEBI("SL_HK5").style.display='none';}
  else  {GEBI("HKbox5").checked=false; GEBI("SL_HK5").style.display='block';}

  HKtemp=FExtension.store.get("SL_GLOBAL_HK_3").split("|");
  HK_controls_builder("SL_ctrl7","7",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox7").checked=true; GEBI("SL_HK7").style.display='none';}
  else  {GEBI("HKbox7").checked=false; GEBI("SL_HK7").style.display='block';}

  HKtemp=FExtension.store.get("SL_GLOBAL_HK_4").split("|");
  HK_controls_builder("SL_ctrl8","8",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox8").checked=true; GEBI("SL_HK8").style.display='none';}
  else  {GEBI("HKbox8").checked=false; GEBI("SL_HK8").style.display='block';}

  HKtemp=FExtension.store.get("SL_GLOBAL_HK_5").split("|");
  HK_controls_builder("SL_ctrl9","9",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox9").checked=true; GEBI("SL_HK9").style.display='none';}
  else  {GEBI("HKbox9").checked=false; GEBI("SL_HK9").style.display='block';}

  HKtemp=FExtension.store.get("SL_GLOBAL_HK_6").split("|");
  HK_controls_builder("SL_ctrl10","10",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox10").checked=true; GEBI("SL_HK10").style.display='none';}
  else  {GEBI("HKbox10").checked=false; GEBI("SL_HK10").style.display='block';}

  HKtemp=FExtension.store.get("SL_GLOBAL_HK_7").split("|");
  HK_controls_builder("SL_ctrl11","11",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox11").checked=true; GEBI("SL_HK11").style.display='none';}
  else  {GEBI("HKbox11").checked=false; GEBI("SL_HK11").style.display='block';}

  HKtemp=FExtension.store.get("SL_GLOBAL_HK_8").split("|");
  HK_controls_builder("SL_ctrl6","6",HKtemp[1],HKtemp[2]);
  if(HKtemp[0]==1) {GEBI("HKbox6").checked=true; GEBI("SL_HK6").style.display='none';}
  else  {GEBI("HKbox6").checked=false; GEBI("SL_HK6").style.display='block';}

  var TMPurl=document.URL.split("?id=");
  switch (TMPurl[1]){
   case "1":  	
		GEBI("HKbox1").checked=parent.GEBI("IMT_HK").checked;
		if(GEBI("HKbox1").checked==false) GEBI("SL_HK1").style.display='block';
		else GEBI("SL_HK1").style.display='none';
		GEBI("SL_HK1_1").value=parent.GEBI("SL_IMT_HK1_1").value;
		GEBI("SL_HK1_2").value=parent.GEBI("SL_IMT_HK1_2").value; 
		Resolve_the_HK_conflicts(); 
		break;
   case "2":  	
		GEBI("HKbox2").checked=parent.GEBI("GT_HK").checked;
		if(GEBI("HKbox2").checked==false) GEBI("SL_HK2").style.display='block';
		else GEBI("SL_HK2").style.display='none';
		GEBI("SL_HK2_1").value=parent.GEBI("SL_GT_HK1_1").value;
		GEBI("SL_HK2_2").value=parent.GEBI("SL_GT_HK1_2").value; 
		Resolve_the_HK_conflicts(); 
		break;
   case "3":  	
		GEBI("HKbox4").checked=parent.GEBI("SL_FK_box1").checked;
		if(GEBI("HKbox4").checked==false) GEBI("SL_HK4").style.display='block';
		else GEBI("SL_HK4").style.display='none';
		GEBI("SL_HK4_1").value=parent.GEBI("SL_IT_HK1_1").value;
		GEBI("SL_HK4_2").value=parent.GEBI("SL_IT_HK1_2").value; 

		GEBI("HKbox5").checked=parent.GEBI("SL_FK_box2").checked;
		if(GEBI("HKbox5").checked==false) GEBI("SL_HK5").style.display='block';
		else GEBI("SL_HK5").style.display='none';
		GEBI("SL_HK5_1").value=parent.GEBI("SL_IT_HK2_1").value;
		GEBI("SL_HK5_2").value=parent.GEBI("SL_IT_HK2_2").value; 

		Resolve_the_HK_conflicts(); 
		break;
   case "4":  	
		GEBI("HKbox6").checked=parent.GEBI("WPT_HK").checked;
		if(GEBI("HKbox6").checked==false) GEBI("SL_HK6").style.display='block';
		else GEBI("SL_HK6").style.display='none';
		GEBI("SL_HK6_1").value=parent.GEBI("SL_WPT_HK1_1").value;
		GEBI("SL_HK6_2").value=parent.GEBI("SL_WPT_HK1_2").value; 
		Resolve_the_HK_conflicts(); 
		break;

  }                 
}

function save_options(){
  var result = Resolve_the_HK_conflicts();
  if (result==0){
  GEBI("HK_conflicts_msg").innerHTML="";
  var TEMP = 0;
  if(GEBI("HKbox1").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_1",TEMP+"|"+GEBI("SL_HK1_1").value+"|"+GEBI("SL_HK1_2").value);

  TEMP = 0;
  if(GEBI("HKbox2").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_2",TEMP+"|"+GEBI("SL_HK2_1").value+"|"+GEBI("SL_HK2_2").value);

  FExtension.store.set("SL_translation_mos_bbl",GEBI("HKbox3").checked);
  FExtension.store.set("SL_MOSHK_bbl",GEBI("SL_HK3_1").value);

  FExtension.store.set("SL_FK_box1",GEBI("HKbox4").checked);
  FExtension.store.set("SL_inlinerFK1",GEBI("SL_HK4_1").value);
  FExtension.store.set("SL_inlinerFK2",GEBI("SL_HK4_2").value);

  FExtension.store.set("SL_FK_box2",GEBI("HKbox5").checked);
  FExtension.store.set("SL_shortcutInliner",GEBI("SL_HK5_1").value);
  FExtension.store.set("SL_shortcutClean",GEBI("SL_HK5_2").value);

  TEMP = 0;
  if(GEBI("HKbox7").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_3",TEMP+"|"+GEBI("SL_HK7_1").value+"|"+GEBI("SL_HK7_2").value);

  TEMP = 0;
  if(GEBI("HKbox8").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_4",TEMP+"|"+GEBI("SL_HK8_1").value+"|"+GEBI("SL_HK8_2").value);

  TEMP = 0;
  if(GEBI("HKbox9").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_5",TEMP+"|"+GEBI("SL_HK9_1").value+"|"+GEBI("SL_HK9_2").value);

  TEMP = 0;
  if(GEBI("HKbox10").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_6",TEMP+"|"+GEBI("SL_HK10_1").value+"|"+GEBI("SL_HK10_2").value);

  TEMP = 0;
  if(GEBI("HKbox11").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_7",TEMP+"|"+GEBI("SL_HK11_1").value+"|"+GEBI("SL_HK11_2").value);

  TEMP = 0;
  if(GEBI("HKbox6").checked==true) TEMP=1;
  FExtension.store.set("SL_GLOBAL_HK_8",TEMP+"|"+GEBI("SL_HK6_1").value+"|"+GEBI("SL_HK6_2").value);

  FExtension.bg.ImTranslatorBG.SL_callbackRequest6();

	var SL_status = GEBI("SL_status");
	SL_status.innerHTML = "<img src='../../img/util/indicator.gif'>";

	setTimeout(function() {
	   SL_status.innerHTML = " - Options saved";
	}, 1000);
	setTimeout(function() {
	   SL_status.innerHTML = "";
           parent.GEBI("SL_HKerrorFF").style.display="none";
           parent.frames.location.reload(true);
	}, 2000);
  }	
}

function HK_controls_builder(target,obj,hkey1,hkey2){
 GEBI(target).innerHTML='<table width="180" cellpadding="0" onChange="Resolve_the_HK_conflicts();" cellspacing="0">'+
	'	<tr>'+
	'		<td width="80">'+
	'			<select id="SL_HK'+obj+'_1">'+
	'				<option value="None">None</option>'+
	'				<option value="Alt">Alt</option>'+
	'				<option value="Ctrl">Ctrl</option>'+
	'				<option value="Ctrl+Alt">Ctrl+Alt</option>'+
	'			</select>'+
	'		</td>'+
	'		<td width="20">+</td>'+
	'		<td width="80">'+
	'			<select id="SL_HK'+obj+'_2" onChange="Resolve_the_HK_conflicts();">'+
	'				<option value="0">0</option>'+
	'				<option value="1">1</option>'+
	'				<option value="2">2</option>'+
	'				<option value="3">3</option>'+
	'				<option value="4">4</option>'+
	'				<option value="5">5</option>'+
	'				<option value="6">6</option>'+
	'				<option value="7">7</option>'+
	'				<option value="8">8</option>'+
	'				<option value="9">9</option>'+
	'				<option value="A">A</option>'+
	'				<option value="B">B</option>'+
	'				<option value="C">C</option>'+
	'				<option value="D">D</option>'+
	'				<option value="E">E</option>'+
	'				<option value="F">F</option>'+
	'				<option value="G">G</option>'+
	'				<option value="H">H</option>'+
	'				<option value="I">I</option>'+
	'				<option value="J">J</option>'+
	'				<option value="K">K</option>'+
	'				<option value="L">L</option>'+
	'				<option value="M">M</option>'+
	'				<option value="N">N</option>'+
	'				<option value="O">O</option>'+
	'				<option value="P">P</option>'+
	'				<option value="Q">Q</option>'+
	'				<option value="R">R</option>'+
	'				<option value="S">S</option>'+
	'				<option value="T">T</option>'+
	'				<option value="U">U</option>'+
	'				<option value="V">V</option>'+
	'				<option value="W">W</option>'+
	'				<option value="X">X</option>'+
	'				<option value="Y">Y</option>'+
	'				<option value="Z">Z</option>'+
	'			</select>'+
	'		</td>'+
	'	</tr>'+
	'</table>';
 GEBI("SL_HK"+obj+"_1").value=hkey1;
 GEBI("SL_HK"+obj+"_2").value=hkey2;
}

function TK_for_bubble(target,obj,hkey){
 GEBI(target).innerHTML='<select id="SL_HK'+obj+'_1" style="width:75px;">'+
	'			<option value="None">None</option>'+
	'			<option value="Alt">Alt</option>'+
	'			<option value="Ctrl">Ctrl</option>'+
	'			<option value="Ctrl+Alt">Ctrl+Alt</option>'+
	'		</select>';
 GEBI("SL_HK"+obj+"_1").value=hkey;
}

function Resolve_the_HK_conflicts(){
  var response=0;
  var HK = new Array(11);
  for(var j=0; j<HK.length; j++) GEBI("SL_HK_TR"+(j+1)).className="SLTR";
  HK[0] = GEBI("HKbox1").checked+"|"+GEBI("SL_HK1_1").value+"|"+GEBI("SL_HK1_2").value;
  HK[1] = GEBI("HKbox2").checked+"|"+GEBI("SL_HK2_1").value+"|"+GEBI("SL_HK2_2").value;
  HK[2] = GEBI("HKbox3").checked+"|"+GEBI("SL_HK3_1").value;
  HK[3] = GEBI("HKbox4").checked+"|"+GEBI("SL_HK4_1").value+"|"+GEBI("SL_HK4_2").value;
  HK[4] = GEBI("HKbox5").checked+"|"+GEBI("SL_HK5_1").value+"|"+GEBI("SL_HK5_2").value;
  HK[5] = GEBI("HKbox6").checked+"|"+GEBI("SL_HK6_1").value+"|"+GEBI("SL_HK6_2").value;
  HK[6] = GEBI("HKbox7").checked+"|"+GEBI("SL_HK7_1").value+"|"+GEBI("SL_HK7_2").value;
  HK[7] = GEBI("HKbox8").checked+"|"+GEBI("SL_HK8_1").value+"|"+GEBI("SL_HK8_2").value;
  HK[8] = GEBI("HKbox9").checked+"|"+GEBI("SL_HK9_1").value+"|"+GEBI("SL_HK9_2").value;
  HK[9] = GEBI("HKbox10").checked+"|"+GEBI("SL_HK10_1").value+"|"+GEBI("SL_HK10_2").value;
  HK[10] = GEBI("HKbox11").checked+"|"+GEBI("SL_HK11_1").value+"|"+GEBI("SL_HK11_2").value;
  for(var i=0; i<HK.length; i++){
   for(j=0; j<HK.length; j++){
     if(HK[i]==HK[j] && i!=j){
       GEBI("SL_HK_TR"+(i+1)).className="SLTR_";
       GEBI("SL_HK_TR"+(j+1)).className="SLTR_";
       response++;
     }
   }
  }
  if(response>0)	GEBI("HK_conflicts_msg").innerHTML="<div class='SLHKmsg'>The hotkeys you have selected are currently assigned to another translation application. <br>Please reassign your hotkeys' preferences marked in red:</div>";
  else  GEBI("HK_conflicts_msg").innerHTML="";
  return response;
}