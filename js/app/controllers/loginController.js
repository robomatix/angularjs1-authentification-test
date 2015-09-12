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

            if ($scope.loginData.userName === "login" && $scope.loginData.password === "mdp") {
                $location.path('/logged');
            } else {
                $scope.message = "Erreur !!! Veuillez ressaisir vos identifiants";
            }


        };
    });
})();
