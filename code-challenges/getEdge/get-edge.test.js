const Graph = require('../../Data-Structures/graph/graph')
const getEdge = require('./get-edge')

describe('getEdge()', () => {
  let graph

  beforeEach(() => {
    graph = new Graph();
  })

  it('returns true and the total when given a direct flight of 2 cities', () => {
    graph.addNode('Seattle');
    graph.addNode('Portland')
    graph.addNode('Los Angeles');
    graph.addNode('Phoenix')
    graph.addNode('Dallas');
    graph.addEdge('Seattle', 'Portland', 300);
    expect(getEdge(graph, ['Seattle', 'Portland'])).toEqual('true, $300')
  })
})