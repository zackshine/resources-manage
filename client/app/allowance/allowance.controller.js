(function() {
	'use strict';

	angular./**
	* app.allowance Module
	*
	* 项目津贴
	*/
	module('app.allowance').controller('AllowanceCtrl', AllowanceCtrl);

	AllowanceCtrl.$inject = ['$state', '$mdToast', '$document', 'EmployeeService', 'ProjectService', 'AllowanceService'];

	function AllowanceCtrl ($state, $mdToast, $document, EmployeeService, ProjectService, AllowanceService) {
		var vm = this;
		findAll();

		ProjectService.getList().then(function (result) {
			vm.projects = result.data;
		});

		EmployeeService.employeeService().getList().then(function (result) {
        	vm.employees = result.data;
        });

        function findAll () {
        	AllowanceService.getList().then(function (response) {
        		vm.allowances = response.data;
        	});
        }

		vm.transitionToAddAllowance = function() {
			$state.transitionTo('allowance.add');
		}

		vm.addAllowance = function() {
			AllowanceService.post(vm.allowance).then(function(response) {
				if (response.data.id) {
					$mdToast.show({
                        controller: 'AllowanceCtrl',
                        templateUrl: 'toast-allowance.html',
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