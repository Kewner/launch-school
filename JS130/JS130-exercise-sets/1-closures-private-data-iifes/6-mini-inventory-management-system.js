// Assignment: 6-mini-inventory-management-system-assignment.md

/* Objects and their - properties and * methods:

item:
- skuCode
- name
- category
- quantity

ItemCreator:
* createItem
* validateName
* validateCategory
* createSkuCode

ItemManager:
- items
* create
* update
* delete
* inStock
* itemsInCategory

ReportManager:
* init
* createReporter
* reportInStock
*/

const ItemCreator = {
  createItem(name, category, quantity) {
    if (!this.validateName(name) || !this.validateCategory(category) || quantity === undefined ) {
      return { notValid: true };
    }

    const skuCode = this.createSkuCode(name, category);
    return { skuCode, name, category, quantity };
  },

  validateName(name) {
    return name.split(' ').join('').length >= 5;
  },

  validateCategory(category) {
    if (category.split(' ').length > 1) return false;
    return category.split(' ').join('').length >= 5;
  },

  createSkuCode(name, category) {
    const partOne = name.split(' ').join('').slice(0, 3);
    const partTwo = category.slice(0, 2);
    return `${partOne}${partTwo}`.toUpperCase();
  },
};

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    const item = ItemCreator.createItem(name, category, quantity);
    if (item.notValid) return false;
    this.items.push(item);
  },

  findBySkuCode(code) {
    return this.items.find(item => item.skuCode === code);
  },

  update(code, obj) {
    const target = this.findBySkuCode(code);
    Object.assign(target, obj);
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
  init(manager) {
    this.items = manager;
  },

  createReporter(code) {
    const item = this.items.findBySkuCode(code);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.name).toString());
  },
};

// Here is a sample run that you can use as a reference:
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// log array with the 4 valid items
console.log(ItemManager.items);
ReportManager.init(ItemManager);

// log soccer ball,football,kitchen pot
ReportManager.reportInStock();
ItemManager.update('SOCSP', { quantity: 0 });

// log list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());

// log football,kitchen pot
ReportManager.reportInStock();

//log list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));
ItemManager.delete('SOCSP');

// log list of the remaining 3 valid items
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
