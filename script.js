
class Usuarios {
  constructor(id,NombreYApellido, documento, sexo, cantidadDeAños) {
    this.id= id,
    this.NombreYApellido = NombreYApellido,
      this.documento = documento,
      this.sexo = sexo,
      this.cantidadDeAños = cantidadDeAños
    this.bienvenido = function () {
      console.log(`${this.NombreYApellido} bienvenido a Blessed Joyas. Su usuario se ha creado exitosamente!`)
    }
  }
}

let datosUsuarios = []

const usuarios1 = new Usuarios(1, "Rocio Carrizo", 41547874, "mujer", 23)
datosUsuarios.push(usuarios1)

const usuarios2 = new Usuarios(2,"Marcela Cattorini", 22000531, "mujer", 54)
datosUsuarios.push(usuarios2)

const usuarios3 = new Usuarios(3, "Norberto Angel", 51547874, "hombre", 73)
datosUsuarios.push(usuarios3)


function nuevoUsuario() {
  let nombreCompleto = prompt("Por favor, ingrese su Nombre y Apellido");
  let documento = parseFloat(prompt("Por favor ingrese su numero de documento"));
  let sexo = prompt("Por favor ingrese su sexo");
  let cantidadDeAños = parseFloat(prompt("Por favor ingrese su edad"));
  let nuevoUsuario = new Usuarios(datosUsuarios.length + 1, nombreCompleto, documento, sexo, cantidadDeAños);
  datosUsuarios.push(nuevoUsuario)

}
nuevoUsuario()
usuarios3.bienvenido()

datosUsuarios.forEach((usuarios) => console.log(usuarios))

//PLANTILLA, DOM

let divUsuarios = document.getElementsByClassName("usuarioss")[0]


datosUsuarios.forEach((usuario)=>{
  let nuevo = document.createElement("div")
  nuevo.innerHTML =  `<article id="${usuario.id}" class="card">
                                  <hr>
                                  <div class="contentCard">
                                      <p class="nombreApellido">
                                          Usuario: <br> ${usuario.NombreYApellido}
                                      </p>
                                      <p class="documento">
                                          Documento Identidad: <br> ${usuario.documento}
                                      </p>
                                      <p class="sexo">
                                          Sexo: <br> ${usuario.sexo}
                                      </p>
                                      <p class="añoDeNacimiento">
                                          Año de nacimiento: <br> ${usuario.cantidadDeAños}
                                      </p>
                                      <a class="btnIngresar" href="">Ver mas informacion</a>
                                  </div>
                                  </article>`
  
  divUsuarios.appendChild(nuevo)
})