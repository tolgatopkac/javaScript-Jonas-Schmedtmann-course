// 174. Working with BigInt

console.log(2 ** 53 - 1);
// 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991


// BigInt
console.log(1241231241272331124124124n);
console.log(BigInt(1241231241272331124124124));


// Operations
console.log(10000n + 10000n);
// console.log(Math.sqrt(16n));
// Error

const huge = 20000014212412421n
const num = 23;
// console.log(huge * num);
// ERROR


// Exceptions
console.log(20n > 15);
console.log(20n === 20);
// false

console.log(typeof 20n);
// bigInt

console.log(20n == '20');



console.log(huge + ' is REALLY big!!!');
// 20000014212412421 is REALLY big!!!

// Divisions
console.log(10n / 3n);
console.log(10 / 3);
// 3.3333333333333335
// 3n
