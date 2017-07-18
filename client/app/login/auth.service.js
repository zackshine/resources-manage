(function () {
    'use strict';

    angular.module('app.login').factory('Auth', Auth);

    Auth.$inject = ['Restangular'];

    function Auth(Restangular) {
        // return Restangular.service('api/authenticate');

        var Authentication = Restangular.service('api/authenticate');

        var Logout = Restangular.service('api/logout');
        return  {
            Authentication: Authentication,
            Logout: Logout
        };
    }
})();
