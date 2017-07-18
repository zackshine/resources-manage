(function(){
    'use strict';

    angular.module('app.project').service('ProjectService', ProjectService);

    ProjectService.$inject = ['Restangular'];

    function ProjectService(Restangular) {
        return Restangular.service('api/projects');
    }
})();