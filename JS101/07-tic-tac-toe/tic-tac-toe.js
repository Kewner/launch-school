const readline = require('readline-sync');
const messages = require('./tic-tac-toe-messages.json');

const MOVES_FIRST = 'choose';
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];

function prompt(msg, arg1 = '', arg2 = '') {
  let message = messages[msg];
  console.log(`=> ${message}`, arg1, arg2);
}

function displayBoard(board) {
  console.clear();

  console.log('Welcome to Tic Tac Toe!\n' +
              'The first player to win 5 games wins the match.\n' +
              `You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return arr[0];
    case 2:
      return `${arr[0]} ${word} ${arr[1]}`;
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             ` ${word} ${arr[arr.length - 1]}`;
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt('chooseSquare', joinOr(emptySquares(board)));
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt('invalidSquareChoice');
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerOffenseOrDefense(board, marker) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, marker);
    if (square) break;
  }

  return square;
}

function computerChoosesSquare(board) {
  let square;

  // attack
  square = computerOffenseOrDefense(board, COMPUTER_MARKER);

  // defend
  if (!square) {
    square = computerOffenseOrDefense(board, HUMAN_MARKER);
  }

  // pick square 5
  if (!square) {
    if (board[5] === INITIAL_MARKER) square = 5;
  }

  // pick random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    if (WINNING_LINES[line].every(square => board[square] === HUMAN_MARKER)) {
      return 'Player';
    } else if (WINNING_LINES[line].every(square => board[square]
                                                      === COMPUTER_MARKER)) {
      return 'Computer';
    }
  }

  return null;
}

function displayWinner(winner, gameOrMatch) {
  gameOrMatch === 'game' ? prompt('gameWinner', winner) :
                           prompt('matchWinner', winner);
  // if (gameOrMatch === 'game') {
  //   prompt('gameWinner', winner);
  // } else if (gameOrMatch === 'match') {
  //   prompt('matchWinner', winner);
  // }
}

function updateScore(score, winner) {
  score[winner] += 1;
}

function displayScore(score) {
  prompt('displayScore', score.Player, score.Computer);
}

function matchIsOver(score) {
  return score.Player === GAMES_TO_WIN || score.Computer === GAMES_TO_WIN;
}

function playAgain(gameOrMatch) {
  prompt('playAgain', gameOrMatch);
  let playAgain = readline.question().toLowerCase();

  while ((playAgain[0] !== 'y' && playAgain[0] !== 'n') ||
         playAgain.length > 3) {
    prompt('invalidYesNoChoice');
    playAgain = readline.question().toLowerCase();
  }

  return playAgain[0] === 'y';
}

function chooseFirstPlayer() {
  let firstPlayer;

  if (MOVES_FIRST === 'choose') {
    console.clear();
    prompt('firstToPlay');
    firstPlayer = readline.question().toLowerCase();

    while (firstPlayer !== 'player' && firstPlayer !== 'computer') {
      prompt('invalidPlayerChoice');
      firstPlayer = readline.question().toLowerCase();
    }
  }

  return firstPlayer;
}

while (true) {
  let score = { Player: 0, Computer: 0 };

  while (true) {
    let board = initializeBoard();
    let currentPlayer = chooseFirstPlayer();

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board); // display the final state of the board

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      updateScore(score, winner);

      if (matchIsOver(score)) {
        displayWinner(winner, 'match');
        displayScore(score);
        break;
      }

      displayWinner(winner, 'game');
      displayScore(score);
      if (!playAgain('game')) break;

    } else {
      prompt('tie');
      displayScore(score);
      if (!playAgain('game')) break;
    }

  }

  // only ask for another match if match is over
  if (matchIsOver(score)) {
    prompt('greatMatch');
    if (!playAgain('match')) break;
  }

}

prompt('thanksForPlaying');