(function() {
    var $ = window.jQuery,
        profileBrowserPresent = false;
    var selectAll = function() {
        var getCheckBoxes = function() {
            return $('div.fbProfileBrowser input[type="checkbox"]:visible, ' +
                'div.fbProfileBrowser .fbProfileBrowserListItem a[role="button"], ' +
                'form[action^="/ajax/events/permalink/invite.php"] a[role="checkbox"]');
            };

        if (!profileBrowserPresent) {
            return;
        }

        var lastPos = 0,
            currPos;

        var focusLastCheckBox = function () {
            currPos = getCheckBoxes().length;
            if (lastPos === currPos) {
                getCheckBoxes().filter(':not(:checked):visible:not([aria-checked="true"])').each(function(i, e) {
                    setTimeout(function () {
                        e.click();
                    }, 1);
                });
            } else {
                getCheckBoxes().last().focus();
                lastPos = currPos;
                setTimeout(function() {
                    focusLastCheckBox();
                }, 500);
            }
        };

        focusLastCheckBox();
    };

    setInterval(function() {
        var profileBrowser = $('div.fbProfileBrowser, form[action^="/ajax/events/permalink/invite.php"]');
        if (profileBrowser.length === 0 || profileBrowserPresent) {
            if (profileBrowser.length === 0 && profileBrowserPresent) {
                // when saved or esc pressed
                profileBrowserPresent = false;
            }
            return;
        }
        if (profileBrowser.find('input[type="checkbox"], ' +
            '.fbProfileBrowserListItem a[role="button"],' +
                'a[role="checkbox"]').length === 0) {
            return;
        }

        profileBrowserPresent = true;

        var browserDialog = $('.profileBrowserDialog, form[action^="/ajax/events/permalink/invite.php"]');

        var buttons = browserDialog.find('td.uiOverlayFooterButtons');
        if (buttons.length === 0) {
            buttons = browserDialog.find('div.uiOverlayFooter');
        }
        buttons.prepend(
            '<a class="uiOverlayButton uiButton uiButtonLarge selectAllFriends" href="#" role="button">' +
            '<span class="uiButtonText">Select All</span>' +
            '</a>'
        );
        var buttonClass = 'a.uiButton.selectAllFriends';
        $(buttonClass).click(
            function() {
                selectAll();
            });
    }, 250);
})();