// Alyssa was asked to write an implementation of a rolling buffer. You can add
// and remove elements from a rolling buffer. However, once the buffer becomes
// full, any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer.
// In presenting the code to her team leader, she said "Take your pick. Do you
// prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method
// she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);

  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }

  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);

  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }

  return buffer;
}

// push() returns the added element
// concat() returns the new array

// When passing an array as newElement with push(), it will be a nested array
// in the buffer, and the maxBufferSize will be maintained.

// When passing an array as newElement with concat(), it won't be a nested array
// in the buffer, but the array's values will be added separately. However, 
// buffer.shift() only removes one item, so the maxBufferSize will be exceeded.

console.log(addToRollingBuffer1([1, 2, 3], 3, [4, 5]));
console.log(addToRollingBuffer2([1, 2, 3], 3, [4, 5]));

console.log(addToRollingBuffer1([1, 2, 3], 3, { 4: 'four', 5: 'five' }));
console.log(addToRollingBuffer2([1, 2, 3], 3, { 4: 'four', 5: 'five' }));

// LS Solution:
// Yes, there is a difference. While both methods have the same return value,
// the first implementation mutates the argument represented by buffer. That is,
// the caller will see that the array is different when the function returns. 
// The rollingBuffer2 implementation doesn't mutate the argument specified by
// the value of buffer.