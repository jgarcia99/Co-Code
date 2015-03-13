'use strict';

angular.module('coCode', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'

            })

        .state('choose', {
            url: '/choose',
            templateUrl: 'app/choose/choose.html',
            controller: 'ChooseCtrl'
        });
        $urlRouterProvider.otherwise('/login');
    })




