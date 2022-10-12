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

console.log('psw!!!');

let username = prompt('admin');
let password = prompt('adam11');

if (username === '') {
  console.log('viso gero!');
  // jeigu username = tuscia, tuomet, gauname viso gero.
} 
else if (username === 'admin') 
{ 
  // jeigu username = admin,
  if (password === 'master') {
    console.log('hello admin!');
  // ir jeigu password = master, gauname hello admin.
  } else {console.log('neteisingas slaptazodis');
  // kitu atveju, gauname neteisingas slaptazodis.
  }
} 
else if (password === `${username}11`)
// jeigu username != admin, password = username11, tuomet gauname sveiki username;
{
    console.log(`sveiki ${username}`);
  } 
  // arba gauname neteisingas slaptazodis;
  else {
    console.log('neteisingas slaptazodis');
  }
