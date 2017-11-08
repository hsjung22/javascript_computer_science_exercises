class Graph{
  constructor() {
    this.vertices = [];
    this.visited = [];
    this.adjacencyList = {};
  }

  // this function should add a node to the graph and place a new key in the adjacency list
  // with the value of an empty array.
  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList[vertex] = [];
  }


  // this function should add an edge between two nodes in the graph and place each value of
  // the nodes in each array for the value of the node in the adjacency list.
  addEdge(vertex1, vertex2, weight) {
    // need to worry about addEdge('A', 'B') then addEdge('B', 'A')?
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // this function should accept two nodes and remove the edge between them. It should modify
  // the adjacency list to ensure that both values are not in each array for the two nodes which
  // no longer contain the edge.
  removeEdge(vertex1, vertex2) {
    let index;
    index = this.adjacencyList[vertex1].indexOf(vertex2);
    this.adjacencyList[vertex1].splice(index, 1);

    index = this.adjacencyList[vertex2].indexOf(vertex1);
    this.adjacencyList[vertex2].splice(index, 1);
  }

  // this function should remove the node in the array of nodes and also remove all edges that
  // the removed node previously contained.
  removeVertex(vertex) {
    // remove from vertices
    let index = this.vertices.indexOf(vertex);
    this.vertices.splice(index, 1);
    // remove from adjacencyList
    delete this.adjacencyList[vertex];

    for (const prop in this.adjacencyList) {
      index = this.adjacencyList[prop].indexOf(vertex);
      if (index >= 0) {
        this.adjacencyList[prop].splice(index, 1);
      }
    }
  }

  // should return an array of the nodes searched
  depthFirstSearch(vertex) {
    let notVisited;
    let vertices = this.adjacencyList[vertex];

    if (this.visited.indexOf(vertex) === -1) {
      this.visited.push(vertex);
    }

    notVisited = vertices.filter(v => this.visited.indexOf(v) === -1)

    notVisited.map(v => {
      return this.depthFirstSearch(v)
    })

    return this.visited;
  }

  breadthFirstSearch(start) {
    let result = []
    let queue = [start]
    this.adjacencyList[start].visited = true;
    while(queue.length > 0){
      let value = queue.shift();
      result.push(value)
      this.adjacencyList[value].forEach(function(child){
        if(!this.adjacencyList[child.node].visited){
          this.adjacencyList[child.node].visited = true;
          queue.push(child.node)
        }
      }, this)
    }
    return result
  }

}
