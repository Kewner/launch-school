// The following code differs slightly from the above code. What is the return
// value of map in this case? Why?

[1, 2, 3].map(num => num * num);

// [1, 4, 9] - an arrow function uses explicit return, so no return statement
// is needed. Each iteration, the callback function returns num * num, and the
// 'map' method then replaces the current element with that return value.