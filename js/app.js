var restApp = angular.module('restApp', [
    'restCtrls'
]);
restApp.config(['$locationProvider', function($locationProvider) {
  	$locationProvider.html5Mode(true);
}]);
