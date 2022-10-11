'use strict'


// IF UZDUOTIS SU AMZIUMI

//  IF; IF ELSE;


const marriedEl = document.getElementById('married');

const notMarriedEl = document.getElementById('notMarried');

const btnEl = document.getElementById('btn');



function calculate () { 

if (amzius.valueAsNumber < 0 ) {
  console.log('netinkamas skaicius');
  resultEl.textContent = ('netinkamas skaicius')

} else if  (amzius.valueAsNumber < 18 ) { 
  console.log('vaikas');
  resultEl.textContent = ('vaikas');

} else {
  console.log('suauges');
  resultEl.textContent = ('suauges');
}

}

btnEl.onclick = calculate; 

console.log(amzius);

