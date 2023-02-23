// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

// [1, 2, 3], because each iteration he callback evaluates 'hi' to 'hi',
// which is a truthy value.