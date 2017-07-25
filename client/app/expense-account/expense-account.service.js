(function () {
	'use strict';

	angular.module('app.expenseAccount').service('ExpenseService', ExpenseService);

	ExpenseService.$inject = ['Restangular'];

	function ExpenseService (Restangular) {
		var service = {};
		var expenseAccounts = Restangular.all('api/expense-accounts');

		service.all = function all () {
			return expenseAccounts;
		}

		service.findOne = function findOne (id) {
			return Restangular.one('api/expense-accounts/' + id);
		}

		service.paging = function pagingExpenseAccounts (pagingParams) {
			return Restangular.all('api/expense-accounts?page=' + pagingParams.page + '&size=' + pagingParams.size);
		}

		service.update = function update (expenseAccount) {
			return expenseAccounts.customPUT(expenseAccount);
		}

		return service;
	}
})();