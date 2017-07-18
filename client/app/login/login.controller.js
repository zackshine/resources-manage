(function() {
  "use strict";

  angular.module("app.login").controller("LoginCtrl", LoginCtrl);

  LoginCtrl.$inject = ["$rootScope", "$scope", "Auth", "UserService"];

  function LoginCtrl($rootScope, $scope, Auth, UserService) {
    var certificate = ($scope.User = {
      username: null,
      password: null
    });

    $scope.userLogin = function(event) {
      if (!event || event.keyCode === 13) {
        certificate.username = $scope.User.username;
        certificate.password = $scope.User.password;
        var oldToken = localStorage.getItem("id_token");
        if (oldToken) {
          localStorage.removeItem("id_token");
        }
        Auth.Authentication.post(certificate).then(function(token) {
          localStorage.setItem("id_token", token.data.id_token);

          UserService.one($scope.User.username).get().then(function(result) {
            localStorage.setItem("userCode", result.data.login);
            localStorage.setItem("currentUser", result.data.firstName);
          });
        });
      }
    };
  }
})();
