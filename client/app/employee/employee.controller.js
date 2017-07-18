(function(){
    'use strict';

    angular.module('app.employee')
    .controller('EmployeeCtrl', EmployeeCtrl);

    EmployeeCtrl.$inject = ['$scope', '$state', 'EmployeeService', 'pagingParams'];

    function EmployeeCtrl($scope, $state, EmployeeService, pagingParams) {
        var emp = this;

        emp.limitOptions = [5, 10, 15];
        
        emp.options = {
            boundaryLinks: true,
            limitSelect: false,
            pageSelect: false
        };
        
        emp.query = {
            order: 'id',
            limit: 10,
            page: 1
        };

        emp.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };

        emp.logPagination = function (page, limit) {
            pagingParams.page = page -1;
            pagingParams.size = limit;
            findAll(pagingParams);
        }

        findAll(pagingParams);

        emp.transitionToAddEmployee = function() {
            $state.transitionTo('employee.add');
        }

        function findAll(pageParam) {
            EmployeeService.pagingEmployees(pageParam).getList().then(function(response){
                emp.employees = response.data;
                emp.totalItems = response.headers('X-Total-Count')
            });
        }

        emp.delete = function(id) {
            EmployeeService.one(id).remove().then(function() {
                findAll();
            });
        }
    }
})();