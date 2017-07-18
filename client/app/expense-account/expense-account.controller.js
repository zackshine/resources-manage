(function () {
	'use strict';

	angular.module('app.expenseAccount').controller('ExpenseAccountCtrl', ExpenseAccountCtrl);

	ExpenseAccountCtrl.$inject = ['$state', '$mdToast', '$document', 'ExpenseService', 'EmployeeService', 'ProjectService'];

	function ExpenseAccountCtrl ($state, $mdToast, $document, ExpenseService, EmployeeService, ProjectService) {
		var vm = this;

		findAll();

		vm.transitionToAddExpenseAccount = function() {
			$state.transitionTo('expenseAccount.add');
		}

		ProjectService.getList().then(function (result) {
			vm.projects = result.data;
		});

		EmployeeService.employeeService().getList().then(function (result) {
        	vm.employees = result.data;
        });

		function findAll() {
        	ExpenseService.getList().then(function (result) {
        		vm.expenseAccounts = result.data;
        	});
        }

        vm.addExpenseAccount = function () {
        	ExpenseService.post(vm.expense).then(function (result) {
        		if (result.data.id) {
                    $mdToast.show({
                        controller: 'ExpenseAccountCtrl',
                        templateUrl: 'toast-expense.html',
                        parent : $document[0].querySelector('#toastBounds'),
                        hideDelay: 4000,
                        position: 'top right'
                    });
                }
        	});
        }

        vm.closeToast = function() {
            $mdToast.hide();
        };
	}
})();