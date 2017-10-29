function Node (val) {
  this.value = val;
  this.next = null;
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // places the value at the end of the queue
  // returns the new size of the queue
  enqueue (val) {
    const node = new Node(val);

    if (this.last) {
      this.last.next = node;
    } else {
      this.first = node;
    }

    this.last = node;

    this.size += 1;
    return this.size;
  }

  // returns the value of the node removed
  dequeue () {
    const remove = this.first;

    if (this.last === remove) {
      this.last = null;
    }

    this.first = remove.next;
    remove.next = null;
    this.size -= 1;

    return remove.value;
  }

  // returns the first value in the queue
  peek () {
    return this.first.value;
  }

}
