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

        }, {
            id: 2,
            latitude: 28.568422,
            longitude: -81.346529

        }, {
            id: 3,
            latitude: 28.571854,
            longitude: -81.389863

        }, {
            id: 4,
            latitude: 28.549242,
            longitude: -81.352306
        }, {

            id: 5,
            latitude: 28.555688,
            longitude: -81.207649

        }];

    });
