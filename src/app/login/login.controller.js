'use strict'

angular.module('coCode')

.controller('LoginCtrl', function(){
  var ref = new Firebase('https://co-code.firebaseio.com/');

    this.login = function(){
        ref.authWithOAuthPopup("twitter", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    })
   }
});
