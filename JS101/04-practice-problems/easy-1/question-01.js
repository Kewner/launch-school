// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// It will not; numbers[6] will be 5 and there will be empty items inbetween
// numbers[2] and numbers[6].

// Bonus:

let numbersTwo = [1, 2, 3];
numbersTwo[6] = 5;
numbersTwo[4];  // what will this line return?

// undefined

/* -------------------------------------------------

It doesn't raise an error. The JavaScript engine will treat array slots 3
through 5 as empty slots.

Bonus Answer:

numbers[4] will output undefined, but the slot is empty -- it doesn't have a
value, not even undefined, in spite of what the line returns. This distinction
is important: if you use map(), for instance, the new array will also have
empty slots in the corresponding positions. On the other hand, slots with a
value of undefined will be remapped based on the return value of the callback:

*/

numbers[6] = 5;
numbers[5] = undefined; // [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // [ 10, 10, 10, <2 empty items>, 10, 10 ]