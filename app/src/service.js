'use strict';
var ListApp = angular.module('ServiceApp',['ngResource'])
ListApp.factory('List',['$resource',function($resource){
	return $resource('/data/:id.json',{},{isArray:false});
}]);