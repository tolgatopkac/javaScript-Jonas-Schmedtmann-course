// 175. Creating Dates

/*
// Create a date 
const now = new Date()
console.log(now);
// Sat Jun 25 2022 19:12:01 GMT+0300 (GMT+03:00)




console.log(new Date('Jun 25 2022 19:12:01'));
// Sat Jun 25 2022 19:12:01 GMT+0300 (GMT+03:00)
console.log(new Date('December 24, 2015'));
// Thu Dec 24 2015 00:00:00 GMT+0200 (GMT+03:00)


console.log(new Date(2037, 10, 19, 15, 23, 5));
// Sun Nov 19 20237 15:23:05 GMT+0300 (GMT+03:00)
console.log(new Date(0));
// Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Sun Jan 04 1970 02:00:00 GMT+0200 (GMT+03:00

*/
// Working with dates
const future = new Date(2037, 10, 19, 15, 23)
console.log(future);
// Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00)
console.log(future.getFullYear());
// 2037
console.log(future.getMonth());
// 10
console.log(future.getDate());
// 19
console.log(future.getDay());
// 4
console.log(future.getHours());
// 15
console.log(future.getMinutes());
// 23
console.log(future.getSeconds());
// 0
console.log(future.toISOString());
console.log(future.getTime());
// 2142246180000

console.log(new Date(2142246180000));
// Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00)

future.setFullYear(2040);
console.log(future);
// Mon Nov 19 2040 15:23:00 GMT+0300 (GMT+03:00)