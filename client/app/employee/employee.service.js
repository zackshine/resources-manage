(function(){
    'use strict';

    angular.module('app.employee').service('EmployeeService', EmployeeService);

    EmployeeService.$inject = ['Restangular'];

    function EmployeeService(Restangular) {
        return {
        	pagingEmployees: pagingEmployees,
        	employeeService: employeeService
        }

        function pagingEmployees(pagingParams) {
        	return Restangular.all('api/employees?page=' + pagingParams.page + "&size=" + pagingParams.size);
        }

        function employeeService () {
        	return Restangular.all('api/employees');
        }
    }
})();