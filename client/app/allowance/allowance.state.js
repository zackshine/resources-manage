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
            controller: 'AllowanceCtrl as vm'
        })
        .state('allowance.add', {
            url: '/add',
            templateUrl: 'app/allowance/add.html',
            controller: 'AllowanceCtrl as vm'
        });
    }]);
})();