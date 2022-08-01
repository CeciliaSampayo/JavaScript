let cantidadDinero = parseInt(prompt("Ingrese la cantidad de dinero deseada para gastar y a continuacion vera los produtos que le alcanza para comprar"))

     const JoyeriaBlessed = [
        {titulo:"Cadena Max", tienda: "JoyeriaBlessed",  precio:2000},
        {titulo:"Pulsera Dior", tienda: "JoyeriaBlessed", precio:1200},
        {titulo:"Cadena Chloe", tienda: "JoyeriaBlessed", precio:999},
        {titulo:"Anillo Sophia", tienda: "JoyeriaBlessed",  precio:1140},
        {titulo:"Pulsera Danielle", tienda: "JoyeriaBlessed", precio:1650},
        
    ]

    
    for(let productos of JoyeriaBlessed){
        if(cantidadDinero <= productos.precio){
            
            console.log (productos.titulo);
        }
    }