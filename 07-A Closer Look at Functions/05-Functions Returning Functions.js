'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Tolga');
greeterHey('Steven');

greet('Hello')('Tolga');

// With arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Jonas');
