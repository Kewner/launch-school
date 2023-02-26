// Change the following code so that creating a new Truck automatically
// invokes startEngine.

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  // Added constructor method:
  constructor(year) {
    super(year);
    this.startEngine();
  }

  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003); // Ready to go!
console.log(truck.year); // 2003

// If Vehicle were to have its own startEngine method, the startEngine method
// on Vehicle.prototype would override it when calling it on a Truck instance.
// If we would still like to access the functionality from a parent class, we
// can use super: super.startEngine().
