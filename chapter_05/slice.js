// IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH
/**
 * .slice() takes two parameters:
 * the beginning index and the last ending index of the array.
 * it returns a portion of an existing array without modifying
 * the array function arraySlice (array, beginIndex, endIndex).
 */
//  Time Complexity: O(n) Space Complexity: O(n)
function arraySlice(array, beginIndex, endIndex) {
  if (!beginIndex && !endIndex) {
    return array;
  }
  const sliced = [];
  for (let index = beginIndex; index < endIndex; index++) {
    sliced.push(array[index]);
  }
  return sliced;
}

console.log(arraySlice([1, 2, 3, 4], 1, 2)); // [2]
console.log(arraySlice([1, 2, 3, 4], 2, 4)); // [3,4]
