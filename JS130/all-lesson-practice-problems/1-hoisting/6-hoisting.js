// In a process called hoisting, JavaScript appears to reorganize code in
// such a way that certain declarations and definitions appear to be moved
// around. While this organization doesn't really occur, it's a useful
// mental model for understanding scope in a JavaScript program.

// Rewrite the following code in a way that shows what the code would look
// like if hoisting were a real process that actually reorganized your
// code. The intent here is to clearly show how and when the various
// identifiers in this program are defined with respect to the code that
// actually gets executed.

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image = image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

// The hoisted code would look like this:

function Pet(name, image) {
  this.name = name;
  this.image = image;
}

let Image; // (actually in TDZ at this point, not undefined!)
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
