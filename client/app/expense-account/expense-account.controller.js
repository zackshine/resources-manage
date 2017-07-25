(function () {
	'use strict';

	angular.module('app.expenseAccount').controller('ExpenseAccountCtrl', ExpenseAccountCtrl);

	ExpenseAccountCtrl.$inject = ['$state', 'ExpenseService', 'pagingParams'];

	function ExpenseAccountCtrl ($state, ExpenseService, pagingParams) {
		var vm = this;

		findAll(pagingParams);

		vm.transitionToAddExpenseAccount = function() {
			$state.transitionTo('expenseAccount.add');
		}

		function findAll(_pagingParams) {
        	ExpenseService.paging(_pagingParams).getList().then(function (result) {
        		vm.expenseAccounts = result.data;
        	});
        }

        vm.delete = function deleteExpenseAccount (id) {
            ExpenseService.findOne(id).remove().then(function (response) {
                findAll(pagingParams);
            });
        }

        vm.closeToast = function() {
            $mdToast.hide();
        };
	}
})();