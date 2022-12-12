/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("\n\nesercizio 1°\n");

function area(lato1, lato2) {
    totalArea = l1 * l2;
    console.log(totalArea);
}

let l1 = 4;
let l2 = 5;
area(l1, l2);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 2°\n");
function crazySum(par1, par2) {
    if (typeof par1 === typeof par2 && typeof par1 === "number") {
        if (num1 === num2) {
            const result = (par1 + par2) * 3;
            console.log("i numero sono uguali,");
            return result;
        } else {
            const result = par1 + par2;
            console.log("i numero sono diversi,");
            return result;
        }
    } else {
        console.log("non stai dando numeri interi alla funzione");
    }
}
let num1 = 10;
let num2 = 10;
let operation = crazySum(num1, num2);
console.log("il risultato dell'operazione: ", operation);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 3°\n");
const crazyDiff = function (par1) {
    if (par1 <= 19) {
        result = Math.abs(Math.abs(par1) - 19);
        return result;
    } else {
        result = Math.abs((Math.abs(par1) - 19) * 3);
        return result;
    }
};

let numAbsolute = 25;
resultEx3 = crazyDiff(numAbsolute);
console.log("la sotrazione assoluta risulta in: ", resultEx3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 4°\n");
const boundary = function (par1) {
    if (par1 > 20 && par1 < 100) {
        return true;
    } else if (par1 === 400) {
        return par1;
    } else {
        console.log("fallimento");
    }
};
let n = 70;
console.log(boundary(n));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 5°\n");
const epify = function (par1) {
    if (typeof par1 === "string") {
        console.log(typeof par1);
        let words = par1.split(" ");
        if (words[0] === "EPICODE" || words[0] === "Epicode") {
            for (i = 0; i < words.length; i++) {
                originalArrayModified = originalArrayModified + " " + words[i];
            }
        } else {
            for (i = 0; i < words.length; i++) {
                originalArrayModified = originalArrayModified + " " + words[i];
            }
            originalArrayModified = "EPICODE" + originalArrayModified;
        }
    } else {
        console.log("devi immettere una stringa! riprova!");
    }
    return originalArrayModified;
};
let originalArrayModified = "";
let testedString = "Epicode testo di prova";
let epifyString = epify(testedString);
console.log(epifyString);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 6°\n");
const check3and7 = function (par1) {
    if (par1 % 7 === 0) {
        console.log("multiplo di 7");
    } else if (par1 % 3 === 0) {
        console.log("multiplo di 3");
    } else {
        console.log("non è multiplo di 7 o 3");
    }
};
let positiveInteger = 5;
check3and7(positiveInteger);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 7°\n");
let stringEx7 = "Epicode";

const reverseString = function (par1) {
    let arrayToReverse = [];
    for (i = 0; i < par1.length; i++) {
        arrayToReverse[i] = stringEx7[i].charAt();
    }
    console.log(arrayToReverse.reverse());
    arrayToReverse.join('');
    return arrayToReverse;
};
let reversedArray = reverseString(stringEx7);
console.log(reversedArray);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
