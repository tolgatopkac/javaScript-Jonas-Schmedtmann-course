'use strict';

const airline = 'Turkish Airlines';

console.log(airline.toLowerCase());
// output : turkish airlines
console.log(airline.toUpperCase());
// output : TURKISH AIRLINES
console.log('tolga'.toUpperCase());
// output : TOLGA

// Fix Capitalization
const passenger = 'toLGa'; // Tolga
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// output : Tolga

// Comparing email
const email = 'hello@tolga.io';
const loginEmail = '  Hello@Tolga.iO \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replaceing
const priceTRY = '288,97₺';
const priceUSD = priceTRY.replace('₺', '$').replace(',', '.');
console.log(priceTRY); // 288,97₺
console.log(priceUSD); // 288,97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// Bu şekilde tek bir kelimeyi değiştirisin
// Output : All passengers come to boarding gate 23. Boarding door 23!
// Birden fazla kelime için kullanlacak method
console.log(announcement.replaceAll('door', 'gate'));
// output : All passengers come to boarding gate 23. Boarding gate 23!
// farklı bir yöntem
console.log(announcement.replace(/door/g, 'gate'));
// output : All passengers come to boarding gate 23. Boarding gate 23!

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); //true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Practice Exercise !!!!
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
