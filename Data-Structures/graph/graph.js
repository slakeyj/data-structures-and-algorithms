class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }


  addNode(node) {
    // initialize it with an empty array to add the adjacent nodes to
    this.adjacencyList.set(node, []);
    return node;
  }


  addEdge(node, destination, weight) {
    if (!this.size()) {
      return null;
    }

    const arrayOne = this.adjacencyList.get(node);
    const arrayTwo = this.adjacencyList.get(destination);
    if (!weight) {
      arrayOne.push(destination);
      arrayTwo.push(node);
    } else {
      let obj = {};
      obj[destination] = weight
      arrayOne.push(obj);
      obj = {};
      obj[node] = weight
      arrayTwo.push(obj);
    }
  }

  getNodes() {
    if (!this.size()) {
      return null;
    }
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(node) {
    if (!this.size()) {
      return null;
    }
    return this.adjacencyList.get(node);
  }

  size() {
    return [...this.adjacencyList.keys()].length;
  }
}

module.exports = Graph;