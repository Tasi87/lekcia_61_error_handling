//idea Error handling
//! Toto nevyhodí chybu - len vypíše objekt

const error = new Error ("Chyba!!!")
console.log(error.name)
console.log(error.message)
console.log(error.stack)

// Chyba sa musí vyhodiť (throw) 
// Akonáhle sa spustí chyba, tak sa zastaví čístanie kódu

// throw new Error("Chyba 2!!!");

// Čo je to throw?
// throw "Tasi"
// throw true
// throw Error
// throw new Error("");

// console.log(5 + 100)

//note SyntaxError
// const error1 = !,;
// throw new SyntaxError();

//note ReferenceError
// console.log(premmena)
// throw new ReferenceError();