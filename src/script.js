// Error handling
//! Toto nevyhodí chybu - len vypíše objekt

const error1 = new Error("Chyba!!!")
console.error(error1)

// Chyba sa musí vyhodiť (throw) 
// Akonáhle sa spustí chyba, tak sa zastaví čístanie kódu

throw new Error("Chyba 2!!!");

// Čo je to throw?
// throw "Tasi"
// throw true
// throw Error
// throw new Error("");

console.log(5 + 100)