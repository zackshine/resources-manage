(function () {
    'use strict';

    angular.module('app.project').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('project', {
            abstract: true,
            url: '/project',
            templateUrl: 'app/project/project.html'
        })
        .state('project.list', {
            url: '/list',
            templateUrl: 'app/project/list.html',
            controller: 'ProjectCtrl as vm'
        })
        .state('project.add', {
            url: '/add',
            templateUrl: 'app/project/add.html',
            controller: 'ProjectCtrl as vm'
        });
    }]);
})();