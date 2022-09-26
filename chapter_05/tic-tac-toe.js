// TIC-TAC-TOE CHECK
/**
 * Given a matrix representing a tic-tac-toe board,
 * determine whether someone won, whether it was a
 * tie, or whether the game has not ended yet.
 */

function checkRow(rowArr, letter) {
  for (let i = 0; i < 3; i++) {
    if (rowArr[i] != letter) {
      return false;
    }
  }
  return true;
}

function checkColumn(gameBoardMatrix, columnIndex, letter) {
  for (let i = 0; i < 3; i++) {
    if (gameBoardMatrix[i][columnIndex] != letter) {
      return false;
    }
  }
  return true;
}

function ticTacToeWinner(gameBoardMatrix, letter) {
  // Check rows
  let rowWin =
    checkRow(gameBoardMatrix[0], letter) ||
    checkRow(gameBoardMatrix[1], letter) ||
    checkRow(gameBoardMatrix[2], letter);

  let colWin =
    checkColumn(gameBoardMatrix, 0, letter) ||
    checkColumn(gameBoardMatrix, 1, letter) ||
    checkColumn(gameBoardMatrix, 2, letter);

  let diagonalWinLeftToRight =
    gameBoardMatrix[0][0] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][2] == letter;

  let diagonalWinRightToLeft =
    gameBoardMatrix[0][2] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][0] == letter;

  return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
}

const board = [
  ['O', '-', 'X'],
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
];
ticTacToeWinner(board, 'X'); // false
ticTacToeWinner(board, 'O'); // true
