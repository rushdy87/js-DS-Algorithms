var array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
// sorted form: [-2, 1, 1, 2, 2, 3, 3, 3, 7, 8, 14]

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

function quickSelectInPlace(A, l, h, k) {
  var p = partition(A, l, h);
  if (p == k - 1) {
    return A[p];
  } else if (p > k - 1) {
    return quickSelectInPlace(A, l, p - 1, k);
  } else {
    return quickSelectInPlace(A, p + 1, h, k);
  }
}

function medianQuickselect(array) {
  return quickSelectInPlace(
    array,
    0,
    array.length - 1,
    Math.floor(array.length / 2)
  );
}

quickSelectInPlace(array, 0, array.length - 1, 5); // 2
// 2 - because it's the fifth smallest element
quickSelectInPlace(array, 0, array.length - 1, 10); // 7
// 7 - because it's the tenth smallest element

console.log(array);
