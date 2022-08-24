//FUNCIONES

function crearProductos() {
  let ecomerceHtml = document.getElementById("productosHtml");
  tienda.forEach((producto) => {
    productosHtml.innerHTML += `<article id="${producto.id}" class="card">
      <img class="card__img" src="${producto.img}" alt="${producto.nombre}">
      <h3 class="card__title">${producto.nombre}</h3>
      <p class="card__info">${producto.descripcion}.</p>
      <p class="card__price ${producto.precio <= 200.000 ? "ofertaColor" : "precioComun"}">Precio: $ ${producto.precio}</p>
      <button class="card__button" id="button_${producto.id}">Agregar al carrito</button>
  </article>`;
  });
}

function muestraCarrito() {
  let comprasHtml = document.getElementById("comprasHtml");
  comprasHtml.innerHTML = ``;
  let totalPrecio = carrito.reduce((acc, el) => acc + el.precio, 0);
  let carritoHtml = document.getElementById("carritoHtml");

  //OPERADORES AND

  // if (carrito.length > 0)
  (carrito.length > 0) && console.log("Su carrito contiene los siguientes productos: ")
  carritoHtml.innerText = "Su carrito contiene los siguientes productos: ";

  let nuevaCompra = document.getElementById("comprasHtml");
  carrito.forEach((productos) => {
    comprasHtml.innerHTML += `<li>${productos.nombre} $ ${productos.precio}</li><p id=quitar_${productos.id} class= quitar_producto> Quitar producto</p> `;
  });
  let totalHtml = document.getElementById("totalHtml");

  //OPERADOR TERNARIO 

  //if (carrito.length > 0)
  //  totalHtml.innerText = `El total de su compra es de $ ${totalPrecio}`;
  //else totalHtml.innerText = ``;
  (carrito.length > 0) ? totalHtml.innerText = `El total de su compra es de $ ${totalPrecio}` : totalHtml.innerText = ``
}

function compraDeProductos() {
  let boton_producto1 = document.getElementById("button_1");
  button_1.onclick = compraProducto1;
  let boton_producto2 = document.getElementById("button_2");
  button_2.onclick = compraProducto2;
  let boton_producto3 = document.getElementById("button_3");
  button_3.onclick = compraProducto3;
  let boton_producto4 = document.getElementById("button_4");
  button_4.onclick = compraProducto4;
  let boton_producto5 = document.getElementById("button_5");
  button_5.onclick = compraProducto5;
}


function quitarProducto() {
  if (carrito.includes(producto1) == true) {
    let quitar_producto1 = document.getElementById("quitar_1");
    quitar_1.onclick = quitarProducto1;
  }
  if (carrito.includes(producto2) == true) {
    let quitar_producto2 = document.getElementById("quitar_2");
    quitar_2.onclick = quitarProducto2;
  }
  if (carrito.includes(producto3) == true) {
    let quitar_producto3 = document.getElementById("quitar_3");
    quitar_3.onclick = quitarProducto3;
  }
  if (carrito.includes(producto4) == true) {
    let quitar_producto4 = document.getElementById("quitar_4");
    quitar_4.onclick = quitarProducto4;
  }
  if (carrito.includes(producto5) == true) {
    let quitar_producto5 = document.getElementById("quitar_5");
    quitar_5.onclick = quitarProducto5;
  }
}

