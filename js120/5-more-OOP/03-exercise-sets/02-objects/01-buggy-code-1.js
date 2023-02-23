// Fix the following code, which results in an error:

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',

    greet: function(timeOfDay) {
      // let morning = this.morning;
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); // expected output: Good Morning Victor

// createGreeter returns an object that has:
// - a morning property
// - a greet method

// The greet method tries to acces a variable `morning` that has not been
// declared. Since we called greet on helloVictor, helloVictor is the
// execution context. Therefore, we could fix this by using the `this`
// keyword to access this.morning instead of just morning.

// Another solution would be to declare a `morning` variable inside the
// greet method.