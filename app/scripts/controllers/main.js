'use strict';

/**
 * @ngdoc function
 * @name testyoangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testyoangularApp
 */
angular.module('testyoangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
