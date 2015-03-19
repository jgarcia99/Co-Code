'use strict'

angular.module('coCode')
    .controller('ChooseCtrl', function($scope, $state, $firebaseObject, Auth) {
        var userChoice = new Firebase('https://co-code.firebaseio.com/users/choice');




        $scope.obj = $firebaseObject(userChoice);

        $scope.value = true;


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

        var made = $scope.reason + $scope.tech;
        if ($scope.reason && $scope.tech === true) {
            console.log('choiceMade');

        } else {
            console.log('make a choice');
        }


        $scope.made = $firebaseObject(userChoice);



    });
