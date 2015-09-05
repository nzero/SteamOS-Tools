/*! CKP - KeePass integration for Chrome™, Copyright 2015 Steven Campbell
*/
"use strict";function SampleDatabaseController($scope,sampleDatabaseFileManager){$scope.useSample=!1,sampleDatabaseFileManager.getActive().then(function(isActive){$scope.useSample=isActive,$scope.$apply()}),$scope.updateSampleFlag=function(){sampleDatabaseFileManager.setActive($scope.useSample)}}