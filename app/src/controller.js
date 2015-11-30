'use strict';
var app = angular.module('ControllerApp',[]);
app
.controller('listCtrl',['$scope','List',function($scope,List){
	$scope.name = 'karma-unit-demo';
	$scope.lists = List.get({id:'list'});
}])
.controller('contentCtrl',['$scope','List','$routeParams',function($scope,List,$routeParams){
	var id = $routeParams.id;
	$scope.content = List.get({id:"detail-"+id});
}]);
