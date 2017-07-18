(function () {
    'use strict';

    angular.module('app.employee').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('employee', {
            abstract: true,
            url: '/employee',
            templateUrl: 'app/employee/employee.html'
        })
        .state('employee.list', {
            url: '/list?page&size',
            templateUrl: 'app/employee/list.html',
            controller: 'EmployeeCtrl as emp',
            params: {
                page: '0',
                size: '10'
            },
            resolve:{
                pagingParams:['$stateParams',function($stateParams){
                    return  {
                        page:parseInt($stateParams.page),
                        size:$stateParams.size
                    };
                }]
            }
        })
        .state('employee.add', {
            url: '/add',
            templateUrl: 'app/employee/add.html',
            controller: 'EmployeeEditCtrl as emp'
        });
    }]);
})();