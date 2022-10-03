function differenceSet(setA, setB) {
  const difference = new Set(setA);
  for (const element of setB) {
    difference.delete(element);
  }
  return difference;
}
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]);
console.log(differenceSet(setA, setB)); // Set(2) {1, 4}
