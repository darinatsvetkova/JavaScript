//1 Napište algoritmus, který vyhledá v poli největší hodnotu. Pozor, v poli mohou být i textové hodnoty, které byste měli ignorovat.


let pole = [5, 3, 8, 2, "ahoj", 10];
let nejvetsiHodnota = -Infinity; // 

for (let i = 0; i < pole.length; i++) {
    let hodnota = pole[i];

    if (typeof hodnota === "number" && hodnota > nejvetsiHodnota) {
        nejvetsiHodnota = hodnota;
    }
}

console.log(nejvetsiHodnota);


//2 Napište algoritmus, který seřadí položky v poli od největší po nejmenší. Uvažujte, že v poli jsou pouze čísla.

let pole = [5, 3, 8, 2, 10];
let newPole = [];

while (pole.length > 0) {

    let maxIndex = 0; //pole[maxIndex] = 5 

    for (let i = 1; i < pole.length; i++) {
        if (pole[i] > pole[maxIndex]) { 
            maxIndex = i;
        }
    }

    newPole.push(pole[maxIndex]); 
    pole.splice(maxIndex, 1);
}

console.log(newPole);
// NEBO 
let array = [3, 4, 2, 1, 6, 5];
array.sort();
console.log(array.reverse());

//3 Napište algoritmus, který z pole vybere pouze číselné hodnoty. Každou číselnou hodnotu vynásobí 5. Vrátí nové pole s výsledky. Vstup bude následující pole:

let array = [0, "ahoj", 5, 20, null, true, "svět", 185, -15];
let newArray = [];

for(let i = 0; i < array.length ; i++){
    if(Number.isInteger(array[i])){
        array[i] *= 5;
         newArray.push(array[i]);
    }
}
console.log(newArray);

/* 4) Projděme si další příklad ukazující několik technik najednou. Bude se jednat o analýzu rodného čísla. 
 Předpokládejme, že máme na vstupu rodná čísla a máme z nich poznat několik charakteristik daného člověka a to pohlaví a den a měsíc narození./  Nejprve si popišme rodné číslo. Rodné číslo se sestává ze dvou částí oddělených lomítkem, kde první část obsahuje stabilně 6 číslic vyjadřující datum narození a pohlaví dané osoby a část druhá obsahuje trojici nebo čtveřici čísel, jejichž význam není pro tuto aplikaci důležitý. 
 První část se má následující formát: YYMMDD, kde YY označuje poslední dvě číslice roku, MM měsíc a DD den. 
 Navíc ženám se k měsíci přičítá hodnota 50. Žena a muž narozeni např. (23.01.1998, jedná se o stejné datum), tedy mohou mít následující rodná čísla:
 žena: 985123/8144
 muž: 980123/8139
 Cílem programu je ze zadaného čísla zjistit pohlaví, den a měsíc narození respondenta. */

 let rodneCislo = "";
 let pohlavi = "";
 let prvniCisloMesice = parseInt(rodneCislo[2]);

 if(prvniCisloMesice > 1){
    pohlavi = "zena";
 }
 else{ pohlavi = "muz"}

 let denNarozeni = parseInt(rodneCislo[4] + rodneCislo[5]);
 let mesicNarozeni = parseInt(rodneCislo.substring(2, 4));
 if(pohlavi === "zena"){
    mesicNarozeni -= 50;
 }

 console.log(`Pohlavi: ${pohlavi}, den narozeni: ${denNarozeni}, mesic naroyeni: ${mesicNarozeni}`);

 //LEPSI VARIANTA 
 const rodneCislo = "985123/8144";

const mesicKod = Number(rodneCislo.slice(2,4));
const den = Number(rodneCislo.slice(4,6));

const pohlavi = mesicKod > 50 ? "zena" : "muz";
const mesic = mesicKod > 50 ? mesicKod - 50 : mesicKod;

console.log(`Pohlavi: ${pohlavi}, den narozeni: ${den}, mesic narozeni: ${mesic}`);

/*
1. Uložte si do pole dny v týdnu a následně je vypište ve formátu:
1 - pondělí
2 - úterý
...
7 - neděle
použijte obyčejný for cyklus
použijte metodu forEach
vypište dny v opačném pořadí */

let dnyVTydnu = ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"];

for(let i = 0; i < dnyVTydnu.length; i++){
    console.log(`${i + 1} - ${dnyVTydnu[i]}`);  
}

dnyVTydnu.forEach((den, index) => {
     console.log(`${index + 1} - ${dnyVTydnu[index]}`); 
});

for(let i = dnyVTydnu.length - 1; i >= 0; i--){
    console.log(`${i + 1} - ${dnyVTydnu[i]}`);
}

// Napište algoritmus, který vyhledá v poli nejmenší hodnotu. Pole může obsahovat i nečíselné hodnoty.

let pole = []
let nejmensiHodnota = pole[0];

for(let i = 1; i < pole.length; i++){
    if(typeof pole[i] === "number" && pole[i] < nejmensiHodnota){
        nejmensiHodnota = pole[i];
    }
}
console.log(nejmensiHodnota);

// Napište algoritmus, který na základě zadaného pole vrátí nové pole, které nebude obsahovat hodnoty menší než 10.

let pole = [];
let newPole = [];

for(let i = 0; i < pole.length; i++){
    if(typeof pole[i] === "number" && pole[i] >= 10){
        newPole.push(pole[i]);
    }
}
console.log(newPole);


//Napište algoritmus, který na základě zadaného pole vrátí nové pole, jehož hodnoty budou dvojnásobné.

let pole = [];
let newPole = [];

newPole = pole.map(item => item * 2);
console.log(newPole);