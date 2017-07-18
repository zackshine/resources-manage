(function() {
    'use strict';

    angular.module('app.department').controller('DepartmentCtrl', DepartmentCtrl);

    DepartmentCtrl.$inject = ['$scope', '$state', '$document', '$mdToast', 'DepartmentService'];

    function DepartmentCtrl($scope, $state, $document, $mdToast, DepartmentService) {
        var dept = this;
        var department = {
            name: ''
        };
        dept.department = department;

        findAll();
        
        function findAll() {
            DepartmentService.getList().then(function(result){
                dept.departments = result.data;
            });
        }

        $scope.$watch('dept.department.name', function() {
            if (dept.department.name.length > 2) {
                dept.canSubmit = true;
            } else {
                dept.canSubmit = false;
            }
        })

        dept.transitionToDepartment = function() {
            $state.transitionTo('department.add');
        }

        dept.addDepartment = function() {
            DepartmentService.post(department).then(function(result) {
                if (result.data.id) {
                    $mdToast.show({
                        controller: 'DepartmentCtrl',
                        templateUrl: 'toast-template.html',
                        parent : $document[0].querySelector('#toastBounds'),
                        hideDelay: 4000,
                        position: 'top right'
                    });
                }
            });
        }

        dept.closeToast = function() {
            $mdToast.hide();
        };

        dept.delete = function(id) {
            DepartmentService.one(id).remove().then(function(){
                findAll();
            });
        }

    }
})();