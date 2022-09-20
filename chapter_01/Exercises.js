// 1
function someFunction(n) {
  for (var i = 0; i < n * 1000; i++) {
    for (var j = 0; j < n * 20; j++) {
      console.log(i + j);
    }
  }
}
// O(n2) There are two nested loops. Ignore the constants in front of n.

// 2
function someFunction(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        for (var l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}
// O(n3) There are four nested loops, but the last loop runs only until 10.

// 3
function someFunction(n) {
  for (var i = 0; i < 1000; i++) {
    console.log('hi');
  }
}
// O(1) Constant complexity. The function runs from 0 to 1000. This does not depend on n.

// 4
function someFunction(n) {
  for (var i = 0; i < n * 10; i++) {
    console.log(n);
  }
}
// O(n)Linear complexity. The function runs from 0 to 10n. Constants are ignored in Big-O.

// 5
function someFunction(n) {
  for (var i = 0; i < n; i * 2) {
    console.log(n);
  }
}
// O(log2n) Logarithmic complexity. For a given n, this will operate only log2n times
// because i is incremented by multiplying by 2 rather than adding 1 as in the other
// examples.

// 6
function someFunction(n) {
  while (true) {
    console.log(n);
  }
}
// O(∞) Infinite loop. This function will not end.
