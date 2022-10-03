function intersectSets(setA, setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]);
console.log(intersectSets(setA, setB)); // Set {2, 3}
