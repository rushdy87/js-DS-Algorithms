// Time Complexity: O(n)
function linearSearch(arr, n) {
  for (elem of arr) {
    if (elem === n) {
      return true;
    }
  }
  return false;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // true
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
