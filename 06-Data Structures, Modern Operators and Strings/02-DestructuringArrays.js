'use strict';
// 103. Destructuring Arrays

// Starter data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = [0]; // 2
const b = [1]; // 3
const c = [2]; // 4

// birden fazla değişkene dizi elemanını atama
const [x, y, z] = arr;
console.log(x, y, z);
// output :  2,3,4

// restaurant nesnesinin categories dizisini ilk 2 elemanını first ve second değişkenlerine atadık
const [first, second] = restaurant.categories;
console.log(first, second);
// output : Italian Pizzeria
// aynı şekilde dizinin sadece 1 ve 3. elemanını yazdırmak için, aşağıdaki örnekte olduğu gibi aralarında virgüllerle boşluk bırakmalısın
const [aFirst, , aSecond] = restaurant.categories;
console.log(aFirst, '', aSecond);
// output : Italian  Vegetarian

// ------------------------------------
// !!!!Switching Variables
// 2 verinin karşılıklı olarak değiştirme
//--- 1. Yöntem
// ortada geçici bir değişkene ihtiyacımız var
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Italian Vegetarian

let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
// Vegetarian Italian

// ----2. Yöntem
// geçici bir değişkene ihtiyacın olmadığı yöntem
[main, secondary] = [secondary, main];
console.log(main, secondary);

// ------------
// !!Receive 2 return values from a function
const [starterM, mainM] = restaurant.order(2, 0);
console.log(starterM, mainM);
// output : Garlic Bread Pizza

// -----------------------------------
// içiçe diziler
// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// output : 2 [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k);
// 2 5 6

// Default Values
// bir API 'den veri aldığında bu yöntem faydalı olabilir.
const [p, q, r] = [8, 9];
console.log(p, q, r);
// output : 8 9 undefined

const [aa = 1, ab = 1, ac = 1] = [5, 6];
console.log(aa, ab, ac);
// output : 5 6 1
