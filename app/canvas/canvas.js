angular.module('resolver.canvas', [
    'resolver',
    'resolver.services',
    'firebase'
  ])

  .controller('CanvasController', function($scope, $state, $stateParams, Nodes, $firebaseArray) {

    var rootNodes = [Nodes.getNodeChildren('/')];

    $scope.rootNode = $stateParams.id;
    $scope.colPaths = ['']
    $scope.colIndex = -1;
    $scope.index = 0;
    $scope.currentNode;
    $scope.currentCol;

    setTimeout(function(){
      console.log('delay')
      for(var i = 0; i < rootNodes[0].length; i++ ) {
        // console.log(rootNodes[0][i])
        if(rootNodes[0][i].$id === $scope.rootNode) {
          $scope.columns = [[rootNodes[0][i]]];
          $scope.$apply();
          $scope.setCurrent($scope.columns[0][0], 0, 0)
        }
      }
    },1000)

    $scope.addItem = function(nodeTitle){
      var parentPath = $scope.colPaths.slice().join('');
      Nodes.addChild(nodeTitle, parentPath)
    }

    $scope.setCurrent = function(node, index, colIndex) {
      $scope.currentCol = colIndex;
      $scope.colIndex = colIndex;
      $scope.currentNode = node;
      $scope.colPaths.splice(colIndex+1);
      $scope.colPaths.push('/'+node.$id+'/children');
      $scope.columns.splice(colIndex+1);
      $scope.columns.push(Nodes.getNodeChildren($scope.colPaths.join('')));
    }
  })
