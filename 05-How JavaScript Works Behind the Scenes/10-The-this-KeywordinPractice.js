'use strict';
// 97. The this Keyword in Practice

// --Global
console.log(this);
// window nesnesine erişir.

// --Function
const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); //undefined
  //Not : ! Strict modu kapalı olduğunda global nesneyi döndürür fakat açık olduğunda undefined
};

// calcAge(1997);
// Output :
// 24
// undefined(Sadece strict mode geçerli)

// ----------------------------------------------------------------
// Arrow func
const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};

// console.log(1997);
// arrow func içinde kullanıldığında global nesne olan window nesnesini döndürür.

// ----------------------------------------------------------------
// Method example
const tolga = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

tolga.calcAge();
// nesne içerisinde this içinde yer aldığı nesneye aittir.

// ?
const matilda = {
  year: 2017,
};
// method borrowing
matilda.calcAge = tolga.calcAge;
matilda.calcAge();
// output 20

// Not : This statik değildir, dinamik yapıya sahiptir ve işlevin nasıl çağrıldığına bağlıdır.

const f = tolga.calcAge;
f(); //undefined
