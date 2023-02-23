const RLSYNC = require('readline-sync');
const MESSAGES = require('./loan-calculator-messages.json');

function prompt(msg, payment, term) {
  if (payment && term) {
    console.log(`=> ${MESSAGES[msg]}`, payment, term);
  } else if (MESSAGES[msg]) {
    console.log(`=> ${MESSAGES[msg]}`);
  } else {
    console.log(`=> ${msg}`);
  }
}

function validInput(inputType, input) {
  switch (inputType) {
    case 'getAmount':
      if (input.trim() === '') input = NaN;
      input = Number(input);
      return !(isNaN(input) || input < 0 || input > 10000);
    case 'getApr':
      if (input.trim() === '') input = NaN;
      input = Number(input);
      return !(isNaN(input) || input < 0 || input > 100);
    case 'getTerm':
      if (input.trim() === '') input = NaN;
      input = Number(input);
      return !(isNaN(input) || !Number.isInteger(input) ||
               input < 1 || input > 100);
    case 'anotherCalculation':
      return (input.toLowerCase() === 'y' || input.toLowerCase() === 'n');
  }

  return (typeof input === Number);
}

function retrieveInput(inputType) {
  prompt(inputType);
  let input = RLSYNC.question();

  while (!validInput(inputType, input)) {
    prompt(`invalid${inputType}`);
    input = RLSYNC.question();
  }

  return input;
}

function calculateMonthly(amount, rate, term) {
  let payment = amount * (rate / (1 - Math.pow((1 + rate), (-term))));
  return Number(payment).toFixed(2);
}

function displayMonthlyPayment(amount, rate, payment, term) {
  if (amount === 0) {
    prompt('noLoan');
  } else if (rate === 0) {
    payment = Number((amount / term).toFixed(2));
    prompt('monthlyPayment', payment, term);
  } else {
    prompt('monthlyPayment', payment, term);
  }
}

while (true) {
  console.clear();
  prompt('welcome');

  let loanAmount = Number(retrieveInput('getAmount'));
  let monthlyRate = Number(retrieveInput('getApr') / 100 / 12);
  let monthsTerm = Number(retrieveInput('getTerm'));
  let monthlyPayment =
                Number(calculateMonthly(loanAmount, monthlyRate, monthsTerm));

  displayMonthlyPayment(loanAmount, monthlyRate, monthlyPayment, monthsTerm);

  let calculateAgain = retrieveInput('anotherCalculation');

  if (calculateAgain === 'n') break;
}

prompt('bye');