'use strict'

angular.module('coCode')
    .controller('MapsCtrl', function ($scope) {

        $scope.map = {

            center: {
                latitude: 28,
                longitude: -81
            },
            zoom: 8
        };

        $scope.marker = {
            id: 0,
            coords: {
                latitude: 28,
                longitude: -81
            },

            id: 1,
            coords: {
              latitude: 28.593178,
            longitude: -81.361418,
          },

          id: 2,
            coords: {
              latitude: 28.593178,
            longitude: -81.361418,
          },

          id: 3,
            coords: {
              latitude: 28.593178,
            longitude: -81.361418,
          },

          id: 4,
            coords: {
              latitude: 28.593178,
            longitude: -81.361418,
          },

          id: 5,
            coords: {
              latitude: 28.593178,
            longitude: -81.361418,
          },
        }

        $scope.markerList = [{
            latitude: 28.593178,
            longitude: -81.361418,

        }, {
            latitude: 28.568422,
            longitude: -81.346529,


        }, {
            latitude: 28.571854,
            longitude: -81.389863,

        }, {
            latitude: 28.549242,
            longitude: -81.352306,

        }, {
            latitude: 28.555688,
            longitude: -81.207649,

        }]
    });
