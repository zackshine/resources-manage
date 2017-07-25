(function () {
	'use strict';
	/**
	* app.customer Module
	*
	* 创建客户信息
	*/
	angular.module('app.customer').controller('CustomerCreateCtrl', CustomerCreateCtrl);

	CustomerCreateCtrl.$inject = ['$state', '$mdToast', '$document', 'CustomerService'];

	function CustomerCreateCtrl ($state, $mdToast, $document, CustomerService) {
		var vm = this;

		vm.addCustomer = function() {
			CustomerService.service().post(vm.customer).then(function (result) {
				if (result.data.id) {
                    $mdToast.show({
                        controller: 'CustomerEditCtrl',
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