// What will this code snippet print?

function messWithVars(one, two, three) {
  one = two;
  // one = ["two"]
  two = three;
  // two = ["three"]
  three = one;
  // three = ["two"]

  // However, these are local variables, existing for as long as this function
  // runs: since they have the same name as the global variables, these local
  // variables shadow the global variables.
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);  // ["two"] => wrong, it's 'one is: one'
console.log(`two is: ${two}`);  // ["three"] => wrong, it's 'two is: two'
console.log(`three is: ${three}`);  // ["two"] => wrong, 'three is: three'