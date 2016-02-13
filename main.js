var  myApp = angular.module("myModule",[]);
myApp.controller("myController",function($scope,$http){

    $http.get("data.php").success(function(data)
    {
        
        $scope.message = data;
    
    })



}) ;
