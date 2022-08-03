const JOYAS = [
  {
    nombre: "DIAMOND CHAIN IN ROSE GOLD",
    precio: 100000,
    material: {
      material1: "Oro blanco",
      material2: "Oro rosado",
    },
  },
  {
    nombre: "NECKLACE IN ROSE GOLD",
    precio: 122000,
    material: {
      material1: "Oro blanco",
      material2: "Oro rosado",
    },
  },
  {
    nombre: "DIAMOND CHAIN IN ROSE WHITE",
    precio: 164400,
    material: {
      material1: "Oro blanco",
      material2: "Oro rosado",
    },
  },
  {
    nombre: "NECKLACE SPIKE DIAMOND",
    precio: 140300,
    material: {
      material1: "Oro blanco",
      material2: "Oro rosado",
    },
  },
  {
    nombre: "SPIKE DIAMOND BRACELET",
    precio: 110200,
    material: {
      material1: "Oro blanco",
      material2: "Oro rosado",
    },
  },

];

const JoyeriaBlessed = [
  { titulo: "DIAMOND CHAIN IN ROSE GOLD", tienda: "JoyeriaBlessed", precio: 100000 },
  { titulo: "NECKLACE IN ROSE GOLD", tienda: "JoyeriaBlessed", precio: 122000 },
  { titulo: "DIAMOND CHAIN IN ROSE WHITE", tienda: "JoyeriaBlessed", precio: 164400 },
  { titulo: "NECKLACE SPIKE DIAMOND", tienda: "JoyeriaBlessed", precio: 140300 },
  { titulo: "SPIKE DIAMOND BRACELET", tienda: "JoyeriaBlessed", precio: 110200 },

]

const COMPRASCARRITO = [];

function eleccionJoyas() {
  let joyas =
    prompt(`Hola! Elija el numero que segun corresponda para comprar nuestras joyas!
    1. Nombre: ${JOYAS[0].nombre},
    Precio: ${JOYAS[1].precio} 
    2. Nombre: ${JOYAS[1].nombre},
    Precio: ${JOYAS[1].precio}
    3. Nombre: ${JOYAS[2].nombre},
    Precio: ${JOYAS[2].precio}
    4. Nombre: ${JOYAS[3].nombre},
    Precio: ${JOYAS[3].precio} 
    5. Nombre: ${JOYAS[4].nombre},
    Precio: ${JOYAS[4].precio}   `);

  eleccionMaterial(joyas);
 
}

eleccionJoyas();

function eleccionMaterial(joyas) {
  switch (joyas) {
    case "1":
      tipoDeMaterial("1");
      break;
    case "2":
      tipoDeMaterial("2");
      break;
    case "3":
      tipoDeMaterial("3");
      break;
    case "4":
      tipoDeMaterial("4");
      break;
    case "5":
      tipoDeMateriale("5");
      break;

    default:
      alert("Por favor ingresa un numero valido");
      break;
  }
}

function tipoDeMaterial(material) {
  let oro = "";

  switch (material) {
    case "1":
      oro =
        prompt(`Elija el numero que corresponde para elejir el material de la Joya
            1. Material: ${JOYAS[0].material.material1}
            2. Material: ${JOYAS[0].material.material2}
            `);
      COMPRASCARRITO.push(JOYAS[0])
      console.log(COMPRASCARRITO)
      informeCompra("1")
      break;
    case "2":
      oro =
        prompt(`Elija el numero que corresponde para elejir el material de la Joya
              1. Material: ${JOYAS[1].material.material1}
              2. Material: ${JOYAS[1].material.material2}
              `);
      COMPRASCARRITO.push(JOYAS[0])
      console.log(COMPRASCARRITO)
      informeCompra("2")
      break;
    case "3":
      oro =
        prompt(`Elija el numero que corresponde para elejir el material de la Joya
                1. Material: ${JOYAS[2].material.material1}
                2. Material: ${JOYAS[2].material.material2}
                `);
      COMPRASCARRITO.push(JOYAS[0])
      console.log(COMPRASCARRITO)
      informeCompra("3")
      break;
    case "4":
      oro =
        prompt(`Elija el numero que corresponde para elejir el material de la Joya
                  1. Material: ${JOYAS[3].material.material1}
                  2. Material: ${JOYAS[3].material.material2}
                  `);
      COMPRASCARRITO.push(JOYAS[0])
      console.log(COMPRASCARRITO)
      informeCompra("4")
      break;
    case "5":
      oro =
        prompt(`Elija el numero que corresponde para elejir el material de la Joya
                    1. Material: ${JOYAS[4].material.material1}
                    2. Material: ${JOYAS[4].material.material2}
                    `);
      COMPRASCARRITO.push(JOYAS[0])
      console.log(COMPRASCARRITO)
      informeCompra("5")
      break;
    default:
      alert("Por favor ingresá un numero valido para poder seleccionar el material de tu joya");
      break;


      function informeCompra(material) {
        let seguirComprando = ""

        switch (material) {
          case "1":
            seguirComprando = prompt("Queres seguir comprando? Si/No");
            if (seguirComprando === "si") {
              eleccionJoyas()
            } else {
              alert("Gracias por su compra!")
            }
            case "2":
              seguirComprando = prompt("Queres seguir comprando? Si/No");
              if (seguirComprando === "si") {
                eleccionJoyas()
              } else {
                alert("Gracias por su compra!")
              }
              case "3":
              seguirComprando = prompt("Queres seguir comprando? Si/No");
              if (seguirComprando === "si") {
                eleccionJoyas()
              } else {
                alert("Gracias por su compra!")
              }
              case "4":
              seguirComprando = prompt("Queres seguir comprando? Si/No");
              if (seguirComprando === "si") {
                eleccionJoyas()
              } else {
                alert("Gracias por su compra!")
              }
              case "5":
              seguirComprando = prompt("Queres seguir comprando? Si/No");
              if (seguirComprando === "si") {
                eleccionJoyas()
              } else {
                alert("Gracias por su compra!")
              }
            
        }
      }
  }
}