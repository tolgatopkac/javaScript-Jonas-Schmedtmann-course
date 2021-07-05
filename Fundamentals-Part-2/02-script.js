"use strict";

//----------------------------------------------------------------

// 32. Activating Strict Mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/
// şimdi burda ilk if'de ben hasDrivesLicense değişkenini hatalı yazdım 'use strict'; modu kullanmadığım zaman console bana herhangi bir uyarı vermedi. Boş console gösterdi
// use strict modunu açtığımda ise hata gözüktü, bu mod bazı hataları görünür kılar.

// Bazı özellikler için ayrılmış değişken adlarını kullanmanı engeller :
//const interface = "Audio"; //strict mode açık olduğunda hata alırısn.
//const private = 534;

//--------------------------------------------------------------------------

// 33. Functions

/*
function logger() {
  console.log("My name is Tolga");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applesJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
//------------------------------------------------------------------------------

// 34. Function Declarations vs. Expressions

// ---Funciton Declaration

/*
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(1997);
console.log(age1); //24

// ---Function Expressions
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1997);
console.log(age2);
*/
//Not! : Aralarındaki fark Declaration'da fonksiyonu tanımlamadan önce çağırabilirsin ve bu işleme -hoisting- adı verilir

// --------------------------------------------------------------------------------
// 35. Arrow Function
/*
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1997, "Tolga"));
console.log(yearUntilRetirement(1991, "Bob"));

// Not !! : arrow fonksiyonlarda birden fazla parametreye sahip değilsen, return ifadesine gerek yok. Parametre sayısı az olduğunda kullanman kodun görünürlüğü açısından daha uygun olur.
*/
// ------------------------------------------------------------------------------
// 36. Functions Calling Other Functions

function cutFruitPiesces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applesPieces = cutFruitPiesces(apples);
  const orangesPieces = cutFruitPiesces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applesPieces} pieces apples and ${orangesPieces} pieces oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 4));

// ------------------------------------------------------------------------------
// 37. Reviewing Functions

//--Arrow function
/*
const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
//--Arrow fonksiyonundan function expression 'a döndürürken oku kaldırıp parametrelerden önce function ifadesi eklendi
// --- Aşağıdaki fonksiyonlarda tanımlanan 'birthYear' isimli parametreler birbirinden tamamen farklıdır.

const calcAge4 = (birthYear) => 2021 - birthYear;

//--Function expression
const yearUntilRetirement1 = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;
  // return retirement;
  // return `${firstName} retires in ${retirement} years`;
  return retirement >= 1
    ? `${firstName} retires in ${retirement} years`
    : `${firstName} has already retired.`;
};

console.log(yearUntilRetirement1(1950, "Tolga"));
*/
//---------------------------------------------------------------------------
// 39. Introduction to Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// ---Dizi oluşturma yolları
// En çok kullanılanı
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// --
const years = new Array(1991, 1992, 1984, 2004, 2008);
// Output : (5) [1991, 1992, 1984, 2004, 2008]

console.log(friends[0]);
// Output : Michael
console.log(friends[2]);
// Output : Peter

console.log(friends.length);
// of elements in Array, starts 1

console.log(friends[friends.length - 1]);
// Dizideki son elemana erişme :Peter

friends[2] = "Jay";
console.log(friends);
// Dizideki elemanı değiştirme

// !!! Not : Dizileri const ile tanımlayabilirsin ve daha sonra değiştirebilirsin, sadece primitive values const ile tanımlandığında değiştirilemez. (string, number, bigint, boolean, undefined, symbol and null)
// !!! Not : Const ile tanımaldığında  Dizinin içindeki elemanları değiştiebilirsin yeniden bir dizi oluşturamazsın.
// friends = ['A','B'] şeklinde yazarsan hata alırsın.

const firstName = "Tolga";
const tolga = [firstName, "Topkaç", 2021 - 1997, "student", friends];
// Dizinin içinde farklı türlerde eleman ekleyebilirsin.
console.log(tolga);

// Exercise

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge1(years2[0]),
  calcAge1(years2[1]),
  calcAge1(years2[2]),
  calcAge1(years2[3]),
  calcAge1(years2[4]),
];

console.log(ages);
*/

// -------------------------------------------------------------------------------------
// 40. Basic Array Operations (Methods)

// ----ADD ELEMENTS----
// Push : Dizinin Sonuna yeni bir eleman ekler
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Unshift : Dizinin başına yeni eleman ekler
friends.unshift("John");
console.log(friends);

// ----REMOVE ELEMENTS----
// Pop :  dizinin son elemanını siler.
const popped = friends.pop(); //
console.log(popped); //Jay
console.log(friends);

// Shift : Dizinin başındaki elemanı siler.
friends.shift();
console.log(friends);

// Dizideki bir elemanın konumunu bulma
console.log(friends.indexOf("Steven"));
//Output: 1

// includes, ES6 method
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

// ------------------------------------------------------------------------------

// 42. Introduction to Objects

/*
// Dizi
const tolgaArray = ["Tolga", "Topkaç", 2021 - 1997, "student", ["A", "B", "C"]];

// Nesne
// key : değişken adı / value : değer
// nesne içine yazılan değerler herhangi bir türden olabilir.
// keys'lere ayrıca özellik(property) de denebilir yani tolga nesnesinin 5 tane özelliği var.
// nesneler ve diziler arasındaki en büyük var, nesnelerde içerideki elemanların sırası önemli değildir. Dizilerde elemanın sırası önemlidir fakat nesnede önemli değildir.
const tolga = {
  firstName: "Tolga",
  lastName: "Topkaç",
  age: 2021 - 1997,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
*/

