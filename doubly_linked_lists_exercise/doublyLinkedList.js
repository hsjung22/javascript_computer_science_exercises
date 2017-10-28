function Node (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // inserts a node at the end of the list and increments the length of the list
  push (val) {
    const node = new Node (val);
    let current;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      node.prev = current;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  // removes a node at the end of the list and decrements the length of the list
  pop () {
    let current = this.head;

    if (current === null) {
      return;
    } else {
      while (current.next) {
        current = current.next;
      }
      const previous = current.prev;
      previous.next = null;
      this.tail = previous;
      current.prev = null;
    }

    this.length -= 1;
    return current.val;
  }

  // inserts a node at the beginning of the list and increments the length of the list
  unshift (val) {
    const node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }

    this.length += 1;
    return this;
  }

  // removes a node at the beginning of the list and decrements the length of the list
  shift () {
    let firstNode;

    if (this.head === null) {
      return;
    } else {
      firstNode = this.head;
      this.head = firstNode.next;
      (firstNode.next && (firstNode.next.previous = null));
      firstNode.next = null;
    }

    this.length -= 1;
    return firstNode.val;
  }

  // finds a node and replaces its val or returns undefined if the node is not found
  set (index, value) {
    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        current.val = value;
        return;
      }
      current = current.next;
      currentIndex += 1;
    }
  }

  // finds a node and returns its val
  get (index) {
    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        return current.val;
      }

      current = current.next;
      currentIndex += 1;
    }

    return null;
  }

  insert (index, val) {
    const node = new Node (val);
    let current = this.head;
    let currentIndex = 0;
    let previous;

    while (current) {
      if (currentIndex === index) {
        previous = current.prev;

        previous.next = node;
        node.prev = previous;

        node.next = current;
        current.prev = node;

        this.length += 1;
        return;
      }

      currentIndex += 1;
      current = current.next;
    }
  }

  remove (index) {
    let current;

    if (index === 0) {
      current = this.head;
      this.head = current.next;
      current.next = null;
      this.head.prev = null;

      if (this.length - 1 === index) {
        this.tail = null;
      }

      this.length -= 1;
      return this;
    }

    current = this.head.next;
    let currentIndex = 1;

    while (current) {
      if (currentIndex === index) {
        if (this.length - 1 === index) {
          this.tail = current.prev;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;

        this.length -= 1;
        return this;
      }
      current = current.next;
      currentIndex += 1;
    }
  }

  // reverses all of the nodes
  reverse () {
    let current = this.head;
    let placeholder;

    while (current) {
      placeholder = current.next;
      current.next = current.prev;
      current.prev = placeholder;

      current = placeholder;
    }

    placeholder = this.head;
    this.head = this.tail;
    this.tail = placeholder;
  }
}
