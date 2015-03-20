'use strict'

angular.module('coCode')
    .controller('ChooseCtrl', function($state, $firebaseObject,$scope, $firebaseArray, $stateParams, Auth) {
      var base = new Firebase('https://co-code.firebaseio.com');
      var userInfo = new Firebase('https://co-code.firebaseio.com/users/userchoice');


            Auth.onAuth(function(user) {
            $scope.user = user;
            if (user === null) {
                console.log('null')
            } else {
                console.log(user)

            }
        });

        $scope.obj = $firebaseArray(userInfo);
        console.log($scope.obj)

        $scope.userArray = {};

        $scope.userInfo = {
          reason: "Talk",
          tech: "Back-end"
        };

        $scope.addUserInfo = function(userInfo) {
          $scope.obj.$add(userInfo);
          return userInfo = {
            reason: "user.reason",
            tech: "user.tech"
          }
        };








    });
