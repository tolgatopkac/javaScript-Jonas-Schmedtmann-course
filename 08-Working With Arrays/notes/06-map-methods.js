/* 150. The map Method */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUsd = 1.1;


// EXAMPLE - 1
// Function with map
// Functional Programming

// Function
/* const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
}) */

// Arrow Function
const movementUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementUSD);

// EXAMPLE - 2
// Loop with map
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)

console.log(movementsUSDfor);


// Return array
// side effect ? 

const movementsDescripitons = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)

console.log(movementsDescripitons);