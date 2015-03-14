'use strict'

angular.module('coCode')

.controller('LoginCtrl', function($firebaseArray, $firebaseObject, Auth) {
    var self = this;
    var userInfo = new Firebase('https://co-code.firebaseio.com/');

    this.obj = $firebaseArray(userInfo);
    console.log(this.obj)

    this.userArray = {};

    this.twitLogin = Auth.twitLogin;

    this.ghLogin = Auth.ghLogin;
    this.logout = Auth.logout;

    Auth.onAuth(function(user) {
        self.user = user;
        if (user === null) {
            console.log('null')
        } else {
            console.log(user)
        }
    });

    this.newUser = {
        name: '',
        email: '',
        age: ''

    };

    this.addUser = function(user) {
        this.obj.$add(user);
        return this.newUser = {
            name: '',
            email: '',
            age: ''

        };
    }

});
