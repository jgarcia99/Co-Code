'use strict'

angular.module('coCode')

.controller('MapsCtrl', function($scope) {

    $scope.maps = {
        center: {
            latitude: 28,
            logitude: -81
        },
        zoom: 8
    };

    $scope.markerList = [
      {latitude: 28.593178, logitude: -81.361418,},
      {latitude: 28.568422, logitude: -81.346529,},
      {latitude:  28.571854, logitude: -81.389863,},
      {latitude: 28.549242, logitude: -81.352306,},
      {latitude: 28.555688, logitude: -81.207649,}
    ]
});
