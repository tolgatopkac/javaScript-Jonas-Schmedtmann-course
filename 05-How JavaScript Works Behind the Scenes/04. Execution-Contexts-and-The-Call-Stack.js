// 91. Execution Contexts and The Call Stack
// --What is execution context ?
// https://drive.google.com/file/d/1ADiBC9KKCqz4kYUVbYy36DJuGoxLqeOt/view?usp=sharing
// -- Execution context : Bir javaScript parçasının yürütüldüğü ortam, bazı kodların yürütülmesi için gerekli tüm bilgilier depolar.
// -- Sipariş edilen pizza örneği
// --Bir javaScript projesi ne kadar büyük olursa olsun yalnızca bir tane global execution context mevcuttur
// -- Her fonksiyon çağrısı için gerekli bilgileri içeren yeni execution context oluşturulur, fonksiyonu çalıştırmak için. Aynı durum methodlar için de geçerlidir. Methodlar nesnelere bağlı fonksiyonlardır.

// EXECUTION CONTEXT IN DETAIL
// https://drive.google.com/file/d/12gx-BhW4XLb0MHLBl2tgKrP07tuHmy42/view?usp=sharing
// -Execution context içeriğindeki ilk şey variable environment, burda tüm değişkenlerimiz ve fonksiyon declarations  saklanır. Ayrıca special arguments object bulunur.

// --Scope chain :

// --this keyword

// --- THE CALL STACK
// https://drive.google.com/file/d/1q8DGtyjBlz5DkxosD-bBz0ZNi8YFUAN_/view?usp=sharing
// Call Stack, bellek yığını (memory heap) ile birlikte JavaScript motorunun kendisini oluşturur.
// Call stack temelde yürütme bağlamların olduğu yer,üst üstte yığılır, en üstte yer alan şuan çalışandır. Görevini tamamladığında kaldırılır,
