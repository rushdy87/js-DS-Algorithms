// FIND AN ELEMENT WITHIN AN ARRAY THAT APPEARS ONLY ONCE
// Input:   arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8] Output:  4
// Input:   arr = [1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8] Output:  8
function findOnlyOnce(arr) {
  return findOnlyOnceHelper(arr, 0, arr.length);
}

function findOnlyOnceHelper(arr, low, high) {
  if (low > high) {
    return null;
  }
  if (low === high) {
    return arr[low];
  }
  let mid = Math.floor((high + low) / 2);

  if (mid % 2 === 0) {
    if (arr[mid] == arr[mid + 1]) {
      return findOnlyOnceHelper(arr, mid + 2, high);
    } else {
      return findOnlyOnceHelper(arr, low, mid);
    }
  } else {
    if (arr[mid] == arr[mid - 1]) {
      return findOnlyOnceHelper(arr, mid + 1, high);
    } else {
      return findOnlyOnceHelper(arr, low, mid - 1);
    }
  }
}

console.log(findOnlyOnce([1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]));
console.log(findOnlyOnce([1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8]));
