// exported
export function calculateAndLogSum(...numbers) {
  const sum = numbers.reduce((total, num) => total + num);
  logSum(sum);
}

// not exported
function logSum(sum) {
  console.log(`The sum of all numbers is: ${sum}`);
}
