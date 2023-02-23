const readline = require('readline-sync');
const messages = require('./twenty-one-msg.json');

const TARGET_SCORE = 21;
const DEALER_STAYS_AT = 17;
const ROUNDS_TO_WIN = 2;
const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function prompt(msg, arg1 = '', arg2 = '') {
  let message = messages[msg];
  console.log(`=> ${message}`, arg1, arg2);
}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to 'first'
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {
  let total = 0;

  // add points to total for all cards except aces
  cards.forEach(card => {
    if (Number(card[1])) {
      total += Number(card[1]);
    } else if (['J', 'Q', 'K'].includes(card[1])) {
      total += 10;
    }
  });

  let aces = cards.filter(card => card[1] === 'A');

  // add 1 point (the absolute minimum) for each ace
  aces.forEach(_ => {
    total += 1;
  });

  // add 10 points for each ace as long as total doesn't exceed target score
  aces.forEach(_ => {
    if (total + 10 <= TARGET_SCORE) total += 10;
  });

  return total;
}

function busted(total) {
  return total > TARGET_SCORE;
}

function detectResult(dealerTotal, playerTotal) {
  if (playerTotal > TARGET_SCORE) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > TARGET_SCORE) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('youBusted');
      break;
    case 'DEALER_BUSTED':
      prompt('dealerBusted');
      break;
    case 'PLAYER':
      prompt('youWin');
      break;
    case 'DEALER':
      prompt('dealerWins');
      break;
    case 'TIE':
      prompt("tie");
  }
}

function playAgain() {
  prompt('playAgain');
  let answer = readline.question().toLowerCase()[0];
  while (!['y', 'n'].includes(answer)) {
    prompt("invalidYesNo");
    answer = readline.question().toLowerCase()[0];
  }

  return answer === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

// use showAll argument to show all dealer's cards (when both player's stayed)
function displayCards(cards, player, total, showAll = false) {
  if (player === 'player') {
    prompt('showPlayerCards', total);
    cards.forEach(card => console.log(`     - ${fullCardName(card)}`));
    console.log();
  } else if (showAll) {
    prompt('showDealerCards', total);
    cards.forEach(card => console.log(`     - ${fullCardName(card)}`));
    console.log();
  } else {
    prompt('oneDealerCard', fullCardName(cards[0]));
  }
}

function fullCardName(card) {
  let fullNameArray = card.slice().reverse().map(value => {
    switch (value) {
      case 'C' : return 'Clubs';
      case 'D' : return 'Diamonds';
      case 'H' : return 'Hearts';
      case 'S' : return 'Spades';
      case 'J' : return 'Jack';
      case 'Q' : return 'Queen';
      case 'K' : return 'King';
      case 'A' : return 'Ace';
      default : return value;
    }
  });

  return fullNameArray.join(' of ');
}

function hitOrStay() {
  let playerTurn;

  while (true) {
    prompt('hitOrStay');
    playerTurn = readline.question()[0].toLowerCase();
    if (['h', 's'].includes(playerTurn)) break;
    prompt('invalidHitOrStay');
  }

  return playerTurn;
}

function updateScore(score, result, resetScore = false) {
  if (resetScore) {
    score.player = 0;
    score.dealer = 0;
  } else if (result === 'PLAYER' || result === 'DEALER_BUSTED') {
    score.player += 1;
  } else if (result === 'DEALER' || result === 'PLAYER_BUSTED') {
    score.dealer += 1;
  }
}

function displayScore(score) {
  prompt('displayScore', score.player, score.dealer);
  console.log();
}

function endOfRound(dealerTotal, playerTotal, score) {
  displayResults(dealerTotal, playerTotal);

  let result = detectResult(dealerTotal, playerTotal);
  updateScore(score, result);
  displayScore(score);
}

function someoneWon(score) {
  return score.player === ROUNDS_TO_WIN || score.dealer === ROUNDS_TO_WIN;
}

function endMatch(score) {
  if (!someoneWon(score)) return;

  let winner = Object.keys(score).filter(key => {
    return score[key] === ROUNDS_TO_WIN;
  }).join('');

  if (winner === 'dealer') {
    prompt('dealerWonMatch');
    prompt('scoreReset');
  } else if (winner === 'player') {
    prompt('playerWonMatch');
    prompt('scoreReset');
  }

  console.log();
  updateScore(score, false, 'resetScore');
}

// gameplay loop
while (true) {
  let score = { player : 0, dealer : 0 };

  while (true) {
    console.clear();
    prompt('welcome', ROUNDS_TO_WIN);
    console.log();

    let deck = initializeDeck();
    let playerCards = [];
    let dealerCards = [];

    playerCards.push(...popTwoFromDeck(deck));
    dealerCards.push(...popTwoFromDeck(deck));

    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);

    displayCards(dealerCards, 'dealer', dealerTotal);
    displayCards(playerCards, 'player', playerTotal);

    // player turn
    while (true) {
      let playerTurn = hitOrStay();

      if (playerTurn === 'h') {
        playerCards.push(deck.pop());
        playerTotal = total(playerCards);
        prompt('choseHit');
        displayCards(playerCards, 'player', playerTotal);
      }

      if (playerTurn === 's' || busted(playerTotal)) break;
    }

    if (busted(playerTotal)) {
      endOfRound(dealerTotal, playerTotal, score);
      endMatch(score);

      // playAgain() ? continue : break;

      if (playAgain()) {
        continue;
      } else {
        break;
      }
    } else {
      prompt('youStayed', playerTotal);
      console.log();
    }

    // dealer turn
    prompt('dealerTurn');

    while (dealerTotal < DEALER_STAYS_AT) {
      prompt('dealerHits');
      dealerCards.push(deck.pop());
      dealerTotal = total(dealerCards);
      displayCards(dealerCards, 'dealer', dealerTotal, 'showAll');
    }

    if (busted(dealerTotal)) {
      endOfRound(dealerTotal, playerTotal, score);
      endMatch(score);

      // playAgain() ? continue : break;

      if (playAgain()) {
        continue;
      } else {
        break;
      }
    } else {
      prompt('dealerStays');
    }

    // both player and dealer stays - compare cards
    console.log();
    displayCards(dealerCards, 'dealer', dealerTotal, 'showAll');
    displayCards(playerCards, 'player', playerTotal);
    endOfRound(dealerTotal, playerTotal, score);
    endMatch(score);

    if (!playAgain()) break;
  }

  break;
}

prompt('goodbye');