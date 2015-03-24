angular.module('coCode')
    .controller('ChatCtrl', function($rootScope,$firebaseObject, $firebaseArray,$location,Auth,$scope, PubNub) {
        // make up a user id (you probably already have $scope)
          Auth.onAuth(function(user) {
            $scope.user = user;
            if (user === null) {
                console.log('null')
            } else {
                console.log(user)
            }
        });


          $scope.userId = "User " + Math.round(Math.random() * 1000);
                // make up a channel name
         $scope.channel = 'Front-End';

        // pre-populate any existing messages (just an AngularJS scope object)
        $scope.messages = ['Welcome to ' + $scope.channel];
        if (!$rootScope.initialized) {
            // Initialize the PubNub service
            PubNub.init({
                subscribe_key: 'sub-c-f24f7cc2-cc35-11e4-b37f-02ee2ddab7fe',
                publish_key: 'pub-c-7d9dc0ae-e3d1-4eed-b24e-806a9bc730af',
                uuid: $scope.userId
            });
            $rootScope.initialized = true;
        }
        // Subscribe to the Channel
        PubNub.ngSubscribe({
            channel: $scope.channel
        });

        $scope.newMessage = '';
        // Create a publish() function in the scope
        $scope.publish = function() {
            PubNub.ngPublish({
                channel: $scope.channel,
                message: "[" + $scope.userId + "] " + $scope.newMessage
            });
            $scope.newMessage = '';
        };
        // Register for message events
        $rootScope.$on(PubNub.ngMsgEv($scope.channel), function(ngEvent, payload) {
            $scope.$apply(function() {
                $scope.messages.push(payload.message);
            });
        });
        // Register for presence events (optional)
        $rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
            $scope.$apply(function() {
                $scope.users = PubNub.ngListPresence($scope.channel);
            });
        });
        // Pre-Populate the user list (optional)
        PubNub.ngHereNow({
            channel: $scope.channel
        });

        // Populate message history (optional)
        PubNub.ngHistory({
            channel: $scope.channel,
            count: 500
        });
    });










