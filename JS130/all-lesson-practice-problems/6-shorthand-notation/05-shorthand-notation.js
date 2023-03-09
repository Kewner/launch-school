// Rewrite the following code using classic JavaScript syntax:

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(...array);
console.log(result); // 30

// solution
function product1(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array1 = [2, 3, 5];
let result1 = product1(array1[0], array1[1], array1[2]);
console.log(result1); // 30
