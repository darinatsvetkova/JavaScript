/*Máte definovanou proměnou dec (přirozené číslo z desítkové soustavy). Vytvořte kód, který převede číslo dec do dvojkové soustavy (binárního zápisu).
Např. dec = 47, takže kód vypíše do konzole 47(10) = 101111(2).

let dec = 40;
let originalDec = dec;
let bin = "";

while(dec > 0) {
    bin = dec % 2 + bin;
    dec = Math.floor(dec / 2);
}
console.log(`${originalDec}(10) = ${bin}(2)`);





/*Máte definovanou proměnou bin (binární zápis přirozeného čísla). Vytvořte kód, který převede bin do desítkové soustavy na přirozené číslo.
Např. bin = "101111", takže kód vypíše do konzole 101111(2) = 47(10).

let bin = "101111";
let originalBin = bin;
let dec = 0;

for( let i = bin.length - 1; i >= 0; i--){
  let cifra = Number(bin[i]);
  dec = cifra * Math.pow(2, bin.length - 1 - i) + dec;

}
console.log(`${originalBin}(2) = ${dec}(10)`);

let bin = "101111";
let originalBin = bin;
let mocnina = 0;
let dec = 0;
for( let i = bin.length - 1; i >= 0; i--){
  let cifra = Number(bin[i]);
  dec = cifra * Math.pow(2, mocnina) + dec;
  mocnina ++;
}
console.log(`${originalBin}(2) = ${dec}(10)`);





Máte definovanou proměnou dec (přirozené číslo z desítkové soustavy). Vytvořte kód, který převede číslo dec do šestnáctkové soustavy.
Např. dec = 999, takže kód vypíše do konzole 999(10) = 3E7(16).

let dec = 510;
let originalDec = dec;
let hexaDec = "";
let hexDigits = "0123456789ABCDEF"

while(dec > 0){
    hexaDec = hexDigits[dec % 16] + hexaDec;
    dec = Math.floor(dec / 16);
}
console.log(`${originalDec}(10) = ${hexaDec}(16)`);





/*NAOPAK- z hexa do decimani soustavy 

let hexaDec = "";
let originalHexaDec = hexaDec;
let dec = 0;
let hexDigits = "0123456789ABCDEF";
let mocnina = 0;

for(let i = hexaDec.length - 1; i >=0; i--){
    let cifra = hexDigits.indexOf(hexaDec[i]);
    dec = cifra * Math.pow(16, mocnina) + dec;
    mocnina ++;
}
console.log(`${originalHexaDec}(16) = ${dec}(10)`)






/*SEČTETE ČISLA OD 1 DO 100 KTERA NEJSOU DELITELNA 5 

let sum = 0;
let cislo = "";
let counter = 1;

while(counter <= 110){
  cislo = counter % 5;
  if(cislo !== 0){
    sum += counter;
  } counter++;
   
  }
console.log(sum); 

let sum = 0;

for(let i = 1; i <= 100; i++){
  if(i % 5 !== 0){
    sum += i;
  }
}
console.log(sum); 



let cislo = 10;
let vysledek = 1;

for(let i = 1; i <= cislo; i++){   // let i = cislo; i > 0; i--   FUNGUJE TAKY ALE ODZADU NEJDRIVE 1 KRAT 10 ATD 
  vysledek = vysledek * i;
}
  console.log(vysledek);



 /* Vytvořte univerzální převaděč z desítkové soustavy do libovolné číselné soustavy:
Z uživatelského vstupu načtěte soustavu, do které chcete převádět a číslo, které chcete převádět.
Převedené číslo vypište v alert boxu.
Nejprve vytvořte převodník do soustav < 10. Poté < 36.
Rozšiřte převaděč o validaci vstupů. Např. "1a" není validní číslo desítkové soustavy. */


let vstupSoustava = parseInt(prompt("Zadejte soustavu do ktere chcete prevadet"));
let vstupCislo = parseInt(prompt("Zadejte cislo ktere chcete prevadet"));

if( isNaN(vstupSoustava) || isNaN(vstupCislo)){
  alert("Nevalidni vstup ")
}
if(vstupSoustava < 10){
  function prevodNaMensiSoustavu(vstupCislo, vstupSoustava){
    let vysledek = "";
    while(vstupCislo > 0){
      vysledek = vstupCislo % vstupSoustava + vysledek;
      vstupCislo = Math.floor(vstupCislo / vstupSoustava)
    }
       alert(vysledek);
  } 
    prevodNaMensiSoustavu(vstupCislo, vstupSoustava);
}
else if(vstupSoustava < 36){
  function prevodNaVetsiSoustavu(vstupCislo, vstupSoustava){
    let vysledek = "";
    let hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while(vstupCislo > 0){
      let zbytek = vstupCislo % vstupSoustava;
      if(zbytek >= 10){
        vysledek = hexDigits[zbytek] + vysledek;
      }
      else{
        vysledek = zbytek + vysledek;
      }
      vstupCislo = Math.floor(vstupCislo / vstupSoustava)
    }
    alert(vysledek);
  }
    prevodNaVetsiSoustavu(vstupCislo, vstupSoustava);
}
