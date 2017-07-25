(function () {
    'use strict';

    angular.module('app', [
        // Core modules
         'app.core'
        
        // Custom Feature modules
        ,'app.chart'
        ,'app.ui'
        ,'app.ui.form'
        ,'app.ui.form.validation'
        ,'app.page'
        ,'app.table'
        
        // 3rd party feature modules
        ,'md.data.table'
        // business modules
        ,'app.login'
        ,'app.department'
        ,'app.employee'
        ,'app.project'
        ,'app.customer'
        ,'app.expenseAccount'
        ,'app.allowance'
        ,'app.jobScheduling'
    ]).run(['$rootScope', '$location', '$window', 'Restangular', function ($rootScope, $location, $window, Restangular) {
        $rootScope.$on('$stateChangeStart', function (evnet, toState, toParams, fromState, fromParams, options) {
            if (toState.name != 'login') {
                var token = localStorage.getItem('id_token');
                if (!token) {
                    $location.path('/login');
                }
            }
        });

        Restangular.setErrorInterceptor(function (response, deferred, responseHandler) {
            if (response.status == 401) {
                $location.path('/login');
            }
        });
    }]);

})();

