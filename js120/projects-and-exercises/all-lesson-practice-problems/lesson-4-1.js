// Use a factory function to create pet objects. The factory should let us
// create and use pets like this:

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

function createPet(animal, name) {
  return {
    animal,
    name,

    sleep() {
      console.log('I am sleeping');
    },

    wake() {
      console.log('I am awake');
    },
  };
}

// Use the OLOO pattern to create an object prototype that we can use to
// create pet objects.

const PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  sleep() {
    console.log('I am sleeping');
  },

  wake() {
    console.log('I am awake');
  }
};

pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

// Consider the objects created by the programs in problems 1 and 2. How do
// objects for the same animal differ from each other?

// In problem 1, each animal object has its own copy of the sleep and wake
// methods; in problem 2, each animal objects inherits it from the same place,
// their prototype object PetPrototype.Thus, objects created by OLOO are more
// memory-efficient.

// Objects created with the factory function can have private state. Any
// state stored in the body of the factory function instead of in the returned
// object is private to the returned object. They can't be accessed or modified
// unless one of the object methods exposes the state. With OLOO, there is no
// way to define private state. All object state can be accessed and modified
// by outside code.
