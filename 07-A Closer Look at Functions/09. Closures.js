// 136. Closures
// TEKRARLA - Özellikle pdf'in özet kısmına bak
//bir fonksiyon kendi kapsamı dışındaki bir değişkeni kullanıyorsa ve bu fonksiyon başka bir kapsamdan çalıştırılsa bile o değişkene hala erişimi vardır.

// Closures açıkça kullanılan bir özellik değildir.
// Manuel olarak oluşturulmaz.Otomatik olarak gerçekleşir.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// OUTPUT :

// 1 passengers
// 2 passengers
// 3 passengers
// 23.06.22 Tekrar tekrar etmem gerekiyor.
// Booker fonksiyonu yolcu sayısını arttırdı.
// SecureBooking Fonksiyonu çalıştırmayı bitirmişken nasıl olur da booking fonksiyonu yolcu sayısını arttırdı ? 
// aşağıdaki dosyalara göz at. 



// https://drive.google.com/file/d/1LRxncMmw_vz9xQK2UYSTQI13vTVb2quj/view?usp=sharing
// https://drive.google.com/file/d/1iIBgmek_EcUT7TruW5nyrnP3HbU6VFbZ/view?usp=sharing
// https://drive.google.com/file/d/1cDBEd5nXpUAaKbKwCMfQY8PS-6zeklWA/view?usp=sharing

console.dir(booker);
// Closure fonksiyonun kendisini gösterir.
