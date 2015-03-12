'use strict';
angular.module('slidemodal', [
  'ionic',
  'ngCordova',
  'ui.router'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  console.log('Allo! Allo from Angular!');

  // some basic routing
  $urlRouterProvider.otherwise('/start');
  $stateProvider
    .state('start', {
      url: '/start',
      templateUrl: 'partials/start.html',
      controller: 'StartCtrl',
      // resolve: {
      //   data: function (Start) {
      //     return Start.getData();
      //   }
      // }
    });

  // TODO: do your thing
});
