angular.module('blog', [
  'ui.router',
  'ngMaterial',
  'firebase',
  'app.posts'
])
.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $urlRouterProvider.otherwise('/how_it_works');

  $stateProvider
    .state('how_it_works', {
      url: '/how_it_works',
      templateUrl: 'app/how_it_works/how_it_works.html'
    })

  $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('indigo');
})
.controller('AppCtrl', function ($scope) {

});

