'use strict'

angular.module('coCode')

.controller('LoginCtrl','Auth', function($firebaseArray, $firebaseObject, Auth) {
    var self = this;
    var userInfo = new Firebase('https://co-code.firebaseio.com/users');

    this.obj = $firebaseArray(userInfo);


    this.userArray = {};

    // this.twitLogin = Auth.twitLogin;

    this.ghLogin = Auth.ghLogin;
    // this.logout = Auth.logout;

    Auth.onAuth(function(user) {
        self.user = user;
        if (user === null) {
            console.log('null')
        } else {
            console.log(user)
        }
    });



});
