// Read the following code carefully. What do you think is logged on line 7?
// Try to answer the question before you run the code.

firstName = 'Henk';
lastName = 'Oostbroek';

console.log(global.firstName); // Henk
console.log(global.lastName); // Oostbroek

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
// why still NaN? these properties exist on global

// This will log 'NaN'. Anywhere outside a function, the keyword this is
// bound to the global object. If the keyword is used inside a function,
// then its value depends on how the function was invoked.

// Since window.firstName and window.lastName (if you're using a browser)
// are not defined, the operation being performed here is undefined +
// undefined which results in fullName having the value NaN.

// However, shouldn't this mean that JS would be able to log a name if we
// define these properties on global? (see above)
