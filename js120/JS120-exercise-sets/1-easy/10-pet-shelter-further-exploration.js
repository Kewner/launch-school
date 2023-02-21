// Further Exploration
// ===================
// Suppose the shelter has a number of not-yet-adopted pets, and wants to
// manage them through this same system. Thus, you should be able to add
// the following output to the example output shown above:

// The Animal Shelter has the following unadopted pets:
// a dog named Asta
// a dog named Laddie
// a cat named Fluffy
// a cat named Kat
// a cat named Ben
// a parakeet named Chatterbox
// a parakeet named Bluebell
//    ...

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.
// The Animal shelter has 7 unadopted pets.

// Can you make these updates to your solution? Did you need to change
// your class system at all? Were you able to make all of your changes
// without modifying the existing interface?

class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  info() {
    return `a ${this.animal} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }

  addPet(pet) {
    this.pets.push(pet);
  }
}

class Shelter {
  constructor() {
    // LS solution used object instead of array
    this.allOwners = [];
    this.unadopted = [];
  }

  addPetToShelter(pet) {
    this.unadopted.push(pet);
  }

  adopt(owner, petName) {
    const pet = this.unadopted.find(animal => animal.name === petName);
    owner.addPet(pet);
    this.addOwner(owner);
    this.removeFromShelter(pet);
  }

  addOwner(owner) {
    if (!this.allOwners.includes(owner)) this.allOwners.push(owner);
  }

  removeFromShelter(pet) {
    this.unadopted.splice(this.unadopted.indexOf(pet), 1);
  }

  printUnadopted() {
    if (this.unadopted.length === 0) {
      console.log('The Animal Shelter has no unadopted pets.');
      console.log('');
      return;
    }

    console.log(`The Animal Shelter has ${this.unadopted.length} unadopted pets:`);
    this.printAnimals(this.unadopted);
    console.log('');
  }

  printAdoptions() {
    this.allOwners.forEach((owner) => {
      console.log(`${owner.name} has adopted ${owner.pets.length} pets:`);
      this.printAnimals(owner.pets);
      console.log('');
    });
  }

  printAnimals(animals) {
    animals.forEach(pet => console.log(pet.info()));
  }
}

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');
let shelter = new Shelter();

let asta        = new Pet('dog', 'Asta');
let laddie      = new Pet('dog', 'Laddie');
let fluffy      = new Pet('cat', 'Fluffy');
let kat         = new Pet('cat', 'Kat');
let ben         = new Pet('cat', 'Ben');
let chatterbox  = new Pet('parakeet', 'Chatterbox');
let bluebell    = new Pet('parakeet', 'Bluebell');

shelter.addPetToShelter(asta);
shelter.addPetToShelter(laddie);
shelter.addPetToShelter(fluffy);
shelter.addPetToShelter(kat);
shelter.addPetToShelter(ben);
shelter.addPetToShelter(chatterbox);
shelter.addPetToShelter(bluebell);

shelter.printUnadopted(); // 7 unadopted pets

shelter.adopt(phanson, 'Asta');
shelter.adopt(phanson, 'Laddie');
shelter.adopt(phanson, 'Fluffy');
shelter.adopt(bholmes, 'Kat');

shelter.printUnadopted(); // 3 unadopted pets

shelter.adopt(bholmes, 'Ben');
shelter.adopt(bholmes, 'Chatterbox');
shelter.adopt(bholmes, 'Bluebell');

shelter.printUnadopted(); // 0 unadopted pets
shelter.printAdoptions();

// The Animal Shelter has 7 unadopted pets:
// a dog named Asta
// a dog named Laddie
// a cat named Fluffy
// a cat named Kat
// a cat named Ben
// a parakeet named Chatterbox
// a parakeet named Bluebell

// The Animal Shelter has 3 unadopted pets:
// a cat named Ben
// a parakeet named Chatterbox
// a parakeet named Bluebell

// The Animal Shelter has no unadopted pets.

// P Hanson has adopted 3 pets:
// a dog named Asta
// a dog named Laddie
// a cat named Fluffy

// B Holmes has adopted 4 pets:
// a cat named Kat
// a cat named Ben
// a parakeet named Chatterbox
// a parakeet named Bluebell
