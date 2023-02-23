function integerToString(num) {
  const numStrings = {
    0 : '0',
    1 : '1',
    2 : '2',
    3 : '3',
    4 : '4',
    5 : '5',
    6 : '6',
    7 : '7',
    8 : '8',
    9 : '9'
  }

  let arr = [];

  for (let idx = 10000; idx >= 10; idx /= 10) { // 10000 should be replaced with ?
    arr.push(Math.floor(num % idx / (idx / 10)));
  }

  // in the case of 4321, the for loop does this:
  // arr.push(Math.floor(num % 10000 / 1000));    adds 4 to array
  // arr.push(Math.floor(num % 1000 / 100));      adds 3 to array
  // arr.push(Math.floor(num % 100 / 10));        adds 2 to array
  // arr.push(num % 10);                          adds 1 to array

  // console.log(arr.map(num => numStrings[num]).join(''));
  return arr.map(num => numStrings[num]).join('');
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"