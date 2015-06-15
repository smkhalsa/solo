angular.module('app.canvas', ['firebase'])

  .controller('CanvasController', function($scope, $firebaseArray) {
    var nodeRef = new Firebase("https://resolver.firebaseio.com/nodes");

    $scope.nodes = $firebaseArray(nodeRef);
  })
