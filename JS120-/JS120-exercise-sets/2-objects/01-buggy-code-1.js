function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          // changed ${morning} to ${this.mornning} etc.
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

// The code is expected to output the following when run:

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); // Good Morning Victor

// However, it instead results in an error. What is the problem with
//  the code? Why isn't it producing the expected results?

// In the switch body, JS won't look for the given variables on the
// helloVictor object; instead, it looks for global variables.
// To fix this, we should use this.name instead.
