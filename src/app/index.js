'use strict';

angular.module('coCode', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'firebase', 'uiGmapgoogle-maps', 'pubnub.angular.service'])
    .config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBzWNQv7IOgloZ8Zq9vbifewV9SZtY2Xa8',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'app'

            })

        .state('choose', {
            url: '/choose',
            templateUrl: 'app/choose/choose.html',
            controller: 'ChooseCtrl'
        })

        .state('map', {
            url: '/map',
            templateUrl: 'app/maps/maps.html',
            controller: 'MapsCtrl'
        })

        .state('chat', {
            url: '/chat',
            templateUrl: 'app/chat/chat.html',
            controller: 'ChatCtrl'
        })

        ;
        $urlRouterProvider.otherwise('/login');
    })

.factory('Auth', function($firebaseObject, $state) {
    var auth = new Firebase('https://co-code.firebaseio.com/users');


    return {
        /**
         * Wrapper for `onAuth` that filters the `auth` object
         * through the `updateUser()` function
         */
        onAuth: function(creds) {
            auth.onAuth(function(data) {
                creds(updateUser(data));
            });
        },
        /**
         * Wrapper for `authWithOAuthPopup()` for each login option.
         */
        twitLogin: function() {

            return auth.authWithOAuthPopup("twitter", function(error, authData) {
                console.log(authData)
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $state.go('choose');
                    console.log("Authenticated successfully with payload:", authData);
                }
            }, {
                remember: "sessionOnly",
                scope: "user,gist"
            })
        },

        ghLogin: function() {

            return auth.authWithOAuthPopup("github", function(error, authData) {
                console.log(authData)
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $state.go('choose');
                    console.log("Authenticated successfully with payload:", authData);
                }
            }, {
                remember: "sessionOnly"
            })
        },
        /** Wrapper for the unauth() functionality to logout
         */
        logout: function() {
            auth.unauth();
            console.log("hello")
        },
        /** Wrapper to allow the main controller to check if a user is currently
         * Logged in currently
         */
        loggedIn: function() {
            if (auth.getAuth()) {
                return true;
            }
        }
    }; // end of return block
    /**
     *Get the current user.
     */
    //     getUser: function() {
    //         return currentUser;
    //     }
    // };

    function updateUser(authdUser) {
        console.log(authdUser)
        if (authdUser === null) {
            return null;
        };


        var user = auth.child(authdUser.github.id);

        var ghCach = authdUser.github.cachedUserProfile;

        user.update({

            uid: authdUser.github.id,

            gh: authdUser.github,

            name: authdUser.github.displayName,

            handle: authdUser.github.username,

            photo: authdUser.github.cachedUserProfile.avatar_url,


        });

        user = $firebaseObject(

            auth.child(authdUser.github.id)
        );

        return user;
    }
})

;
