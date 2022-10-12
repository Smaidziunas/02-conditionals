'use strict'


// IF UZDUOTIS pasirinkti ar susituokes?

//  IF; IF ELSE;


const maritalEl = document.getElementById('familyStatus');

const resultEl = document.getElementById('atsakymas2');

const btnEl = document.getElementById('btn2');



function calculate () { 

if (maritalEl.value === 'married') {
  console.log('Vedes');
  resultEl.textContent = ('Vedes')

} else if (maritalEl.value === 'single') { 
  console.log('Ne vedes');
  resultEl.textContent = ('ne vedes');

} else {
  console.log('neveikia');
  resultEl.textContent = ('neveikia');
}

}

btnEl.onclick = calculate; 

console.log(maritalEl);