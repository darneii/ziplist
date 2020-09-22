const numList = [1, 2, 3];
const letList = ['a', 'b', 'c'];

function zipList(list1, list2){
  let newList = [];
  let counter = 0;
  for (let i = 0; i < list1.length; i++){
    newList[counter] = list1[i];
    counter++;
    newList[counter] = list2[i];
    counter++;
  }
  return newList;
}

console.log(zipList(numList, letList));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(numList, letList));