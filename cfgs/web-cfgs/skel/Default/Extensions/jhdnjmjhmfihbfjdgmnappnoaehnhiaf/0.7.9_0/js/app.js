//set input border colors
var paperInput = CoreStyle.g.paperInput = CoreStyle.g.paperInput || {};
    paperInput.focusedColor = '#00bcd4';
    paperInput.invalidColor = '#d23f31';

//get Google Analytics service
var debug = function(msg, level) { console.log(level + ': ' + msg)  };
var service = analytics.getService('twerk_chromeos');
var tracker = service.getTracker('UA-55325524-1');
var config = service.getConfig().addCallback(function(config) { config.isTrackingPermitted(true); });

(function() {
  'use strict';

  //set error dialog and headings
  window.dialogs = {
    error_name: {
      heading: 'Sad pandas...',
      message: '<p>You have to fill out the Application Name and the Package Name.</p>'
    },
    error_package: {
      heading: 'Whomp whomp...',
      message: '<p>Package name should be a combination of all uppercase and lowercase letters, ' +
        'underscores, and periods (<em>e.g. com.package.name</em>)</p>'
    },
    error_version: {
      heading: 'Whomp whomp...',
      message: '<p>Required value "version" is missing or invalid. It must be between ' +
      '1-4 dot-separated integers each between 0 and 65536.</p>'
    },
    error_apk: {
      heading: 'Oh noes!..',
      message: '<p>Your package name should not end in ".apk".</p>'
    },
    analytics: {
      heading: 'Real talk...',
      message: '<p>Would you like to send the developer anonymous usage data through ' +
        'Google Analytics? This data will be used to provide better updates in the future.</p>',
      buttons: {
        accept: function() {
          return $scope.analytics(true);
        },
        decline: function() {
          return $scope.analytics(false);
        }
      }
    }
  };

  //init app
  var app = angular.module('twerk', ['ng-polymer-elements', 'fileDropzone','twerkFactories', 'twerkControllers']);

  app.config(function($compileProvider, $sceProvider) {
    //sanatize urls
  	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension|blob):/);
  	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension|blob|data):/);
  });

  //bind HTML filter
  app.filter('convert', ['$sce', function($sce) {
    return function(value) {
  		return $sce.trustAsHtml(value);
  	};
  }]);

  //bind src filter
  app.filter('convertIMG', ['$sce', function($sce) {
    return function(value) {
  		return $sce.trustAsURL(value);
  	};
  }]);

  //grab launch data and start new details
  window.passLaunchData = function(launchData) {
    console.log(launchData)
  }
}());