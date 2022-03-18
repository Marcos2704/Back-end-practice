class jugadores {
    nombre =""
    Edad = 0
    clubes = [""]
    logros = [""]

    constructor(nombre, edad, clubes, logros ) {
      this.nombre = nombre;
      this.edad =  edad;
      this.clubes =  clubes;
      this.logros =  logros;
    }
  }

  const messi = new jugadores("Leo Messi", 34, ["Barcelona", "psg"], ["45 titulos"])
  const cr7 = new jugadores("Cristiano Ronaldo", 36, ["Sporting", "Manchester United", "Real Madrid", "Juventus"], ["42 titulos"])
  const neymar = new jugadores("Nemar", 30, ["Santos", "Barcelona", "psg"], ["34 titulos"])

  console.log(jugadores)