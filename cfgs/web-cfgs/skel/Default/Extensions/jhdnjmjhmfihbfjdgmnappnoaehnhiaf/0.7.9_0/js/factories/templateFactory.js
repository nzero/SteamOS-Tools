/**
 * templateFactory
 * @author: Rocco augusto
**/
(function() {
  'use strict';

  angular.module('twerkFactories', [])
    .factory('templateFactory', ['$http', '$rootScope', function($http, $rootScope) {
      return {
        manifest: function() {
          return $http.get('/template/manifest.tpl')
            .success(function(res) {
              return res;
            });
        },
        messages: function() {
          return $http.get('/template/_locales/en/messages.tpl')
            .success(function(res) {
              return res;
            });
        },
        icon: function() {
          return $http.get('/template/icon.png', { responseType: 'arraybuffer' })
    				.success(function(response) {
    				  var url = window.URL || window.webkitURL;
    					var img = new Blob([response], { type: 'image/png' });

    					//return url.createObjectURL(img);
    					return response;
    				});
        },
        build: function(scope, manifest, messages) {
          var _self = this;
          var scope = scope,
              manifest = manifest,
              messages = messages;

          //choose a directory to save to
          chrome.fileSystem.chooseEntry({ type:'openDirectory' }, function(entry) {
            chrome.fileSystem.getWritableEntry(entry, function(entry) {
              var scaffoldCount = 0;

              //create folder structers
              var createScaffold = function(dir, folders) {
                dir.getDirectory(folders[0], {create: true}, function(dir) {
                  if (folders.length) {
                      createScaffold(dir, folders.slice(1));
                  }
                }, function(error) {
                  console.log(error);
                });

                if(!folders.length)
                  --scaffoldCount;

                if(scaffoldCount == 0)
                  createFiles();
              };

              //create files once folders are in place
              var createFiles = function() {
                //write the 'manifest.json' file
                entry.getFile(apkDir + '/manifest.json', {create:true}, function(entry) {
                  entry.createWriter(function(writer) {
                    var json = JSON.stringify(manifest, null, '\t'),
                        content = new Blob([json], {type: 'text/plain'});

                    writer.onwriteend = function() {
                      if(writer.length === 0 ) {
                        writer.write(content);
                      }
                    }
                    writer.truncate(0);
                  });
                });

                //write '_locales/en/messages.json' file
                entry.getFile(apkDir + '/_locales/en/messages.json', {create:true}, function(entry) {
                  entry.createWriter(function(writer) {
                    var json = JSON.stringify(messages,null,'\t'),
                        content = new Blob([json], {type: 'text/plain'});

                    writer.onwriteend = function() {
                      if(writer.length === 0 ) {
                        writer.write(content);
                      }
                    }
                    writer.truncate(0);
                  });
                }, function(error) {
                  console.log(error);
                });

                //write 'app_main.html' file
                entry.getFile(apkDir + '/app_main.html', {create:true}, function(entry) {
                  entry.createWriter(function(writer) {
                    var app_main = '<iframe src="_modules/mfaihdlpglflfgpfjcifdjdjcckigekc/main.html"></iframe>',
                        content = new Blob([app_main], {type: 'text/plain'});

                    writer.onwriteend = function() {
                      if(writer.length === 0 ) {
                        writer.write(content);
                      }
                    }
                    writer.truncate(0);
                  });
                }, function(error) {
                  console.log(error);
                });

                //write 'icon.png' file
                entry.getFile(apkDir + '/icon.png', {create:true}, function(entry) {
                  entry.createWriter(function(writer) {
                    var content = new Blob([scope.icon], { type: 'image/png' });

                    console.log(content);

                    writer.onwriteend = function() {
                      if(writer.length === 0 ) {
                        writer.write(content);
                      }
                    }
                    writer.truncate(0);
                  });
                }, function(error) {
                  console.log(error);
                });

                //write 'icon.png' file
                entry.getFile(apkDir + '/vendor/chromium/crx/custom-android-release-1400197.apk', {create:true}, function(entry) {
                  entry.createWriter(function(writer) {
                    var content = new Blob([scope.apk.target.result], { type: 'application/vnd.android.package-archive' });

                    console.log(content);

                    writer.onwriteend = function() {
                      if(writer.length === 0 ) {
                        writer.write(content);
                      }
                    }
                    writer.truncate(0);
                  });
                }, function(error) {
                  console.log(error);
                });

                //set success message and display
                $rootScope.$broadcast('toast.notify', scope.name + ' as been built.', true);
              };

              //set application name
              messages.extName.message = scope.name;

              //set manifest data
              manifest.arc_metadata.name = scope.packageName;
              manifest.arc_metadata.packageName = scope.packageName;
              manifest.arc_metadata.formFactor = (!!scope.formFactor) ? 'tablet' : 'phone';
              manifest.arc_metadata.orientation = (!!scope.orientation) ? 'landscape' : 'portrait';
              manifest.arc_metadata.enableExternalDirectory = (!!scope.enableExternalDirectory) ? true : false;
              manifest.offline_enabled = (!!scope.offline_enabled) ? true : false;
              manifest.version = (!!scope.version) ? scope.version.replace(/[^0-9$.]/g, '') : 1337;

              //determine resizing ability
              if(scope.resize)
                manifest.arc_metadata.resize = 'scale';

               //set app directory and folder names
              var apkDir = scope.packageName + '_twerk',
                  folders = [
                    apkDir + '/_locales/en',
                    apkDir + '/vendor/chromium/crx'
                  ];

              //create folders if they do not exist
              for(var i = 0; i < folders.length; i++) {
                scaffoldCount++;
                createScaffold(entry, folders[i].split('/'));
              }
            });
          });
        }
      }
  }]);
}());