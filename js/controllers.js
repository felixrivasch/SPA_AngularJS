'use strict';
var motoAppControllers = angular.module('motoAppControllers', []);

motoAppControllers.controller('motoListController', ['$scope', 'motoService',
	function ($scope, motoService) {
		$scope.motorcycles = motoService.query();
		$scope.orderProp = 'modelo';
	}
]);

motoAppControllers.controller('motoDetailController', ['$scope', '$routeParams', 'motoService',
	function ($scope, $routeParams, motoService) {
		$scope.motorcycle = motoService.get({ motoId : $routeParams.motoId }, function (motorcycle) {
			$scope.mainImageUrl = motorcycle.imagenes[0];
		});
		$scope.setImage = function (imageUrl) {
			$scope.mainImageUrl = imageUrl;
		};
	}
]);