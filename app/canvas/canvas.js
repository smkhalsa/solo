angular.module('app.canvas', ['firebase'])

  .controller('CanvasController', function($scope, $firebaseArray) {
    var ref = new Firebase("https://resolver.firebaseio.com/nodes");

    $scope.nodes = $firebaseArray(ref);
  })
