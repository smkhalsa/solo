angular.module('resolver.home', [
    'resolver',
    'resolver.canvas'
  ])
  .controller('HomeController', function($scope, $state) {
    $scope.createResolver = function(item) {
      $state.go('canvas', { id:item })
    }
  })
