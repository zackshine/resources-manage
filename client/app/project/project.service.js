(function(){
    'use strict';

    angular.module('app.project').service('ProjectService', ProjectService);

    ProjectService.$inject = ['Restangular'];

    function ProjectService(Restangular) {
        var service = {};
        var projects = Restangular.all('api/projects');

        service.all = function all () {
        	return projects;
        };

        service.findOne = function findOne (id) {
        	return Restangular.one('api/projects/', id);
        }

        service.pagingProjects = function pagingProjects (pagingParams) {
        	return Restangular.all('api/projects?page=' + pagingParams.page + '&size=' + pagingParams.size).getList();
        }

        service.update = function update (project) {
        	return projects.customPUT(project);
        }

        return service;
    }
})();