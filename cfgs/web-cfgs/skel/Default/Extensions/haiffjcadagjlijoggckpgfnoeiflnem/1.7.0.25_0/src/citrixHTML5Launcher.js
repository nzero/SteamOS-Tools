/*Copyright (c) 2014 Citrix Systems, Inc.
The materials in this file are protected by copyright and other intellectual property laws.
Copying and use is permitted only by end users to enable use of Citrix server technology.
Any other reproduction or use of this file, or any portion of it, is unlicensed.
In no event may the file be reverse engineered or may copies be made in association with deobfuscation, decompilation or disassembly.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

if(typeof window != "undefined" )
{		
		var engine;
		var eventArray = new Array(0);
		function startHTMLSession( ){
			engine = new HTML5Engine( );
			engine.setParameter({'ui':{'root':"citrixuiElement"}});
			engine.setParameter({'ica':{'type':"unknown"}});
			engine.setConfigurationPath(null);
			engine.initEngine( );
			if(eventArray.length > 0){
				engine.handleMessage(eventArray, eventArray.length);
				eventArray = new Array(0);
			}			
		}
		(function() {
			var script = document.createElement('script');
					script.onload = startHTMLSession;
					script.async = false;
					script.src = "../" + "/src/SessionWindow.js";
					script.type = "text/javascript";
					document.body.appendChild(script);//TODO
					
			
		})();


		// To be used when posting ICA data via message to HTML5 receiver
		window.addEventListener("message", function(event) {
			if (engine) {
				engine.handleMessage(event);
			}else{
				eventArray[eventArray.length] = event;
			}		
		}, false);
}else{
	var HTML5LocationParam = new Array(0);
	(function() {
		var key_Values = location.href.split('?')[1].split('&');
		for (var i = 0; i < key_Values.length; i++) {
			var key_Value = key_Values[i].split("=");
			if (key_Value.length == 2)
				HTML5LocationParam[key_Value[0]] = key_Value[1];
		}
	})();
	importScripts(HTML5LocationParam["filepath"] + "/workerhelper.js");
}