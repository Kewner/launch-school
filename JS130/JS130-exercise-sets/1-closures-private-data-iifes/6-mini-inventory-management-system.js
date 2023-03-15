// Assignment: 6-mini-inventory-management-system-assignment.md

// item:
// - skuCode
// - name
// - category
// - quantity

// ItemManager:
// - items
// * create
// * update
// * delete
// * inStock
// * itemsInCategory

// ReportManager:
// * init
// * createReporter
// * reportInStock

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    if (!this.validateName(name) ||
        !this.validateCategory(category) ||
        quantity === undefined ) {
      return { notValid: true };
    }

    const skuCode = this.getSkuCode(name, category);
    this.items.push({ skuCode, name, category, quantity });
  },

  getSkuCode(name, category) {
    const partOne = name.split(' ').join('').slice(0, 3);
    const partTwo = category.slice(0, 2);
    return `${partOne}${partTwo}`.toUpperCase();
  },

  findBySkuCode(code) {
    return this.items.find(item => item.skuCode === code);
  },

  update(code, obj) {
    const target = this.findBySkuCode(code);
    Object.assign(target, obj);
  },

  validateName(name) {
    return name.split(' ').join('').length >= 5;
  },

  validateCategory(category) {
    if (category.split(' ').length > 1) return false;
    return category.split(' ').join('').length >= 5;
  },

  delete(code) {
    const target = this.findBySkuCode(code);
    this.items.splice(this.items.indexOf(target), 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
};

const ReportManager = {
  init() {

  },

  createReporter() {

  },

  reportInStock() {

  },
};

// Here is a sample run that you can use as a reference:
ItemManager.create('basket ball', 'sports', 0);           // valid item
console.log(ItemManager.create('asd', 'sports', 0));
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// console.log(ItemManager.items); // logs array with the 4 valid items

// ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

// ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// ItemManager.items;

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10
