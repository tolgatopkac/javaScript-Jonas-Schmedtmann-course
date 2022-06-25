// 153. The reduce Method
// Bir array içindeki elemanların tek bir değerde toplanması.
// acc parametresi kar topu gibi değer biriktirir.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator -> Snowball
/* const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur
}, 0); */


// arrow func
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);



// with for loop sum
let balance2 = 0;
for (const mov of movements) balance2 += mov
console.log(balance2);


// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else
    return mov;
}, movements[0])

console.log(max);