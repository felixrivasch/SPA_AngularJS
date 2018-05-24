'use strict';

var motoApp = angular.module('motoApp', ['ngRoute', 'motoAppAnimations', 'motoAppControllers', 'motoAppServices']);

motoApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/motorcycles', {
			templateUrl: 'partials/moto-list.html',
			controller: 'motoListController'
		})
		.when('/motorcycles/:motoId', {
			templateUrl: 'partials/moto-detail.html',
			controller: 'motoDetailController'
		})
		.otherwise({
			redirectTo: '/motorcycles'
		})
}])