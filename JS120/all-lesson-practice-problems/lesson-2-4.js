// The code below should output "Christopher Turk is a Surgeon". Without running
// the code, what will it output? If there is a difference between the actual
// and desired output, explain the difference.

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

// The function, which is copied from getDescription, is being called using a
// regular function call, so the execution context is the global object.
// Therefore, returnVal will be 'undefined undefind is a undefined.'.

// Modify the program from the previous problem so that logReturnVal
// accepts an additional context argument. If you then run the program
// with turk as the context argument, it should produce the desired output.

let turk2 = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal2(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal2(turk2.getDescription, turk2);

// Suppose that we want to extract getDescription from turk, but we always
// want it to execute with turk as its execution context. How would you
// modify your code to do that?

let turk3 = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal3(func) {
  let returnVal = func();
  console.log(returnVal);
}

const getTurkDescription = turk3.getDescription.bind(turk);
logReturnVal3(getTurkDescription);

// Consider the following code:

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// Will this code produce the following output? Why or why not?

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

// The forEach method in listGames calls its callback function each iteration
// with a regular function call. This means that the execution context is the
// global object, so it will log 'undefined: Arena' etc.


// Use let self = this; to ensure that TESgames.listGames uses TESGames as
// its context and logs the proper output.

const TESgames2 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

TESgames2.listGames();

// The forEach method provides an alternative way to supply the execution context
// for the callback function. Modify the program from the previous problem to
// use that technique to produce the proper output.

const TESgames3 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames3.listGames();

// Use an arrow function to achieve the same result.
const TESgames4 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames4.listGames();

// Consider the following code:
let foo = {
  a: 0,

  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

// What will the value of foo.a be after this code runs?

// Still 0. When calling increment with increment(), the execution context is
// global, so foo.a is never changed.

// Use one of the methods we learned in this lesson to invoke increment with
// an explicit context such that foo.a gets incremented with each invocation
// of incrementA.

let foo1 = {
  a: 0,
  incrementA: function() {
    let increment = () => {
      this.a += 1;
    }

    increment();
  }
};

foo1.incrementA();
foo1.incrementA();
foo1.incrementA();
console.log(foo1.a);
