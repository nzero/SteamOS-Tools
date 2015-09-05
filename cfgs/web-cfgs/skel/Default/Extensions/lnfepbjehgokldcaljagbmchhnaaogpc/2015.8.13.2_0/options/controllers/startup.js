/*! CKP - KeePass integration for Chrome™, Copyright 2015 Steven Campbell
*/
"use strict";function StartupController($scope,settings){settings.getCurrentDatabaseChoice().then(function(choice){$scope.alreadyChoseDb=null==choice?!1:!0}).then(function(){$scope.$apply()})}