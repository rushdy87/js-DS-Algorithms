function binarySearch(array, n) {
  let highIndex = array.length - 1;
  let lowIndex = 0;
  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (array[midIndex] === n) {
      return true;
    } else if (n > array[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4], 4)); // true
console.log(binarySearch([1, 2, 3, 4], 5)); // -1
