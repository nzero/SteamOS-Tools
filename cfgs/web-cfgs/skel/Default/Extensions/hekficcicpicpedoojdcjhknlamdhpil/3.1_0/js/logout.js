function logout() {
    wv.clearData({
            since: 0
        }, {
            cookies: true
        },
        function () {
            wv.reload();
        });
}

chrome.contextMenus.create({
    'title': 'Sign out',
    'id': 'logout',
    'contexts': ['all']
});

chrome.contextMenus.onClicked.addListener(function (itemData) {
    if (itemData.menuItemId == "logout")
        logout();
});

chrome.systemIndicator.onClicked.addListener(function () {
    logout();
});