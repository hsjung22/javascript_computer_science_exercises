function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// inserts a node at the end of the list and increments the length of the list
SinglyLinkedList.prototype.push = function (val) {
  var node = new Node(val);
  var current;

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.tail = node;
  }
  this.length += 1;
  return this;
}

// removes a node at the end of the list and decrements the length of the list
SinglyLinkedList.prototype.pop = function () {
  var current;
  var popped;

  if (this.head === null) {
    return;
  }

  current = this.head;
  while(current.next !== this.tail) {
    current = current.next;
  }

  popped = this.tail.val;
  current.next = null;
  this.tail = current;
  this.length -= 1;
  return popped;
}

// inserts a node at the beginning of the list and increments the length of the list
SinglyLinkedList.prototype.unshift = function (val) {
  var node = new Node(val);
  var firstNode;

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    firstNode = this.head;
    this.head = node;
    node.next = firstNode;
  }

  this.length += 1
  return this;
}

// removes a node at the beginning of the list and decrements the length of the list
SinglyLinkedList.prototype.shift = function () {
  if (this.head === null) {
    return;
  }

  var firstNode = this.head;

  this.head = firstNode.next;
  firstNode.next = null;

  this.length -= 1
  return firstNode.val;
}

// finds a node and replaces its value or returns undefined if the node is not found
SinglyLinkedList.prototype.set = function (index, val)  {
  var current = this.head;
  var currentIndex = 0;

  while (current) {
    if (currentIndex === index) {
      current.val = val;
      return;
    }
    current = current.next;
    currentIndex += 1;
  }
}

// finds a node and returns its value
SinglyLinkedList.prototype.get = function (index) {
  var current = this.head;
  var currentIndex = 0;

  while (current) {
    if (currentIndex === index) {
      return current.val;
    }
    current = current.next;
    currentIndex += 1;
  }
  return null;
}

// inserts a node and correct adjusts the next properties of other nodes
SinglyLinkedList.prototype.insert = function (index, val) {
  var node = new Node(val);

  if (index === 0) {
    node.next = this.head
    this.head = node;
    this.length += 1;
    return this;
  }

  var current = this.head.next;
  var previous = this.head;
  var currentIndex = 1;

  while (current) {
    if (currentIndex === index) {
      node.next = current;
      previous.next = node;
      this.length += 1;
      return this;
    }
    previous = current;
    current = current.next;
    currentIndex += 1;
  }
  return this;
}

SinglyLinkedList.prototype.remove = function (index) {
  if (index === 0) {
    this.head = this.head.next;
    this.head.next = null
    this.length -= 1;
    return this;
  }

  var current = this.head.next;
  var previous = this.head;
  var currentIndex = 1;

  while (current) {
    if (currentIndex === index) {
      previous.next = current.next;
      current.next = null;
      this.length -= 1;
      return this;
    }
    previous = current;
    current = current.next;
    currentIndex += 1;
  }
  return this;
}

// reverses all of the nodes
SinglyLinkedList.prototype.reverse = function () {
  var current = this.head;
  var previous = this.tail;
  var next;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
  return this;
}
