(function () {
	'use strict';

	/**
	* app.expenseAccount Module
	*
	* 编辑报销单
	*/
	angular.module('app.expenseAccount').controller('ExpenseAccountEditCtrl', ExpenseAccountEditCtrl);

	ExpenseAccountEditCtrl.$inject = ['$mdToast', '$document', 'ExpenseService', 'EmployeeService', 'ProjectService', 'entity'];

	function ExpenseAccountEditCtrl ($mdToast, $document, ExpenseService, EmployeeService, ProjectService, entity) {
		var vm = this;
		vm.expense = entity;

		ProjectService.all().getList().then(function (result) {
			vm.projects = result.data;
		});

		EmployeeService.service().getList().then(function (result) {
        	vm.employees = result.data;
        });

        vm.update = function updateExpenseAccount () {
        	ExpenseService.update(vm.expense).then(function (response) {
        		if (response.status === 200) {
        			$mdToast.show({
                        controller: 'ExpenseAccountEditCtrl',
                        templateUrl: 'toast-expense.html',
                        entity: response.data,
                        parent : $document[0].querySelector('#toastBounds'),
                        hideDelay: 4000,
                        position: 'top right'
                    });
        		}
        	});
        }
	}
})();