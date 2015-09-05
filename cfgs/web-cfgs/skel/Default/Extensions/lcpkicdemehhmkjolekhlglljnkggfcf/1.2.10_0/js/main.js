var	albumId,
	image,
	client_id = '9b0aa5cb5d65843',
	client_secret = '97851ab8356b4994619acc566d854529b0ca640f';

chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason == "install") {
		chrome.storage.sync.set({
			'authorized' : false,
			'incognito' : false,
			'to_direct_link' : false,
			'to_clipboard' : false,
			'to_albums' : false,
			'albums' : {} });
	}

	chrome.storage.sync.get('albums', function(syncStorage) {
		if (!syncStorage.hasOwnProperty('albums')) {
			chrome.storage.sync.set({ 'albums' : {}, 
				'to_albums' : false });
		}
	});

	populateAlbumMenu();
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
	uploadType = info.menuItemId.split(" ");
	if (uploadType[0] == 'area') {		
			chrome.tabs.captureVisibleTab(null, { format: 'png'}, function (img) {
				image = img;
				albumId = uploadType[1];
				chrome.tabs.executeScript(tab.id, { file: 'js/captureArea.js' });
			});
	} else if (uploadType[0] == 'rehost') {
		uploadImage(encodeURIComponent(info.srcUrl), uploadType[1]);
	}
});

chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse) {
	if (msg.height && msg.width) {
		var canvas = document.createElement('canvas');
		canvas.width = msg.width;
		canvas.height = msg.height;
		var context = canvas.getContext('2d');
		var i = new Image();
		i.src = image;
		i.onload = function () {
			context.drawImage(i, msg.left, msg.top, msg.width, msg.height, 0, 0, msg.width, msg.height);
			uploadImage(encodeURIComponent(canvas.toDataURL('image/png').split(',')[1]), albumId);
		};
	}
});

chrome.alarms.onAlarm.addListener(function() {
  chrome.storage.local.set({'expired' : true});
});

chrome.windows.onFocusChanged.addListener(function(windowId) {
	if(windowId != chrome.windows.WINDOW_ID_NONE) {
		chrome.storage.sync.get(['to_albums', 'incognito'], function(syncStorage) {
			if (!syncStorage.incognito && syncStorage.to_albums) {
					chrome.windows.getCurrent(function (window) {
						if (window.incognito) {
							resetMenu();
						} else {
							populateAlbumMenu();
						}
				});
			}
		});
	}
});

function uploadImage(image, albumId) {
	var authorization;
	chrome.storage.sync.get(['authorized', 'incognito'], function (syncStore) {
		chrome.windows.getCurrent(function (window) {
			if (syncStore.authorized && !(window.incognito && !syncStore.incognito)) {
				chrome.storage.local.get('access_token', function (localStore) {
					if (localStore.hasOwnProperty('access_token') && !localStore.expired) {
						authorization = 'Bearer ' + localStore.access_token;
						makeUpload(image, authorization, albumId, function (response) {
							if (response.success) {
								open(response.data);
							} else if (response.data.error == "The access token provided has expired.") {
								refreshToken(function (success) {							
									uploadImage(image, albumId);
								});
							} else {
								notify("That didnt work. You might want to try again.");
							}
						});
					} else {
						refreshToken(function (success) {
							uploadImage(image, albumId);
						});
					}
				});
			} else {
				authorization = 'Client-id ' + client_id;

				makeUpload(image, authorization, undefined, function (response) {
					if (response.success == true) {
						open(response.data);
					} else {
						notify("That didnt work. You might want to try again.");
					}
				});
			}
		});
	});
}

function makeUpload(image, auth, albumId, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://api.imgur.com/3/image', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 

	xhr.setRequestHeader('Authorization', auth);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.responseText && xhr.responseText.length !== "") {
				var response = JSON.parse(xhr.responseText);
				callback(response);
			}	
		}
	};

	data = 'image=' + image;
	if (albumId != undefined) 
		data += '&album=' + albumId;

	xhr.send(data);
}

function open(data) {
	chrome.storage.sync.get(['to_direct_link', 'to_clipboard'], function (syncStorage) {	
		if (syncStorage.to_direct_link)
			chrome.tabs.create({ 'url': data.link, 'selected': true });
		else chrome.tabs.create({'url': 'http://imgur.com/' + data.id, 'selected': true });

		if (syncStorage.to_clipboard) {
			var ta = document.createElement('textarea');
			document.body.appendChild(ta);
			ta.value = data.link;
			ta.select();
			document.execCommand('copy', false, null);
			document.body.removeChild(ta);
		}
	});
}

function refreshToken(callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://api.imgur.com/oauth2/token', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			if (xhr.status == 200) {
				chrome.storage.local.set({'access_token' : response.access_token, 'expired' : false });
				chrome.alarms.create('expired', {'delayInMinutes' : 60});
				callback(true);
			} else {
				chrome.storage.sync.set({'authorized' : false});
				callback(false);
			}
		}
	}

	chrome.storage.sync.get('refresh_token', function(syncStorage) {
		var formData = new FormData();
		formData.append('refresh_token', syncStorage.refresh_token);
		formData.append('client_id', client_id);
		formData.append('client_secret', client_secret);
		formData.append('grant_type', 'refresh_token');
		xhr.send(formData);
	});
}

function notify(message) {
	var options = {
		type: "basic",
		title: "Upload Failure",
		message: message,
		iconUrl: "img/logo.png"
	}
	chrome.notifications.create("", options, function () {});
}

function populateAlbumMenu() {
	chrome.storage.sync.get(['to_albums', 'albums'], function (syncStorage) {
		if (syncStorage.to_albums && Object.keys(syncStorage.albums).length > 0) {
			albums = syncStorage.albums;

			chrome.contextMenus.removeAll(function () {
				chrome.contextMenus.create({ 'title': 'Capture area', 'contexts': ['page'], 'id': 'area parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*']  });
				chrome.contextMenus.create({ 'title': 'Capture area', 'contexts': ['page'], 'id': 'area', 'parentId': 'area parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*'] });				
				chrome.contextMenus.create({ 'type' : 'separator', 'id': 'area sep', 'contexts': ['page'], 'parentId': 'area parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*']  });

				chrome.contextMenus.create({ 'title': 'Rehost image', 'contexts': ['image'], 'id': 'rehost parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*']  });
				chrome.contextMenus.create({ 'title': 'Rehost image', 'contexts': ['image'], 'id': 'rehost', 'parentId': 'rehost parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*'] } );								
				chrome.contextMenus.create({ 'type' : 'separator', 'id': 'rehost sep', 'contexts': ['image'], 'parentId': 'rehost parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*']  });

				for (id in albums) {
					chrome.contextMenus.create({ 'title': albums[id], 'contexts': ['page'], 'id': 'area ' + id, 'parentId': 'area parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*']  });
					chrome.contextMenus.create({ 'title': albums[id], 'contexts': ['image'], 'id': 'rehost ' + id, 'parentId': 'rehost parent', 'documentUrlPatterns' : ['http://*/*', 'https://*/*']  });
				}
			});
		}
		else {
			resetMenu();
		}
	});
}

function resetMenu() {
	chrome.contextMenus.removeAll(function () {
		chrome.contextMenus.create({ 'title': 'Capture area', 'contexts': ['page'], 'id':'area', 'documentUrlPatterns' : ['http://*/*', 'https://*/*'] });
		chrome.contextMenus.create({ 'title': 'Rehost image', 'contexts': ['image'], 'id':'rehost', 'documentUrlPatterns' : ['http://*/*', 'https://*/*']});
	});
}