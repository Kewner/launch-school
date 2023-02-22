// A grocery store uses a JavaScript function to calculate discounts on
// various items. They are testing out various percentage discounts but
// are getting unexpected results. Go over the code, and identify the
// reason why they aren't getting the expected discounted prices from the
// function. Then, modify the code so that it produces the correct results.

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,

  discount: function(percent) {
    let discount = this.price * percent / 100;
    // instead of:
    // this.price -= discount;

    // we use:
    let newPrice = this.price - discount;
    return newPrice;

    // we could instead also do:
    // return this.price - discount;
  },
};

console.log(item.discount(20));   // should return 40, returns 40
console.log(item.discount(50));   // should return 25, returns 20
console.log(item.discount(25));   // should return 37.5, returns 15

// The problem is that this.price gets changed, and then the changed
// value is used for the next method call. To fix this, we should make
// sure that item.price remains the same.

// We can do this by adding a newPrice variable and return that, or by
// returning the result of a calculation using this.price without
// mutating item.price.
