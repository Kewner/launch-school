// stack: a list of values that grows and shrinks dynamically
// may be implemented as an Array that uses two Array methods: push() and pop()

// a stack-and-register programming language:
// ==========================================
// - uses a stack of values
// - each operation operates on a register, which is the current value
// - the register is not part of the stack
// - an operation that requires 2 values pops the most recently pushed item
//   from the stack, operates on that value and the register value, and stores
//   the result back in the register

// example: MULT
// =============
// starting stack: [5, 3, 7]
// register value: 4
// MULT operation transforms stack to [5, 3]
// MULT multiplies 7 with 4 and adds 28 back into the register
// stack: [5, 3]
// register value: 28
// if we do another MULT, the stack becomes [5], the register value 84

// Write a function that implements a miniature stack-and-register-based
// programming language that has the following commands (also called operations
// or tokens):

// - n : Place a value, n, in the register. Do not modify the stack.
// - PUSH : Push the register value onto the stack. Leave the value in the register.
// - ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// - DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// - MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// - POP : Remove the topmost item from the stack and place it in the register.
// - PRINT : Print the register value.

// All operations are integer operations (which is only important with DIV and MOD).

// Programs will be supplied to your language function via a string argument.
// Your function may assume that all arguments are valid programs — i.e., they
// will not do anything like trying to pop a non-existent value from the stack,
// and they won't contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

const stack = [];
let register = 0;

function minilang(str) {
  const tokens = str.split(' ');

  for (let idx = 0; idx < tokens.length; idx++) {
    let currentVal = tokens[idx];

    if (Number(currentVal)) {
      register = Number(currentVal);
    } else {
      switch (currentVal) {
        case 'PUSH':
          push(stack, register);
          break;
        case 'ADD':
          add(stack, register);
          break;
        case 'SUB':
          sub(stack, register);
          break;
        case 'MULT':
          mult(stack, register);
          break;
        case 'DIV':
          div(stack, register);
          break;
        case 'MOD':
          mod(stack, register);
          break;
        case 'POP':
          pop(stack, register);
          break;
        case 'PRINT':
          print(stack, register);
          break;
      }
    }
    // console.log(register);
  }
}

function push(stack, register) {
  stack.push(register);
  console.log(stack, register);
}

function add(stack, register) {
  let popped = stack.pop();
  register += popped;
  console.log(stack, register);
}

minilang('7 PUSH');
minilang('6 ADD');
// examples:
// =========
// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)