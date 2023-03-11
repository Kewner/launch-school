function logSum(sum) {
  console.log(`The sum of all numbers is: ${sum}`);
}

function calculateAndLogSum(...numbers) {
  const sum = numbers.reduce((total, number) => total + number);
  logSum(sum);
}

// calculateAndLogSum(1, 6, 3, 8, 43);
module.exports = calculateAndLogSum;
