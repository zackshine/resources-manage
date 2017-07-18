(function () {
    'use strict';

    angular.module('app.login').factory('UserService', UserService);
    UserService.$inject = ['Restangular'];

    function UserService(Restangular) {
        return Restangular.all('api/users');
    }
})();
