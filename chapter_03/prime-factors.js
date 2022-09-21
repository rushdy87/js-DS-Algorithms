// Time Complexity: O(sqrt(n))
function primeFactors(n) {
  // Print the number of 2s that divide n
  while (n % 2 === 0) {
    console.log(n);
    n /= 2;
  }

  // n must be odd at this point. So we can skip one element (Note i = i +2)
  for (let i = 3; i * i <= n; i += 2) {
    // While i divides n, print i and divide n
    while (n % i === 0) {
      console.log(i);
      n /= i;
    }
  }
  // This condition is to handle the case when n is a prime number
  // greater than 2
  if (n > 2) {
    console.log(2);
  }
}
// This algorithm works by printing any number that is divisible by i
// without a remainder. In the case that a prime number is passed into
// this function, it would be handled by printing whether n is greater than 2.
