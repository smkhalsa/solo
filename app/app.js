angular.module('resolver', [
  'ui.router',
  'ngMaterial',
  'resolver.canvas',
  'resolver.home'
])
.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('how_it_works', {
      url: '/how_it_works',
      templateUrl: 'app/how_it_works/how_it_works.html'
    })
    .state('canvas', {
      url: '/canvas/:id',
      templateUrl: 'app/canvas/canvas.html'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html'
    })

  $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('indigo');
})
.controller('AppCtrl', function ($scope) {

});

