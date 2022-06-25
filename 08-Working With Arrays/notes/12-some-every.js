
// 161. some and every

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// ----- INCLUDES ------ (EQUALITY) 
console.log(movements.includes(-130));
// true
// includes eşitliği test eder... some ise bir koşul ile kullanılan method.

// --------- SOME --------- (CONDITION)
const anyDeposits = movements.some(mov => mov > 0)
console.log(anyDeposits);
// true


const anyDepositss = movements.some(mov => mov > 5000)
console.log(anyDepositss);
// false


//------- EVERY ---------
// NESNE içinde yer alan tüm movements dizileri kontrol eder ona göre true/false değerini döndürür.
console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Separate callback (şunu araştırcam)
const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
