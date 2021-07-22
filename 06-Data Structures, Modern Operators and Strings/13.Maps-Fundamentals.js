// 116. Maps: Fundamentals
// Maps : bir veri yapısıdır, keys ve values erişmek için kullanılan. Tıpkı nesneler gibi key values şeklinde depolanır.
// Her zaman güncel çıktıyı verir.
const rest = new Map();
rest.set('name', 'Classico Italian');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name')); // Classico Italian
console.log(rest.get(false)); // We are closed
console.log(rest.get(true)); // We are open

const time = 7;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);
rest.clear();
