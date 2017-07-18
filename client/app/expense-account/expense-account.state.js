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
            controller: 'ExpenseAccountCtrl as vm'
        })
        .state('expenseAccount.add', {
            url: '/add',
            templateUrl: 'app/expense-account/add.html',
            controller: 'ExpenseAccountCtrl as vm'
        });
    }]);
})();