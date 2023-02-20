// What do we mean when we say that classes are first-class values?

// They can be assigned to variables, used as methods, passed to other
// functions, and returned from other functions.

// Consider the following class declaration:

class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

// What does the static modifier do? How would we call the method manufacturer?

// It creates a property, or in this case a method, directly on the constructor.
// Therefore, we can call this method like so: Television.manufacturer()
