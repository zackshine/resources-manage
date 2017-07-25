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
            controller: 'EmployeeEditCtrl as emp',
            resolve: {
                entity: function () {
                    return {
                        userName: null,
                        employeeType: null,
                        department: null,
                        entryDate: null,
                        incomeBeforeTax: null,
                        incomeAfterTax: null,
                        id: null
                    };
                }
            }
        })
        .state('employee.edit', {
            url: '/{id}/edit',
            templateUrl: 'app/employee/add.html',
            controller: 'EmployeeEditCtrl as emp',
            resolve: {
                entity: ['$stateParams', 'EmployeeService', function ($stateParams, EmployeeService) {
                    return EmployeeService.findOne({id: $stateParams.id}).get().$object;
                }]
            }
        });
    }]);
})();