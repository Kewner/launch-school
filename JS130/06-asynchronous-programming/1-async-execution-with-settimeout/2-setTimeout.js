// In our solution for the previous problem, what do you think would
// happen if you replaced let delay with var delay? Go ahead and
// try it and see if you can explain the difference in behavior.

function delayLog() {
  console.log(num);

  for (var num = 1; num <= 10; num += 1) {
    setTimeout(() => console.log(num), num * 1000);
  }
}

delayLog();

/* 

*/