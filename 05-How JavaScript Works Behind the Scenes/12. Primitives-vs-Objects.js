// 99. Primitives vs. Objects (Primitive vs. Reference Types)
'use strict';
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge); //30
console.log(age); //31

// ----

const me = {
  name: 'Tolga',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
// Output : Friend {name: "Tolga", age: 27}
console.log('Me', me);
// Output : Me {name: "Tolga", age: 27}

// Primitives
// - Number, String, Boolean, Undefined, Null, Symbol, BigInt
//Objects
// Object literal, Arrays, Functions
// https://drive.google.com/file/d/1eGEtiD8Pv5zGFgTPkWz0xpsZ31XVlHpT/view?usp=sharing
// https://drive.google.com/file/d/1rt0nmye43rFY8T26_Yt5AgbNj7u79PBH/view?usp=sharing
