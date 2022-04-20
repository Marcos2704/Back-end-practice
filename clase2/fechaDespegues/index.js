const moment = require(`moment`)

const ahora = moment();

const roverPerseverance = moment("30-10-2020", "DD-MM-YYYY");
const apolo1 =  moment("21-02-1967", "DD-MM-YYYY");
const voyager1 = moment("05-09-1977", "DD-MM-YYYY");
const cassini = moment("15-10-1977", "DD-MM-YYYY");

const anios ={
   rover: ahora.diff(roverPerseverance, `years`)+ ` anios y `+ ahora.diff(roverPerseverance, `days`)+` dias`,
   apolo1: ahora.diff(apolo1, `years`)+ ` anios y `+ ahora.diff(apolo1, `days`)+ ` dias`,
   voyger1: ahora.diff(voyager1, `years`)+ ` anios y `+ ahora.diff(voyager1, `days`)+ ` dias`,
   cassini: ahora.diff(cassini, `years`)+ ` anios y `+ ahora.diff(cassini, `days`)+ ` dias` 

} 

console.log(anios)







