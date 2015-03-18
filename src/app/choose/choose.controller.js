'use strict'

angular.module('coCode')
    .controller('ChooseCtrl', '$scope', 'Auth', function($scope, Auth) {

        $scope.user = {};
        Auth.onAuth(function(user) {
            $scope.user = user;
            if (user === null) {
                console.log('null')
            } else {
                console.log(user)
            }
        })

            $scope.reason = {
              name: 'Code',
              name: 'Talk',
              name: 'Both'
            };

            $scope.field = {
              name: 'Front-end',
              name: 'Back-end',
              name: 'Mobile',
              name: 'Web-Designer'
            };
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
