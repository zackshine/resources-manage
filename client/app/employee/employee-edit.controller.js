(function () {
	'use strict';

	/**
	* app.employee Module
	*
	* 新增和编辑控制器
	*/
	angular.module('app.employee').controller('EmployeeEditCtrl', EmployeeEditCtrl);

	EmployeeEditCtrl.$inject = ['$state', '$mdToast', '$document', 'EmployeeService', 'DepartmentService'];

	function EmployeeEditCtrl ($state, $mdToast, $document, EmployeeService, DepartmentService) {
		var emp = this;
        emp.departments = DepartmentService.getList().$object;

        emp.addEmployee = function() {
            EmployeeService.employeeService().post(emp.employee).then(function(result) {
                if (result.data.id) {
                    $mdToast.show({
                        controller: 'EmployeeEditCtrl',
                        templateUrl: 'toast-employee.html',
                        parent : $document[0].querySelector('#toastBounds'),
                        hideDelay: 4000,
                        position: 'top right'
                    });
                }
            });
        }
	}
})();