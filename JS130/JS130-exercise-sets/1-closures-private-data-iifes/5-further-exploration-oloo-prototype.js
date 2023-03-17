// The solution works but it only works for one set of private data.
// Modify the solution so that it can accommodate creating multiple
// objects with their own private data.

// The IIFE is declared once, at the time of declaring Account. So when
// creating a new object with Account as its prototype, the variables
// in the closure are not declared again, as new variables.

// To fix this, we need to declare new variables each time we create
// a new user object.

const Account = (function() {
  const users = [];

  function characters() {
    let chars = [];
    let idx = 48;

    while (idx <= 122) {
      chars.push(String.fromCharCode(idx));
      idx += 1;
      if (idx === 58) idx = 65;
      if (idx === 91) idx = 97;
    }

    return chars;
  }

  function anonymize() {
    // extract logic from reanonymize to this function!
    // this function should return a new displayName, while reanonymize
    // should validate the password and, if correct, call this function
  }

  return {
    init(email, password, firstName, lastName) {
      const userProperties = {
        email,
        password,
        firstName,
        lastName,
        displayName: anonymize(),
      };

      this.users.push(userProperties);
      this.reanonymize(userPassword);
      return this;
    },

    reanonymize(pass) {
      if (pass !== userPassword) return 'Invalid Password';
      const chars = characters();
      this.displayName = '';

      for (let idx = 0; idx < 16; idx += 1) {
        const idx = Math.floor((Math.random() * chars.length));
        this.displayName += chars[idx];
      }

      return true;
    },

    resetPassword(pass, newPass) {
      if (pass !== userPassword) return 'Invalid Password';
      userPassword = newPass;
      return true;
    },

    firstName(pass) {
      if (pass !== userPassword) return 'Invalid Password';
      return userFirstName;
    },

    lastName(pass) {
      if (pass !== userPassword) return 'Invalid Password';
      return userLastName;
    },

    email(pass) {
      if (pass !== userPassword) return 'Invalid Password';
      return userEmail;
    },
  };
})();

// Here's an extended version of the example run:
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

// new tests
let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'
