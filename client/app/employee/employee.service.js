(function(){
    'use strict';

    angular.module('app.employee').service('EmployeeService', EmployeeService);

    EmployeeService.$inject = ['Restangular'];

    function EmployeeService(Restangular) {
        return {
        	pagingEmployees: pagingEmployees,
        	service: service,
            findOne: findOne
        }

        function pagingEmployees(pagingParams) {
        	return Restangular.all('api/employees?page=' + pagingParams.page + "&size=" + pagingParams.size);
        }

        function service () {
        	return Restangular.all('api/employees');
        }

        function findOne (params) {
            return Restangular.one('api/employees/' + params.id);
        }
    }
})();