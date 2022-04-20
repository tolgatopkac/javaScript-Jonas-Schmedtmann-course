// let js = "amazing";
// console.log(40 + 8 + 23 - 5);

//-----------------------------------------------------------------------------
// 10. Values and Variables

/*
console.log("Tolga");
console.log(23);

let firstName = "Tolga";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

//------------------------------------------------------------------------------
// 12. Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
//--typeof(x) > can use to show the type of a value.

// console.log(typeof true); //Booelan
console.log(typeof javascriptIsFun); //booelan
// console.log(typeof 23); //number
// console.log(typeof "Tolga"); //String

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year); //undefined
console.log(typeof year);

year = 1997;
console.log(typeof number);

console.log(typeof null);
//Not: Null 'un veri türünü sorguladığında JS bunu bir object olarak tanımlar fakat bu JS'de bir hata olarak kabul edilir. Döndürmesi gereken değer null olması gerekli.
*/

//------------------------------------------------------------------------------
//13. let, const and var
/*
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990; // error, can't change

// const job; error
*/

//------------------------------------------------------------------------------

// 14. Basic Operators
/*

//--Math Operators
const nowYear = 2021;
const ageTolga = nowYear - 1997;
const ageSarah = nowYear - 1990;
console.log(ageTolga, ageSarah); //24

console.log(ageTolga * 2, ageTolga / 10, 2 ** 3);

const firstName = "Tolga";
const lastName = "Topkaç";

console.log(firstName + " " + lastName);

//--Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

//-- Comparison Operator
console.log(ageTolga > ageSarah); // >, <, >=, <=
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(nowYear - 1991 > nowYear - 2018);

*/

//------------------------------------------------------------------------------

// 15. Operator Precedence

/*

const nowYear = 2021;
const ageTolga = nowYear - 1997;
const ageSarah = nowYear - 1990;

console.log(nowYear - 1991 > nowYear - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averaAge = (ageTolga + ageSarah) / 2;
console.log(ageTolga, ageSarah, averaAge);

*/

//------------------------------------------------------------------------------

// 17. Strings and Template Literals

/*

const firstName = "Tolga";
const job = "student";
const birthYear = 1997;
const year = 2021;

const tolga =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(tolga);

//-- Template Literals

const tolgaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(tolgaNew);

console.log(`Just a regular string....`);

//--Multiline String
console.log("String with \n\
multiple \n\
lines");

//--with back ticks
console.log(`String with
multiple
lines`);

*/

//------------------------------------------------------------------------------
// 18. Taking Decisions: if / else Statements
/*

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

let century;
const birthYear = 1997;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/
//------------------------------------------------------------------------------

// 20. Type Conversion and Coercion
/*
// --Type Conversion :  we manually convert from one type to another
// --Type Coercion : automatically converts types behind the scenes for us
// -- Bu durumları nadiren manually yaparız, JavaScript bunu kendisi yapar.

// --Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); //199118
console.log(Number(inputYear) + 18); //199118

console.log(Number("Jonas")); //NaN
console.log(typeof NaN);

console.log(String(23), 23);

// --Type Coercion

console.log("I am " + 23 + " years old"); //Numbers to convert string
// -- plus operator will convert numbers to string
console.log("23" - "10" - 3); //String to convert numbers  =10
console.log("23" + "10" + 3); //!!!plus operator = "23103"
console.log("23" / "2"); //11.5 string convert num
console.log("23" * "2"); //46 string convert num
console.log("23" > "18");

let n = "1" + 1; //11
n = n - 1; // 10
console.log(n);
*/

//------------------------------------------------------------------------------

// 21. Truthy and Falsy Values
// Falsy values
// 5 falsy values: 0, '' , undefined, null, NaN
/*
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean("Tolga")); //true
console.log(Boolean({})); //empty object but true

const money = 0;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log("You should get a job");
}

//Output "You should get a job"

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
// Output : Height is UNDEFINED
// height değeri 0 atansa bile false döndürür.
*/

//------------------------------------------------------------------------------

// 22. Equality Operators: == vs. ===

//------------------------------------------------------------------------------

// 23. Boolean Logic
// AND, OR and NOT

// 24. Logical Operators

//------------------------------------------------------------------------------

// 26. The switch Statement

/*
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup.");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup.");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

*/

//------------------------------------------------------------------------------

// 27. Statements and Expressions
/*
// Expression is a piece of code that produces a value
3 + 4; // expression
1991; // expression
true && false && !false; // expression
*/

//------------------------------------------------------------------------------

// 28. The Conditional (Ternary) Operator
/*
const age = 15;
// age >= 18
//   ? console.log("I like to drink wine. 🍷")
//   : console.log("I like to drink water 💧");

// condition ? if : else

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
