// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in
// the days before computers had video screens.

// For this practice problem, write a program that creates the following
// output 10 times, with each line indented 1 space to the right of the
// line above it:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

let str = 'The Flinstones Rock!';

for (let padding = 0; padding < 10; padding += 1) {
  console.log(str.padStart(padding + str.length));
}

// LS solution:
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}