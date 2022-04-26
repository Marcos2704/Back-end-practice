var fs = require('fs');
const readline = require("readline")


const crearArchivo = () =>{
    const contenido = "holaaaaaaaaaa"
    const crear = fs.writeFileSync("archivo.txt", contenido)
}

 const leerArchivo = () =>{
    const leer = fs.readFile('archivo.txt', 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
        }
      });

}

const agregarArchivo = () =>{
    const agregar = fs.appendFileSync('archivo.txt', 'como estas?')
    
      
}

const borrarArchivo = () =>{
  const path = "./archivo.txt"
  /*const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })*/

  if(fs.existsSync(path)){
    const confirmar = "y"
    if(confirmar === "y" || confirmar === "Y"){
      try{
        fs.unlinkSync(path)
      }
      catch(err){
        console.log(err)
      }
      console.log("el archivo fue borrado con exito")
    }else{
      console.log("El archivo no fue borrado")
    }
  }

  else{
    console.log("no existe")
  }
   
}

crearArchivo()
leerArchivo()
agregarArchivo()
borrarArchivo()

