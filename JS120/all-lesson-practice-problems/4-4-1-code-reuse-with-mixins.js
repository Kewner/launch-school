// If we have a Car class and a Truck class, how can you use the Speed
// object as a mix-in to make them goFast? How can you check whether
// your Car or Truck can now go fast?

// Use Object.assign:

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

const car = new Car();
const truck = new Truck();
car.goFast();   // I'm a Car and going super fast
truck.goFast(); // I'm a Truck and going super fast!
