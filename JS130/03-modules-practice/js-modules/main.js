// note: imported variables cannot be reassigned (they are constants)

// to import, we need to use the names that we exported
import { setGreeting, greet } from "./greet.js";

greet('Frank');       // Hello Frank
setGreeting('Bye');
greet('Fred');        // Bye Fred
greet('Boy George!'); // HELLO BOY GEORGE!!!

import { calculateAndLogSum } from "./sum.js";

calculateAndLogSum(45, 3, 9685, 323, -4000);
// The sum of all numbers is: 6056

// not exported
const number = 56;
console.log(number); // 56
