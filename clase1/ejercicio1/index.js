//


const misDatos = {
    nombre: "Marcos",
    edad: 17,
    altura: 175,
    pelicula: ["En busca del soldado ryan"],
}


misDatos.altura += 5
misDatos.pelicula.push ("Casino")

for (let prop in misDatos){    
    console.log(misDatos[prop])
}

