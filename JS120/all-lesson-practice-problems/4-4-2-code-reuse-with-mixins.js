// In the last question, we used a mix-in named Speed that contained a
// goFast method. We included the mix-in in the Car class and then called
// the goFast method from an instance of the Car class. You may have
// noticed that the string printed when we call goFast includes the
// name of the type of vehicle we are using. How is that done?

// The value of this.constructor.name was used.

// When calling goFast on an instance of Car (car), this.constructor
// refers to car.constructor. However, car itself doesn't have this
// property; it inherits it from Car.prototype.
// Car.prototype.constructor points to Car, which has a property name,
// with the string value 'Car'.
