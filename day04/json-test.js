let user = {id: "jss", pw: "1234", name: "정상식"};
let userJSON = JSON.stringify(user);

console.log(userJSON);
user = JSON.parse(userJSON);
console.log(user);