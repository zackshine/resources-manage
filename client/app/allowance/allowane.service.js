(function() {
	'use strict';
	
	angular.module('app.allowance').service('AllowanceService', AllowanceService);

	AllowanceService.$inject = ['Restangular'];

	function AllowanceService (Restangular) {
		var service = {};
		var allowances = Restangular.all('api/allowances');

		service.findOne = function findOne (id) {
			return Restangular.one('api/allowances/' + id);
		}

		service.paging = function paging (pagingParams) {
			return Restangular.all('api/allowances?page=' + pagingParams.page + '&size=' + pagingParams.size);
		}

		service.all = function all () {
			return allowances;
		}

		service.update = function updateAllowance (allowance) {
			return allowances.customPUT(allowance);
		}

		return service;
	}
})();