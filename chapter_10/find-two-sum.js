// FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER

function findTwoSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

console.log(findTwoSum([1, 2, 3], 5));
console.log(findTwoSum([1, 2, 3], 15));
function findTwoSumBatter(array, sum) {
  const store = {};
  for (let index = 0; index < array.length; index++) {
    if (store[array[index]]) {
      return true;
    }
    store[sum - array[index]] = array[index];
  }
  return false;
}
console.log(findTwoSumBatter([1, 2, 3], 5));
console.log(findTwoSumBatter([1, 2, 3], 15));
