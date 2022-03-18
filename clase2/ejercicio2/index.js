
const futbolistas =[
    {nombre: "Leo Messi", titulos: 45, goles: 777 },
    {nombre: "Cristiano Ronaldo", titulos: 42, goles: 806 },
    {nombre: "Neymar JR", titulos: 31, goles: 365 },
    {nombre: "Robert Lewandoski", titulos: 23, goles: 500 },
]

const estadisticas = {
    masTitulos : "",
    menosTitulos: "",
    masgoles: "",
    menosgoles: "",
    promedioTitulos : 0,
    promedioGoles : 0
}

let maxTitulos = futbolistas[0].titulos
let minTitulos = futbolistas[0].titulos
let maxGoles = futbolistas[0].goles
let minGoles = futbolistas[0].goles

for (let i; i < futbolistas.length; i++){
    estadisticas.promedioTitulos += futbolistas.titulos
    estadisticas.promedioGoles +=  futbolistas.goles 



    if (futbolistas[i].titulos < minTitulos && futbolistas[i].goles < minGoles ) {

        minTitulos = futbolistas[i].titulos
        minsGoles = futbolistas[i].goles
        
        estadisticas.menosTitulos = futbolistas[i].nombre
        estadisticas.menosgoles = futbolistas[i].nombre



    }else if (futbolistas[i].titulos > maxTitulos && futbolistas[i].goles > maxGoles ) {

        maxTitulos = futbolistas[i].titulos
        maxGoles = futbolistas[i].goles
       
        estadisticas.masTitulos = futbolistas[i].nombre
        estadisticas.masgoles = futbolistas[i].nombre       
    }          
}

console.log(estadisticas)