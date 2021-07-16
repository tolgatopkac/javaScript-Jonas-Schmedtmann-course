// 105. The Spread Operator (...)
'use strict';

// Starter data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1} , ${ing2} and ${ing3} `
    );
  },
};

// Spread Operatorü
const arr = [7, 8, 9];
// bir dizinin elemanlarını başka bir diziye eklersen aşağıdaki gibi yapabilirsin, for döngüsü kullanabilirsin...
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// ya da spread operatörü kullanılabilir.
console.log(badNewArr);
// Output : [1, 2, 7, 8, 9]
// Spread operaötür bir dizinin içindeki tüm elemanları alır,
const newArr = [1, 2, ...arr];
console.log(newArr);
// Output : [1, 2, 7, 8, 9]
console.log(...arr);
// Output : 7 8 9
// Spread operatörü bu şekilde bir dizinin elemanlarını alır ve ayrı ayrı yazdırır. Önemli nokta bu elemanları dizinin içerisinden çıkartır.
console.log(arr); // [7, 8, 9]
console.log(...arr); //7 8 9

// ---
// starter data
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// Output :  ["Pizza", "Pasta", "Risotto", "Gnocci"]

// ----------------------------------
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Output :  ["Pizza", "Pasta", "Risotto"]

// ----------------------------------
// Join 2 arrrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// Output : (7) ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Iterables : arrays, strings,maps,sets. Not OBJECT

const str = 'Tolga';
const letters = [...str, ' ', ' ', 'T.'];
console.log(letters);
// Output : (8) ["T", "o", "l", "g", "a", " ", " ", "T."]
console.log(...str);
// T o l g a
// console.log(`${...str}`);  //Burda çalışmaz !

// EXERCISE - Dakika 12 : 40
// REAL WORLD EXAMPLE
// starter data'ya yeni veri eklendi
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

// Bunu yazmak yerine spread operator kullan
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// OBJECTS
// Bu örnekte daha önce oluşturulmuş bir nesnenin elemanlarını yeni oluşturulan bir nesneye spread operatörü ile yerleştirildi.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Spread operatörü ile bir nesneyi kopyalama
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //Ristorante Roma
console.log(restaurant.name); //Classico Italiano
