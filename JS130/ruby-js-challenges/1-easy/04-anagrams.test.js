let Anagram = require('./anagram.js');

describe("Anagram", () => {
  test("No matches returns empty array", () => {
    let detector = new Anagram('diaper');
    expect(detector.match(['hello', 'world', 'zombies', 'pants'])).toEqual([]);
  });

  xtest("Detect simple anagram", () => {
    let detector = new Anagram('ant');
    let anagrams = detector.match(['tan', 'stand', 'at']);
    expect(anagrams).toEqual(['tan']);
  });

  xtest("Detect multiple anagrams", () => {
    let detector = new Anagram('master');
    let anagrams = detector.match(['stream', 'pigeon', 'maters']);
    expect(anagrams.sort()).toEqual(['maters', 'stream']);
  });

  xtest("Do not confuse different duplicates", () => {
    let detector = new Anagram('galea');
    expect(detector.match(['eagle'])).toEqual([]);
  });

  xtest("Identical word is not anagram", () => {
    let detector = new Anagram('corn');
    let anagrams = detector.match(['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park']);
    expect(anagrams).toEqual(['cron']);
  });

  xtest("Eliminate anagrams with same checksum", () => {
    let detector = new Anagram('mass');
    expect(detector.match(['last'])).toEqual([]);
  });

  xtest("Eliminate anagram subsets", () => {
    let detector = new Anagram('good');
    expect(detector.match(['dog', 'goody'])).toEqual([]);
  });

  xtest("Detect anagram", () => {
    let detector = new Anagram('listen');
    let anagrams = detector.match(['enlists', 'google', 'inlets', 'banana']);
    expect(anagrams).toEqual(['inlets']);
  });

  xtest("Multiple anagrams", () => {
    let detector = new Anagram('allergy');
    let anagrams = detector.match(['gallery', 'ballerina', 'regally',
                                   'clergy', 'largely', 'leading']);
    expect(anagrams.sort()).toEqual(['gallery', 'largely', 'regally']);
  });

  xtest("Anagrams are case-insensitive", () => {
    let detector = new Anagram('Orchestra');
    let anagrams = detector.match(['cashregister', 'Carthorse', 'radishes']);
    expect(anagrams).toEqual(['Carthorse'])
  });
});
