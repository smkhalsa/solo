angular.module('resolver', [
  'ui.router',
  'ngMaterial',
  'resolver.canvas',
  'resolver.home',
  'ngClipboard'
])
.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, ngClipProvider) {

  ngClipProvider.setPath("//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.swf");

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('how_it_works', {
      url: '/how_it_works',
      templateUrl: 'app/how_it_works/how_it_works.html'
    })
    .state('canvas', {
      url: '/canvas/:id',
      templateUrl: 'app/canvas/canvas.html',
      controller: 'CanvasController'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html'
    })

  $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('light-blue');

})

.controller('AppCtrl', function ($scope, $mdToast, $rootScope) {


  // $scope.$apply();

  $scope.copyToast = function($event){
    // $mdToast.show($mdToast.simple().position({'top':true}).content("Copied to clipboard!"));
  }

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState.name == 'canvas') {
        $scope.url = window.location.origin + "/#/canvas/" + toParams.id;
      }
  });

});

