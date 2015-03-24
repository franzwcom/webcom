'use strict';

/**
 * @ngdoc function
 * @name webcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcomApp
 */
angular.module('webcomApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
