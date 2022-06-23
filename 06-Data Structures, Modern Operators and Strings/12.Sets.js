// 115. Sets
// Set benzersiz değerlerden oluşan koleksiyondur ve hiçbir zaman kopyalanamaz.
// Koleksiyonlar kopyalanmaz.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
// Output : Set(3) {"Pasta", "Pizza", "Risotto"}

console.log(new Set('Tolga'));
// Output : Set(5) {"T", "o", "l", "g", "a"}

console.log(ordersSet.size);
// 3

console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// Yeni eleman ekleme
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Silme
ordersSet.delete('Risotto');
console.log(ordersSet);

// Tüm elemanları Silme
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// Array to Set
const staffUnique = new Set(staff);
console.log(staffUnique);

// Set olan bir veriyi diziye dönüştürme
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2);

console.log(new Set('tolgatopkac').size);
// 8
