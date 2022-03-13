/*
Suppose the shelter has a number of not-yet-adopted pets, and wants to manage
them through this same system. Thus, you should be able to add the following
output to the example output shown above:

The Animal Shelter has the following unadopted pets:
a dog named Asta
a dog named Laddie
a cat named Fluffy
a cat named Kat
a cat named Ben
a parakeet named Chatterbox
a parakeet named Bluebell
   ...

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
The Animal shelter has 7 unadopted pets.

Can you make these updates to your solution? Did you need to change your class
system at all? Were you able to make all of your changes without modifying the
existing interface?
*/

class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  petInfo(pet) {
    return `a ${this.animal} named ${this.name}`;
  }  
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  printPets() {
    this.pets.forEach(pet => console.log(pet.petInfo()));
  }

  printNumberOfPets() {
    console.log(`${this.name} has ${this.pets.length} adopted pets.`);
  }
}

class Shelter {
  constructor() {
    this.owners = [];
    this.animals = [];
  }

  receive(pet) {
    this.animals.push(pet);
  }

  printNumberOfAnimals() {
    console.log(`The animal shelter has ${this.animals.length}` +
                ` unadopted animals.`)
  }

  adopt(owner, petName) {
    let pet = this.animals.filter(animal => animal.name === petName)[0];
    let petIdx = this.animals.indexOf(pet);
    
    if (petIdx > -1) {
      owner.addPet(this.animals[petIdx]);
      this.removeAnimalFromShelter(petIdx);
      this.addOwnerToDatabasa(owner);
    } else {
      console.log(`I'm sorry, we don't have an animal called ${petName}.`);
    }
  }

  removeAnimalFromShelter(petIdx) {
    this.animals.splice(petIdx, 1);
  }

  addOwnerToDatabasa(owner) {
    if (!this.owners.includes(owner)) this.owners.push(owner);
  }

  printAdoptions() {
    this.owners.forEach((owner) => {
      console.log(`${owner.name} has adopted the following pets:`);
      owner.printPets();
      console.log('');
    });
  }
}

let shelter = new Shelter();

let asta = new Pet('dog', 'Asta');
let laddie = new Pet('dog', 'Laddie');
let fluffy = new Pet('cat', 'Fluffy');
let kat = new Pet('cat', 'Kat');
let ben = new Pet('cat', 'Ben');
let chatterbox = new Pet('parakeet', 'Chatterbox');
let bluebell = new Pet('parakeet', 'Bluebell');

// Bring new animals to shelter
shelter.receive(asta);
shelter.receive(laddie);
shelter.receive(fluffy);
shelter.receive(kat);
shelter.receive(ben);
shelter.receive(chatterbox);
shelter.receive(bluebell);

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

shelter.adopt(phanson, 'Asta');
shelter.adopt(phanson, 'Laddie');
shelter.adopt(phanson, 'Max'); // I'm sorry, we don't have an animal called Max.
shelter.adopt(bholmes, 'Fluffy');
shelter.adopt(bholmes, 'Kat');
shelter.adopt(bholmes, 'Asta'); // I'm sorry, we ... => Asta already taken

shelter.printAdoptions();
// P Hanson has adopted the following pets:
// a dog named Asta
// a dog named Laddie

// B Holmes has adopted the following pets:
// a cat named Fluffy
// a cat named Kat

shelter.printNumberOfAnimals(); // The animal shelter has 3 unadopted animals
phanson.printNumberOfPets(); // P Hanson has 2 adopted pets.