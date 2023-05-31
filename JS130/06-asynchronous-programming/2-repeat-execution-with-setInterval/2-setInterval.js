// Extend the code from the previous problem with a stopCounting
// function that stops the logger when called.

function startCounting() {
  let count = 0;

  let counterId = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);

  return counterId;
}

function stopCounting(id) {
  clearInterval(id);
}

// call startCounting and assign counterId to the returned id
let counterId = startCounting();

// call stopCouting after 7 seconds, passing it counterId
setTimeout(stopCounting, 7000, counterId);