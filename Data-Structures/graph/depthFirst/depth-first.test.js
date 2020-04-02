const Graph = require('../graph');
const depthFirst = require('./depth-first')

describe('depthFirst()', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  })

  it('should return null if the root is null', () => {
    expect(depthFirst(graph)).toEqual(null)
  })

  it('should return multiple values in a graph in a pre-order depth-first traversl order', () => {
    graph.addNode('A');
    graph.addNode('B')
    graph.addNode('C');
    graph.addNode('D')
    graph.addNode('E');
    graph.addNode('F');
    graph.addNode('G');
    graph.addNode('H');
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'D')
    graph.addEdge('B', 'C')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'E')
    graph.addEdge('D', 'F')
    graph.addEdge('D', 'H')
    console.log('graph', graph.adjacencyList.get('A'))
    xexpect(depthFirst(graph, 'A')).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F'])
  })
})