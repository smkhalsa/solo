angular.module('resolver.services', [
    'firebase'
  ])

  .factory('Nodes', function($firebaseArray) {

    var Nodes = {};

    Nodes.getNodeChildren = function(path) {
      return $firebaseArray(new Firebase("https://resolver.firebaseio.com/nodes" + path));
    };

    Nodes.getRootNode = function(nodeId, callback) {
      var rootNodes = $firebaseArray(new Firebase("https://resolver.firebaseio.com/nodes"));
      rootNodes.$loaded()
        .then(function(nodes){
          for (var i = 0; i < nodes.length; i++) {
            if(nodes[i].$id === nodeId) {
              callback(nodes[i]);
            }
          }
        });
    };

    // adds a child and returns the child's ID
    Nodes.addChild = function(childTitle, parentPath){
      var ref = new Firebase("https://resolver.firebaseio.com/nodes" + parentPath);
      // return child ID
      return ref.push({title: childTitle}).key();
    };

    Nodes.removeNode = function(path){
      var ref = new Firebase("https://resolver.firebaseio.com/nodes" + path)
      ref.remove();
    };

    return Nodes;
  });
