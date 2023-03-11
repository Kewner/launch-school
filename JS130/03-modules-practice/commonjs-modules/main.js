// for importing modules installed by NPM, a path is usually not required
const rlSync = require('readline-sync');
rlSync.question('Would you like some coffee? y/n: ');

// for other modules, a path is required
const logIt = require('./logit');
logIt('You rock!'); // You rock!

const getSum = require('./sum');
getSum(5, 34, 78, 2, -5, 300); // 414

// importing multiple items at once
const { greet, setGreeting } = require('./greet');

greet('Frank'); // Hello Frank
setGreeting('Bye');
greet('Fred'); // Bye Fred
