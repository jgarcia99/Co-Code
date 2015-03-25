angular.module('coCode')
    .controller('MapsCtrl', function($scope) {

        $scope.map = {

            center: {
                latitude: 28.593178,
                longitude: -81.361418
            },
            zoom: 11
        };

        $scope.coffeeMarkers = [{
            id: 1,
            latitude: 28.593178,
            longitude: -81.361418,
            icon: '/assets/images/co-code-logo_720.png',
            title: 'Austins Coffee Shop ',
            showWindow: true,
            styles: [{
              "url":'/assets/images/co-code-logo_720.png',
            }],
            description: '<a href="/#/chat">chat room</a>',
            'Content': 'Austins Coffee Shop'


        }, {
            id: 2,
            latitude: 28.568422,
            longitude: -81.346529,
            showWindow: true,
            title: 'Stardust video & coffee',
            'Content': 'Stardust video & coffee',
            description: '<a href="/#/chat">chat room</a>',

        }, {
            id: 3,
            latitude: 28.571854,
            longitude: -81.389863,
            showWindow: true,
            title: 'Downtown Credo',
            'Content': 'Downtown Credo',
            description: '<a href="/#/chat">chat room</a>',

        }, {
            id: 4,
            latitude: 28.549242,
            longitude: -81.352306,
            showWindow: true,
            title: 'Drunken Monkey Coffee Shop',
            'Content': 'Drunken Monkey Coffee Shop',
            description: '<a href="/#/chat">chat room</a>',
        }, {

            id: 5,
            latitude: 28.555688,
            longitude: -81.207649,
            title: 'Vespr Craft Coffee & Allures',
             showWindow: true,
            'Content': 'Vespr Craft Coffee & Allures',
            description: '<a href="/#/chat">chat room</a>',

        }];



    });
