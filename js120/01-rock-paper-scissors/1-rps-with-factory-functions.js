/* https://launchschool.com/lessons/fb892747/assignments/ae7e77a4

Added adjusting computer choice based on history:
- Rule: check which choice brought `human` the most wins, and choose
  an option that defeats that `human` choice. Data required:
      - The choices `human` made so far.
      - How many times `human` won with each choice.
- Rule: if human won 60% of the games in which computer chose someOption,
  don't choose that option this time.


Possible extra bonus feature: the possibility to view statistics:
- Choices made by both players
- How many times they won with each of those choices.
- Percentages?

*/

const readline = require('readline-sync');
const choicesArray = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  winner: null,
  // movesHistory: { human: [], computer: [] },
  humanHistory: createHistory(),
  computerHistory: createHistory(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Spock, Lizard!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Spock, Lizard. Goodbye!');
  },

  determineRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let winningOrder = {
      rock: ['lizard', 'scissors'],
      lizard: ['spock', 'paper'],
      spock: ['rock', 'scissors'],
      scissors: ['paper', 'lizard'],
      paper: ['rock', 'spock']
    };

    if (winningOrder[humanMove].includes(computerMove)) {
      this.winner = 'human';
    } else if (winningOrder[computerMove].includes(humanMove)) {
      this.winner = 'computer';
    } else {
      this.winner = null;
    }
  },

  displayMovesAndWinner() {
    let winner = this.winner;
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if (winner === 'human') {
      console.log('You win this round!');
    } else if (winner === 'computer') {
      console.log('Computer wins this round!');
    } else {
      console.log("It's a tie!");
    }
  },

  updateScore() {
    let winner = this.winner;

    if (winner === 'human') {
      this.human.score += 1;
    } else if (winner === 'computer') {
      this.computer.score += 1;
    }
  },

  displayScore() {
    console.log(`Player: ${this.human.score} Computer: ${this.computer.score}`);
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  gameIsOver() {
    if (this.human.score === 5) {
      console.log('You have won the game!');
      return true;
    } else if (this.computer.score === 5) {
      console.log('Computer has won the game!');
      return true;
    }

    return false;
  },

  resetScore() {
    this.human.score = 0;
    this.computer.score = 0;
    // this.movesHistory = { human: [], computer: [] };
  },

  logMoves() {
    // this.movesHistory['human'].push(this.human.move);
    // this.movesHistory['computer'].push(this.computer.move);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    this.humanHistory[humanMove]['chosen'] += 1;
    this.computerHistory[computerMove]['chosen'] += 1;
  },

  displayMoveHistory() {
    // console.log(`Moves by you: ${this.movesHistory['human'].join(', ')}`);
    // console.log(`Moves by computer: ${this.movesHistory['computer'].join(', ')}`);

    console.log(this.humanHistory);
    console.log(this.computerHistory);
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.determineRoundWinner();
      this.logMoves();
      this.displayMovesAndWinner();
      this.updateScore();
      // this.displayMoveHistory();
      this.displayScore();
      if (this.gameIsOver()) this.resetScore();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }
};

RPSGame.play();

// Factory function to create player``computer`
function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      /* Add rule logic (winning `human` choices)
      - Check which `human` choice has the best winning percentage.
      - Pick an option that beats that choice.
      */
      // let compHistory = RPSGame.computerHistory;
      // let percentages = Object.keys(compHistory).map(key => {
      //   compHistory[key]['won'] / (compHistory[key]['chosen'] / 100);
      // });

      // console.log(percentages);

      const choices = choicesArray;
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

// Factory function to create player `human`
function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, spock, or lizard:');
        choice = readline.question();
        if (choicesArray.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  // Merge both objects to include the `move` property and return the result:
  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}

function createHistory() {
  return {
    rock: { chosen: 0, won: 0 },
    paper: { chosen: 0, won: 0 },
    scissors: { chosen: 0, won: 0 },
    spock: { chosen: 0, won: 0 },
    lizard: { chosen: 0, won: 0 },
  };
}

function createMove() {
  return {
    // possible state: type of move (paper, rock, scissors)
  };
}

function createRule() {
  return {
    // possible state? not clear whether Rules need state
  };
}

// Since we don't yet know where to put `compare`, let's define
// it as an ordinary function.
let compare = function(move1, move2) {
  // not yet implemented
};