// USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY
function checkDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(checkDuplicates([1, 2, 3, 4, 5])); // false
console.log(checkDuplicates([1, 1, 2, 3, 4, 5])); // true
