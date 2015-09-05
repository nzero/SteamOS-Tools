/*Copyright (c) 2014 Citrix Systems, Inc.
The materials in this file are protected by copyright and other intellectual property laws.
Copying and use is permitted only by end users to enable use of Citrix server technology.
Any other reproduction or use of this file, or any portion of it, is unlicensed.
In no event may the file be reverse engineered or may copies be made in association with deobfuscation, decompilation or disassembly.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

var HTML5_CONFIG = {
	'type':'update',
	'vc_channel' : {
	},
	'userinput' : {
		'mousetimer' : '*'
	},
	'ui' : {
		'toolbar' : {
			'menubar':true,
			'clipboard':true,
			'usb' : false,
			'fileTransfer':true
		}
	},
	'features' : {
		'seamlesswindow' : false,
		'seamlessclip' : true,
		'sessionsharing' : true,
		'audio' : {
			'HTML5_Audio_Buffer_Duration' : 250,
			'HTML5_Audio_Lag_Threshold'	  :	250
		},
		'graphics' : {
			'jpegSupport' : true,
			'h264Support' : {
				'enabled' : true,
				'losslessOverlays' : true,
				'dirtyRegions' : true,
				'yuv444Support' : false
			}
		},
		'filetransfer' : {
			'allowupload' : true,
			'allowdownload' : true,
			'maxuploadsize'	: 2147483647,//2GB
			'maxdownloadsize' : 262143999,//250MB
			'maxfiles'	: 10
		}
	},
	'domain' : {
		//'src':list of domain seperated by ;
		//'message':
	},
	'hardware' : {
		'webgl' : true
	},
	'transport' : {
		'outbufscountclient' : 88,
		'outbufscounthost' : 88,
		'cgpEnabled' : true
	},
	'other' : {
		'sec_protocol' : "",
		'workerdisable' : false,
		'h264nonworker' : false
	},
	'fpsMeter':{
		'visibility':false,
		'updateFrequency':5000
	},
	//Preferences for chrome app
	'appPrefs':{
		'chromeApp':{
			'ui' : {
				'toolbar' : {
					'menubar':true,
					'clipboard': false,
					'usb' : true,
					'fileTransfer':true
				}
			},
			'nacl' : {
				'supportNacl' : true,
				'supportGraphics' : true
			},
			'transport' : {
				'outbufscountclient' : 88,
				'outbufscounthost' : 88,
				'cgpEnabled' : true,
				'nativeSocket' : true
			}
		}
	}
};

