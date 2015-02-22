'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);



helloWorldControllers.controller('MainCtrl', ['$scope', 
    function MainCtrl($scope) {
        $scope.message = "Hello World";
    }]);

helloWorldControllers.controller('ShowCtrl', ['$scope', 
    function ShowCtrl($scope) {
        $scope.message = "Show The World";
    }]);

helloWorldControllers.controller('CustomerCtrl', ['$scope', 
    function CustomerCtrl($scope) {
        $scope.customerName = "Bob's Burgers";
        $scope.customerNumber = 44522;
        $scope.changeCustomer = function(){
            $scope.customerName = $scope.cName;
            $scope.customerNumber = $scope.cNumber;
        };
    }]);


helloWorldControllers.controller('AddCustomerCtrl', ['$scope', '$location',
    function AddCustomerCtrl($scope, $location) {       
        $scope.submit = function(){
            $location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity);
        };
    }]);

helloWorldControllers.controller('AddedCustomerCtrl', ['$scope', '$routeParams',
    function AddedCustomerCtrl($scope, $routeParams) { 
        $scope.customerName = $routeParams.customer;
        $scope.customerCity = $routeParams.city;       
    }]);
