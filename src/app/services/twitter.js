var app = angular.module('coCode', ['ui.router'])

app.controller('LoginCtrl', function($state) {
    var ref = new Firebase('https://co-code.firebaseio.com/');
    this.login = function() {

        ref.authWithOAuthPopup("twitter", function(error, authData,$state) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                $state.go('choose');
                console.log("Authenticated successfully with payload:", authData);
            }
        })
    }
});
