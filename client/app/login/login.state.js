(function () {
    'use strict';

    angular.module('app.login').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html'
        });
    }]);
})();
