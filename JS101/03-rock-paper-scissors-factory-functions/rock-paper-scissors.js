const readline = require('readline-sync');
const MESSAGES = require('./rock-paper-scissors-messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const WINNING_SCORE = 5;
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:   ['paper', 'spock'],
  spock:    ['rock', 'scissors'],
};

let roundNumber = 1;
let score = { player: 0, computer: 0 };

// Displays messages from json, takes arguments in case of template literals
function prompt(msgKey, optionalArg1, optionalArg2 = '') {
  // if (optionalArg1 || optionalArg2) {
  if (optionalArg1 >= 0 || optionalArg1) {
    console.log(`=> ${MESSAGES[msgKey]}`, optionalArg1, optionalArg2);
  } else {
    console.log(`=> ${MESSAGES[msgKey]}`);
  }
}

function retrievePlayerChoice() {
  prompt('chooseOne', roundNumber, VALID_CHOICES.join(', '));
  let choice = expandChoice(readline.question());

  while (!VALID_CHOICES.includes(choice)) {
    prompt('noValidChoice');
    choice = expandChoice(readline.question());
  }
  return choice;
}

function retrieveComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

// Expands abbreviated user input
function expandChoice(choice) {
  choice = choice.toLowerCase();
  if (choice === 'r') {
    choice = 'rock';
  } else if (choice === 'p') {
    choice = 'paper';
  } else if (choice === 'sc') {
    choice = 'scissors';
  } else if (choice === 'sp') {
    choice = 'spock';
  } else if (choice === 'l') {
    choice = 'lizard';
  }
  return choice;
}

function displayChoices(choice, computerChoice) {
  prompt('youChose', choice, computerChoice);
}

function isWon(choice, otherChoice) {
  return WINNING_COMBOS[choice].includes(otherChoice);
}

function decideRoundWinner(choice, computerChoice) {
  if (isWon(choice, computerChoice)) {
    return 'playerRound';
  } else if (isWon(computerChoice, choice)) {
    return 'computerRound';
  } else {
    return 'nobody';
  }
}

function updateScore(score, roundWinner) {
  switch (roundWinner) {
    case 'playerRound':
      score.player += 1;
      break;
    case 'computerRound':
      score.computer += 1;
      break;
  }
}

function displayScore() {
  prompt('scoreMsg', score['player'], score['computer']);
}

function decideGameWinner(score) {
  if (score.player === WINNING_SCORE) {
    return 'playerGame';
  } else if (score.computer === WINNING_SCORE) {
    return 'computerGame';
  }
  return '';
}

function displayRoundWinner(winner) {
  switch (winner) {
    case 'playerRound':
      prompt('youWonRound');
      break;
    case 'computerRound':
      prompt('youLostround');
      break;
    case 'nobody':
      prompt('tie');
      break;
  }
}

function displayGameWinner(winner) {
  switch (winner) {
    case 'playerGame':
      prompt('youWonGame');
      break;
    case 'computerGame':
      prompt('youLostGame');
      break;
    case 'nobody':
      prompt('tie');
      break;
  }
}

function isGameOver() {
  return (score.player === WINNING_SCORE || score.computer === WINNING_SCORE);
}

function resetGame() {
  score.player = 0;
  score.computer = 0;
  roundNumber = 1;
}

function playAgain() {
  prompt('playAgain');
  let answer = readline.question().toLowerCase();

  while (answer !== 'n' && answer !== 'y' &&
         answer !== 'no' && answer !== 'yes'  ) {
    prompt('pleaseYesOrNo');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

prompt('welcome');
prompt('rules');

while (true) {
  let playerChoice = retrievePlayerChoice();
  let computerChoice = retrieveComputerChoice();

  displayChoices(playerChoice, computerChoice);

  let roundWinner = decideRoundWinner(playerChoice, computerChoice);

  updateScore(score, roundWinner);
  displayRoundWinner(roundWinner);
  displayScore();

  roundNumber += 1;

  let gameWinner = decideGameWinner(score);

  if (gameWinner) {
    displayGameWinner(gameWinner);
  }

  if (isGameOver()) {
    resetGame();

    let answer = playAgain();

    if (answer !== 'y' && answer !== 'yes') {
      break;
    } else {
      console.clear();
    }
  }

}

prompt('goodbye');