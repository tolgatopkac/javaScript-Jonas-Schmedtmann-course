/* 151. Computing Usernames */
//--------------------------------------------------------
// 1) SPLIT
// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ')
// console.log(username);
// Output :  ['steven', 'thomas', 'williams']
//--------------------------------------------------------
// 2)MAP
// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map(function (name) {
//   return name[0]
// })
// console.log(username);
// Output :  ['steven', 'thomas', 'williams']
// Output : ['s','t','w']
// ----------------------------------------------------------------
// 3)JOIN
// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map(function (name) {
//   return name[0]
// }).join("");
// console.log(username);
// Output : stw
// ----------------------------------------------------------------
// 3)ARROW FUNC
const user = 'Steven Thomas Williams';
const username = user.toLowerCase().split(' ').map(name => name[0]).join("")
console.log(username);
// Output: stw
