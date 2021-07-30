// 128. How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const tolga = {
  name: 'Tolga Topkaç',
  passport: 12344,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12344) {
    alert('Check in ');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, tolga);
// console.log(flight);
// console.log(tolga);

// output :
/* name: 'Mr. Tolga Topkaç';
passport: 12344;
 */

// Is the same as doing
// const flightNum = flight;
// const passenger = tolga;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(tolga);
checkIn(flight, tolga);

// Sahip olduğumuz nesneyi manipüle eden 2 fonksiyonum var. Biri nesnenin adını değiştiriyor diğeri ise passport değişkenini değiştiriyor.

// JavaSCript 'de referans yoluyla geçişi yoktur, referantan referansa geçiyor görünse de sadece değere geçiş sağlar.???????
//
