/*! CKP - KeePass integration for Chrome™, Copyright 2015 Steven Campbell
*/
"use strict";function OptionsLink(){function go(){var optionsUrl="chrome://extensions/?options="+chrome.runtime.id;chrome.tabs.query({url:optionsUrl},function(tabs){tabs.length?chrome.tabs.update(tabs[0].id,{active:!0}):chrome.tabs.create({url:optionsUrl})})}var exports={go:go};return exports}