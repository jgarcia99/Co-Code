'use strict'

angular.module('coCode')
    .controller('ChooseCtrl', function($scope, Auth) {


        $scope.user = {};
        Auth.onAuth(function(user) {
            $scope.user = user;
            if (user === null) {
                console.log('null')
            } else {
                console.log(user)
            }
        })

            $scope.reason = 'Code';
            $scope.tech = 'Front-end';

            $scope.field = {
              front: 'Front-end',
              back: 'Back-end',
              mobile: 'Mobile',
              design: 'Web-Designer'
            }
        // .factory('userReason', function() {
        //         var userReason = {};
        //         if ('Code' === true) {
        //             console.log('true')
        //         } else if ('Talk' === true) {
        //             console.log('true')
        //         } else('Both' === true) {
        //             console.log('true')
        //         }
        //     }) // end userReason

        // return userReason;


        // .factory('userField', function() {
        //         var userField = {};
        //         if ('Front-end' === true) {
        //             console.log('true')
        //         } else if ('Back-end' === true) {
        //             console.log('true')
        //         } else if ('Mobile' === true) {
        //             console.log('true')
        //         } else('Web-Designer' === true) {
        //             console.log('true')
        //         }
        //     }) // end userField

        // return userField;




    });
