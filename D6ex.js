// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let numEx10 = 15;
const giveMeRandom = (param) => {
  let result = [];
  for (i = 0; i < param; i++) {
    result[i] = Math.floor(Math.random() * 11);
  }
  return result;
};
randomArray = giveMeRandom(numEx10);
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio extra 1°\n");
const checkArray = (param) => {
  arrFilter = param.filter((element) => element > 5);
  console.log(arrFilter);
  sumValue = arrFilter.reduce((acc, val) => acc + val);
  return sumValue;
};
console.log(checkArray(randomArray));

// node D6\(extra\).js
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
const shoppingCart = [
  {
    Price: "10",
    Name: "pallone",
    ID: "tt0120737",
  },
  {
    Price: "15",
    Name: "tenda",
    ID: "tt3435737",
  },
  {
    Price: "5",
    Name: "retino",
    ID: "tt0150737",
  },
  {
    Price: "7",
    Name: "capellino",
    ID: "tt0166677",
  },
];
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio extra 2°\n");

const shoppingCartTotal = (param) => {
  let priceArr = [];
  param.map((element, i) => {
    priceArr[i] = element.Price;
  });
  console.log("prezzo", priceArr);
  return priceArr.reduce((acc, val) => +acc + +val);
};
console.log(`Il saldo attuale è di: ${shoppingCartTotal(shoppingCart)}€`);
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
shoppingCart1 = [
  {
    Price: "10",
    Name: "pallone",
    ID: "tt0120737",
    Quantity: "4",
  },
  {
    Price: "15",
    Name: "tenda",
    ID: "tt3435737",
    Quantity: "5",
  },
  {
    Price: "5",
    Name: "retino",
    ID: "tt0150737",
    Quantity: "27",
  },
  {
    Price: "7",
    Name: "capellino",
    ID: "tt0166677",
    Quantity: "0",
  },
];
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio extra 3°\n");

const newItemToAdd = {
  Price: "8",
  Name: "sciarpa",
  ID: "tt01611117",
  Quantity: "10",
};

const addToShoppingCart = (param) => {
  shoppingCart1[shoppingCart1.length] = param;
  return shoppingCart1;
};
console.log(addToShoppingCart(newItemToAdd));
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function maxShoppingCart(param) {
//   let priceArray = [];
//   let higherPrice;
//   param.map((element, i) => (priceArray[i] = Number(element.Price)));
//   console.log(`price vale: ${priceArray}`);
//   priceArray.reduce((acc, val) => {
//     if (+acc < +val) {
//       acc = val;
//       higherPrice = acc;
//       console.log("ciao",acc)
//     }
//   });
//   console.log("prezzo alto", higherPrice)
//   result = param.filter(element => element.Price == higherPrice);
//   return result;
// }
// console.log("oggetto più grande", maxShoppingCart(shoppingCart1));

console.log("\n\nesercizio extra 4°\n");
let maxShoppingCart = (param) => param.reduce((acc, val) => (Number(acc.Price) < Number(val.Price) ? val : acc));
console.log(`il pezzo più caro della lista è: ", ${maxShoppingCart(shoppingCart1)}`);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio extra 5°\n");
let resultEx5;
const latestShoppingCart = (param) => param.filter((elem, i) => i == param.length - 1);
let res = latestShoppingCart(shoppingCart1);
let serRes = JSON.stringify(res, null, null, 2);
console.log("l'ultimo oggetto aggiunto al carello è: ", res);
console.log("l'ultimo oggetto aggiunto al carello è: ", serRes);
console.log(`l'ultimo oggetto aggiunto al carello è ${serRes}`);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio extra 6°\n");
let randomNumberEx6 = Math.floor(Math.random() * 10);
console.log("numero da confrontare", randomNumberEx6);
const loopUntil = (param) => {
  i = 0;
  while (i <= 2) {
    x = Math.floor(Math.random() * 10);
    if (x >= param) {
      i++;
      console.log(x);
    } else {
      console.log(x);
    }
  }
};
loopUntil(randomNumberEx6);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
const arrEx7 = [2, 12, 13, "a", 42, true, 4, 9, false, 12, "EPICODE"];

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\n\nesercizio extra 7°\n");

const average = (param) => {
  let arrNumber = param.filter((element) => typeof element == "number");
  sumValue = arrNumber.reduce((acc, val) => acc + val);
  return Math.round(sumValue / arrNumber.length);
};
console.log("la media è", average(arrEx7));
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
arrStr = ["ciao", "CIAO", "ciaoo", "cia", "Ciaooo!!!", "Ciao"];
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio extra 8°\n");

const longest = (param) => param.reduce((acc, val) => (acc.length > val.length ? acc : val));

console.log("il valore più lungo è", longest(arrStr));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
emailContent = "CIAO ciao";
/* SCRIVI QUI LA TUA RISPOSTA (element) => element === 'SCAM' || element === 'SPAM' */

console.log("\n\nesercizio extra 9°\n");
const antiSpam = function (param) {
  let spamPresence1 = param.includes("SCAM");
  let spamPresence2 = param.includes("SPAM");
  if (spamPresence1 === true || spamPresence2 === true) {
    return false;
  } else if (spamPresence1 === false && spamPresence2 === false) {
    return true;
  } else {
    console.log("qualcosa di strano sta succedendo");
    return 1;
  }
};
console.log(antiSpam(emailContent));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\n\nesercizio extra 10°\n");
const dateEx10 = new Date();
dateEx10.setFullYear(2022, 10, 15);
const howManyDay = (param) => {
  const today = new Date();
  milParamDate = param.getTime();
  milTodayDate = today.getTime();
  milDiff = milTodayDate - milParamDate;
  return Math.abs(Math.round(milDiff / (1000 * 60 * 60 * 24)));
};
console.log(howManyDay(dateEx10));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(matrixGenerator(numRow, numColumn));

const matrixGenerators = (param1, param2) => {
  for (let i = 0; i < param1; i++) {
    let arrColRow = [];
    let row = i;
    row = String(row)
    for (let j = 0; j < param2; j++) {
      let col = j
      col = String(col)
      arrColRow[j] = row + col;
    }
    console.log(arrColRow);
  }
};

console.log(matrixGenerators(numRow, numColumn));

/* non funziona

console.log("\n\nesercizio extra 11°\n");

numColumn = 5;
numRow = 5

 const matrixGenerator = (param1, param2) => {
   let arrColRow = [];
   let arrRow = [];
   let rows;
   let cols;
   for (let i = 0; i < param1; i++) {
    rows = String(i);
     for (let j = 0; j < param2; j++) {
        cols = String(j);
       arrRow[j] = cols + rows;
       console.log(arrColRow);
     }
     arrColRow[i] = arrRow;
   }
   return arrColRow;
 }; */