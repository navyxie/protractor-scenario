'use strict';
angular.module('mainApp',[
	'ngRoute',
	'ServiceApp',
	'ControllerApp'
])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:"tpls/lists.html",
		controller:'listCtrl',
	});
	$routeProvider.when('/list/:id',{
		templateUrl:"tpls/content.html",
		controller:'contentCtrl',
	});
	$routeProvider.otherwise({redirectTo: '/'});
}]);