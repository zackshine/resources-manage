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
    ]);

})();

