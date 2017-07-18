(function () {
    'use strict';

    angular.module('app.customer').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('customer', {
            abstract: true,
            url: '/customer',
            templateUrl: 'app/customer/customer.html'
        })
        .state('customer.list', {
            url: '/list',
            templateUrl: 'app/customer/list.html',
            controller: 'CustomerCtrl as vm'
        })
        .state('customer.add', {
            url: '/add',
            templateUrl: 'app/customer/add.html',
            controller: 'CustomerCtrl as vm'
        });
    }]);
})();