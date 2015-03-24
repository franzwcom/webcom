'use strict';

/**
 * @ngdoc function
 * @name testyoangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testyoangularApp
 */
angular.module('testyoangularApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
