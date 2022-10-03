function isSuperset(setA, subset) {
  for (const elem of subset) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5]);
console.log(isSuperset(setA, setB));
console.log(isSuperset(setA, setC));
