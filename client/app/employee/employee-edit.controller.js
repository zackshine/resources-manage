(function () {
	'use strict';

	/**
	* app.employee Module
	*
	* 新增和编辑控制器
	*/
	angular.module('app.employee').controller('EmployeeEditCtrl', EmployeeEditCtrl);

	EmployeeEditCtrl.$inject = ['$state', '$mdToast', '$document', 'EmployeeService', 'DepartmentService', 'entity'];

	function EmployeeEditCtrl ($state, $mdToast, $document, EmployeeService, DepartmentService, entity) {
		var emp = this;
        emp.departments = DepartmentService.getList().$object;

        emp.employee = entity;

        emp.addEmployee = function() {
            EmployeeService.service().post(emp.employee).then(function(result) {
                if (result.data.id) {
                    $mdToast.show({
                        controller: 'EmployeeEditCtrl',
                        entity: result.data,
                        templateUrl: 'toast-employee.html',
                        parent : $document[0].querySelector('#toastBounds'),
                        hideDelay: 4000,
                        position: 'top right'
                    });
                }
            });
        }

        emp.editEmployee = function editEmployee (id) {
            EmployeeService.service().customPUT(emp.employee).then(function (response) {
                if (response.status === 200) {
                    $mdToast.show({
                        controller: 'EmployeeEditCtrl',
                        entity: response.data,
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