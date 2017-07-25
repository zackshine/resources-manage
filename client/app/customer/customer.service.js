(function(){
    'use strict';

    angular.module('app.customer').service('CustomerService', CustomerService);

    CustomerService.$inject = ['Restangular'];

    function CustomerService(Restangular) {

    	return {
    		service: service,
    		pagingCustomer: pagingCustomer,
    		findOne: findOne,
            update: update,
            all: all
    	}

        function all() {
            return Restangular.all('api/customers');
        }

    	function service () {
    		return Restangular.service('api/customers');
    	}

    	function pagingCustomer (pagingParams) {
    		return Restangular.all('api/customers?page=' + pagingParams.page + '&size=' + pagingParams.size);
    	}

    	function findOne(params) {
    		return Restangular.one('api/customers/' + params.id);
    	}

        function update (customer) {
            return Restangular.one('api/customers/' + customer.id).customPUT(customer);
        }
    }
})();