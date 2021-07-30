'use strict';
// 127. Default Parameters
const bookingS = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 DEFAULT PARAMETRES
  /*  numPassengers = numPassengers || 1;
  price = price || 199; */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingS.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', 1000);
