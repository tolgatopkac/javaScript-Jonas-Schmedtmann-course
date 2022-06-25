/* 151. Computing Usernames */
// Steven Thomas Williams to stw
// side effect
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
}

createUsernames(accounts);
console.log(accounts);