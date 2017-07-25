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
            controller: 'CustomerCtrl as vm',
            params: {
                page: '0',
                size: '10'
            },
            resolve:{
                pagingParams: ['$stateParams',function($stateParams){
                    return  {
                        page:parseInt($stateParams.page),
                        size:$stateParams.size
                    };
                }]
            }
        })
        .state('customer.add', {
            url: '/add',
            templateUrl: 'app/customer/add.html',
            controller: 'CustomerCreateCtrl as vm',
            resolve: {
                entity: function () {
                    return {
                        customerName: null,
                        address: null,
                        id: null
                    };
                }
            }
        })
        .state('customer.edit', {
            url: '/{id}/edit',
            templateUrl: 'app/customer/add.html',
            controller: 'CustomerEditCtrl as vm',
            resolve: {
                entity: ['$stateParams', 'CustomerService', function ($stateParams, CustomerService) {
                    return CustomerService.findOne({id: $stateParams.id}).get().$object;
                }]
            }
        });
    }]);
})();