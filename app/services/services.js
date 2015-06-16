angular.module('resolver.services', [
    'firebase'
  ])

  .factory('Nodes', function($firebaseArray) {

    var Nodes = {};

    Nodes.getNode = function(path) {
      return new Firebase("https://resolver.firebaseio.com/nodes" + path)
    }

    Nodes.getNodeChildren = function(path) {
      return $firebaseArray(new Firebase("https://resolver.firebaseio.com/nodes" + path))
    }

    // adds a child and returns the child's ID
    Nodes.addChild = function(childTitle, parentPath){
      var ref = new Firebase("https://resolver.firebaseio.com/nodes" + parentPath);
      // return child ID
      return ref.push({title: childTitle}).key();
    }

    return Nodes;
  })
