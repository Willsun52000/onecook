var restCtrls = angular.module('restCtrls', []);

restCtrls.controller('OrderCtrl', ['$scope','$http','$window', '$location',
    function($scope, $http, $window, $location) {
		$http.get('http://127.0.0.1:8080/listMenu').success(function(data){
			$scope.menuList = data;
		}).error(function(){
            console.error("Failed to save.");
        });
    $scope.selectedType = '01';
    $scope.selectedSeat = '';

    $scope.capacity = [{
        value: '1号桌',
        seatNo: '1号桌'
    }, {
        value: '2号桌',
        seatNo: '2号桌'
    }, {
        value: '1号包间',
        seatNo: '1号包间'
    }];


		$scope.tel = $location.search().tel;
		$http.get('http://127.0.0.1:8080/listOrder?tel=' + $scope.tel).success(function(data){
			$scope.orderHistory = data;
		}).error(function(){
            console.error("Failed to save.");
        });

		$scope.count = 0;	
		$scope.sum = 0;	
    
    $scope.selected = [];
    $scope.selectedDish = [];
    var updateSelected = function (action, item) {
    	 order = {"name":item.name, "price":item.price, "amount":item.amount, "comment":item.comment};
        //添加新订单
        if (action == 'add' & $scope.selected.indexOf(item._id) == -1) {
          if(item.amount==0){
            item.amount = 1;
          }
          order = {"name":item.name, "price":item.price, "amount":item.amount, "comment":item.comment};
        	$scope.selected.push(item._id);
        	$scope.selectedDish.push(order);
        }
        //修改订单
        if (action == 'add' & $scope.selected.indexOf(item._id) != -1) {
          //删除旧订单
          index = $scope.selected.indexOf(item._id);
          $scope.selected.splice(index, 1);
          $scope.selectedDish.splice(index, 1);

          //添加新订单
          $scope.selected.push(item._id);
          $scope.selectedDish.push(order);
        }
        //删除订单
        if (action == 'remove' && $scope.selected.indexOf(item._id) != -1) {
          item.amount = 0;

        	index = $scope.selected.indexOf(item._id);
        	$scope.selected.splice(index, 1);
        	$scope.selectedDish.splice(index, 1);
        }
        console.log(order);
        console.log($scope.selectedDish);
        var sum = 0;
        $scope.selectedDish.forEach(function(e){
          sum += e.price * e.amount;
        }) 
        $scope.count = $scope.selectedDish.length; 
        $scope.sum = sum; 
        console.log(sum);
    }

    $scope.updateSelection = function ($event, item) {
        var checkbox = $event.target;
        var action = (checkbox.checked ? 'add' : 'remove');
        updateSelected(action, item.dish);
    }

    //更新数量 or 备注
    $scope.input = function(selected, item) {console.log(selected);
        var action = selected ? 'add' : 'remove';
        updateSelected(action, item.dish);
    }

    $scope.submitOrder = function(orderList, seat, tel) {
    		$http.post('http://127.0.0.1:8080/insertOrder', {"orderList" : orderList, "seat" : seat, "tel" : tel}).success(function(data){
    			console.log(data);
            	$window.location.reload();
    		}).error(function(){
            console.error("Failed to save.");
        });
    }

    $scope.refresh = function() {
      $http.get('http://127.0.0.1:8080/listOrder?tel=' + $scope.tel).success(function(data){
        $scope.orderHistory = data;
      }).error(function(){
            console.error("Failed to save.");
      });

    }


    }
]);
