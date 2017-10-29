function Node (val) {
  this.value = val;
  this.next = null;
}

// Last In First Out
class Stack {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  // places the value at the top of the stack
  // returns the new size of the stack
  push (val) {
    const node = new Node(val);

    node.next = this.first;
    this.first = node;

    if (this.size === 0) {
      this.last = node;
    }

    this.size += 1;
    return this.size;
  }

  // removes the value at the top of the stack
  // returns the value of the node removed
  pop () {
    let remove = this.first;

    this.first = remove.next;
    remove.next = null;

    if (remove === this.last) {
      this.last = null;
    }

    this.size -= 1;
    return remove.value;
  }

  // returns the value at the top of the stack
  peek () {
    return this.first.value;
  }

}
