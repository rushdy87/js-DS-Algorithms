// Given two integer arrays with some of the same values, return
// one array that has all the unique elements from both of the
// original arrays.
function uniqueList(arr1, arr2) {
  const set = new Set([...arr1, ...arr2]);
  return Array.from(set);
}

console.log(uniqueList([1, 1, 2, 2], [2, 3, 4, 5])); // [1,2,3,4,5]
console.log(uniqueList([1, 2], [3, 4, 5])); // [1,2,3,4,5]
console.log(uniqueList([], [2, 2, 3, 4, 5])); // [2,3,4,5]
