(function () {
	'use strict';

	/**
	* app.allowance Module
	*
	* 新增项目津贴
	*/
	angular.module('app.allowance').controller('AllowanceCreateCtrl', AllowanceCreateCtrl);

	AllowanceCreateCtrl.$inject = ['$mdToast', '$document', 'EmployeeService', 'ProjectService', 'AllowanceService'];

	function AllowanceCreateCtrl ($mdToast, $document, EmployeeService, ProjectService, AllowanceService) {
		var vm = this;

		ProjectService.all().getList().then(function (result) {
			vm.projects = result.data;
		});

		EmployeeService.service().getList().then(function (result) {
        	vm.employees = result.data;
        });

		vm.addAllowance = function() {
			AllowanceService.all().post(vm.allowance).then(function(response) {
				if (response.data.id) {
					$mdToast.show({
                        controller: 'AllowanceCreateCtrl',
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