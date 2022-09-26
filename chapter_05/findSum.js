/**
 * problem: Given the array arr, find and return two indices of 
 * the array that add up to weight or return -1 if there is no 
 * combination that adds up to weight.
 * For example, in an array like [1,2,3,4,5], what numbers add 
 * up to 9? the answers are 4 and 5, of course.

 */
// Time Complexity: O(n2)
// Space Complexity: O(1)
function findSum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
  }
  return -1;
}
console.log(findSum([1, 2, 3, 4, 5], 9));
console.log(findSum([1, 2, 3, 4], 5));

// Time Complexity: O(n)
// Space Complexity: O(1)
function findSumBetter(arr, weight) {
  const hashtable = {};
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let difference = weight - currentElement;
    // check the right one already exists
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[weight - currentElement]];
    } else {
      // store index
      hashtable[difference] = i;
    }
  }
  return -1;
}
