const firstName = 'Matilda';

const tolga = {
  firstName: 'Tolga',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    /*     const self = this; //self or that
    const isMillenial = function () {
      console.log(self);
      // console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    }; */

    //    Solution 2
    const isMillenial = () => {
      console.log(this);

      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  //   greet: () => console.log(`Hey ${this.firstName}`),
  //   nesnedeki değil de global scope'da tanımlanan firstName değişkene ulaşır, global scope'da firstName yer almaz undefined çıktısı döndürür.

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

tolga.greet();
// OUTPUT : 'Hey undefined'
// Arrow function'da kullanılan this keyword global scope ulaşır.
// Arrow fonksiyonları methodlarda kullanma, fonksiyon expression kullan.
// Arrow function expression functiona çevrildiğinde Hey Tolga çıktısını verir.

tolga.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
// Output : [Arguments] { '0': 2, '1': 5 }
addExpr(2, 5, 8, 12);
// Output : [Arguments] { '0': 2, '1': 5, '2': 8, '3': 12 }

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
// OUTPUT : ERROR, arguments is not find
