// 122. Working With Strings - Part 3

// SPLIT AND JOIN
console.log('a+very+nice+string'.split('+'));
// Output : ["a", "very", "nice", "string"]

console.log('Tolga Topkaç'.split(' '));
// Output :  ["Tolga", "Topkaç"]

const [firstName, lastName] = 'Tolga Topkaç'.split(' ');
console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));
// Output : Mr. Tolga TOPKAÇ

console.log(['Mr.', firstName, lastName.toUpperCase()].join('----'));
// Output :Mr.----Tolga----TOPKAÇ

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
// Jessica Ann Smith Davis

capitalizeName('tolga topkaç');
// Tolga Topkaç

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
// output : +++++++++++Go to gate 23!

// dizinin uzunluğu seçilen karekter ile 25e tamamlar.
console.log('Tolga'.padStart(25, '+').padEnd(30, '+'));
// output : ++++++++++++++++++++Tolga

// MASKING -  rakam gizleme
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(12312414211235));
// output : **********1235

console.log(maskCreditCard('1255123312414211235'));
// output : ***************1235

// Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

// Kurs boyunca önemli olanlardan bahsedildi daha fazlası için
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
