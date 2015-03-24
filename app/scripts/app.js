'use strict';
/**
 * @ngdoc overview
 * @name testyoangularApp
 * @description
 * # testyoangularApp
 *
 * Main module of the application.
 */

angular
    .module('testyoangularApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
             .when('/menu', {
                templateUrl: 'views/menu.html',
                controller: 'MenuCtrl'
            })
              .when('/whatson', {
                templateUrl: 'views/whatson.html',
                controller: 'WhatsonCtrl'
            })
                .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl'
            })
                 .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
                  .when('/user', {
                templateUrl: 'views/user.html',
                controller: 'UserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
