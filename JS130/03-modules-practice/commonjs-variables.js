// In Node, all code is part of a CommonJS module.
// Each module provides several variables that can be used:

// - module: an object that represents the current module
// - exports: the name(s) exported by the module (same as module.exports)
// - require(moduleName): the function that loads a module
// - __dirname: the absolute pathname of the directory that contains the module
// - __filename: the absolute pathname of the file that contains the module

// import two modules for this example
const rlSync = require('readline-sync');
const logIt = require('./logit');

// export two modules for this example
const greeting = 'Hello';
const func = () => console.log('something');

module.exports = {
  greeting,
  func,
};

// log module, require, __dirname, and __filename

console.log(module);
// Module {
//   id: '.',
//   path: '/mnt/c/LS/JS130/03-modules-practice',
//   exports: { greeting: 'Hello', func: [Function: func] },
//   filename: '/mnt/c/LS/JS130/03-modules-practice/commonjs-variables.js',
//   loaded: false,
//   children: [
//     Module {
//       id: '/mnt/c/LS/node_modules/readline-sync/lib/readline-sync.js',
//       path: '/mnt/c/LS/node_modules/readline-sync/lib',
//       exports: [Object],
//       filename: '/mnt/c/LS/node_modules/readline-sync/lib/readline-sync.js',
//       loaded: true,
//       children: [],
//       paths: [Array]
//     },
//     Module {
//       id: '/mnt/c/LS/JS130/03-modules-practice/logit.js',
//       path: '/mnt/c/LS/JS130/03-modules-practice',
//       exports: [Function: logIt],
//       filename: '/mnt/c/LS/JS130/03-modules-practice/logit.js',
//       loaded: true,
//       children: [],
//       paths: [Array]
//     }
//   ],
//   paths: [
//     '/mnt/c/LS/JS130/03-modules-practice/node_modules',
//     '/mnt/c/LS/JS130/node_modules',
//     '/mnt/c/LS/node_modules',
//     '/mnt/c/node_modules',
//     '/mnt/node_modules',
//     '/node_modules'
//   ]
// }

console.log(__dirname);  // LS/JS130/03-modules-practice
console.log(__filename); // JS130/03-modules-practice/commonjs-variables.js
