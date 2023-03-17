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

  function anonymize() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let newDisplayName = '';

    for (let idx = 0; idx < 16; idx += 1) {
      const idx = Math.floor((Math.random() * chars.length));
      newDisplayName += chars[idx];
    }

    return newDisplayName;
  }

  function findUser(name) {
    return users.find(user => user.displayName === name);
  }

  return {
    init(email, password, firstName, lastName) {
      this.displayName = anonymize();
      const newUser = {email, password, firstName, lastName, displayName: this.displayName};
      users.push(newUser);
      return this;
    },

    reanonymize(pass) {
      const targetUser = findUser(this.displayName);
      if (pass !== targetUser.password) return 'Invalid Password';

      const newDisplayName = anonymize();
      targetUser.displayName = newDisplayName;
      this.displayName = newDisplayName;

      return true;
    },

    resetPassword(pass, newPass) {
      const targetUser = findUser(this.displayName);
      if (pass !== targetUser.password) return 'Invalid Password';
      targetUser.password = newPass;
      return true;
    },

    firstName(pass) {
      const targetUser = findUser(this.displayName);
      if (pass !== targetUser.password) return 'Invalid Password';
      return targetUser.firstName;
    },

    lastName(pass) {
      const targetUser = findUser(this.displayName);
      if (pass !== targetUser.password) return 'Invalid Password';
      return targetUser.lastName;
    },

    email(pass) {
      const targetUser = findUser(this.displayName);
      if (pass !== targetUser.password) return 'Invalid Password';
      return targetUser.email;
    },
  };
})();

// creating the first user:
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.resetPassword('123456', 'abc')) // true
console.log(fooBar.reanonymize('abc'));            // true

// creating a second user with separate data:
let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux.firstName('123456')); // baz
console.log(fooBar.firstName('abc'));    // foo
console.log(fooBar.email('abc'));        // foo@bar.com

// all data except displayName is private:
console.log(bazQux);          // { displayName: '8VSLvRnuDDzpWPMu' }
console.log(fooBar.password); // undefined
