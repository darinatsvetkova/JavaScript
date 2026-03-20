//Napište algoritmus, který načte od uživatele libovolný text.
//  Tento text vypište znak po znaku. (text bude v konzoli vypsán písmeno po písmenu pod sebou)

let text = prompt("Zadejte text:")
for(let i = 0; i < text.length; i++){
    console.log(text[i]);
}

//Napište algoritmus, který načte od uživatele libovolný text.
//  V textu převeďte každé písmeno po mezeře na velké písmeno a odstraňte mezery a tečky. 
// První písmeno bude také velké. (Např. ahoj světe -> AhojSvěte)

let text = prompt("Zadejte text:");
let newText = "";
let velke = true ;

for(i = 0; i < text.length; i++){
    let char = text[i];
 if(char === " " || char === "."){                
    velke = true; 
    continue;
 }
if(velke){
    newText += char.toUpperCase();
    velke = false;
}
else{
    newText += char.toLowerCase();
}
}

/*Převeďte text `Conrad$,Corner,18,Hiddenite\r\nMindi$,Taplin,42,Ashippun\r\nJacquetta$,Chirico,23,
Ashippun\r\nRubin$,Vath,36,Mattapoisett Center\r\nTracey$,Brawley,45,Black Canyon City\r\nAdella$,Zuccaro,32,
Russell Gardens\r\nJeffie$,Vrooman,34,Arispe\r\nSusanne$,Luu,48,Knik\r\nMarcel$,Corner,43,
Waialua\r\nWinona$,Fountain,31,Black Canyon City` na řádky se sloupci (pole polí), kde řádky jsou oddělené "\r\n" a sloupce čárkou.*/

let text = `Conrad$,Corner,18,Hiddenite\r\nMindi$,Taplin,42,Ashippun\r\nJacquetta$,Chirico,23,Ashippun\r\nRubin$,Vath,36,Mattapoisett Center\r\nTracey$,Brawley,45,Black Canyon City\r\nAdella$,Zuccaro,32,Russell Gardens\r\nJeffie$,Vrooman,34,Arispe\r\nSusanne$,Luu,48,Knik\r\nMarcel$,Corner,43,Waialua\r\nWinona$,Fountain,31,Black Canyon City`;
let radky = text.split("\r\n");
let data = radky.map(radek => radek.split(","));

//Opravte všechna jména, aby neobsahovala na konci "$".

let text = `Conrad$,Corner,18,Hiddenite\r\nMindi$,Taplin,42,Ashippun\r\nJacquetta$,Chirico,23,Ashippun\r\nRubin$,Vath,36,Mattapoisett Center\r\nTracey$,Brawley,45,Black Canyon City\r\nAdella$,Zuccaro,32,Russell Gardens\r\nJeffie$,Vrooman,34,Arispe\r\nSusanne$,Luu,48,Knik\r\nMarcel$,Corner,43,Waialua\r\nWinona$,Fountain,31,Black Canyon City`;
for(let i = 0; i < data.length; i++){
    data[i][0] = data[i][0].replace("$", "");
}
 //Získejte všechna jména a vypište je velkými písmeny do konzole. Jména, která budou vypsaná vždy jen jednou, oddělte čárkou.
 let jmena = [];
 for(let i = 0; i < data.length; i++){
    let jmeno = radek[i][0].toUpperCase();
 }
    if(!jmena.includes(jmeno)){
        jmena.push(jmeno);
    }
console.log(jmena.join(","));