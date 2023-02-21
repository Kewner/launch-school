// What will the following code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); // 'ByeBye' => Something.dupData
console.log(thing.dupData()); // 'HelloHello' => Something.prototype.dupData
