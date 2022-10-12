// 4.  
// Parašykite programą, kuri:
// Paprašyti įvesti prisijungimo vardą ir slaptažodį
// Jei vardas admin, slaptažodis turi būti “master”
// Jei vardas ne admin - tai slaptažodis yra: vardas ir skaičius 11. Pvz.: username: andrius, psw: andrius11
// “Sveiki, admin” arba “Neteisingas slaptažodis”
// Jei neiįvedė nieko - “Viso gero!”

// let askforID = prompt('iveskite prsijungimo varda');

// let pasw = "slaptazodis";
// let prisijungimas = `prisijungimo vardas: ${askforID}
// slaptazodis: ${pasw}`;
// let prisijungimas = {vardas: "vardas", pasw: "slaptazodis"}



// if (askforID === 'admin'){
//   console.log(
//     `prisijungimo vardas: ${askforID}
//   slaptazodis: master`);
// console.log('sveiki admin');
// } else {
//   console.log(
//   `prisijungimo vardas: ${askforID}
// slaptazodis: ${askforID}11`);
// }

'use strict'


let username = 'admin';
let password = 'master1';
// username = 'James';
// password = 'James11';
username = prompt('username');
password = prompt('password');

if (username === '') {
  console.log('viso gero');
} else if (username === 'admin') {
  if (password === 'master') {
    // username === 'admin'
    // password === 'master'
    console.log('hello admin');
  } else {
    console.log('neteisingas slaptazodis');
  }
} else if (password === `${username}11`) {
  // username !== 'admin'
  // password === username11
  console.log(`welcome back ${username}`);
} else {
  console.log('neteisingas slaptazodis');
}