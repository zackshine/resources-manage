(function () {
	'use strict';

	/**
	* app.allowance Module
	*
	* 编辑项目津贴
	*/
	angular.module('app.allowance').controller('AllowanceEditCtrl', AllowanceEditCtrl);

	AllowanceEditCtrl.$inject = ['$mdToast', '$document', 'EmployeeService', 'ProjectService', 'AllowanceService', 'entity'];

	function AllowanceEditCtrl ($mdToast, $document, EmployeeService, ProjectService, AllowanceService, entity) {
		var vm = this;

		vm.allowance = entity;

		ProjectService.all().getList().then(function (result) {
			vm.projects = result.data;
		});

		EmployeeService.service().getList().then(function (result) {
        	vm.employees = result.data;
        });

        vm.update = function updateAllowance () {
        	AllowanceService.update(vm.allowance).then(function (response) {
        		if (response.status === 200) {
        			$mdToast.show({
                        controller: 'AllowanceEditCtrl',
                        templateUrl: 'toast-allowance.html',
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