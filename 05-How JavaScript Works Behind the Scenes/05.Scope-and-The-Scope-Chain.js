// 92. Scope and The Scope Chain

//!Execution Context
// -- Variable environment
// -- Scope chain
// -- this keyword

// SCOPING AND SCOPE IN JAVASCRIPT: CONCEPTS
// https://drive.google.com/file/d/1Q6TtoauLv_vy5ve30Dx7_Qz6QF5Urfwr/view?usp=sharing

// Scoping : Programımızın değişkenlerinin nasıl kontrol edildiğini belirler.  Değişkenler nerede yer alır ve bu değişkenlere nerede erişebiliriz veya nerede erişemeyebiliriz gibi sorulara yanıt verir.

// Lexical scoping : Lexical Scope, iç içe geçmiş bir işlev grubunda, iç işlevlerin değişkenlere ve kendi ana kapsamlarındaki diğer kaynaklara erişebileceği anlamına gelir. Bu, içte bulunan fonksiyonların üstte bulunan fonksiyonların yürütme bağlamına sözcüksel olarak bağlı olduğu anlamına gelir. Lexical Scope bazen Static Scope olarak da adlandırılır.

// Scope: Bir değişkenin oluşturulduğu alan. Bu alan global scope, fonksiyon scope veya block scope olabilir.

// Scope of a variable : bir değişkenin kapsamı, kodumuzun bir değişkene erişebildiği bölge.

// THE 3 TYPES OF SCOPE
// https://drive.google.com/file/d/1AlXOr80SuhvxTZgFmW3o1cmnfgF9TBEl/view?usp=sharing

// GLOBAL SCOPE :
// --- Herhangi fonksiyon veya bloğun dışında her alır.
// ---Global da tanımlanan değişkenler her yerden erişilebilir.

// FUNCTION SCOPE
// Her fonksiyon bir scope oluşturur.
// Fonksiyon içinde tanımlanan her değişken sadece fonksiyon içerisinde erişilebilir.
// Diğer adıyla local scope da denilebilir
// Local variables bir fonksiyonun içinde yaşar.
// Arrow func, declarations, expression her fonksiyon tipi kendi scope alanını oluşturur.

//BLOCK SCOPE (ES6)
//  {} küme parantezlerin arasında her şey block scope oluşturur.
// if ifadesi, for döngüsü gibi
// block içinde bildirilen her değişken sadece block içerisinde erişilebilir, bu sadece let ve const ile tanımlanan değişkenler için geçerlidir.
// Sadece let ve const oluşturuldukları blokla sınırlıdır.
// Var ile tanımlanan değişkenler block dışarısında erişilebilir, mevcut fonksiyonun veya global scope un kapsamına dahil olur.

// The Scope Chain
// https://drive.google.com/file/d/1u80IcE5VNiZfbRylNOPBklhHH84R-SsP/view?usp=sharing
// !! Her scope 'un kendi dışında yer alan kapsamlara erişme imkanı vardır. İç içe oldukları sürece en içerdeki dışarıya doğru erişim sağlayabilir.
// !! Bir scope un belirli bir değişken kullanması gerekiyorsa, ancak mevcut scope da bu değişken yer almıyorsa scope chain içinde arayışa çıkar. İçie scopelarda ilgili değişken aşağıda yukarıya doğru erişilebilir, Yukarıdan aşağıya değişkenlere erişilemez.

// SCOPE CHAIN VS. CALL STACK
// https://drive.google.com/file/d/153biVCGxmqWzz06VfT3lvMA4kkez2iJd/view?usp=sharing

//! Write Summary ?
// --1) Scoping, Değişkenlerin hangi kapsamlar içinde yer aldığını (block, function ya da global) sorar veya Biz bu değişkenlere nereden ve nasıl erişebileceğimiz sorusuna yanıt arar.
// --2) JavaScript de 3 tür scope vardır. Global, functions and blocks
// --3) Sadece let ve const değişkenleri block scope kapsamındadır. var, block scope içine dahil olmaz, block scope'un içinde yer alsalar bile içinde yer aldıkları fonksiyonun  alanına dahil olurlar.
// --4) Bir değişken belirli bir alana dahil değilse, engine içerden dışarıya doğru arayışa çıkar buna variable lookup ismi verilir. En dışardan en içe değişkenlere erişilemez. Variable lookup tek yönlüdür. İçten - dışa
