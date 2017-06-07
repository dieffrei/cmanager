'use strict';

// Declare app level module which depends on views, and components
angular.module('com.puc.cmanager', [
  'ngRoute',
  'ui.utils.masks',
  'br.com.cmanager.vehicle'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/vehicle'});
}]);

var CManager = {};
