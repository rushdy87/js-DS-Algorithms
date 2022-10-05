function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = i;

    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i != min) {
      swap(arr, i, min);
    }
  }

  return arr;
}

console.log(selectionSort([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6];
console.log(selectionSort([16, 1, 21, 13, 4, 15])); // [ 1, 4, 13, 15, 16, 21 ]
