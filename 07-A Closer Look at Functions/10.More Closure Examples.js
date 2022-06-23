'use strict';
// 137. More Closure Examples
// Tam kavrayamadım tekrar et!
// 23.06.22 tarihinde buraya geldim ve hala bu closure konusunda zayıfım.

// EXAMPLE - 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// OUTPUT : 46

// Re-assigning f function
h();
f();
console.dir(f);

// EXAMPLE - 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000;

boardPassengers(180, 3);

// OUTPUT
// Will start boarding in 3 seconds
// We are now boarding all 180 passengers
// There are 3 groups, each with 60 passengers
