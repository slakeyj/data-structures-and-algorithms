const { LinkedList, Node } = require('../../Data-Structures/linkedList/linked-list')


// function mergeLists(listOne, listTwo) {
//   let currentOne = listOne.head;
//   let currentTwo = listTwo.head;
//   let latest = new Node(currentOne.value, null);;
//   while (currentOne || currentTwo) {
//     if (currentOne) {
//       latest = new Node(currentOne.value, null);
//       currentOne = currentOne.next;
//     }
//     if (currentTwo) {
//       latest.next = new Node(currentTwo.value, null);
//       currentTwo = currentTwo.next;
//     }
//     latest = latest.next

//   };
//   console.log('latest', latest)
//   return latest;

//   // console.log('currents', currentOne, currentTwo)
// }


function mergeLists(listOne, listTwo) {
  let currentOne = listOne.head;
  let currentTwo = listTwo.head;
  let zipperedNode = new Node(currentOne.value, null)
  const zipperedHead = zipperedNode;

  while (currentOne || currentTwo) {

    if (currentOne) {
      if (zipperedHead !== zipperedNode) {
        zipperedNode.next = new Node(currentOne.value, null);
        zipperedNode = zipperedNode.next;
      }
      currentOne = currentOne.next;
    }

    if (currentTwo) {
      zipperedNode.next = new Node(currentTwo.value, null);
      currentTwo = currentTwo.next;
      zipperedNode = zipperedNode.next;
    }
  }

  return new LinkedList(zipperedHead);


  // let nodeThree;
  // let nodeFour;
  // if (listTwo.head.next) {
  //   nodeFour = new Node(listTwo.head.next.value, null);
  // }

  // if (listOne.head.next) {
  //   nodeThree = new Node(listOne.head.next.value, nodeFour);
  // }
  // const nodeTwo = new Node(listTwo.head.value, nodeThree);
  // const nodeOne = new Node(listOne.head.value, nodeTwo);



  // const list = new LinkedList(nodeOne);





  return list;
}

module.exports = mergeLists;