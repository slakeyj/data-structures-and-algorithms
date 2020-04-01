const getEdge = (graph, cityArray) => {
  let direct = false;
  let total = 0;
  for (let i = 0; i < cityArray.length; i++) {
    let neighbors = graph.adjacencyList.get(cityArray[i])

    neighbors.forEach((neighbor, index) => {
      let key = Object.keys(neighbor)
      console.log('plus one', cityArray[i + 1])
      if (key === cityArray[i + 1]) {
        console.log('in the if')
        direct = true;
        console.log('direct', direct)
        console.log('neighbor ', neighbor)
        total += neighbors[neighbor]

      } else {
        return false;
      }
    })
  }
  return `${direct}, ${total}`;

}

module.exports = getEdge;