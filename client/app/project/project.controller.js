(function() {
    'use strict';

    angular.module('app.project').controller('ProjectCtrl', ProjectCtrl);

    ProjectCtrl.$inject = ['$scope', '$state', '$mdToast', '$document', 'ProjectService', 'CustomerService'];

    function ProjectCtrl($scope, $state, $mdToast, $document, ProjectService, CustomerService) {
        var vm = this;

        findAll();

        vm.transitionToAddProject = function() {
            $state.transitionTo('project.add');
        }

        function findAll() {
        	ProjectService.getList().then(function (result) {
        		vm.projects = result.data;
        	});
        }

        vm.addProject = function () {
        	ProjectService.post(vm.project).then(function (result) {
        		if (result.data.id) {
                    $mdToast.show({
                        controller: 'ProjectCtrl',
                        templateUrl: 'toast-project.html',
                        parent : $document[0].querySelector('#toastBounds'),
                        hideDelay: 4000,
                        position: 'top right'
                    });
                }
        	});
        }

        vm.closeToast = function() {
            $mdToast.hide();
        };

        CustomerService.getList().then(function (result) {
        	vm.customers = result.data;
        });
    }
})();