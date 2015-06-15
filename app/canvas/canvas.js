angular.module('app.canvas', ['firebase'])

  .controller('CanvasController', function($scope, $firebaseArray) {

    var nodeRef = new Firebase("https://resolver.firebaseio.com/nodes");
    var rootNodes = $firebaseArray(nodeRef);
    $scope.current = 'rootNodes[0]';
    $scope.setCurrent = function(node, colIndex) {
      console.log(colIndex);
      $scope.current = node;
      $scope.columns.splice(colIndex+1);
      $scope.columns.push(node.children);
    }
    $scope.columns = [rootNodes];
  })
