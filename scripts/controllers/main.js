'use strict';

//var config = require('config.json');

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function ($http, $scope) {
    $scope.doLogin = function () {
      var data = {"grant_type": "client_credentials"};
      $http({
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": "Basic YWRtaW5ibXM6YWRtaW5ibXNwd2Q="
        },
        data: data,
        url: "http://192.168.1.24:6000"+"/oauth/token"
      }).then(function successCallback(response) {
        alert(JSON.stringify(response));
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        alert(JSON.stringify(response));
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  });
