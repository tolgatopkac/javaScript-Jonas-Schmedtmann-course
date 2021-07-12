//JavaScript is a high-level object-oriented, multi-paradigm programming language.

// The role of JavaScript in Web Development
// -- HTML(nouns) > content
// -- CSS(adjectives) > Presentation
// -- JavaScript(Verbs) > Programming Language building web applications

// -- Dynamic effects and web applications in the browser  (React, Angular, Vue)  -- Front-end apps
// -- Web Applications on web servers (node.js) -- Back-end apps
// -- Native mobile applications (react native, ionic)
// -- Native desktop applications (electron)

//------------------------------------------------------------------------------
//-- Değişken tanımlarken sembol olarak izin verilen '_' ve '$' kullanabilirsin.
//-- $function ya da _funciton gibi

//------------------------------------------------------------------------------
// 12. Data Types
//Object or Primitive Values
//Bir değer nesne olmadığında yalnızca primitive olabilir.
//number, string, boolean, undefined, null, symbol and bigInt
//1) Numbers*** : used for decimals and integers (let age = 23)
//2) String*** : used for text (let firstName = 'Tolga')
//3)Boolean*** : used for taking decisions (let fullAge = true) boolean is always either true or false.
//4) Undefined: 'empty value' (let children)
//5) null :  'empty value'
//6) Symbol (ES2015) : Value that is unique and cannot be changed [NOT USEFUL FOR NOW]
//7) BigInt (ES2020) : larger integers than the Number type can hold

//NOT*** : JavaScript'de dinamik yazma(dynamic typing) adı verilen bir özelliğe sahip yeni bir değişken oluşturduğunda veri türünü tanımlaman gerekmez ve bu durum içerdiği değere bağlıdır. JavaScript'de değişkenin türü olmaz, değerin türü olur. JavaScript otomatik olarak o değerin türünü belirler. (value has type, NOT variable) İşin özü değişkenler türü(data type) belli olan değeri depolar.

//------------------------------------------------------------------------------

// 13. let, const and var
//Not*** : Hangisini ne zaman kullanmalıyım ?
//--Temiz bir kod yazmak ve değişken değerinin ilerleyen zamanlarda değişmeyeceğine emin olduğun zaman her zaman 'const' kullan.
//--var değişken tanımlamanın eski yoludur, gerek duymadığın sürece kullanma.
//-- let block scope ve var function scope ikisinin arasındaki fark budur. Kursun ilerleyen bölümlerinde bunun hakkında detaylı bilgi sahibi olacaksın.

//------------------------------------------------------------------------------

// 18. Taking Decisions: if / else Statements
// --- if/else statements aralığında oluşturulan her süslü parantez bir blok ifade eder. Let ile bu blockların içinde tanımlanan değişkenlere dışarıdan erişemezsin. Fakat dışarıda tanımlayıp içeride işleme sokarsan, dışarda tanımlanan içerde değişikliğe uğrayıp dışarıya yansıtır.

//------------------------------------------------------------------------------

// 20. Type Conversion and Coercion

// Type Conversion :  bir değişkeni veya değeri manuel olarak farklı bir veri türüne dönüştürmek.
// Type Coercion : javaScript'in kendisine ait olan özelliktir, değişken veya değerin durumuna göre otomatik olarak veri türü belirlenir. '+' operatorü stringlerin arasında yer alırsa birleştirme görevi görür. Haliyle number ifadeyi otomatik olarak string çevirir.

// 21. Truthy and Falsy Values
//Falsy değerleri boolean değerinde karşılaştırma yapıldığında 'false' sonucu elde edilir.
//5 tane Falsy değeri mevcuttur : 0, '', undefined, null, NaN
//Geriye kalan tüm değerler true döndürür.

//------------------------------------------------------------------------------

// 27. Statements and Expressions

// Expression : bir kod parçasıdır ve değer üretir.
// Statements : Cümleler gibidir, bizim eylemlerimizi tercüme eder. Mesela if/else değer üretmezler, yani programın gerçekleştirmesini istediğimiz eylemle.

//------------------------------------------------------------------------------

// 28. The Conditional (Ternary) Operator

// Not!!!  : Template literals içinde if / else kullanamazsın fakat Ternary operator kullanabilirsin. `
// Yani console.log(`${if(...){....}else {....}}`) bu çalışmaz
// fakat conslo.log(`${let login = age>20 ? 'büyük' : 'küçük'}`) bu çalışır !!

//------------------------------------------------------------------------------

// 30. JavaScript Releases: ES5, ES6+ and ESNext
// pdf'e bak
