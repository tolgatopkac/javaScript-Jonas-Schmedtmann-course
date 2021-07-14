// 100. Primitives vs. Objects in Practice

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// Output : Davis, Williams

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
// OUTPUT :
// Before marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }
// After marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'bob'],
};

// Tüm özelliklerini kopyalandığı yeni nesne oluşturma
const jessicaCopy = Object.assign({}, jessica2);
// not : bu şekilde yapılan kopyalamada, jessica2 nesnesine yeni özellik eklendiğinde jessicaCopy içinde geçerli olur
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
// OUTPUT :
// Before marriage { firstName: 'Jessica', lastName: 'Williams', age: 27 }
// After marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
// Bu şekilde hem jessica2 hemde jessicaCopy nesnesine aile üyesi ekledi
