angular.module('app.canvas', ['firebase'])

  .controller('CanvasController', function($scope, $firebaseArray) {

    var nodeRef = new Firebase("https://resolver.firebaseio.com/nodes");
    var rootNodes = $firebaseArray(nodeRef);

    var getNode = function(path) {
      return $firebaseArray(new Firebase("https://resolver.firebaseio.com/nodes" + path))
    }

    $scope.addItem = function(newNode){
      var path = $scope.colPaths.slice().join('');
      var ref = new Firebase("https://resolver.firebaseio.com/nodes" + path);
      ref.push({title: newNode});
    }

    $scope.setCurrent = function(node, index, colIndex) {
      $scope.colIndex = colIndex;
      $scope.colPaths.splice(colIndex+1);
      $scope.colPaths.push('/'+node.$id+'/children');
      $scope.columns.splice(colIndex+1);
      $scope.columns.push(getNode($scope.colPaths.join('')));
      console.log($scope.colPaths);
    }
    $scope.columns = [rootNodes];
    $scope.colPaths = ['']
    $scope.colIndex = -1;
    $scope.index = 0;
  })
