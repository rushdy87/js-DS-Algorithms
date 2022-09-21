// The Time Complexity: O(n)
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// The Time Complexity: O(sqrt(n))
function isPrime2(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  // This is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
}
// This improved solution cuts the time complexity down significantly.
