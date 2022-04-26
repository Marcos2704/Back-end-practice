import fs from 'fs';
import promptSync from 'prompt-sync';
const prompt = promptSync();


const gastos = { articulo: '',  precio: 0 } 
 

gastos.articulo = prompt("articulo: ")
gastos.precio = parseInt(prompt("valor del articulo: $"))


const data = JSON.stringify(gastos, null, 2);
fs.appendFileSync('gastos.json', data)
console.log(data)

 
