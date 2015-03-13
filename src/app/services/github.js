var app = angular.module('coCode', [])

app.controller('LoginCtrl', function() {
    var ref = new Firebase("https://co-code.firebaseio.com/");
    this.login = function() {
        ref.authWithOAuthPopup("github", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        })
    }
});
