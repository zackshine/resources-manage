(function () {
	'use strict';

	/**
	* app.project Module
	*
	* 项目修改
	*/
	angular.module('app.project').controller('ProjectEditCtrl', ProjectEditCtrl);

	ProjectEditCtrl.$inject = ['$mdToast', '$document', 'ProjectService', 'CustomerService', 'entity'];

	function ProjectEditCtrl ($mdToast, $document, ProjectService, CustomerService, entity) {
		var vm = this;

		vm.project = entity;
		console.log(entity);

        CustomerService.service().getList().then(function (result) {
            vm.customers = result.data;
        });

		vm.editProject = function editProject (id) {
            ProjectService.findOne(id).customPUT(vm.project).then(function (response) {
                if (response.status === 200) {
                    $mdToast.show({
                        controller: 'ProjectEditCtrl',
                        templateUrl: 'toast-project.html',
                        entity: response.data,
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
	}
})();