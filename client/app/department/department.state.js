(function () {
    'use strict';

    angular.module('app.department').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('department', {
            abstract: true,
            url: '/department',
            templateUrl: 'app/department/department.html'
        })
        .state('department.list', {
            url: '/list',
            templateUrl: 'app/department/list.html',
            controller: 'DepartmentCtrl as dept'
        })
        .state('department.add', {
            url: '/add',
            templateUrl: 'app/department/add.html',
            controller: 'DepartmentCtrl as dept'
        });
    }]);
})();