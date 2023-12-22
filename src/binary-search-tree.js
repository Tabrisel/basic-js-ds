const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {

        if ((data === null)&(data === undefined)) {
          return;
        }

        this.head = addNewNode(this.head, data);


        function addNewNode(currentNode, new_value) {
          // if not exist:
            if (!currentNode) {
              return new Node(new_value);
            }

            if (new_value < currentNode.data) {
                currentNode.left = addNewNode(currentNode.left, new_value)
                } else if (new_value > currentNode.data) {
                  currentNode.right = addNewNode(currentNode.right, new_value)
                }
                return currentNode;        
          }    
        }
    

  has(data) {

      return existNode(this.head, data);

      function existNode(currentNode, find_data) {
        if (!currentNode) {
          return false;
        }


        if (currentNode.data === find_data) {
          return true;
        }

        else if (currentNode.data > find_data) {
          return existNode(currentNode.left, find_data)
          } else {
          return existNode(currentNode.right, find_data)
        }
    }
    }
  

  find(data) {
    return findNode(this.head, data);

      function findNode(currentNode, find_data) {
        if (!currentNode) {
          return null;
        }


        if (currentNode.data === find_data) {
          return currentNode;
        }

        else if (currentNode.data > find_data) {
          return findNode(currentNode.left, find_data)
          } else {
          return findNode(currentNode.right, find_data)
        }
    }
}

  remove(data) {
    this.head = removeNode(this.head, data)

      function removeNode(currentNode, data) {
        if (!currentNode) {
          return null;
        }
        

        if (data < currentNode.data) {
            currentNode.left = removeNode(currentNode.left, data);
        } else if(data > currentNode.data) {
          currentNode.right = removeNode(currentNode.right, data)
        } else {
            if (!currentNode.left && !currentNode.right) {
              currentNode = null;
            }
            else if (!currentNode.left) {
              currentNode = currentNode.right;
            }
            else if (!currentNode.right) {
              currentNode = currentNode.left;
            } else {

            let min_value = findMin(currentNode.right);
            currentNode.data = min_value;
            currentNode.right = removeNode(currentNode.right, min_value);


            function findMin(currentNode) {
              while (currentNode.left) {
                currentNode = currentNode.left
              }
              return currentNode.data;
            }

            
          }
        }
        return currentNode;
      }
  }

  min() {
    let current_value = this.head;
    return findMinValue(current_value);

    function findMinValue(value) {
      while (value.left) {
        value = value.left
      }
      return value.data;
    }
  }

  max() {
    let current_value = this.head;
    return findMinValue(current_value);

    function findMinValue(value) {
      while (value.right) {
        value = value.right
      }
      return value.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};