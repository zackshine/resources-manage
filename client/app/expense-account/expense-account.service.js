(function () {
	'use strict';

	angular.module('app.expenseAccount').service('ExpenseService', ExpenseService);

	ExpenseService.$inject = ['Restangular'];

	function ExpenseService (Restangular) {
		return Restangular.all('api/expense-accounts');
	}
})();