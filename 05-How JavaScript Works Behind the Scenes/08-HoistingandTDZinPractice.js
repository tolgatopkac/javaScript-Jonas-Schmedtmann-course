// 95. Hoisting and TDZ in Practice

// ---- VARIABLES ----

// console.log(me); // undefined
// console.log(job);  //ERROR
// console.log(birthYear); // ERROR

var me = 'Tolga';
let job = 'student';
const birthYear = '1997';

// Not : let ve const hoisting özelliği yoktur, fakat var hoisting şekilde erişilse bile undefined değerini döndürür.

// ---- FUNCTIONS ----

// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // ERROR fonksiyon tanımlamadan önce erişilemez.
// console.log(addArrow(2, 3)); // ERROR  fonksiyon tanımlamadan önce erişilemez.

// declaration
function addDecl(a, b) {
  return a + b;
}

// expression
const addExpr = function (a, b) {
  return a + b;
};

// arrow
const addArrow = (a, b) => a + b;

// ---- EXAMPLE ----

// Önemli not ! burda, numProduct 10 olmasına rağmen fonksiyondan önce atandığı için undefined değeri döndürmesi sebebiyle logic ifadede false değerini döndürür. Sepette ürün olmasına rağmen hoisting nedeniyle tüm ürünleri silen bir hatadır.
console.log(numProduct); //undefined
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// NOT :
// Bu durum büyük projelerde bulunması zor olan bir hataya sebep olabilir. Bu duruma sebep olmamak için değişkenleri her zaman const ve let ile tanımla. Var kullanmaktan kaçın.
// Clean code için değişkenlerini her zaman scope 'un başında tanımla.

// NOT 2 :
// -VAR - LET - CONST farkları

var x = 1;
let y = 2;
const z = 3;
// !- Var ile oluşturulan değişkenler window nesnesinde property yaratır.
console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); // false
