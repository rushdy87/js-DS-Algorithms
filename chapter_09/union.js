function unionSet(setA, setB) {
  const union = new Set(setA);
  for (const elem of setB) {
    union.add(elem);
  }
  return union;
}
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5]);
console.log(unionSet(setA, setB));
console.log(unionSet(setA, setC));
console.log(unionSet(setB, setC));
