(function () {
    'use strict';

    angular.module('app.allowance').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('allowance', {
            abstract: true,
            url: '/allowance',
            templateUrl: 'app/allowance/allowance.html'
        })
        .state('allowance.list', {
            url: '/list',
            templateUrl: 'app/allowance/list.html',
            controller: 'AllowanceCtrl as vm',
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
        .state('allowance.add', {
            url: '/add',
            templateUrl: 'app/allowance/add.html',
            controller: 'AllowanceCreateCtrl as vm'
        })
        .state('allowance.edit', {
            url: '/{id}/edit',
            templateUrl: 'app/allowance/add.html',
            controller: 'AllowanceEditCtrl as vm',
            resolve: {
                entity: ['$stateParams', 'AllowanceService', function ($stateParams, AllowanceService) {
                    return AllowanceService.findOne($stateParams.id).get().$object;
                }]
            }
        });
    }]);
})();