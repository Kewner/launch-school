// What is the callback's return value in the following code? Also, what is the
// return value of 'every' in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});


// callback's return value: 2, 4 and 6, because the expression 'num = num * 2'
// is an assignment expression, which evaluates as the expression on the 
// right-hand side of the assignment.

// return value of 'every': true, because all the return values from the
// callback are truthy.