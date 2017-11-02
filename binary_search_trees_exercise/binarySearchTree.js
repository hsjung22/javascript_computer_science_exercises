function Node (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertIteratively(val) {
    const node = new Node(val);
    let current = this.root;

    if (current === null) {
      this.root = node;
      return this;
    }

    while (current) {
      if (current.value > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left
        }
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  insertRecursively(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    const insert = (current) => {
      if (current.value > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          return insert(current.left);
        }
      } else {
        if (current.value < val) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            return insert(current.right);
          }
        }
      }
    }

    return insert(this.root);
  }


  findIteratively(val) {
    let current = this.root;

    while (current) {
      if (current.value === val) {
        return current;
      }
      if (current.value > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return;
  }

  findRecursively(val) {
    let current = this.root;

    const find = (current) => {
      if (current === null) {
        return undefined;
      }

      if (current.value === val) {
        return current;
      }

      if (current.value > val) {
        return find(current.left);
      } else {
        return find(current.right);
      }
    }

    return find(current);
  }

  // returns an array of nodes in correct order
  toArray() {
    let current = this.root;

    const arrayBuilder = (current) => {
      if (current === null) {
        return [];
      }

      return [
        ...arrayBuilder(current.left),
        current.value,
        ...arrayBuilder(current.right),
      ]
    }

    return arrayBuilder(current);
  }

  DFSPreOrder() {
    let current = this.root;

    const arrayBuilder = (current) => {
      if (current === null) {
        return [];
      }

      return [
        current.value,
        ...arrayBuilder(current.left),
        ...arrayBuilder(current.right),
      ]
    }

    return arrayBuilder(current);
  }

  DFSInOrder() {
    return this.toArray();
  }

  DFSPostOrder() {
    let current = this.root;

    const arrayBuilder = (current) => {
      if (current === null) {
        return [];
      }

      return [
        ...arrayBuilder(current.left),
        ...arrayBuilder(current.right),
        current.value,
      ]
    }

    return arrayBuilder(current);
  }

  breadthFirstSearch() {
    let current = this.root;
    let nextLevel = [current.left, current.right];

    const arrayBuilder = (currentLevel) => {
      nextLevel = [];
      currentLevel.map(cl => {
        if (cl.left) {
          nextLevel.push(cl.left)
        }

        if (cl.right) {
          nextLevel.push(cl.right)
        }
      })

      if (nextLevel.length === 0) {
        return [...currentLevel.map(cl => cl.value)];
      }

      return [
        ...currentLevel.map(cl => cl.value),
        ...arrayBuilder(nextLevel)
      ]
    }

    return [current.value, ...arrayBuilder(nextLevel)]
  }

  // right node, then left-most descendent "in order successor"
  remove(val) {
    const find = (current, parent = null) => {
      let childrenCount;

      if (current.value === val) {
        childrenCount =
          (current.left ? 1 : 0) + (current.right ? 1 : 0)

        if (current === this.root) {
          switch(childrenCount) {
            case 0: {
              this.root = null;
              return;
            }
            case 1: {
              this.root = current.left || current.right;
              return;
            }
            case 2: {
              // do stuff
            }
          }
        } else {
          switch(childrenCount) {
            case 0: {
              if (parent.left === current) {
                parent.left = null;
              } else {
                parent.right = null;
              }
              return;
            }
            case 1: {
              if (parent.left === current) {
                parent.left = current.left || current.right;
              } else {
                parent.right = current.left || current.right;
              }
              return;
            }
            case 2: {
              let successorParent = current;
              let successor = current.right;

              while(successor.left) {
                successorParent = successor;
                successor = successor.left;
              }

              if (current !== successorParent) {
                successorParent.left = successor.right;
              }

              if (parent.left === current) {
                parent.left = successor;
              } else {
                parent.right = successor;
              }

              successor.left = current.left;
              successor.right = current.right === successor ? null : current.right;
              return;
            }
          }
          return;
        }
        return;
      }

      parent = current
      if (current.value > val) {
        return find(current.left, parent);
      } else {
        return find(current.right, parent);
      }
    }

    find(this.root);
  }
}
