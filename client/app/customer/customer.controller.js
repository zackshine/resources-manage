(function () {
	'use strict';

	angular.module('app.customer').controller('CustomerCtrl', CustomerCtrl);

	CustomerCtrl.$inject = [ '$scope', '$state', '$mdToast', '$document', 'CustomerService' ];

	function CustomerCtrl($scope, $state, $mdToast, $document, CustomerService) {
		var vm = this;
		findAll();

		vm.transitionToAddCustomer = function() {
			$state.transitionTo('customer.add');
		}

		function findAll () {
			CustomerService.getList().then(function(result) {
				vm.customers = result.data;
			});
		}

		vm.addCustomer = function() {
			CustomerService.post(vm.customer).then(function (result) {
				if (result.data.id) {
                    $mdToast.show({
                        controller: 'CustomerCtrl',
                        templateUrl: 'toast-customer.html',
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

        vm.delete = function(id) {
            CustomerService.one(id).remove().then(function(){
                findAll();
            });
        }
	}
})();