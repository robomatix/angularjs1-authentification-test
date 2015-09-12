(function () {
    'use strict';

    var app = angular.module('authentification.app', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/accueil");
        //
        // Now set up the states
        $stateProvider
            .state('accueil', {
                url: "/accueil",
                templateUrl: "views/accueil.html"
            })
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html"
            });
    });
    app.run();

})();