(function () {
    'use strict';

    angular.module('app.jobScheduling').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('jobScheduling', {
            abstract: true,
            url: '/jobScheduling',
            templateUrl: 'app/job-scheduling/job-scheduling.html'
        })
        .state('jobScheduling.list', {
            url: '/list?page&size',
            templateUrl: 'app/job-scheduling/list.html',
            controller: 'JobSchedulingCtrl as vm'
        })
        .state('jobScheduling.add', {
            url: '/add',
            templateUrl: 'app/job-scheduling/add.html',
            controller: 'JobSchedulingCtrl as vm'
        });
    }]);
})();