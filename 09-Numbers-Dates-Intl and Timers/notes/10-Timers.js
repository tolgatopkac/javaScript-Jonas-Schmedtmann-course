
// 180. Timers: setTimeout and setInterval

// SET Time Out

// Exercise 1 

setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
console.log('Waiting...');

// Output
// Waiting...
// Here is your pizza 🍕
//----------------------------------------------------------------

// Exercise 2 
setTimeout((ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`), 3000, 'olives', 'spinach');

console.log("Waiting...");

// Waiting...
// Here is your pizza 🍕 with olives and spinach

// -------------------------------------------------
// EXERCISE 3

// const ingredients = ['olives', 'spinach'];

// setTimeout(() => console.log(`Here is your pizza 🍕 with ${ingredients[0]} and ${ingredients[1]}`), 3000)

// ----------------------------------------------------------------

// Exercise 4 

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients)

console.log('Waiting...');


if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)

// -------------------------------------------------
// setInterval

setInterval(function () {
  const now = new Date();
  console.log(now);

}, 1000)