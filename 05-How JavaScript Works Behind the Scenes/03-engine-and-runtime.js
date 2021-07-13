'use strict';
// 90. The JavaScript Engine and Runtime
// -- What is that engine ?
// -- What is a JavaScript runtime ?
// -- How is JavaScript code translated to a machine code ?

// ---
// What is a javaScript engine ?
// -- Basitçe JavaScript kodunu kodunu çalıştıran bir bilgisayar programı, bu yaparken izlediği bazı adımlar vardır.
// Her tarayıcının kendine özgü JavaScript motor vardır.
// -- Chrome = V8 Engine
// Bir javaScript motorunda call stack ve heap yer almaktadır.
// -- Call stack : kodun yürütüldüğü yer
// -- Heap : yapılandırılmamış bir bellek havuzu, uygulamamızın ihtiyaç duyduğu tüm nesneleri saklar.
// https://drive.google.com/file/d/1y3WgBHt-QNaVza-zkJBdi9rlLmUOgRtx/view?usp=sharing

// How the code is compiled to machine code ?
// Kodumuz makine koduna nasıl dönüştürülür ?
// Compilation : Derleme
// Interpretation : Yorumlama
// --Compilation : tüm kaynak kodunun bir kerede makine koduna dönüştürülmesi.
// --Interpretation : Kodun satır satır yürütülmesi, eskiden JavaScript'in kullandığı fakat buydu fakat yavaş olması sebebiyle daha sonradan geliştirildi.
// --Just-in-Time(JIT) Compilation : Tüm kdoun bir kerede makine koduna dönüştürülüp çalıştırılması.
// https://drive.google.com/file/d/1HOv35oO50FtpGBfFjczjXN3CRU2vd30s/view?usp=sharing

// MODERN JUST-IN-TIME COMPILATION OF JAVASCRIPT
// https://drive.google.com/file/d/1j9U1xP0sVmu9zBJNbcfZmAKLMxN6ivnF/view?usp=sharing
// --1)Parsing : JavaScript motoruna giren bir kodun ilk adımı kodun ayrıştırılması, kodun okunması
// --2)Compilation : İlgili kodun Makine kodunda derlenmesi, derlenen kodun hemen yürütülür

// JavaScript Runtime
// https://drive.google.com/file/d/1Sqik-53CfsXB-K9bZSxRjyVjvcDnPYcT/view?usp=sharing
// -Runtime 'ı büyük bir kutu olarak düşün ve bu kutuda JavaScript'i tarayıcıda kullanmak için her şey yer almaktadır.
// Engine yoksa runtime olmaz.
// Runtime çalışması için engine yeterli değildir,ayrıca web API 'lara da erişilmeli
// JavaScript global nesneleri ile API:'LARA erişim sağlar.
// Event loop callback fonksiyonları call back kuyruğundan alıp call stack'e yerleştirir.
// https://drive.google.com/file/d/1hjNeYpBj6r_bPC_WQTRVeQbqyiMJNAyT/view?usp=sharing
