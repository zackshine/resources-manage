(function(){
    'use strict';

    angular.module('app.customer').service('CustomerService', CustomerService);

    CustomerService.$inject = ['Restangular'];

    function CustomerService(Restangular) {
    	return Restangular.service('api/customers');
    }
})();