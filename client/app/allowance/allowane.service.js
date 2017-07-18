(function() {
	'use strict';
	
	angular.module('app.allowance').service('AllowanceService', AllowanceService);

	AllowanceService.$inject = ['Restangular'];

	function AllowanceService (Restangular) {
		return Restangular.all('api/allowances');
	}
})();