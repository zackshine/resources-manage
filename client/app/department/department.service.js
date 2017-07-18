(function() {
    'use strict';

    angular.module('app.department').service('DepartmentService', DepartmentService);

    DepartmentService.$inject = ['Restangular'];

    function DepartmentService(Restangular) {

        return Restangular.service('api/departments');
    }
})();