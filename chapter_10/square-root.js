// USE THE IMPLEMENT SQUARE ROOT FUNCTION FOR AN INTEGER WITHOUT USING ANY MATH LIBRARIES
function sqrtIntNaive(number) {
  if (number <= 1) {
    return number;
  }

  let index = 1;
  let square = 1;
  while (square < number) {
    if (square === number) {
      return square;
    }
    index++;
    square = index * index;
  }
  return index;
}

console.log(sqrtIntNaive(9));
console.log(sqrtIntNaive(1));
console.log(sqrtIntNaive(16));
// Time Complexity: o(n)
// the binary search algorithm can be applied to this problem. instead of going up 1 by 1,
// partition the range into upper half and lower half between 1 and the given number as
// follows:
function sqrtInt(number) {
  if (number <= 1) {
    return number;
  }
  let start = 1;
  let end = number;
  let ans;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (mid * mid === number) {
      return mid;
    }
    if (mid * mid < number) {
      start = mid + 1;
      ans = end;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
console.log(sqrtInt(9));
console.log(sqrtInt(1));
console.log(sqrtInt(16));
