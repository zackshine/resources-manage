(function () {
	'use strict';

	/**
	* app.expenseAccount Module
	*
	* 新建报销单
	*/
	angular.module('app.expenseAccount').controller('ExpenseAccountCreateCtrl', ExpenseAccountCreateCtrl);

	ExpenseAccountCreateCtrl.$inject = ['$mdToast', '$document', 'ExpenseService', 'EmployeeService', 'ProjectService'];

	function ExpenseAccountCreateCtrl ($mdToast, $document, ExpenseService, EmployeeService, ProjectService) {
		var vm = this;

		ProjectService.all().getList().then(function (result) {
			vm.projects = result.data;
		});

		EmployeeService.service().getList().then(function (result) {
        	vm.employees = result.data;
        });

        vm.addExpenseAccount = function () {
        	ExpenseService.all().post(vm.expense).then(function (result) {
        		if (result.data.id) {
                    $mdToast.show({
                        controller: 'ExpenseAccountCreateCtrl',
                        templateUrl: 'toast-expense.html',
                        parent : $document[0].querySelector('#toastBounds'),
                        hideDelay: 4000,
                        position: 'top right'
                    });
                }
        	});
        }
	}
})();