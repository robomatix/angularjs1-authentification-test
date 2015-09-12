(function () {
    'use strict';

    var controllers = angular.module('authentification.controllers');

    controllers.controller('LoginController', function ($rootScope, $scope, $location) {

        $scope.loginData = {
            userName: "",
            password: ""
        };

        $scope.message = "";

        $scope.login = function () {


            $location.path('/logged');


        };
    });
})();
