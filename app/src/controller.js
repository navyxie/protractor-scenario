'use strict';
var app = angular.module('ControllerApp',[]);
app
.controller('listCtrl',['$scope','List',function($scope,List){
	$scope.name = 'karma-unit-demo';
	$scope.testFn = function(){
		$scope.name = '';
		return true;
	}
	$scope.lists = List.get({id:'list'});
	$scope.logout = function(){
		if(window.confirm('logout?')){
			window.location.href = '/page/login.html';
		}
	}
}])
.controller('contentCtrl',['$scope','List','$routeParams',function($scope,List,$routeParams){
	var id = $routeParams.id;
	$scope.content = List.get({id:"detail-"+id});
}]);
