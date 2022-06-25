// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function (currentValue, key, map) {
  console.log(`${key}: ${currentValue}`);

})

// OUTPUT
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling


// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (currentValue, _, map) {
  console.log(`${currentValue}: ${currentValue}`);
})

// USD: USD
// GBP: GBP
// EUR: EUR