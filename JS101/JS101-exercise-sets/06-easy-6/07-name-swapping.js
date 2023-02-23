// Write a function that takes a string argument consisting of a first name, a
// space, and a last name, and returns a new string consisting of the last name,
// a comma, a space, and the first name.

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"

// Further Exploration

// What if the person has one or more middle names? Refactor the current solution
// so that it can accommodate this; the middle names should be listed after the
// first name.

function swapName1(name) {
  let nameArr = name.split(' ');
  let firstAndMiddle = nameArr.slice(0, nameArr.length - 1).join(' ');
  let lastName = nameArr[nameArr.length - 1];

  console.log(lastName + ', ' + firstAndMiddle);
}

swapName1('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"

// Cool solutions from other students:

function swapName2(str) {
  let arr = str.split(" ");
  let surname = arr.pop();
  let remainder = arr.join(' ');

  return `${surname}, ${remainder}`;
}


let swapName3 = stringName => {
  let array = stringName.split(' ');
  array.unshift(array.pop());
  array[0] = array[0] + ',';
  console.log(array.join(' '));
}