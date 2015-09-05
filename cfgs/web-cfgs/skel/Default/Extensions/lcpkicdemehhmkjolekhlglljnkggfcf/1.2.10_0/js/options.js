var client_id = '9b0aa5cb5d65843',
	client_secret = '97851ab8356b4994619acc566d854529b0ca640f';

window.onload = function() {
	checkAuthorization( function (isAuthorized) {
		if(isAuthorized) {
			setAuthorized();
		} else {
			setUnauthorized();
		}
	});

	chrome.storage.sync.get(['incognito', 'to_direct_link', 'to_clipboard', 'to_albums'], function (syncStorage) {
		if (syncStorage.incognito) 
			document.getElementById('incognito').checked = true;
		if (syncStorage.to_direct_link)
			document.getElementById('to_direct_link').checked = true;
		if (syncStorage.to_clipboard) 
			document.getElementById('to_clipboard').checked = true;
		if (syncStorage.to_albums) 
			document.getElementById('to_albums').checked = true;
	});

	document.getElementById('authButton').addEventListener('click', function() {
		chrome.tabs.update({'url': 'https://api.imgur.com/oauth2/authorize?client_id=' + client_id + '&response_type=token'});
	});

	document.getElementById('logout').addEventListener('click', function() {
		chrome.storage.sync.set({'authorized' : false});
		setUnauthorized();
	});

	document.getElementById('incognito').addEventListener('change', function() {
		chrome.storage.sync.set({'incognito' : document.getElementById('incognito').checked })
	});

	document.getElementById('to_direct_link').addEventListener('change', function() {
		chrome.storage.sync.set({'to_direct_link' : document.getElementById('to_direct_link').checked })
	});

	document.getElementById('to_clipboard').addEventListener('change', function() {
		chrome.storage.sync.set({'to_clipboard' : document.getElementById('to_clipboard').checked })
	});

	document.getElementById('to_albums').addEventListener('change', function () {
		chrome.storage.sync.set({'to_albums' : document.getElementById('to_albums').checked })

		if (document.getElementById('to_albums').checked) {
			setAlbums();
		} else {
			resetMenu();
		}
	});

	document.getElementById('albumSelector').addEventListener('click', function() {
		options = document.getElementById('availableAlbums').options;
		for (i = 0; i < options.length; i++) {
			if (options[i].selected) {
				document.getElementById('selectedAlbums').options.add(options[i]);	
			}
		}

		setAlbums();
	});

	document.getElementById('albumDeselector').addEventListener('click', function() {
		options = document.getElementById('selectedAlbums').options;
		for (i = 0; i < options.length; i++) {
			if (options[i].selected) {
				document.getElementById('availableAlbums').options.add(options[i]);
			}
		}

		setAlbums();
	});


	document.getElementById('settings-l').addEventListener('click', function() {
		document.getElementById('settings').setAttribute('class','selected');
		document.getElementById('settings').style.display = '';
		document.getElementById('settings-l').setAttribute('class','selected');

		document.getElementById('about').removeAttribute('class');
		document.getElementById('about').style.display = 'none';
		document.getElementById('about-l').removeAttribute('class');
	});

	document.getElementById('about-l').addEventListener('click', function() {
		document.getElementById('about').setAttribute('class','selected');
		document.getElementById('about').style.display = '';
		document.getElementById('about-l').setAttribute('class','selected');

		document.getElementById('settings').removeAttribute('class');
		document.getElementById('settings').style.display = 'none';
		document.getElementById('settings-l').removeAttribute('class');
	});
}

function setAuthorized() {
	var ab = document.getElementById('authButton');
	ab.setAttribute('disabled', 'disabled');
	ab.innerHTML = 'Authorized!';
	chrome.storage.sync.get('username', function(syncStorage) {
		document.getElementById('user').innerHTML = 'Logged in as <b>' + syncStorage.username + '</b>.';
	});
	document.getElementById('incognito').removeAttribute('disabled');
	document.getElementById('to_albums').removeAttribute('disabled');
	document.getElementById('logout').style.display = '';

	listAlbums(function() {		
		setAlbums();
	});
}

function setUnauthorized() {
	var ab = document.getElementById('authButton');
	ab.removeAttribute('disabled');
	ab.innerHTML = 'Authorize';

	document.getElementById('user').innerHTML = 'Not currently logged in.';
	document.getElementById('incognito').setAttribute('disabled', 'disabled');	
	document.getElementById('to_albums').setAttribute('disabled', 'disabled');
	document.getElementById('logout').style.display = 'none';

	while(document.getElementById('availableAlbums').options.length > 0)
		document.getElementById('availableAlbums').options.remove(0);

	while(document.getElementById('selectedAlbums').options.length > 0)
		document.getElementById('selectedAlbums').options.remove(0);

	resetMenu();
}

function checkAuthorization(callback) {
	var params = {}, queryString = location.hash.substring(1),
	    regex = /([^&=]+)=([^&]*)/g, m;
	while (m = regex.exec(queryString)) {
	  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	}

	if (params.hasOwnProperty('access_token')) {
		chrome.storage.sync.set({
			'authorized' : true,
			'refresh_token' : params.refresh_token,
			'username': params.account_username
		});

		chrome.storage.local.set({
			'access_token' : params.access_token,
			'expired' : false
		});

		chrome.alarms.create('expired', {'delayInMinutes' : 60});
	}

	chrome.storage.sync.get('authorized', function(syncStorage) {
		if (syncStorage.authorized) {
			chrome.storage.local.get(['access_token', 'expired'], function(localStorage) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', 'https://api.imgur.com/oauth2/token', true);
				xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.access_token);
				xhr.onreadystatechange = function() {		
					if (xhr.readyState == 4) {			
						var response = JSON.parse(xhr.responseText);
						if (response.success && !localStorage.expired) {
							callback(true);
						}
						else {
							refreshToken(function (isAuthorized) {
								callback(isAuthorized);
							});
						}
					}
				}
				xhr.send();
			});
		} else {
			callback(false);
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

function listAlbums(callback) {
	chrome.storage.sync.get(['username', 'albums'], function(syncStorage) {
		chrome.storage.local.get('access_token', function(localStorage) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://api.imgur.com/3/account/' + syncStorage.username + '/albums/', true);
			authorization = 'Bearer ' + localStorage.access_token;
			xhr.setRequestHeader('Authorization', authorization);

			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					var response = JSON.parse(xhr.responseText);
					if (xhr.status == 200) {
						albums = response.data;
						if (albums.length > 0) {		
							availableList = document.getElementById('availableAlbums');
							selectedList = document.getElementById('selectedAlbums');
							for (i in albums) {
								if (!syncStorage.albums.hasOwnProperty(albums[i].id)) {
									if (albums[i].title == undefined) 
										albums[i].title = albums[i].id;
									availableList.options[availableList.length] = new Option(albums[i].title, albums[i].id);
								} else {									
									selectedList.options[selectedList.length] = new Option(albums[i].title, albums[i].id);
								}
							}
						}
						callback();
					}
				}
			}

			xhr.send();
		});
	});
}

function setAlbums() {
	var albums = {};
	selected = document.getElementById('selectedAlbums').options;
	for (i = 0; i < selected.length; i++) {
		albums[selected[i].value] = selected[i].label;
	}

	chrome.storage.sync.set({'albums' : albums}, function (){		
		populateAlbumMenu();
	});
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

