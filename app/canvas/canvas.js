angular.module('resolver.canvas', [
    'resolver',
    'resolver.services',
    'firebase'
  ])

  .controller('CanvasController', function($scope, $state, $rootScope, $stateParams, Nodes) {

    $rootScope.$state = $state;

    $scope.rootNode = $stateParams.id;
    $scope.colPaths = ['']
    $scope.colIndex = -1;
    $scope.index = 0;
    $scope.currentNode;
    $scope.currentCol;

    Nodes.getRootNode($scope.rootNode, function(node) {
      console.log(node);
      $scope.columns = [[node]];
      $scope.setCurrent($scope.columns[0][0], 0, 0);
    });

    $scope.addItem = function(nodeTitle){
      var parentPath = $scope.colPaths.slice().join('');
      Nodes.addChild(nodeTitle, parentPath);
    };

    $scope.removeItem = function(node, index, colIndex){
      var parentPath = $scope.colPaths.slice(0,colIndex+1).join('');
      console.log(parentPath +"/"+ node.$id);
      Nodes.removeNode(parentPath+"/"+node.$id);
    };

    $scope.setCurrent = function(node, index, colIndex) {
      $scope.currentCol = colIndex;
      $scope.colIndex = colIndex;
      $scope.currentNode = node;
      $scope.colPaths.splice(colIndex+1);
      $scope.colPaths.push('/'+node.$id+'/children');
      $scope.columns.splice(colIndex+1);
      $scope.columns.push(Nodes.getNodeChildren($scope.colPaths.join('')));
    };

  });
