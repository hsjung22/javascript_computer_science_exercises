class MaxBinaryHeap {
  constructor(val) {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.reorderLast();
  }

  reorderLast() {
    let n = this.values.length - 1;
    let parentIndex = this.parentIndex(n);
    let placeholder;

    while (parentIndex >= 0) {
      if(this.values[n] > this.values[parentIndex]) {
        placeholder = this.values[n];
        this.values[n] = this.values[parentIndex];
        this.values[parentIndex] = placeholder;
        n = parentIndex;
        parentIndex = this.parentIndex(n);
      } else {
        return;
      }
    }
  }

  parentIndex(n) {
    return Math.floor( (n-1) / 2);
  }

  greaterChildNode(n) {
    if (this.values[2 * n + 2] === undefined) {
      return 2 * n + 1;
    } else {
      return (
        (this.values[2 * n + 1] > this.values[2 * n + 2])
          ? (2 * n + 1)
          : (2 * n + 2)
      );
    }
  }

  remove() {
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this.reorderFirst();
  }

  reorderFirst() {
    let placeholder;
    let n = 0;

    while (this.values[2 * n + 1]) {
      if (this.values[n] < this.values[this.greaterChildNode(n)]) {
        placeholder = this.values[n];
        this.values[n] = this.values[this.greaterChildNode(n)];
        this.values[this.greaterChildNode(n)] = placeholder;
        n = this.greaterChildNode(n)
      } else {
        return;
      }
    }
  }

  maxHeapify(arr) {
    arr.map(val => this.insert(val))
    return this.values;
  }

}
