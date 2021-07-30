'use strict';

// 135. Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// Immediately-Invoked Function Expression : Anlık çağrılan fonksiyon ifadesi
// async/await 'de bu durum çok sık kullanılır.

// Fonksiyonun başına ve sonunda parantez açarak, fonksiyonu herhangi bir değişkene kaydetmeden, çalıştırabilirsin.
// IIFE
(function () {
  console.log('This will never run again');
})();

// ARROW FUNC
(() => console.log('This will ALSO never run again'))();
