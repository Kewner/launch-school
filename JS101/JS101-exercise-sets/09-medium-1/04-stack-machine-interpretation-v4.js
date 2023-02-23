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


// Further exploration
// ===================
// Refactor the minilang function to include some error handling. In particular,
// the function should detect and report empty stack conditions (trying to use a
// value from the stack when there are no values), and invalid tokens in the
// program. Ideally, the function should return an error message if an error
// occurs, or undefined if the program runs successfully.

function minilang(program) {
  const commands = ['PUSH', 'PRINT', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];
  const tokens = program.split(' ');
  const stack = [];
  let register = 0;

  for (let idx = 0; idx < tokens.length; idx++) {
    let token = tokens[idx];

    // check for errors in this block:
    if (!commands.includes(token) && !Number(token)) {
      return "Invalid command!";
    } else if (commands.slice(2).includes(token) && stack.length === 0) {
      return "Stack is empty, operation impossible!";
    }

    switch (token) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.round(register / stack.pop());
        break;
      case 'MOD':
        register = Math.round(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  }
}

minilang('7 MULT PRINT'); // "Stack is empty, operation impossible!"
minilang('5 PUSHE 3 MULT PRINT'); // "No such command!"

// examples:
// =========
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)