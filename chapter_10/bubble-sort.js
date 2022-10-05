function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) swap(array, i, j);
    }
  }
  return array;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6];
console.log(bubbleSort([16, 1, 21, 13, 4, 15]));
