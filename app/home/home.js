angular.module('resolver.home', [
    'resolver',
    'resolver.services'
  ])
  .controller('HomeController', function($scope, $state, Nodes) {
    $scope.createResolver = function(item) {
      var nodeId = Nodes.addChild(item, '/');
      $state.go('canvas', { id:nodeId })
    }
  })
