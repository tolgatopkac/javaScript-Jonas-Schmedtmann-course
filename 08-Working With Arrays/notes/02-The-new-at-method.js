/////////////////////////////////////////////////
// 143. The new at Method
const arr = [23, 11, 64]
console.log(arr[0]);
// 23
console.log(arr.at(0));
// 23

// getting last array element
console.log(arr[arr.length - 1]);
// 64
// at method
// 64
// slice method
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));

console.log(arr[-1]);
// undefined
console.log(arr.at(-1));
// 64