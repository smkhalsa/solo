angular.module('resolver', [
  'ui.router',
  'ngMaterial',
  'resolver.canvas',
  'resolver.home',
  'ngClipboard'
])
.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, ngClipProvider) {

  ngClipProvider.setPath("../bower_components/zeroclipboard/dist/ZeroClipboard.swf");

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

.controller('AppCtrl', function ($scope, $mdToast) {

  $scope.url = window.location.href;

  $scope.copyUrl = function($event){
    $mdToast.show($mdToast.simple().position({'top':true}).content("Copied to clipboard!"));
  }

  $scope.getTextToCopy = function() {
    return $scope.url;
  }

  $scope.doSomething = function() {
    console.log('do something')
  }

});

