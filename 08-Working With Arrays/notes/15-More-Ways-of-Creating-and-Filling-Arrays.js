// Diziler programlı olarak nasıl oluşturur ve doldurulur

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(new Array(1, 2, 3, 4, 5));


// Array constructor function
const x = new Array(7);
console.log(x);
// (7) [boş × 7]
// console.log(x.map(() => 5));
// (7) [boş × 7]


// fill method 
// x.fill(1)
console.log(x);
// (7) [1, 1, 1, 1, 1, 1, 1]


// x.fill(1, 3)
// 3. indeks den itibaren diziye eleman ekler.
console.log(x);
// (7)[boş × 3, 1, 1, 1, 1]


// x.fill(1, 3, 5)
console.log(x);
// (7) [boş × 3, 1, 1, boş × 2]


const arr = [1, 2, 3, 4, 5, 6, 7]
// arr.fill(23, 4, 6)
console.log(arr);

//  [1, 2, 3, 4, 23, 23, 7]


// Array.from
const y = Array.from({ length: 7 }, () => 1)
console.log(y)
// [1, 1, 1, 1, 1, 1, 1]


const z = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(z);
// [1, 2, 3, 4, 5, 6, 7]

