angular.module('resolver.canvas', [
    'resolver.services'
  ])

  .controller('CanvasController', function($scope, Nodes) {

    $scope.addItem = function(newNode){
      // var path = $scope.colPaths.slice().join('');
      // var ref = new Firebase("https://resolver.firebaseio.com/nodes" + path);
      // ref.push({title: newNode});
    }

    $scope.columns = [Nodes.getNodeChildren('/')];
    $scope.colPaths = ['']
    $scope.colIndex = -1;
    $scope.index = 0;
    $scope.currentNode;
    $scope.currentCol;

    $scope.setCurrent = function(node, index, colIndex) {
      $scope.currentCol = colIndex;
      $scope.colIndex = colIndex;
      $scope.currentNode = node;
      $scope.colPaths.splice(colIndex+1);
      $scope.colPaths.push('/'+node.$id+'/children');
      $scope.columns.splice(colIndex+1);
      $scope.columns.push(Nodes.getNodeChildren($scope.colPaths.join('')));
      console.log($scope.colPaths);
    }
  })
