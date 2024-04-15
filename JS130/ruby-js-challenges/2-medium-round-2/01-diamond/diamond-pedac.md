# PEDAC

## Understanding the problem

- Input: an uppercase letter
- Output: a diamond shape:
  - The first row contains one 'A'.
  - The last row contains one 'A'.
  - All rows, except the first and last, have exactly two identical letters.
  - The diamond is horizontally symmetric.
  - The diamond is vertically symmetric.
  - The diamond has a square shape (width equals height).
  - The letters form a diamond shape.
  - The top half has the letters in ascending order.
  - The bottom half has the letters in descending order.
  - The four corners (containing the spaces) are triangles.

## Examples/test cases

From the given test cases we can conclude that we need:

- class Diamond
  - Diamond.makeDiamond()
    - accepts uppercase letter as its argument
    - returns diamond string, like " A \nB B\n A \n"

## Data structures

We will use:

- a class, Diamond
- strings
- maybe arrays

## Algorithm

### Diamond.makeDiamond(letter)

1. call `_calculateSize` to calculate the diamond's `size` (width & height)
2. initialize `diamond` to an empty string
3. iterate through letters, from `A` to `letter` and back to `A`:
   - call `_createRow` to create a row (a string), passing it current letter
   - reassign `diamond` to `diamond` + the string returned by `_createRow`
4. return the resulting string `diamond`

### Diamond._calculateSize(letter)

1. call `_createAlphabet`, passing it '`letter`'
2. assign `Diamond.size` to `Diamond.alpabet[letter]`

### Diamond._createAlphabet(letter)

1. create an object with one property: `A: 1`
2. loop through UTF-codes `66` to `letter.charCodeAt()`, inclusive:
   - using `fromCharCode`, populate array with properties `B` to `Z`
   - give them odd numbers as values, starting at 3: `B: 3`, `C: 5`, etc.
3. assign `Diamond.alphabet` to the populated object

### Diamond._createRow(letter)

1. initialize `sidePadding` to:
   (`Diamond.size` - `Diamond.alphabet[letter]`) / 2 amount of spaces
2. if `letter` is `A`, return `sidePadding` + `letter` + `sidePadding` + `\n`
3. initialize `middlePadding` to:
   `Diamond.size` - (`sidePadding.length` * 2) - 2 amount of spaces
4. return `sidePadding` + `letter` + `middlePadding` + `letter` + `sidePadding` + `\n`