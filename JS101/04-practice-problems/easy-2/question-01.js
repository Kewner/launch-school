// Given a string, return a new string that replaces every occurrence of
// the word "important" with "urgent":

// Replacing the first occurence:
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));

// Replacing all occurences:
let str = "I am a dog and I like any dog from dog land.";

function replaceAll(string) {
  let array = string.split(' ');

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'dog') {
      array[index] = 'cat';
    }
  }

  return array.join(' ');
}

console.log(replaceAll(str));