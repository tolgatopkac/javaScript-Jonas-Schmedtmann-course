// --------------------------------------------------------------------------------

// 32. Activating Strict Mode
// 'use strict'; modu aktive etmek için bunu yazman yeterli. Kod blockların içinde de kullanabilirsin fakat sayfanın başında kullanman daha doğru olur.
// --strict-mode : bazı şeyleri yapmamızı yasaklar ve kodumuzda gözükmeyen bazı hataların gözükmesini sağlar.

// --------------------------------------------------------------------------------

// 33.Function
// calling / running / invoking function : hepsi fonksiyonu çalıştırmak için kullanılan terimlerdir.

// --------------------------------------------------------------------------------

// 34. Function Declarations vs. Expressions

//Not! : Aralarındaki fark Declaration'da fonksiyonu tanımlamadan önce çağırabilirsin ve bu işleme -hoisting- adı verilir

// --------------------------------------------------------------------------------
// 35. Arrow Function
// Not !! : arrow fonksiyonlarda birden fazla parametreye sahip değilsen, return ifadesine gerek yok. Parametre sayısı az olduğunda kullanman kodun görünürlüğü açısından daha uygun olur.

// --------------------------------------------------------------------------------
// 36. Functions Calling Other Functions

//iç içe fonksiyon örneği, nasıl çalışır, ?

// --------------------------------------------------------------------------------

// 37. Reviewing Functions
// Fonskiyonlarla ilgili kavraman gereken görsel içerikler,
// ---İç içe fonksiyonların çalışma düzeni
// https://drive.google.com/file/d/1gDW3iRUleG2xwE-kPheZoDXbd9twfEho/view?usp=sharing
// ---Fonksiyon türleri
// https://drive.google.com/file/d/1jhSBDQo9wsg9Hfj_cZ5GHjfKuU32pbDV/view?usp=sharing
// ---Fonksiyonların anatomisi
// https://drive.google.com/file/d/1o4uwKlokVf6_Cr5FuLFKkDR6nDV0kFlN/view?usp=sharing

// --------------------------------------------------------------------------------
// 39. Introduction to Arrays

// !!! Not : Dizileri const ile tanımlayabilirsin ve daha sonra değiştirebilirsin, sadece primitive values const ile tanımlandığında değiştirilemez. (string, number, bigint, boolean, undefined, symbol and null)
// !!! Not : Const ile tanımaldığında  Dizinin içindeki elemanları değiştiebilirsin yeniden bir dizi oluşturamazsın.
// friends = ['A','B'] şeklinde yazarsan hata alırsın.

//---------------------------------------------------------------------------------------
// 40. Basic Array Operations (Methods)
//--Push : Dizinin Sonuna yeni bir eleman ekler, eğer bir değişkene kaydedilirse dizinin son eleman sayısını döndürür.

//--unshift: Dizinin başına yeni eleman ekler ve bir değişkene kaydedildiğinde dizinin son eleman sayısını döndürür.

//--Pop : diziye eklenmiş olan son elemanı siler, bir değişkene kaydedilirse silinen elemanı döndürür.

//-- Shift : Dizinin başındaki elemanı siler, bir değişkene kaydedilirse silinen elemanı döndürür.

// indexOf : Dizideki bir elemanın konum bilgisini verir, eğer o eleman dizide yer almıyorsa -1 değerini döndürür.

// includes : Bir elemanın dizide yer alıp almadığını döndürür, yer alıyorsa true, yer almıyorsa false değerini döndürür. True/false değeri döndürdüğü için if 'in içinde kullanılabilir.

//---------------------------------------------------------------------------------------

// 46. Iteration: The for Loop
// For döngüsü true değerini döndürene kadar çalışmaya devam eder.
