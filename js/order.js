var myModule = angular.module("MenuModule", []);

myModule.controller("MenuController", ['$scope',
    function MenuModule($scope) {
        $scope.menuList = [
		    "{ \"_id\" : { \"$oid\" : \"57f3648ea0bc250323c8dc12\" }, \"name\" : \"地三鲜\", \"desc\" : \"介绍1\", \"price\" : 20, \"picPath\" : \"../image/disanxian.jpg\" }",
		    "{ \"_id\" : { \"$oid\" : \"57f364cba0bc2503244e0bbf\" }, \"name\" : \"宫保鸡丁\", \"desc\" : \"介绍2\", \"price\" : 30, \"picPath\" : \"../image/gongbaojiding.jpg\" }",
		    "{ \"_id\" : { \"$oid\" : \"57f36509a0bc25032575926e\" }, \"name\" : \"肉末茄子\", \"desc\" : \"介绍3\", \"price\" : 40, \"picPath\" : \"../image/roumoqiezi.jpg\" }",
		    "{ \"_id\" : { \"$oid\" : \"57f3653aa0bc2503266f59a4\" }, \"name\" : \"鱼香肉丝\", \"desc\" : \"介绍4\", \"price\" : 20, \"picPath\" : \"../image/yuxiangrousi.jpg\" }"
		];
    }
]);