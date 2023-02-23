function multisum(num) {
  let result = 0;

  for (let idx = 0; idx <= num; idx++) {
    if (idx % 3 === 0 || idx % 5 === 0) {
      result += idx;
    }
  }

  console.log(result);
}

function multisum(num) {
  let result = 0;

  num
}

// Using reduce:
// function multisum(num) {
//   let array = [];

//   for (let idx = 0; idx <= num; idx++) {
//     if (idx % 3 === 0 || idx % 5 === 0) {
//       array.push(idx);
//     }
//   }

//   return array.reduce((acc, cur) => acc + cur);
// }

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168