'use strict'

angular.module('coCode')
.controller('ChooseCtrl', ['$scope', 'Auth', function ($scope, Auth) {

  $scope.user= {};
    Auth.onAuth(function(user) {
        $scope.user = user;
        if (user === null) {
            console.log('null')
        } else {
            console.log(user)
        }
    });
}])
