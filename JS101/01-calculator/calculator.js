const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let LANGUAGE;

// FUNCTIONS

function messages(message, lang = 'english') {
  if (lang !== '1' && lang !== '2' && lang !== '3') {
    lang = '1';
  }

  return MESSAGES[lang][message];
}

function prompt(msgKey) {
  let message = messages(msgKey, LANGUAGE);
  console.log(`=> ${message}`);
}

function getNumber(msgKey) {
  let message = messages(msgKey, LANGUAGE);
  console.log(`=> ${message}`);
  let number = READLINE.question();

  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    number = getNumber('notValidNum');
  }

  return number;
}

function getOperation(msgKey) {
  let message = messages(msgKey, LANGUAGE);
  console.log(`=> ${message}`);
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    operation = getOperation('mustChoose');
  }

  return operation;
}

function calculate(num1, num2, op) {
  let output;
  switch (op) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }
  return output;
}

function newCalculation() {
  prompt('anotherCalculation');
  let anotherCalculation = READLINE.question().toLowerCase();

  while (anotherCalculation !== 'y' && anotherCalculation !== 'n') {
    prompt('yesOrNo');
    anotherCalculation = READLINE.question();
  }

  return anotherCalculation;
}

// PROGRAM CODE

console.clear();

prompt('chooseLanguage');
LANGUAGE = READLINE.question().toLowerCase();

prompt('welcome');
let calculateAgain = true;

while (calculateAgain) {
  let number1 = getNumber('askFirstNum');
  let number2 = getNumber('askSecondNum');
  let operation = getOperation('whatOperation');
  let result = calculate(number1, number2, operation);

  console.log(`The result is: ${result}`);

  let anotherCalculation = newCalculation();
  console.clear();

  if (anotherCalculation === 'n') calculateAgain = false;
}

prompt('goodbye');