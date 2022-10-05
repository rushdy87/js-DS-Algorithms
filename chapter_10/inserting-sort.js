function insertionSort(items) {
  var len = items.length, // number of items in the array
    value, // the value currently being compared
    i, // index into unsorted section
    j; // index into sorted section

  for (i = 0; i < len; i++) {
    // store the current value because it may shift later
    value = items[i];

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section over
    //by one. This creates space in which to insert the value.

    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}

console.log(insertionSort([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6];
console.log(insertionSort([16, 1, 21, 13, 4, 15])); // [ 1, 4, 13, 15, 16, 21 ]
