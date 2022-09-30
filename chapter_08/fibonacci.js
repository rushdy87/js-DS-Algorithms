// Fibonacci Sequence
// The Fibonacci sequence is a list of infinite numbers, each
// of which is the sum of the past two terms (starting with 1).
// 1, 1, 2, 3, 5, 8, 13, 21 ...
// How might you program something to print the Nth term of the
// Fibonacci sequence?

// Iterative Solution: Fibonacci Sequence
function getNthFibo(n) {
  if (n <= 1) {
    return n;
  }
  let sum = 0,
    last = 1,
    lastlast = 0;
  for (let i = 1; i <= n; i++) {
    sum = last + lastlast;
    lastlast = last;
    last = sum;
  }
  return sum;
}

console.log(getNthFibo(6));

// Recursive Solution: Fibonacci
function getNthFibo2(n) {
  if (n <= 2) {
    return n;
  }
  return getNthFibo2(n - 1) + getNthFibo2(n - 2);
}
console.log(getNthFibo2(6));

// Fibonacci Sequence: Tail Recursion
// A tail recursive function is a recursive function in which the
// recursive call is the last executed thing in the function.
function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }

  return getNthFiboBetter(n - 1, last, lastlast + last);
}
for (var i = 1; i < 10; i++) {
  console.log(getNthFiboBetter(i, 0, 1));
}
