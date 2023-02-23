// Given the following data structure write some code to return an array
// containing the colors of the fruits and the sizes of the vegetables. The
// sizes should be uppercase, and the colors should be capitalized.

// The return value should look like this:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = Object.values(obj).map(subObj => {
  if (subObj.type === 'fruit') {
    return subObj.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else {
    return subObj.size.toUpperCase();
  }
});

console.log(result);

// LS solution uses a separate capitalize function:

let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});