function compraProducto1() {
  carrito.push(producto1);
  Swal.fire({
    title:"Producto agregado",
    text:"DIAMOND CHAIN IN ROSE GOLD",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}
function quitarProducto1() {
  let producto1Posicion = carrito.indexOf(producto1);
  carrito.splice(producto1Posicion, 1);
  Swal.fire({
    title:"Producto eliminado",
    text:"DIAMOND CHAIN IN ROSE GOLD",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}

function compraProducto2() {
  carrito.push(producto2);
  Swal.fire({
    title:"Producto agregado",
    text:"SPIKE DIAMOND BRACELET",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}

function quitarProducto2() {
  let producto2Posicion = carrito.indexOf(producto2);
  carrito.splice(producto2Posicion, 1);
  Swal.fire({
    title:"Producto eliminado",
    text:"SPIKE DIAMOND BRACELET",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}

function compraProducto3() {
  carrito.push(producto3);
  Swal.fire({
    title:"Producto agregado",
    text:"NECKLACE IN ROSE GOLD",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}

function quitarProducto3() {
  let producto3Posicion = carrito.indexOf(producto3);
  carrito.splice(producto3Posicion, 1);
  Swal.fire({
    title:"Producto eliminado",
    text:"NECKLACE IN ROSE GOLD",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}

function compraProducto4() {
  carrito.push(producto4);  
    Swal.fire({
    title:"Producto agregado",
    text:"DIAMOND SPIKE ONE BRACELET",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}

function quitarProducto4() {
  let producto4Posicion = carrito.indexOf(producto4);
  carrito.splice(producto4Posicion, 1);
  Swal.fire({
    title:"Producto eliminado",
    text:"DIAMOND SPIKE ONE BRACELET",
    icon:"success",
    confirmButtonText:"aceptar",
  }) 
  muestraCarrito();
  quitarProducto();
}

function compraProducto5() {
  carrito.push(producto5);
  Swal.fire({
    title:"Producto agregado",
    text:"NECKLACE IN WHITE GOLD FULL",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  muestraCarrito();
  quitarProducto();
}

function quitarProducto5() {
  let producto5Posicion = carrito.indexOf(producto5);
  carrito.splice(producto5Posicion, 1);
  Swal.fire({
    title:"Producto eliminado",
    text:"NECKLACE IN WHITE GOLD FULL",
    icon:"success",
    confirmButtonText:"aceptar"
   
  }) 
  console.log(carrito);
  muestraCarrito();
  quitarProducto();
}

function finalizarCompra() {
  let totalPrecio = carrito.reduce((acc, el) => acc + el.precio, 0);
  const compras = carrito.map((el) => el.nombre);

  alert(
    "Usted compro: " +
    compras +
    " por el precio final de $ " +
    totalPrecio +
    ".   ¡Muchas gracias! Vuelva pronto."
  );
}

function ecommerce() {
  crearProductos();
  compraDeProductos();

  let finalizar = document.getElementById("finalizar");
  finalizar.onclick = finalizarCompra;
}

//Constructora//

class Productos {
  constructor(id, img, nombre, descripcion, precio) {
    (this.id = id),
      (this.img = img),
      (this.nombre = nombre.toLocaleUpperCase()),
      (this.descripcion = descripcion),
      (this.precio = precio);
  }
}

//Productos//

const producto1 = new Productos(
  1,
  "assets/7.jpg",
  "DIAMOND CHAIN IN ROSE GOLD",
  "Montado en oro rosa de 18k con 300 diamantes blancos",
  574.201
);

//Desestructuracion 
const {nombre,descripcion,precio} = producto1
console.log(nombre)

const producto2 = new Productos(
  2,
  "assets/3.webp",
  "SPIKE DIAMOND BRACELET",
  " Montado en oro rosado de 18k con 22 diamantes blancos",
  240.155
);

const producto3 = new Productos(
  3,
  "assets/2.jpg",
  "NECKLACE IN ROSE GOLD",
  "Set en oro rosa de 18k con 60 diamantes blancos",
  340.145
);

const producto4 = new Productos(
  4,
  "assets/5.jpg",
  "DIAMOND SPIKE ONE BRACELET",
  "Montado en oro rosa y oro blanco de 18k con 7 diamantes blancos",
  155.248
);

const producto5 = new Productos(
  5,
  "assets/1.jpg",
  "NECKLACE IN WHITE GOLD FULL",
  "Necklace montado en oro blanco de 18K con 580 diamantes blancos",
  965.451
);

//Arrays//

const tienda = [producto1, producto2, producto3, producto4, producto5];
console.log(tienda);
//Spread
console.log(...tienda);

//OPERADORES OR Y OPTIMIZACION 
const carrito = JSON.parse(localStorage.getItem("productos")) || [];


ecommerce();

//Storage


/*
let btnDarkMode = document.getElementById("botonDarkMode");
let btnLighthMode = document.getElementById("botonLightMode");


let darkMode
if (localStorage.getItem("darkMode")) {
  darkMode = localStorage.getItem("darkMode")
} else {
  localStorage.setItem("darkMode", "light")
}
if (darkMode == "dark") {
  document.body.classList.add("darkMode")
}
btnDarkMode.addEventListener("click", () => {
  document.body.classList.add("darkMode")
  localStorage.setItem("darkMode", "dark")
})
btnLighthMode.addEventListener("click", () => {
  document.body.classList.remove("darkMode")
  localStorage.setItem("darkMode", "light")

})*/

//Storage array tienda

if (localStorage.getItem("tienda")) {
  let tienda = JSON.parse(localStorage.getItem("tienda"))

} else {
  console.log(`primera vez que carga Tienda`)
  tienda.push(producto1, producto2, producto3, producto4, producto5)
  localStorage.setItem("tienda", JSON.stringify(tienda))
}
console.log(tienda)

//storage array carrito
/*
if (localStorage.getItem("carrito")) {
 carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
  console.log(`Primera vez que carga Carrito`)
  localStorage.setItem("carrito", [])

}
*/

