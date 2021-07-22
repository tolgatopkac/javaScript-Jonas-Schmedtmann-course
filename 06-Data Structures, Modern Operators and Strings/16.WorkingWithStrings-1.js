// 120. Working With Strings - Part 1

const airline = 'Turkish Airlines';
const plane = 'A320';

console.log(plane[0]);
// OUTPUT : A
console.log(plane[1]);
// OUTPUT : 3
console.log(plane[2]);
// OUTPUT : 2

console.log('B737'[0]);
// Output : B

console.log(airline.length);
// Output 16
console.log('B737'.length);
// Output 4

// ----------------------------------------------------------
// METHODS
console.log(airline.indexOf('r'));
// Output : 2
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Airlines'));
// Küçük büyük harfe duyarlıdır. Airlines kelimesini ilk harfini küçük yazarsan -1 değerini döndürür.

console.log(airline.slice(4));
// output : ish Airlines

// baştan 4. harften itibaren keser.
// ilk girilen parametre başlangıç parametresidir.
console.log(airline.slice(8, 15));
// output : Airline

console.log(airline.slice(0, airline.indexOf(' ')));
// Output : Turkish
console.log(airline.slice(airline.indexOf(' ') + 1, 15));
// Output : Airline

console.log(airline.slice(-2));
// - kullanıldığında sondan başlar
// output : es

console.log(airline.slice(1, -1));
// output : urkish Airline

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
// output : you got the middle seat

checkMiddleSeat('23C');
// output : You got lucky

checkMiddleSeat('3E');
// output : you got the middle seat

console.log(new String('tolga'));
// mevcut methodları bu şekilde görebilirsin.
console.log(typeof new String('tolga'));
// output : object
