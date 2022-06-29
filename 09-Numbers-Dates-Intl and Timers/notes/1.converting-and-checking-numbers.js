// 170. Converting and Checking Numbers

console.log(23 === 23.0);
// true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333...
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
// 0.30000000000000004

console.log(0.1 + 0.2 === 0.3);
// false


// Conversion
console.log(Number('23'));
// 23
console.log(+'23');
// type coercion


// Parsing
console.log(Number.parseInt('30px', 10));
// 30
console.log(Number.parseInt('e23', 10));
// NaN


console.log(Number.parseFloat('2.5rem'));
// 2.5
console.log(Number.parseInt('2.5rem'));
// 2



// Check if value is NaN
// isNaN
console.log(Number.isNaN(20));
// false
console.log(Number.isNaN('20'));
// false
console.log(Number.isNaN(+'20X'));
// true
console.log(Number.isNaN(23 / 0));
// false


// Checking if value is number
console.log(Number.isFinite(20));
// true
console.log(Number.isFinite('20'));
// false
console.log(Number.isFinite(+'20X'));
// false
console.log(Number.isFinite(23 / 0));
// false


console.log(Number.isInteger(23));
// TRUE
console.log(Number.isInteger(23.0));
// TRUE
console.log(Number.isInteger(23 / 0));
// FALSE