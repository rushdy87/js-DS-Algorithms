// SPIRAL PRINT
// Given a matrix, print the elements in a spiral order,
/**
 * this looks like a daunting task at first. however, 
 * the problem can be broken down to five main components.
    • printing from left to right
    • printing from top to bottom
    • printing from right to left
    • printing from bottom to top
    • Keeping a limit on these four operations
 */

function spiralPrint(M) {
  let topRow = 0,
    leftCol = 0,
    btmRow = M.length - 1,
    rightCol = M[0].length - 1;

  while (topRow < btmRow && leftCol < rightCol) {
    // top row
    for (let col = 0; col <= rightCol; col++) {
      console.log(M[topRow][col]);
    }
    topRow++;

    // right column
    for (let row = topRow; row <= btmRow; row++) {
      console.log(M[row][rightCol]);
    }
    rightCol--;

    // Bottom row (from right to left)
    if (topRow <= btmRow) {
      for (let col = rightCol; col > 0; col--) {
        console.log(M[btmRow][col]);
      }
      btmRow--;
    }

    // Left column (from bottom to up)
    if (leftCol <= rightCol) {
      for (let row = btmRow + 1; row > topRow; row--) {
        console.log(M[row][leftCol]);
      }
      leftCol++;
    }
  }
}

const M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
spiralPrint(M);
