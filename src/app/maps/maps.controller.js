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
            options: {
              labelContent: 'hello'
            }

        }, {
            id: 2,
            latitude: 28.568422,
            longitude: -81.346529,
            options: {
              labelContent: 'hello'
            }

        }, {
            id: 3,
            latitude: 28.571854,
            longitude: -81.389863,
            options: {
              labelContent: 'hello'
            }

        }, {
            id: 4,
            latitude: 28.549242,
            longitude: -81.352306,
            options: {
              labelContent: 'hello'
            }
        }, {

            id: 5,
            latitude: 28.555688,
            longitude: -81.207649,
            options: {
              labelContent: 'hello'
            }

        }];



    });
