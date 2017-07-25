(function () {
	'use strict';

	angular.module('app.customer').controller('CustomerCtrl', CustomerCtrl);

	CustomerCtrl.$inject = [ '$scope', '$state', '$mdToast', '$document', '$stateParams', 'pagingParams', 'CustomerService' ];

	function CustomerCtrl($scope, $state, $mdToast, $document, $stateParams, pagingParams, CustomerService) {
		var vm = this;
		findAll(pagingParams);

		vm.limitOptions = [5, 10, 15];
        
        vm.options = {
            boundaryLinks: true,
            limitSelect: false,
            pageSelect: false
        };
        
        vm.query = {
            order: 'id',
            limit: 10,
            page: 1
        };

        vm.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };

        vm.logPagination = function (page, limit) {
            pagingParams.page = page -1;
            pagingParams.size = limit;
            findAll(pagingParams);
        }

		vm.transitionToAddCustomer = function() {
			$state.transitionTo('customer.add');
		}

		function findAll (pageParam) {
			CustomerService.pagingCustomer(pageParam).getList().then(function(result) {
				vm.customers = result.data;
				vm.totalItems = result.headers('X-Total-Count')
			});
		}

        vm.delete = function(id) {
            CustomerService.findOne({id: id}).remove().then(function(){
                findAll(pagingParams);
            });
        }

        vm.transitionToEditCustomer = function(id) {
        	CustomerService.findOne(id).get().then(function(result) {
        		console.log(result);
        	});
        	$state.transitionTo('customer.edit', id)
        }
	}
})();