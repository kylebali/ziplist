/**
 * Ziplist function for E27.
 * Created by Kyle on 9/19/16.
 */

const firstList = ['a', 'b', 'c'];
const secondList = [1, 2, 3];

function zipList(list1, list2) {
  let result = [];
  for (let i = 0; i < list1.length || i < list2.length; i++) {
    if (list1[i] != undefined) {
      result.push(list1[i]);
    }
    if (list2[i] != undefined) {
      result.push(list2[i]);
    }
  }
  return result;
}

console.log(zipList(firstList, secondList));

function zipUnderscore(list1, list2) {
  let zip = _.zip(list1, list2);
  return zip;
}

console.log(zipUnderscore(firstList, secondList));
