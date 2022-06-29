// 171. Math and Rounding


// Math.sqrt
console.log(Math.sqrt(25));
// 5
console.log(25 ** (1 / 2));
// 5
console.log(8 ** (1 / 3));

////////////////////////////////

// Math.max
console.log(Math.max(5, 18, 23, 11, 2));
// 23
console.log(Math.max(5, 18, '23', 11, 2));
// Type coercion (23)
console.log(Math.max(5, 18, '23px', 11, 2));
// NaN


// Math.min
console.log(Math.min(5, 18, 23, 11, 2));
// 2

////////////////////////////////

// Math.PI
console.log(Math.PI * Number.parseFloat('10px') ** 2);
// 314.1592653589793

////////////////////////////////
// Math.random
console.log(Math.trunc(Math.random() * 6) + 1);
// 1 - 6

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
//  0...1 -> 0....(max - min) -> min...max
// console.log(randomInt(10, 20));

////////////////////////////////

// Rounding Integers
// trunc
console.log(Math.trunc(23.3));

// round
console.log(Math.round(23.3));
console.log(Math.round(23.9));

// ceil
console.log(Math.ceil(23.9));
console.log(Math.ceil(23.3));

// floor
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));


console.log(Math.trunc(-23.3));
// -23
console.log(Math.floor(-23.3));
// -24


// Rounding decimals
console.log((2.7).toFixed(0));
// 3
console.log((2.7).toFixed(3));
// 2.700
console.log(+(2.345).toFixed(3));
// 2.345