

/*
Copyright 2012 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Author: Eric Bidelman (ericbidelman@chromium.org)
*/

/**
 * Grabs the camera feed from the browser, requesting
 * both video and audio. Requires the permissions
 * for audio and video to be set in the manifest.
 *
 * @see http://developer.chrome.com/trunk/apps/manifest.html#permissions
 */
 

    var video = document.querySelector("#vid");
	var video1 = document.querySelector("#vid1");
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    var localMediaStream = null;
	

	
	
    var onCameraFail = function (e) {
        console.log('Camera did not work.', e);
    };
	
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL;
	
	navigator.getUserMedia({audio: false, video: true}, function(stream) {
		video.src = window.URL.createObjectURL(stream);
		localMediaStream = stream;
	
	

	
	}, onCameraFail);

	var RecordRTC;
	
	function startRecord(options){
	
	
						recordRTC = RecordRTC(localMediaStream, options);
						recordRTC.type = options.type;
						
						recordRTC.startRecording();
						
						document.getElementById("takepicture").setAttribute('style', 'display: none;');
						document.getElementById("stoprecording").setAttribute('style', 'display: block;');
	
	/*
			var count=3;
			var counter=setInterval(timer, 500);
			
			function timer()
			{
			  count=count-1;
			  if (count < 0)
			  {
				 clearInterval(counter);
				 
				 		recordRTC = RecordRTC(localMediaStream, options);
						recordRTC.type = options.type;
						
						recordRTC.startRecording();
						
						document.getElementById("takepicture").setAttribute('style', 'display: none;');
						document.getElementById("stoprecording").setAttribute('style', 'display: block;');
						document.getElementById("takepicture").innerHTML='<font color="green">Start</font>';
						
				 
				 
				 return;
	  
			  }
				document.getElementById("takepicture").innerHTML='<font color="red">' + count + '</font>';
			}
	*/				

			
	}

/**
 * Click handler to init the camera grab
 */
 
 
document.querySelector('#takepicture').addEventListener('click', function(e) {

		 var checkedValue = document.getElementById("myonoffswitch").value;
		 
		 if (checkedValue=="singlePicture"){
		 
			if (localMediaStream){
			   
				ctx.drawImage(video, 0, 0);

                document.getElementById("theimage").src = canvas.toDataURL("image/png");
				document.getElementById("savepicture").setAttribute('href', canvas.toDataURL("image/png"));
				document.getElementById("savepicture").setAttribute('download', 'photo');
				
				document.getElementById("openNewWindow").setAttribute('href', canvas.toDataURL("image/png"));
				
			   

				document.getElementById("vid").setAttribute('style', 'display: none;');
				document.getElementById("theimage").setAttribute('style', 'display: block;');
				document.getElementById("takepicture").setAttribute('style', 'display: none;');
				document.getElementById("newpicture").setAttribute('style', 'display: block;');
				document.getElementById("savepicturedisabled").setAttribute('style', 'display: none;');
				document.getElementById("savepicture").setAttribute('style', 'display: block;');
				
				document.getElementById("openNewWindowdisabled").setAttribute('style', 'display: none;');
				document.getElementById("openNewWindow").setAttribute('style', 'display: block;');
			
			}
			
		} else if (checkedValue=="video") {

						var options = {
							type: 'video',
							video: {
							  width: 640,
							  height: 480
						    },
						   canvas: {
							  width: 640,
							  height: 480
						   }
						};
						
						startRecord(options);
				
		} else if (checkedValue=="animatedPicture") {
		

						// test
						var options = {
						   type: 'gif',
						   frameRate: 150,
						   quality: 100,
						   video: {
							  width: 640,
							  height: 480
						   },
						   canvas: {
							  width: 640,
							  height: 480
						   }
						};
						
						startRecord(options);
		
		}
 

});


document.querySelector('#stoprecording').addEventListener('click', function(e) {
		   
	if (recordRTC.type == 'video'){
	
							recordRTC.stopRecording(function(videoURL) {
								video1.src = videoURL;
							});			
							
							document.getElementById("vid").setAttribute('style', 'display: none;');
							document.getElementById("vid1").setAttribute('style', 'display: block;');	
							
							// afhandelen newpicture en takepicture knop.
							document.getElementById("takepicture").setAttribute('style', 'display: none;');
							document.getElementById("stoprecording").setAttribute('style', 'display: none;');
							document.getElementById("newpicture").setAttribute('style', 'display: block;');
							
							recordRTC.getDataURL(function(dataURL) { 
								document.getElementById("savepicture").setAttribute('href', dataURL);
								document.getElementById("openNewWindow").setAttribute('href', dataURL);
							});			
							document.getElementById("savepicture").setAttribute('download', 'video.webm');
							
							
							// afhandelen save button
							document.getElementById("savepicturedisabled").setAttribute('style', 'display: none;');
							document.getElementById("savepicture").setAttribute('style', 'display: block;');
														
							document.getElementById("openNewWindowdisabled").setAttribute('style', 'display: none;');
							document.getElementById("openNewWindow").setAttribute('style', 'display: block;');
							

	} else if (recordRTC.type == 'gif'){
	
							recordRTC.stopRecording(function(gifURL) {
							   document.getElementById("theimage").src = gifURL;
							   document.getElementById("savepicture").setAttribute('href', gifURL);
							   document.getElementById("openNewWindow").setAttribute('href', gifURL);
							});
						
							document.getElementById("savepicture").setAttribute('download', 'photo');

							document.getElementById("vid").setAttribute('style', 'display: none;');
							document.getElementById("theimage").setAttribute('style', 'display: block;');
							
							document.getElementById("takepicture").setAttribute('style', 'display: none;');
							document.getElementById("stoprecording").setAttribute('style', 'display: none;');
							document.getElementById("newpicture").setAttribute('style', 'display: block;');
							
							document.getElementById("savepicturedisabled").setAttribute('style', 'display: none;');
							document.getElementById("savepicture").setAttribute('style', 'display: block;');
							
							document.getElementById("openNewWindowdisabled").setAttribute('style', 'display: none;');
							document.getElementById("openNewWindow").setAttribute('style', 'display: block;');
	}
			// handle recordButtons
			
			document.getElementById("stoprecording").setAttribute('style', 'display: none;');
			document.getElementById("newpicture").setAttribute('style', 'display: block;');


});


    function someAnimation(encoder){

			if (localMediaStream){
			   
			   ctx.drawImage(video, 0, 0);
			   
			     encoder.addFrame(ctx);
	
			}
	}

document.querySelector('#newpicture').addEventListener('click', function(e) {
		   


			document.getElementById("theimage").setAttribute('style', 'display: none;');
			document.getElementById("vid1").setAttribute('style', 'display: none;');
			document.getElementById("vid").setAttribute('style', 'display: block;');
			
			document.getElementById("newpicture").setAttribute('style', 'display: none;');
			document.getElementById("stoprecording").setAttribute('style', 'display: none;');
			document.getElementById("takepicture").setAttribute('style', 'display: block;');

			document.getElementById("savepicture").setAttribute('style', 'display: none;');
			document.getElementById("savepicturedisabled").setAttribute('style', 'display: block;');
			
			document.getElementById("openNewWindow").setAttribute('style', 'display: none;');
			document.getElementById("openNewWindowdisabled").setAttribute('style', 'display: block;');

 

});