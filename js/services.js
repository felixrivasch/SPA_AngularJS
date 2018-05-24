'use strict';

var motoAppServices = angular.module('motoAppServices', ['ngResource']);

motoAppServices.factory('motoService', ['$resource',
	function ($resource) {
		return $resource('dataMotorcycles/:motoId.json', {}, {   
			query: {
					method: 'GET',
					params: {
						motoId: 'motorcycles' //se pasa en dura el valor del parametro :motoId
					},
				isArray: true
			}
		});
	}])