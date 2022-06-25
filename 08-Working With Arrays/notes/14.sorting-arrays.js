// 163. Sorting Arrays

// STRINGS
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
// OUTPUT :  ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners);
// ['Adam', 'Jonas', 'Martha', 'Zach']


// NUMBERS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// KULLANIŞSIZ...
console.log(movements);
// [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort());
// [-130, -400, -650, 1300, 200, 3000, 450, 70]


// return < 0, A, B (KEEP ORDER)
// return > 0 B, A  (SWITCH ORDER)

// ASCENDING
/* movements.sort((a, b) => {
  if (a > b)
    return 1;
  if (a < b)
    return -1
})
console.log(movements); */
//  [-650, -400, -130, 70, 200, 450, 1300, 3000]

// 
movements.sort((a, b) => a - b)
console.log(movements);
//  [-650, -400, -130, 70, 200, 450, 1300, 3000]


// DESCENDING
/* movements.sort((a, b) => {
  if (a > b)
    return -1;
  if (a < b)
    return 1
}) */

movements.sort((a, b) => b - a)
console.log(movements);
// [3000, 1300, 450, 200, 70, -130, -400, -650]

