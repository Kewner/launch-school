// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to
// get 329175. Keep the first two digits fixed in place and rotate again to get
// 321759. Keep the first three digits fixed in place and rotate again to get
// 321597. Finally, keep the first four digits fixed in place and rotate the
// final two digits to get 321579. The resulting number is called the maximum
// rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

// PEDAC

// original       5843
// rotation 1: 5  8435
// rotation 2: 4  8354
// rotation 3: 5  8345

// original       735291
// rotation 1: 7  352917
// rotation 2: 5  329175
// rotation 3: 9  321759
// rotation 4: 7  321597
// rotation 5: 9  321579

// so: max number of rotations is (number of digits) - 1

// understanding the problem
// =========================
// input: a number
// output: input number maximally rotated
// rules:
//  - we must return the maximum rotation of the given integer
//  - to get the maximum integer:
//        1. rotate it by one digit to the left
//        2. then, keep the first number fixed and rotate the remaining digits
//        3. then, keep the first 2 numbers fixed and rotate remaining digits
//        4. continue until (number of digits) - 1 have been done
// questions:
//  - is the expected input always an integer?
//  - what to return if there's no argument?

// data structures
// ===============
// we will turn the number into a string, making it easier to manipulate the
// order of the digits

// algorithm
// =========
// 1. convert number to string, assign to 'numString'
// 2. rotate number, starting at first digit
// 3. keeping first digit fixed in place, rotate starting at second digit
// 4. keeping first 2 digits fixed in place, rotate starting at third digit
// 5. continue until (number of digits) - 1 rotations have been done
//      - this calls for a loop
// 6. return the new number

// algorithm step 5
// ================
// 1. declare variable 'count' with length of String(number)
// 2. loop starting at 'count', continuing as long as 'count' is greater than 1
//        - call rotateRightmostDigits with 'number' and 'count'
//        - assign result to 'number'
//        - decrement 'count' by 1
//    end of loop
// 3. return number

function maxRotation(number) {
  let count = String(number).length;

  while (count > 1) {
    number = rotateRightmostDigits(number, count);
    count--;
  }

  return number;
}

function rotateRightmostDigits(num, count) {
  let numString = String(num);
  let rotatedString = '';
  let lastChar = '';

  for (let idx = 0; idx < numString.length; idx++) {
    if (idx === numString.length - count) {
      lastChar = numString[idx];
    } else {
      rotatedString += numString[idx];
    }
  }

  return Number(rotatedString + lastChar);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

// Beautiful solution by Keagan:
function maxRotation(num) {
  let arr = String(num).split('');
  arr.forEach((_, i) => arr.push(arr.splice(i, 1)))
  return Number(arr.join(''));
}