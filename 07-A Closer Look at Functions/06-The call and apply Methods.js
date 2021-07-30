'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Tolga Topkaç');
lufthansa.book(635, 'John Smith');
// OUTPUT :
// Tolga Topkaç booked a seat on Lufthansa flight LH239
// John Smith booked a seat on Lufthansa flight LH635

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams');
// this keyword kullanımından dolayı bu şekilde değişkenin atanması bize hata olarak döner
// CALL METHOD
book.call(eurowings, '23', 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// APPLY METHOD
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// Apply methodu kullanıp yapmak yerine spread operatorü ve call methodu ile yaparsan daha doğru olur

book.call(swiss, ...flightData);
