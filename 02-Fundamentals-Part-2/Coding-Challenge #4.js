/* Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const totals = [];

// Benim çözümüm,
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    for (let i = 0; i < bills.length; i++) {
      tip.push(bills[i] * 0.15);
      totals.push(bills[i] + tip[i]);
    }
  } else {
    for (let i = 0; i < bills.length; i++) {
      tip.push(bills[i] * 0.2);
      totals.push(bills[i] + tip[i]);
    }
  }
};

// Output
// tip=   [4.4, 59, 35.2, 88, 7.4, 21, 2, 220, 17.2, 10.4]
// totals = [26.4, 354, 211.2, 528, 44.4, 126, 12, 1320, 103.2, 62.4]

// Bonus
let sum = 0;
const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return console.log(avg);
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// Output : 232.2

// -----------------------------------------------------------------------------------
// Kurstaki çözüm
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

// Bonus Çözüm
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

calcAverage([2, 3, 4, 5]);
