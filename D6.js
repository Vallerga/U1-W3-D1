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
let latoA = 10;
let latoB = 10;
const area = (l1, l2) => console.log(l1 * l2);
area(`l'area è ${(latoA, latoB)}`);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 2°\n");
let numSum1 = 20,
  numSum2 = 21;
const crazySum = (num1, num2) => (num1 === num2 ? (num1 + num2) * 3 : num1 + num2);
console.log(`la somma dei due parametri ${crazySum(numSum1, numSum2)}`);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 3°\n");
let varEx2 = -12;
const crazyDiff = (absParam) => (Math.abs(absParam) <= 19 ? Math.abs(absParam - 19) : Math.abs(absParam - 19) * 3);
console.log(`il risultato è ${crazyDiff(varEx2)}`);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 4°\n");
let numEx4 = 400;
const boundary = (paramEx4) => (paramEx4 >= 20 && paramEx4 <= 100) || paramEx4 === 400;
console.log(`il numero è compreso tra 20 e 100, oppure uguale 400? ${boundary(numEx4)}`);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 5°\n");
let stringEx5 = "offre un corso da full stack developer";
// const epify = (stringParam) => stringParam[0] !=='EPICODE' ?

const epify = (stringParam) => {
  let arrStringEx5 = stringParam.split(" ");
  if (arrStringEx5[0] !== "EPICODE") {
    arrStringEx5.unshift("EPICODE");
    result = arrStringEx5.join(" ");
    return result;
  }
  result = arrStringEx5.join(" ");
  return result;
};
console.log(epify(stringEx5));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 6°\n");
let numEx6 = 16;
const check3and7 = (posNum) => (posNum % 3 === 0 || posNum % 7 === 0 ? true : false);
console.log(`il numero è multiplo di 3 o 7? la risposta è ${check3and7(numEx6)}!`);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 7°\n");
let stringEx7 = "Genova";
const reverseString = (string) => string.split("").reverse().join("");
console.log(reverseString(stringEx7));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/*riceve stringa con più lettere
rompi in più parole
rendi maiuscola prima lettera di ogni parola
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio 8°\n");
stringEx8 = "testo da mettere uppercase";
const upperFirst = (string) => {
  let wordArr = string.split(" ");
  let result = [];
  for (let i = 0; i < wordArr.length; i++) {
    wordscomposed = wordArr[i].split("");
    wordscomposed.unshift(wordscomposed[0].toUpperCase());
    wordscomposed.splice(1, 1);
    result[i] = wordscomposed.join("");
  }
  return result.join(" ");
};
console.log(upperFirst(stringEx8));

// let word = [];
// console.log("\n\nesercizio 8°\n");
// const upperFirst = function (par1) {
//     let words = par1.split(" ");
//     console.log(words);
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         // console.log("valore I; ",i);
//         // console.log("stampo la parola: ",word);
//         // console.log(word.length);
//         for (j = 0; j < word.length; j++) {
//             // console.log("valore j; ", j);
//             let upperChar = "";
//             if (j === 0) {
//                 upperChar = word[j].toUpperCase();
//                 // console.log("maiuscolo", word[j].toUpperCase());
//             } else {
//                 continue;
//             }
//             let singleLetterWord = word.charAt();
//             console.log("dopo charAT",singleLetterWord);
//             let finallyUpperWord = "";
//             for (let k = 1 ; k < singleLetterWord.length; k++) {
//                 finallyUpperWord = upperchar + singleLetterWord.join('');
//                 console.log("join da: ",singleLetterWord.join(''))
//             }
//             // console.log("dio lo voglia sia upperCase: ",finallyUpperWord)
//             // console.log(upperChar);
//             // console.log(word[0]);
//         }
//     }
//     console.log("ti prego fammi maiuscolo", word);
// };

// let word = [];
// console.log("\n\nesercizio 8°\n");
// const upperFirst = function (par1) {
//   let words = par1.split(" ");
//   console.log(words);
//   let word = [];
//   let i
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let arrayOfLetter = word.split("");

//     for (k = 0; k < arrayOfLetter.length; k++) {
//       if (k == 0) {
//         let upperChar = arrayOfLetter[k].toString().toUpperCase();
//         // console.log("prima", arrayOfLetter[k]);
//         // console.log(typeof(upperChar));
//         arrayOfLetter[k] = upperChar;
//         // console.log("dopo", arrayOfLetter[k]);
//         // console.log("lettera maiuscola", upperChar);
//       } else {
//         continue;
//       }
//     }
//     console.log("array di lettere: ", arrayOfLetter);
//     recostructedArray = arrayOfLetter.join("");
//     console.log("recostructed array: ", recostructedArray);
//     console.log("word è:", word);
//   }
//   words[i] = word;
//   return words;
// };
// let stringToUppercase = "testo da mettere uppercase";
// console.log("testo riconvertito: ", upperFirst(stringToUppercase));
// `>`;
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("\n\nesercizio 9°\n");
absc = "Ciao epicoders! Diamoci dentro oggi!";
const cutString = (string) => string.slice(1, string.length - 1);

console.log(cutString(absc));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


console.log("\n\nesercizio 9°\n");
let numEx10 = 15;
const giveMeRandom = (param) => {
  let result = [];
  for (i = 0; i < param; i++) {
    result[i] = Math.floor(Math.random() * 11);
  }
  return result;
};
console.log(giveMeRandom(numEx10));

/* differenza tra funzione freccia e funzione normale */
// console.log(`this fuori: ${this}`)
// function normalFunction () {
//     console.log(`this dentro function: ${this}`);
// }
// let arrowFunction = () => {
//     console.log(`this dentro arrow  function: ${this}`);
// };