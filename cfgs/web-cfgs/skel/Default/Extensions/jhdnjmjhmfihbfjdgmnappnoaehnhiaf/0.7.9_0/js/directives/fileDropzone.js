(function() {
  'use strict';

    angular.module('fileDropzone', [])
      .directive('fileDropzone', ['$rootScope', function($rootScope) {
        return {
          restrict: 'A',
          scope: {
            file: '=',
            fileName: '='
          },
          link: function(scope, element, attrs) {
            var checkSize, isTypeValid, processDragOverOrEnter, validMimeTypes;

            processDragOverOrEnter = function(event) {
              if (event != null) {
                event.preventDefault();
              }
              event.dataTransfer.effectAllowed = 'copy';
              return false;
            };

            validMimeTypes = attrs.fileDropzone;

            checkSize = function(size) {
              var _ref;
              if (((_ref = attrs.maxFileSize) === (void 0) || _ref === '') || (size / 1024) / 1024 < attrs.maxFileSize) {
                return true;
              } else {
                $rootScope.$broadcast('toast.notify', 'File must be smaller than ' + attrs.maxFileSize + ' MB');
                return false;
              }
            };

            isTypeValid = function(type) {
              if ((validMimeTypes === (void 0) || validMimeTypes === '') || validMimeTypes.indexOf(type) > -1) {
                return true;
              } else {
                $rootScope.$broadcast('toast.notify', 'Invalid file type.', true);
                return false;
              }
            };

            //bind drag over and drag enter events
            element.bind('dragover', processDragOverOrEnter);
            element.bind('dragenter', processDragOverOrEnter);

            //process apk file on drop
            return element.bind('drop', function(event) {
              var file, name, reader, size, type;

              if (event != null) {
                event.preventDefault();
              }

              reader = new FileReader(file);

              scope.checkFileType = function(file) {
                var apk = /.apk/;

                if (checkSize(size) && isTypeValid(type)) {
                  if(!apk.test(name)) {
                    $rootScope.$broadcast('toast.notify', 'Invalid file type.', true);
                    return false;
                  }

                  var reader = new FileReader();

                  reader.onload = function(entry) {
                    return scope.$apply(function() {
                      var url = window.URL || window.webkitURL;
                      var reader = new FileReader();

                      //scope.file = url.createObjectURL(file);
                      scope.file = entry;

                      if (angular.isString(scope.fileName)) {
                        return scope.fileName = name;
                      }
                    });
                  }
                  reader.readAsArrayBuffer(file);
                }
              };

              //set file meta data
              file = event.dataTransfer.files[0];
              name = file.name;
              type = file.type;
              size = file.size;

              //check filetype
              scope.checkFileType(file);

              return false;
            });
          }
        };
    }]);
}());