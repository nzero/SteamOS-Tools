/**
 * packageAppController
 * @author: Rocco augusto
**/

(function() {
  'use strict';

  angular.module('twerkControllers', [])
    .controller('packageAppController', ['$scope', '$rootScope', 'templateFactory', '$http',
      function($scope, $rootScope, templateFactory, $http) {
        //set apk file
        $scope.apk = null;
        $scope.apkFilename = '';
        $scope.icon = '/template/icon.png';
        $scope.iconBlob = '';

        //declare properties we will change in manifest.json
        $scope.name = '';
        $scope.packageName = '';
        $scope.packageVersion = '1337';
        $scope.runtime = true;
        $scope.formFactor = false;
        $scope.orientation = false;
        $scope.enableExternalDirectory = false;
        $scope.offline_enabled = true;
        $scope.resize = false;

        //create blank toast message
        $scope.message = '';

        //grab the latest app version to display on the page.
        $scope.version = '';
        $http.get('/manifest.json').success(function(response){
          $scope.version = response.version;
        });

        //google analytics
        if(navigator.onLine)
          tracker.sendAppView('Drop APK');

        //core-menu item click
        $scope.menuClick = function(scope, value) {
          $scope[scope] = (!value) ? true : false;
        }

        /**
         * Reset scope
        **/
        $scope.clearAll = function() {
          //set apk file
          $scope.apk = null;
          $scope.apkFilename = '';
          $scope.icon = '/template/icon.png';
          $scope.iconBlob = null;
          $scope.packageVersion = '1337';

          //declare properties we will change in manifest.json
          $scope.name = '';
          $scope.packageName = '';
          $scope.runtime = true;
          $scope.formFactor = false;
          $scope.orientation = false;
          $scope.enableExternalDirectory = false;
          $scope.offline_enabled = true;
          $scope.resize = false;

          //grab default 'manifest,json'
          templateFactory.manifest().then(function(result) {
            $scope.manifest = result.data;
          });

          //grab default 'messages.json'
          templateFactory.messages().then(function(result) {
            $scope.manifestMessages = result.data;
          });

          //grab default 'icon.png'
          templateFactory.icon().then(function(result) {
            $scope.icon = result.data;
          });

          //google analytics
          if(navigator.onLine)
            tracker.sendAppView('Drop APK: Clear All');
        };

        /**
         * Grab new app icon
        **/
        $scope.newIcon = function() {
          chrome.fileSystem.chooseEntry({type: 'openFile', accepts: [{ extensions: ['png'] }]}, function(entry){

            entry.file(function(file) {
              var reader = new FileReader(),
                  arrayBuffer = new FileReader();

              reader.onload = function(entry) {
                $scope.iconBlob = entry.target.result;
                $scope.$apply();
              };

              arrayBuffer.onload = function(entry) {
                console.log(entry)
                $scope.icon = new Blob([entry.target.result], {type: 'image/png' });
                $scope.$apply();
              };

              reader.readAsDataURL(file);
              arrayBuffer.readAsArrayBuffer(file);
            });
          });
        };

        /**
         * build out application
         * ---
         * - write out all files and directory structure
         * - grab manifest.json
         * - grab messages.json
         * - grab icon.png
        **/
        $scope.manifest = '';
        templateFactory.manifest().then(function(result) {
          $scope.manifest = result.data;
        });

        $scope.manifestMessages = '';
        templateFactory.messages().then(function(result) {
          $scope.manifestMessages = result.data;
        });

        $scope.icon = '';
        templateFactory.icon().then(function(result) {
          $scope.icon = result.data;
        });


        $scope.buildPackage = function() {
          //if form invalid display error
          if(!$scope.name || !$scope.packageName) {
            $scope.dialog('error_name');
            return false;
          }

          //make sure extension matches apk
          var valid = /^[a-zA-Z0-9_.]+$/;
          if(!valid.test($scope.packageName)) {
            $scope.dialog('error_package');
            return false;
          }

          //make sure extension matches apk
          var valid = /^[0-9_.]+$/;
          if(!valid.test($scope.packageVersion)) {
            $scope.dialog('error_version');
            return false;
          }

          var apk = $scope.packageName.substr($scope.packageName.lastIndexOf('.') + 1);
          if(apk == 'apk') {
            $scope.dialog('error_apk');
            return false;
          }

          //set up scope object to pass to builder
          var scope = {
            name: $scope.name,
            packageName: $scope.packageName,
            formFactor: $scope.formFactor,
            orientation: $scope.orientation,
            enableExternalDirectory: $scope.enableExternalDirectory,
            offline_enabled: $scope.offline_enabled,
            runtime: $scope.runtime,
            resize: $scope.resize,
            icon: $scope.icon,
            filename: $scope.apkFilename,
            apk: $scope.apk,
            version: $scope.packageVersion
          }

          //build package
          templateFactory.build(scope, $scope.manifest, $scope.manifestMessages);

          //google analytics
          if(navigator.onLine)
            tracker.sendAppView('Build Package: ' + $scope.packageName);
        };

        /**
         * Enable toast notifications
        **/
        $scope.$on('toast.notify', function(event, message, apply) {
          var noticiations = document.getElementById(notifications);

          $scope.message = message;

          if(apply)
            $scope.$apply();

          notifications.show();

          //google analytics
          if(navigator.onLine)
            tracker.sendAppView('Notification: ' + message);
        });

        /**
         * Enable Paper Dialog Messages
        **/
        $scope.dialog = function(type) {
          var dialog = document.querySelector('paper-dialog');

          //set message from dialogs table
          $scope.modal = window.dialogs[type];

          //toggle dialog modal
          dialog.toggle();

          //google analytics
          if(navigator.onLine) {
            if(type != 'analytics')
              tracker.sendAppView('Dialog: ' + type);
            else
              tracker.sendAppView('Settings');
          }
        }

        //control social links
        $scope.social = function(social) {

          //google analytics
          if(navigator.onLine)
            tracker.sendAppView('Social: ' + social);

          switch(social){
            case 'twitter':
              window.open("https://www.twitter.com/therocco");
              break;
            case 'facebook':
              window.open("https://www.facebook.com/twerkAPK");
              break;
            case 'email':
              window.open("mailto:software@nerdofsteel.com?subject=Twerk Help Desk");
              break;
            default:
              break;
          }
        }

        //watch for new file and prefill packagename
        $scope.$watch('apkFilename', function(newValue, oldValue) {
          if(newValue != oldValue) {
            var packageName = newValue.replace('.apk','');
            var fixed = packageName.split('-');

            //cut off hyphons in filename
            if(typeof fixed == 'object') {
              packageName = fixed[0];
            }

            //apply packageName to scope
            $scope.name = packageName;
            $scope.packageName = packageName;

            //google analytics
            if(navigator.onLine)
              tracker.sendAppView('App Details: ' + packageName);
          }
        });
    }]);
}());