angular.module('resolver.services', [
    'firebase'
  ])

  .factory('Nodes', function($firebaseArray) {

    var Nodes = {};

    Nodes.getNodeChildren = function(path) {
      return $firebaseArray(new Firebase("https://resolver.firebaseio.com/nodes" + path));
    }

    // Nodes.getRootNode = function(nodeId) {
    //   var rootNodes = $firebaseArray(new Firebase("https://resolver.firebaseio.com/nodes"));
    //   rootNodes.$loaded()
    //     .then(function(nodes){
    //       console.log('nodes: ', nodes)
    //       for (var i = 0; i < rootNodes.length; i++) {
    //         if(rootNodes[i].$id === nodeId) {
    //           CanvasController.columns=[rootNodes[i]]
    //         }
    //       }
    //     })
    // }

    // adds a child and returns the child's ID
    Nodes.addChild = function(childTitle, parentPath){
      var ref = new Firebase("https://resolver.firebaseio.com/nodes" + parentPath);
      // return child ID
      return ref.push({title: childTitle}).key();
    }

    return Nodes;
  })