// -----------------------------------------------------------------------------------

// 43. Dot vs. Bracket Notation

/*
const tolga = {
  firstName: "Tolga",
  lastName: "Topkaç",
  age: 2021 - 1997,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(tolga);

// --bir nesnenin özelliğie erişmenin yolları.
// ---Nokta ile (Dot)
console.log(tolga.lastName);
// ---Köşeli parantez (bracket)
console.log(tolga["firstName"]);

// Bracket ve Dot arasındaki fark, Dot ile aşağıdaki işlemi yapamazsın.
const nameKey = "Name";
console.log(tolga["first" + nameKey]);
console.log(tolga["last" + nameKey]);

//console.log(tolga.'last' + nameKey); // ERRROR

const interestedIn = prompt(
  "What do you want to know abot Tolga ? Choose between firstName, lastName, age, job, and friends"
);
// üstteki örnekte dot notation kullandığında undefined çıktısı aldım

if (tolga[interestedIn]) {
  console.log(tolga[interestedIn]);
} else {
  console.log(
    "Wrong request. Choose between firstName, lastName, age, job, and friends"
  );
}

// Nesneye yeni özellik ekleme
tolga.location = "Turkey";

// Challenge
// 'Tolga has 3 friends, and his best friends is called  Michael.

console.log(
  `${tolga.firstName} has ${tolga.friends.length} friends, and his best friends is called ${tolga.friends[1]}`
);
*/

// 44. Object Methods

const tolga = {
  firstName: "Tolga",
  lastName: "Topkaç",
  birthYear: 1997,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  // calcAge: function () {
  //   return 2021 - this.birthYear;
  // },

  // Burda this.age ile nesnemizde yeni bir eleman oluşturduk******
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(tolga.calcAge());
console.log(tolga.age);
// console.log(tolga["calcAge"](1997));

// Challenge
// 'Jonas is a 46-year old teacher, and he has a /no driver's license'

console.log(tolga.getSummary());

//------------------------------------------------------------------------------

// 46. Iteration: The for Loop
/* 
console.log("Lifting weights repetition 1 🏋️‍♂️");
console.log("Lifting weights repetition 2 🏋️‍♂️");
console.log("Lifting weights repetition 3 🏋️‍♂️");
console.log("Lifting weights repetition 4 🏋️‍♂️");
console.log("Lifting weights repetition 5 🏋️‍♂️");
console.log("Lifting weights repetition 6 🏋️‍♂️");
console.log("Lifting weights repetition 7 🏋️‍♂️");
console.log("Lifting weights repetition 8 🏋️‍♂️");
console.log("Lifting weights repetition 9 🏋️‍♂️");
console.log("Lifting weights repetition 10 🏋️‍♂️");
 */

//--for döngüsü
// --- for loop keeps running condition is TRUE
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} `);
}
*/
// -------------------------------------------------------------------------------------
// 47. Looping Arrays, Breaking and Continuing
/* const tolgaArray = [
  "Tolga",
  "Topkaç",
  2021 - 1997,
  "student",
  ["A", "B", "C"],
  true,
];

const types = [];
// Dizideki elemanları yazdırma.
for (let i = 0; i < tolgaArray.length; i++) {
  // Reading from Tolga Array
  console.log(tolgaArray[i], typeof tolgaArray[i]);

  // Filling types array
  types[i] = typeof tolgaArray[i];
}
console.log(types);

// push metodu ile.
const tolgaArrayType = [];
for (let i = 0; i < tolgaArray.length; i++) {
  tolgaArrayType.push(typeof tolgaArray[i]);
}
console.log(tolgaArrayType);

// Exercise

const years = [1991, 1992, 1984, 2004];

const ages = [];
//  Benim  yaptığım
const calcAge = function (year) {
  return 2021 - year;
};
for (let i = 0; i < years.length; i++) {
  let age = calcAge(years[i]);
  ages.push(age);
}


// Çözüm:
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break
// Döngüyü durdurma veya devam ettirme.
// typeof string değilse devam et
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < tolgaArray.length; i++) {
  if (typeof tolgaArray[i] !== "string") continue;
  console.log(tolgaArray[i], typeof tolgaArray[i]);
}

// Sadece string olanları yazdırdı.
// Output :
// --- ONLY STRINGS ---
// Tolga string
// Topkaç string
// student string

// Number bulunduğunda döngü durur fakat number olan elemanı yazdırmaz.
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < tolgaArray.length; i++) {
  if (typeof tolgaArray[i] === "number") break;
  console.log(tolgaArray[i], typeof tolgaArray[i]);
}
 */
// ------------------------------------------------------------------------------
// 48. Looping Backwards and Loops in Loops
/*
const tolgaArray = ["Tolga", "Topkaç", 2021 - 1997, "student", ["A", "B", "C"]];

// Son başlayıp geriye doğru döngü oluşturma
for (let i = tolgaArray.length - 1; i >= 0; i--) {
  console.log(i, tolgaArray[i]);
}

// Döngü içinde döngü oluşturma
// 3 farklı egzersizim var her birini 5 tekrar yapmak istiyorum.
for (let i = 1; i <= 3; i++) {
  console.log(`${i}. egzersize başlandı...`);
  for (let j = 1; j <= 5; j++) {
    console.log(`${j}. Tekrar`);
  }
  console.log(`${i}. egzersiz tamamlandı...`);
}
*/
// ------------------------------------------------------------------------------
// 49. The while Loop
// console.log("For Loop");
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} `);
// }

console.log("While Loop");
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} `);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// ne zaman sayaçsız bi döngüye ihtiyacın olursa while loop kullnabilirsin.
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(" Loop is about to end...");
  }
}
