'use strict'

angular.module('coCode')
    .controller('ChooseCtrl', function($state, $firebaseObject,$scope, $firebaseArray, $stateParams, Auth) {
      var base = new Firebase('https://co-code.firebaseio.com/');
      var userInfo = new Firebase('https://co-code.firebaseio.com/users/userchoice/'+base.getAuth().uid);


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

        $scope.userInfo = {};

        $scope.userInfo = {
          reason: "Talk",
          tech: "Back-end"
        };

       $scope.addUserInfo = function() {
          userInfo.update({
            reason: $scope.reason,
            tech: $scope.tech
          })
          $state.go('map');
        };








    });
