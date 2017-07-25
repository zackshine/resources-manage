(function () {
	'use strict';

	/**
	* app.project Module
	*
	* 项目模块
	*/
	angular.module('app.project').controller('ProjectCreateCtrl', ProjectCreateCtrl);

	ProjectCreateCtrl.$inject = ['$state', '$mdToast', '$document', 'ProjectService', 'CustomerService'];

	function ProjectCreateCtrl ($state, $mdToast, $document, ProjectService, CustomerService) {
		var vm = this;

        CustomerService.all().getList().then(function (result) {
            vm.customers = result.data;
        });

		vm.addProject = function () {
        	ProjectService.all().post(vm.project).then(function (result) {
        		if (result.data.id) {
                    $mdToast.show({
                        controller: 'ProjectCreateCtrl',
                        templateUrl: 'toast-project.html',
                        entity: result.data,
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