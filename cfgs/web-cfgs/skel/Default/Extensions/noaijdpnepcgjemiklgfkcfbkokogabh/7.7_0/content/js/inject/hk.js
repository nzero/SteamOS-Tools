/*
(function(){
	FExtension.browserInject.getDocument().addEventListener("keydown", function(event) {

		FExtension.browserInject.extensionSendMessage({greeting: window.localStorage.length}, function(response) {
			var theresponse = response.farewell.split("~");
			var theresponse1 = theresponse[0].split("|");
			var theresponse2 = theresponse[1].split("|");
			var theresponse3 = theresponse[2].split("|");
			var thekey1 = theresponse1[0];
			var thekey2 = theresponse1[1];
			var thekey3 = theresponse2[0];
			var thekey4 = theresponse2[1];
			var theTEXT = window.getSelection().toString();
			var thekeySTATE = theresponse1[2];

			if(thekeySTATE=="true"){
			    if(theTEXT == ""){  
				if(theresponse3[16]!='None'){
				     if(thekey4!='none'){
					   switch(theresponse3[16]){
						case "None": if(event.keyCode == thekey4) TranslatorIM.HotKeysWindow(event); break;
						case "Alt": if(event.altKey && event.keyCode == thekey4) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl": if(event.ctrlKey && event.keyCode == thekey4) TranslatorIM.HotKeysWindow(event); break;
						case "Shift": if(event.shiftKey && event.keyCode == thekey4) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl+Alt": if(event.ctrlKey && event.altKey && event.keyCode == thekey4) TranslatorIM.HotKeysWindow(event); break;
					   }
				      } else {
					 setTimeout(function() {
					   switch(theresponse3[16]){
						case "Alt": if(event.altKey) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl": if(event.ctrlKey) TranslatorIM.HotKeysWindow(event); break;
						case "Shift": if(event.shiftKey) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl+Alt": if(event.ctrlKey && event.altKey) TranslatorIM.HotKeysWindow(event); break;
					   }
					 }, 500);
				      }	
				} else {
				   switch(theresponse3[16]){
					case "None": if(event.keyCode == thekey4) TranslatorIM.HotKeysWindow(event); break;
					case "Alt": if(event.altKey) TranslatorIM.HotKeysWindow(event); break;
					case "Ctrl": if(event.ctrlKey) TranslatorIM.HotKeysWindow(event); break;
					case "Shift": if(event.shiftKey) TranslatorIM.HotKeysWindow(event); break;
					case "Ctrl+Alt": if(event.ctrlKey && event.altKey) TranslatorIM.HotKeysWindow(event); break;
				   }
				}	

			     } else {
				  if(theresponse3[12]!='None'){
				     if(thekey2!='none'){
				         var match="false";
				         if(event.keyCode == thekey2) match="true";
					 document.addEventListener("mouseup", function(event) {
					   switch(theresponse3[12]){
						case "None": if(event.keyCode == thekey2) TranslatorIM.HotKeysWindow(event); break;
						case "Alt": if(event.altKey && event.keyCode == thekey2) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl": if(event.ctrlKey && match=="true") TranslatorIM.HotKeysWindow(event); break;
						case "Shift": if(event.shiftKey && event.keyCode == thekey2) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl+Alt": if(event.ctrlKey && event.altKey && event.keyCode == thekey2) TranslatorIM.HotKeysWindow(event); break;
					   }
					 });
				     } else {
					 FExtension.browserInject.getDocument().addEventListener("mouseup", function(event) {
					   switch(theresponse3[12]){
						case "Alt": if(event.altKey) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl": if(event.ctrlKey) TranslatorIM.HotKeysWindow(event); break;
						case "Shift": if(event.shiftKey) TranslatorIM.HotKeysWindow(event); break;
						case "Ctrl+Alt": if(event.ctrlKey && event.altKey) TranslatorIM.HotKeysWindow(event); break;
					   }
					 });
				     }
				  } else {
				   switch(theresponse3[12]){
					case "None": if(event.keyCode == thekey2) TranslatorIM.HotKeysWindow(event); break;
					case "Alt": if(event.altKey) TranslatorIM.HotKeysWindow(event); break;
					case "Ctrl": if(event.ctrlKey) TranslatorIM.HotKeysWindow(event); break;
					case "Shift": if(event.shiftKey) TranslatorIM.HotKeysWindow(event); break;
					case "Ctrl+Alt": if(event.ctrlKey && event.altKey) TranslatorIM.HotKeysWindow(event); break;
				   }
				  } 
			     }
			}
		});
	});
})();


*/