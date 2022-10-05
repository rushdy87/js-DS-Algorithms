function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort([6, 1, 2, 3, 4, 5])); // [1,2,3,4,5,6];
console.log(quickSort([16, 1, 21, 13, 4, 15])); // [ 1, 4, 13, 15, 16, 21 ]
