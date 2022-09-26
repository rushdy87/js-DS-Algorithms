// FIND COMMON ELEMENTS IN K-SORTED ARRAYS

// Time Complexity: O(kn)
// Space Complexity: O(n)
function commonElements(kArray) {
  const resultObject = {};
  for (const subArray of kArray) {
    let last = null;
    for (const element of subArray) {
      if (last !== element) {
        if (!resultObject[element]) {
          resultObject[element] = 1;
        } else {
          resultObject[element]++;
        }
      }
      last = element;
    }
  }
  const resultArr = [];
  for (const key in resultObject) {
    if (resultObject[key] === kArray.length) {
      resultArr.push(parseInt(key));
    }
  }
  return resultArr;
}
console.log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
);
