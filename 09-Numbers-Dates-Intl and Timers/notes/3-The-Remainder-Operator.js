// 172. The Remainder Operator

console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(7 % 2);
console.log(7 / 2);


const isEven = n => n % 2 === 0;
console.log(isEven(514));
console.log(isEven(23));
console.log(isEven(26));

[...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
  if (i % 2 === 0) row.style.backgroundColor = 'orangered'
})
