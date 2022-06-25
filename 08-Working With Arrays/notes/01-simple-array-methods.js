/////////////////////////////////////////////////
// NOTES !
// Methods are simply functions that we can call on objects. They are functions attached to objects
// If we have array methods that means that arrays themselves are also objects
/////////////////////////////////////////////////
// 142. Simple Array Methods


let arr = ['a', 'b', 'c', 'd', 'e']

// SLICE METHOD : orijinal diziyi değiştirmeden dizinin bir bölümünü alır. Bu yüzden slice adı verilir yeni bir dizi döndürür.
console.log(arr.slice(2));
// ['c', 'd', 'e'];

console.log(arr.slice(2, 4));
// ['c','d'];

console.log(arr.slice(-2));
// ['d','e'];

console.log(arr.slice(-1));
// ['e']


console.log(arr.slice(1, -2));
// ['b','c']

console.log(arr.slice());
// ['a', 'b', 'c', 'd', 'e']


// SPLIT METHOD : slice methodundan farklı olarak orijinal diziyi değiştirir.
// console.log(arr.splice(2));
// ['c','d','e'];
console.log(arr);
// ['a', 'b']

arr.splice(-1)
console.log(arr);
// ['a', 'b', 'c', 'd']

arr.splice(1, 2)
console.log(arr);
// ["a","d"]

// REVERSE : 
arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
// ['f', 'g', 'h', 'i', 'j']

// CONCAT 
const letters = arr.concat(arr2)
console.log(letters);
// alternative (spread)
console.log([...arr, ...arr2]);
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


// JOIN
console.log(letters.join(' - '));
// a - b - c - d - e - f - g - h - i - j