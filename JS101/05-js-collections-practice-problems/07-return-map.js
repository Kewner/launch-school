// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// [undefined, 'bear']

// The first iteration, 'ant'.length > 3 returns false, and nothing is
// explicitly returned, which means the callback returns 'undefined'.

// The second iteration, 'bear'.length > 3 returns true, so the callback
// returns 'bear'.