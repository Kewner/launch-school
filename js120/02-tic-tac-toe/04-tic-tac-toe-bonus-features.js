let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[counter] = new Square();
    }
  }

  clearDisplay() {
    console.clear();
    console.log('');
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares(keys = Object.keys(this.squares)) {
    return keys.filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score += 1;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
    this.score = 0;
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
    this.score = 0;
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = this.human;
  }

  static WINNING_SCORE = 3;

  static POSSIBLE_WINNING_ROWS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];

  static joinOr(arr, separator = ', ', conjunction = 'or') {
    switch (arr.length) {
      case 1:
        return `${arr[0]} is the only square left!`;
      case 2:
        return `${arr[0]} ${conjunction} ${arr[1]}`;
      default:
        return `${arr.slice(0, arr.length - 1).join(`${separator}`)}` +
        `${separator}${conjunction} ${arr[arr.length - 1]}`;
    }
  }

  play() {
    this.displayWelcomeMessage();
    this.playMatch();
    this.displayGoodbyeMessage();
  }

  playMatch() {
    let firstGame = true;

    while (true) {
      if (!firstGame) this.board.clearDisplay();
      firstGame = false;

      this.playGame();
      this.firstPlayer = this.togglePlayer(this.firstPlayer);

      this.updateScore();
      this.displayGameResults();
      this.displayScore();

      if (this.matchOver()) break;
      if (!this.playAgain()) break;
    }

    this.displayMatchResults();
  }

  playGame() {
    let firstMove = true;
    let currentPlayer = this.firstPlayer;
    this.board = new Board();

    while (true) {
      if (!firstMove) this.board.clearDisplay();
      firstMove = false;

      this.board.display();
      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;

      currentPlayer = this.togglePlayer(currentPlayer);
    }

    this.board.clearDisplay();
    this.board.display();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Tic Tac Toe! First to win 3 points wins the match!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }

  displayGameResults() {
    if (this.isGameWinner(this.human)) {
      console.log('You won this game!');
    } else if (this.isGameWinner(this.computer)) {
      console.log('Computer won this game.');
    } else {
      console.log('A tie game. How boring.');
    }
  }

  displayScore() {
    console.log(`You: ${this.human.getScore()} ` +
                `Computer: ${this.computer.getScore()}`);
  }

  playAgain() {
    let answer;

    while (!['y', 'Y', 'n', 'N'].includes(answer)) {
      answer = readline.question('Would you like to play again? y/n: ');
    }

    return answer === 'y' || answer === 'Y';
  }

  playerMoves(currentPlayer) {
    // error Expected an assignment or function call; instead saw an expression
    currentPlayer === this.human ? this.humanMoves() : this.computerMoves();
  }

  togglePlayer(currentPlayer) {
    return currentPlayer === this.human ? this.computer : this.human;
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log('');
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = this.computerAttacks();
    if (!choice) choice = this.computerDefends();
    if (!choice) choice = this.pickCentreSquare();
    if (!choice) choice = this.pickRandomSquare();

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  computerAttacks() {
    return this.findSquareToPick('attack');
  }

  computerDefends() {
    return this.findSquareToPick('defend');
  }

  findSquareToPick(attackOrDefend) {
    let player;
    // error Expected an assignment or function call; instead saw an expression
    attackOrDefend === 'attack' ? player = this.computer : player = this.human;

    for (let idx = 0; idx < TTTGame.POSSIBLE_WINNING_ROWS.length; idx++) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[idx];
      let amountOfSquares = this.board.countMarkersFor(player, row);

      if (amountOfSquares === 2 && this.board.unusedSquares(row).length) {
        return this.board.unusedSquares(row);
      }
    }

    return null;
  }

  pickCentreSquare() {
    return this.board.squares[5].isUnused() ? '5' : null;
  }

  pickRandomSquare() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  updateScore() {
    if (this.isGameWinner(this.human)) {
      this.human.incrementScore();
    } else if (this.isGameWinner(this.computer)) {
      this.computer.incrementScore();
    }
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isGameWinner(this.human) || this.isGameWinner(this.computer);
  }

  isGameWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  matchOver() {
    return this.human.score === TTTGame.WINNING_SCORE ||
           this.computer.score === TTTGame.WINNING_SCORE;
  }

  isMatchWinner() {
    return this.human.score === TTTGame.WINNING_SCORE ? 'human' : 'computer';
  }

  displayMatchResults() {
    if (this.human.getScore() > this.computer.getScore()) {
      console.log('Congratulations, you won the match!');
    } else if (this.computer.getScore() > this.human.getScore()) {
      console.log('Too bad, computer won the match..');
    }
  }
}

let game = new TTTGame();
game.play();