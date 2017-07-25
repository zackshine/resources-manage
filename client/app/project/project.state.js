(function () {
    'use strict';

    angular.module('app.project').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('project', {
            abstract: true,
            url: '/project',
            templateUrl: 'app/project/project.html'
        })
        .state('project.list', {
            url: '/list?page&size',
            templateUrl: 'app/project/list.html',
            controller: 'ProjectCtrl as vm',
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
        .state('project.add', {
            url: '/add',
            templateUrl: 'app/project/add.html',
            controller: 'ProjectCreateCtrl as vm'
        })
        .state('project.edit', {
            url: '/{id}/edit',
            templateUrl: 'app/project/add.html',
            controller: 'ProjectEditCtrl as vm',
            resolve: {
                entity: ['$stateParams', 'ProjectService', function ($stateParams, ProjectService) {
                    return ProjectService.findOne($stateParams.id).get().$object;
                }]
            }
        });
    }]);
})();