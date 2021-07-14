'use strict';

// 93. Scoping in Practice (TEKRAR)

// calcAge fonksiyonu global scope da tanımlandı.
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1998) {
      var millenial = true;
      const firstName = 'Steven'; // hem dışarıdaki hem de içerde aynı değişken adıyla bir veri tanımlandıysa aramaya çıktığında ne yakınındaki değişkene erişir.
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
    }
    // console.log(str); ERROR  str değişkeni const ile tanımlandığı için block scope dışında erişilemez.
    // console.log(millenial); //millenial değişkeni block scope içind var ile tanımlandığı için fonksiyonun içinde yer aldığı sürece her yerden erişilebilir.
    // add(2, 3); //ERROR block scope yani {} küme parantezlerin arasında yer alan fonksiyonlara onun dışında erişemezsin, bu durum yalnızca strict modunda geçerlidir.
    // console.log(output); //NEW OUTPUT
  }
  printAge();
  return age;
}

// global variable
const firstName = 'Tolga';
calcAge(1997);

// console.log(age); //Error, age değişkenine global alanda erişilemez.
// printAge(); //Bir fonksiyonun içinde yer alan fonksiyouna global alanda erişilemez.
