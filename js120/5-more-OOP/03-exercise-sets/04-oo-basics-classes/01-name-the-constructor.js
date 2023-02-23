// Update the following code so that, instead of logging the values, each
// statement logs the name of the constructor to which it belongs.

console.log("Hello".constructor.name); // inherits property from String.prototype
console.log([1,2,3].constructor.name); // inherits property from Array.prototype
console.log({name: 'Srdjan'}.constructor.name); // inherits property from Object.prototype

// Expected output:
// String
// Array
// Object

// 1. We're trying to access the constructor property on 'Hello'.
// 2. JS wraps the primitive string value in a String instance object.
// 3. JS doesn't find the constructor property on this instance object itself.
// 4. JS looks up the chain for the property, on String.prototype.
// 5. It finds the constructor property: it points to the String constructor,
//    which has a name property.