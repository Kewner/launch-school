// Read the following code carefully. What do you think is logged on line 10.
// Try to answer the question before you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
  context: this,
};

console.log(person.fullName);

// Anywhere outside a function, `this` is bound to the global object;
// if it's used inside a function, then its value depends on how the function
// was invoked.

// firstName and lastName are not defined on the global object. so
// fullName refers to undefined + undefined, resulting in NaN.