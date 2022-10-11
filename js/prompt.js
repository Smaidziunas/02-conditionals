// praso vartotojo ivesti varda
let sk1 = prompt('pasirinkite pirma skaiciu');
let sk2 = prompt('pasirinkite antra skaiciu');
// console.log('sk1', sk1);
// console.log('sk2', sk2);

let resultEl = document.getElementById('result');


let sum = parseFloat(sk1) + parseFloat(sk2);

confirm('ar tikrai?')

resultEl.textContent = sum;

console.log(sum);

// Sukurkite kodą, kuris lankytoją ragina įvesti du skaičius ir parodo jų sumą.

// console.log();


// confirm('ar sutinkate') // ka grazina abiem atvejais