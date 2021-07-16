// 104. Destructuring Objects
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
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// ----------------------------------------------------------

// Değişken isimlerini nesnenin içindekinden farklı şekilde adlandırma

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// nesnelerde default value, aynı zamanda isim değiştirme
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b);
// 23 , 7

// Nested Object
const { fri } = openingHours;
console.log(fri);
// output : {open: 11, close: 23}

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// output : 11 23

// değişken adlarını değiştirme
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
// output : 11 23

// -----TEKRARLA---- Dakika 13:00
// orderDelivery fonksiyonu oluşturuldu
// Bu örnek gerçek projeler için önemli,
// Bu tekniği tekrarla
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole',
  mainIndex: 2,
  starterIndex: 2,
});
// Output : Order received! Garlic Bread and Risotto will be delivered to Via del Sole at 22:30

restaurant.orderDelivery({
  address: 'Via del Sole',
  starterIndex: 1,
});
// output : Order received! Bruschetta and Pizza will be delivered to Via del Sole at 20:00
