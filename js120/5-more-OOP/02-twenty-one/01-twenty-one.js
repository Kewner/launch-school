const readline = require('readline-sync');

class Card {
  constructor(rank, suit, points) {
    this.rank = rank;
    this.suit = suit;
    this.points = points;
    this.cardStr = `${rank} of ${suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    let ranks = ['Jack', 'Queen', 'King', 'Ace'];

    suits.forEach(suit => {
      for (let idx = 2; idx <= 10; idx++) {
        this.cards.push(new Card(idx, suit, idx));
      }
    });

    suits.forEach(suit => {
      ranks.forEach(rank => {
        if (rank !== 'Ace') {
          this.cards.push(new Card(rank, suit, 10));
        } else {
          this.cards.push(new Card(rank, suit, 11));
        }
      });
    });
  }

  deal(cardAmount, participant1, participant2) {
    // `this` is bound to the deck object; `this.cards` is the cards array

    // loop through amount of cards to be dealt, and through all card-receivers
    for (let amountIdx = 0; amountIdx < cardAmount; amountIdx++) {
      for (let idx = 1; idx < arguments.length; idx++) {
        const participant = arguments[idx];
        const randomIdx = getRandomIdx(this.cards);

        dealCard(this.cards, randomIdx, participant);
        removeCardFromDeck(this.cards, randomIdx);
      }
    }

    function getRandomIdx(deck) {
      return Math.floor(Math.random() * deck.length);
    }

    function dealCard(deck, idx, participant) {
      participant.hand.push(deck[idx]);
    }

    function removeCardFromDeck(deck, idx) {
      deck.splice(idx, 1);
    }
  }
}

class Participant {
  constructor() {
    this.hand = [];
  }

  pointsInHand() {
    let totalPoints = 0;

    const allNonAces = this.hand.filter(card => card.rank !== 'Ace');
    const allAces = this.hand.filter(card => card.rank === 'Ace');

    totalPoints += allNonAces.reduce((acc, cur) => acc + cur.points, 0);

    allAces.forEach(ace => {
      if (totalPoints + ace.points <= 21) {
        totalPoints += ace.points;
      } else {
        totalPoints += 1;
      }
    });

    return totalPoints;
  }

  isBusted() {
    return this.pointsInHand() > 21;
  }
}

class Player extends Participant {
  constructor() {
    super();
    this.str = 'You';
    this.dollars = 5;
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    this.str = 'Dealer';
  }

  hideCard() {
    this.hand[0].cardStr = '*Hidden card*';
  }

  cardIsRevealed() {
    return this.hand[0].cardStr !== '*Hidden card*';
  }

  revealCard() {
    const rank = this.hand[0].rank;
    const suit = this.hand[0].suit;
    this.hand[0].cardStr = `${rank} of ${suit}`;
  }
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.displayWelcomeMessage();

    while (true) {
      this.dealCards();
      this.showCards();
      this.playerTurn();
      this.dealerTurn();
      this.displayResult();
      this.payWinner();
      this.checkBalance();
      this.resetHand();
      if (this.isGameOver()) break;
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }

  dealCards() {
    this.deck.deal(2, this.player, this.dealer);
    this.dealer.hideCard();
  }

  showCards() {
    console.clear();
    const dealerPoints = this.dealer.pointsInHand();
    const playerPoints = this.player.pointsInHand();

    let playerMsg = `Your cards, with a total of ${playerPoints} points:`;
    let dealerMsg;

    if (this.dealer.cardIsRevealed()) {
      dealerMsg = `Dealer's cards, with a total of ${dealerPoints} points:`;
    } else {
      dealerMsg = 'Dealer\'s cards:';
    }

    console.log(dealerMsg);
    displayCards(this.dealer.hand);

    console.log(playerMsg);
    displayCards(this.player.hand);

