var restCtrls = angular.module('restCtrls', []);

restCtrls.controller('MonitorCtrl', ['$scope','$http','$window',
    function($scope, $http, $window) {
      $scope.orderList = {};

      var refresh = function() {
        $http.get('http://127.0.0.1:8080/listOrder').success(function(data){
          $scope.orderList = data;
        }).error(function(){
              console.error("Failed to save.");
        });
      }
      refresh();

      $scope.changeStatus = function(id, status) {
        $http.post('http://127.0.0.1:8080/changeStatus', {"id": id, "status": status}).success(function(data){
          refresh();
        }).error(function(){
            console.error("Failed to save.");
          });
        }
    }
]);
