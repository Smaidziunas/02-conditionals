'use strict';


// 1. Sukurkime aplanką pavadinimu “Strings” ir jame inicijuokime du failus (1)index.html ir (2)script.js.

// 2.  Index.html faile patalpinime startinį kodą, kuriame būtų pirminiai, privalomi tag’ai (<html>, <head>, <body> su privalomais child tag’ai);

// 3.  Index.html failo <body> tag’o viduje susikurkime tuščią <div> turintį id=”main”;

// 4. index.html ir script.js susiekime „External JavaScript“ būdu (prieš </head> arba </body> tag’us);

// 5. Atsidarome script.js failą ir sukuriame kintamąjį “userInfoOutput”, kuriam priskiriame index.html faile esantį <div> su id=”main”;

// 6. Susikurkite objektą “user”, kuriam nurodykite šias savybes: vardas, pavardė;

// 7. Kintamąjam userInfoOutput naudojant “.innerHTML =” DOM nuosavybę ir atgalinius klavišus (backticks) t.y. , sukurkite H2 tag, kuris, nurodo “User Information” ir <p> tag’ą, kuriame pateiktas, toks sakinys “Vartotojo vardas yra (vardas), o pavardė (pavardę).”




const userInfoOutput = document.getElementById('main');

let user = {Vardas: 'John', Pavarde: 'Stevenson'};


// kuriam tag'us Html'e su ``; 
// idedam obeject kintamaji su ${} ;

let variable = `
<h2>User Information</h2>
<p>Vartotojo vardas yra <strong>${user.Vardas}</strong> pavarde yra <strong>${user.Pavarde}</strong>.</p>
`;


userInfoOutput.innerHTML = variable;

console.log(userInfoOutput.textContent);
