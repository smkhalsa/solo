angular.module('blog', [
  'ui.router',
  'ngMaterial',
  'firebase',
  'app.canvas'
])
.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $urlRouterProvider.otherwise('/canvas');

  $stateProvider
    .state('how_it_works', {
      url: '/how_it_works',
      templateUrl: 'app/how_it_works/how_it_works.html'
    })
    .state('canvas', {
      url: '/canvas',
      templateUrl: 'app/canvas/canvas.html'
    })

  $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('indigo');
})
.controller('AppCtrl', function ($scope) {

});

