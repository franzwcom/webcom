'use strict';

/**
 * @ngdoc function
 * @name webcomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webcomApp
 */
angular.module('webcomApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
