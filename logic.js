let players = ['x', 'o'];
let activePlayer = 0;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(board);
}

function click(x, y) {
  activePlayer === 0 ? board[x][y] = players[0] : board[x][y] = players[1];
  renderBoard(board);
  let diagonal = true,
    diagonalReverse = true,
    row = true,
    col = true,
    reverseBoard = [...board].reverse();
  for (let i = 0; i < board.length; i++) {
    diagonal = test(board[i][i], diagonal);
    diagonalReverse = test(reverseBoard[i][i], diagonalReverse);
    row = test(board[x][i], row);
    col = test(board[i][y], col);
  }
  if (diagonal || diagonalReverse || row || col) {
    showWinner(activePlayer);
  }
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function test(value, temp) {
  if (value == players[activePlayer] && temp == true) {
    return true;
  } else {
    return false;
  }
}
