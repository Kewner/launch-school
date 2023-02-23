// What will this code snippet print?

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];

  // These are local variables, existing for as long as this function runs:
  // since they have the same name as the global variables, these local
  // variables shadow the global variables.
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // 'one is: one'
console.log(`two is: ${two}`); // 'two is: two'
console.log(`three is: ${three}`); // 'three is: three'