    function displayCards(hand) {
      hand.forEach(card => console.log(`- ${card.cardStr}`));
      console.log('');
    }
  }

  playerTurn() {
    let hitOrStay = askHitOrStay();

    while (hitOrStay === 'hit') {
      this.deck.deal(1, this.player);
      this.showCards();

      const dealtCard = this.player.hand[this.player.hand.length - 1].cardStr;
      readline.question(`You took a card: ${dealtCard}`);

      if (this.player.isBusted()) return;
      hitOrStay = askHitOrStay();
    }

    readline.question('You chose to stay.');

    function askHitOrStay() {
      let answer = readline.question('Hit or stay? ').toLowerCase();

      while (!['hit', 'stay'].includes(answer)) {
        answer = readline.question("Please enter hit or stay: ");
      }

      return answer;
    }
  }

  dealerTurn() {
    if (this.player.isBusted()) return;

    this.dealer.revealCard();
    this.showCards();
    readline.question('The dealer revealed his hidden card.');

    while (this.dealer.pointsInHand() < 17) {
      this.deck.deal(1, this.dealer);
      this.showCards();

      const dealtCard = this.dealer.hand[this.dealer.hand.length - 1].cardStr;
      readline.question(`The dealer took a card: ${dealtCard}`);

      if (this.dealer.isBusted()) {
        return;
      }
    }

    readline.question('The dealer chose to stay.');
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Twenty-One!\n\n" +
                "You have $5, of which you will bet $1 on each game.\n" +
                "After winning your way to $10, you'll have won the game;\n" +
                "keep losing until your broke, and you'll have lost the game.\n");
    readline.question('Good luck! (press Enter to start)');
  }

  displayGoodbyeMessage() {
    console.log('');
    console.log('Thank you for playing Twenty-One. Goodbye!');
  }

  decideWinner() {
    let winner;

    switch (true) {
      case (this.player.isBusted()):
        winner = this.dealer;
        break;
      case (this.dealer.isBusted()):
        winner = this.player;
        break;
      case (this.dealer.pointsInHand() > this.player.pointsInHand()):
        winner = this.dealer;
        break;
      case (this.player.pointsInHand() > this.dealer.pointsInHand()):
        winner = this.player;
        break;
      default:
        winner = null; // it's a tie
    }

    return winner;
  }

  decideLoser(winner) {
    let loser;

    if (winner) {
      loser = [this.player, this.dealer].filter(obj => obj !== winner)[0];
    } else {
      loser = null;
    }

    return loser;
  }

  displayResult() {
    console.log('');

    const winner = this.decideWinner();
    const loser = this.decideLoser(winner);

    if (!loser) {
      console.log(`It's a tie! Both players have ` +
                  `${this.player.pointsInHand()} points.`);
    } else if (loser.isBusted()) {
      console.log(`${loser.str} busted with ${loser.pointsInHand()} points! ` +
                  `${winner.str} won with ${winner.pointsInHand()} points.`);
    } else {
      console.log(`${winner.str} won with ${winner.pointsInHand()} points! ` +
                  `${loser.str} lost with ${loser.pointsInHand()} points.`);
    }
  }

  payWinner() {
    if (this.decideWinner() === this.player) {
      this.player.dollars += 1;
      console.log(`You've made $1! You now have $${this.player.dollars}.`);
    } else if (this.decideWinner() === this.dealer) {
      this.player.dollars -= 1;
      console.log(`Losing cost you $1! You now have $${this.player.dollars}.`);
    }
  }

  resetHand() {
    this.dealer.hand = [];
    this.player.hand = [];
  }

  checkBalance() {
    if (this.player.dollars === 0) {
      console.log("You're broke! Game over.");
    } else if (this.player.dollars === 10) {
      console.log("You're so rich that you've won the game!");
    }
  }

  isGameOver() {
    return this.player.dollars === 0 || this.player.dollars === 10;
  }

  playAgain() {
    console.log('');
    let answer = readline.question('Would you like to play again? ');
    answer = answer.toLowerCase();

    while (!['yes', 'no', 'y', 'n'].includes(answer)) {
      answer = readline.question('Please enter yes or no: ').toLowerCase();
    }

    return answer === 'yes' || answer === 'y';
  }
}

let game = new TwentyOneGame();
game.start();