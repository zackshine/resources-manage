(function() {
	'use strict';

	/**
	* app.customer Module
	*
	* 新增、修改客户信息
	*/
	angular.module('app.customer').controller('CustomerEditCtrl', CustomerEditCtrl);

	CustomerEditCtrl.$inject = ['$state', '$mdToast', '$document', 'CustomerService', 'entity', 'Restangular'];

	function CustomerEditCtrl ($state, $mdToast, $document, CustomerService, entity, Restangular) {
		var vm = this;
		vm.customer = entity;

		vm.updateCustomer = function () {
			CustomerService.all().customPUT(vm.customer).then(function (response) {
				if (response.status === 200) {
					$mdToast.show({
                        controller: 'CustomerCreateCtrl',
                        templateUrl: 'toast-customer.html',
                        entity: {
                        	customerName: null,
	                        address: null,
	                        id: null
                        },
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