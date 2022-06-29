// 179. Internationalizing Numbers (Intl)

const num = 3884764.23;

// sayıları biçimlendirme
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping:false,
}


console.log('US:       ', new Intl.NumberFormat('en-US', options).format(num));
// US:  3,884,764.23
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// Germany:  3.884.764,23
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
// Syria:  ٣٬٨٨٤٬٧٦٤٫٢٣
console.log('Turkey: ', new Intl.NumberFormat('tr-TR', options).format(num));
// Turkey: 3.884.764, 23
console.log('Browser: ', new Intl.NumberFormat(navigator.language).format(num));