// 144. Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You witdrew ${Math.abs(movement)}`);
  }
}

// with entries()

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You witdrew ${Math.abs(movement)}`);
  }
}







// with foreach

console.log('--- FOREACH ---');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You witdrew ${Math.abs(movement)}`);
  }
})

// similar entries - foreach

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You witdrew ${Math.abs(mov)}`);
  }
})


// 0: function (200)
// 1: function(450)
// 2: function(400)
// ...

// FOREACH döngülerinde break ve contine çalışmaz.