(function() {
	'use strict';

	angular./**
	* app.allowance Module
	*
	* 项目津贴
	*/
	module('app.allowance').controller('AllowanceCtrl', AllowanceCtrl);

	AllowanceCtrl.$inject = ['$state', 'EmployeeService', 'ProjectService', 'AllowanceService', 'pagingParams'];

	function AllowanceCtrl ($state, EmployeeService, ProjectService, AllowanceService, pagingParams) {
		var vm = this;
		findAll(pagingParams);

        function findAll (_pagingParams) {
        	AllowanceService.paging(_pagingParams).getList().then(function (response) {
        		vm.allowances = response.data;
        	});
        }

		vm.transitionToAddAllowance = function() {
			$state.transitionTo('allowance.add');
		}

		vm.delete = function deleteAllowance (id) {
			AllowanceService.findOne(id).remove().then(function (response) {
				if (response.status === 200) {
					findAll(pagingParams);
				}
			});
		}
		
	}
})();