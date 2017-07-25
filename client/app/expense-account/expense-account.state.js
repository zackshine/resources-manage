(function () {
    'use strict';

    angular.module('app.expenseAccount').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('expenseAccount', {
            abstract: true,
            url: '/expenseAccount',
            templateUrl: 'app/expense-account/expense-account.html'
        })
        .state('expenseAccount.list', {
            url: '/list',
            templateUrl: 'app/expense-account/list.html',
            controller: 'ExpenseAccountCtrl as vm',
            params: {
                page: '0',
                size: '10'
            },
            resolve: {
                pagingParams: ['$stateParams', function ($stateParams) {
                    return {
                        page: parseInt($stateParams.page),
                        size: parseInt($stateParams.size)
                    }
                }]
            }
        })
        .state('expenseAccount.add', {
            url: '/add',
            templateUrl: 'app/expense-account/add.html',
            controller: 'ExpenseAccountCreateCtrl as vm'
        })
        .state('expenseAccount.edit', {
            url: '/{id}/edit',
            templateUrl: 'app/expense-account/add.html',
            controller: 'ExpenseAccountEditCtrl as vm',
            resolve: {
                entity: ['$stateParams', 'ExpenseService', function ($stateParams, ExpenseService) {
                    return ExpenseService.findOne($stateParams.id).get().$object;
                }]
            }
        });
    }]);
})();