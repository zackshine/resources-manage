(function() {
    'use strict';

    angular.module('app.project').controller('ProjectCtrl', ProjectCtrl);

    ProjectCtrl.$inject = ['$scope', '$state', '$mdToast', '$document', 'ProjectService', 'pagingParams'];

    function ProjectCtrl($scope, $state, $mdToast, $document, ProjectService, pagingParams) {
        var vm = this;

        findAll(pagingParams);

        vm.transitionToAddProject = function() {
            $state.transitionTo('project.add');
        }

        function findAll(_pagingParams) {
        	ProjectService.pagingProjects(_pagingParams).then(function (result) {
        		vm.projects = result.data;
        	});
        }

        vm.delete = function deleteProject (id) {
            ProjectService.findOne(id).remove().then(function (response) {
                findAll(pagingParams);
            });
        }
    }
})();