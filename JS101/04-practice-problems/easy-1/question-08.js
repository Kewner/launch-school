// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// Several solutions:

flintstones.push('Dino');

flintstones = flintstones.concat('Dino');

flintstones[flintstones.length] = 'Dino';


console.log(flintstones);