'use strict';
// 130. Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const uppeFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', uppeFirstWord);

// OUTPUT :
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: uppeFirstWord

transformer('JavaScript is the best!', oneWord);
// OUTPUT :
// Original string: JavaScript is the best!
//  Transformed string: javascriptisthebest!
// Transformed by: oneWord

// JS USES CALLBACKS ALL THE TIME
const higher = function () {
  console.log('👋');
};

document.body.addEventListener('click', higher);

['Tavuk', 'İnek', 'Tavşan'].forEach(higher);
