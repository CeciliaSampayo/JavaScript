/*
//EJERCICIO CLASE 2:
// Consultar sobre la nota promedio del curso a un usuario y con el uso de condicionales evaluar:
// Si la nota es mayor a 10 o menor a 0 poner un alert de que no es una nota válida.
// En caso contrario, si la nota es entre el rango de 0 a 10 calificar con su respectiva valoración.
let nota = 0
let acum = 0 

let estudiante = prompt("Ingresa el nombre con el cual te registraste para entrar al curso:")
    if(estudiante  =="") {
        alert("ERROR: Ingresa el Nombre con el cual te has registrado para que puedas acceder a tus notas")
        console.log("ERROR: Ingresa el Nombre con el cual te has registrado para que puedas acceder a tus notas")
    }
    else if (estudiante !="") {
        for (let i=0; i<4; i++){
            nota = parseInt(prompt('Ingrese su nota'))
            acum = acum + nota
            if (nota < 0 || nota > 10){
                alert("La nota no es válida")
                console.log("La nota no es válida")
            }
            if (nota >= 0 && nota < 4){
                alert("Has reprobado")
                console.log("Has reprobado")
            }
            if (nota >= 4 && nota < 6){
                alert("Vas bien")
                console.log("Vas bien")
            }
            if (nota >= 6 && nota < 8){
                alert("¡Muy bien!")
                console.log("¡Muy bien!")
            }
            if (nota >= 8 && nota <= 10){
                alert("¡Excelente!")
                console.log("¡Excelente!")
            }
        }
        console.log("acumulado de tu primer parcial + acum")
        console.log("La suma total de tu nota es" + acum)
        let prom = acum / 4
        console.log("El promedio es" + prom)
             
            if ( prom < 4) {
             alert("Reprobaste. Tu promedio total es "+prom+". Solicitar una fecha para dar tu examen de recuperación.")
             console.log("Reprobaste. Tu promedio total es "+prom+". Solicitar una fecha para dar tu examen de recuperación.")
            }
            if ( prom >=4 && prom < 6) {
                alert("Aprobado. Tu promedio total es "+prom+". Éxitos en tu siguiente curso.")
                console.log("Aprobado. Tu promedio total es "+prom+". Éxitos en tu siguiente curso.")
               }
            if ( prom >=6 && prom <8) {
             alert("Muy buen desempeño. Tu promedio total es "+prom+". Éxitos en tu siguiente curso.")
             console.log("Muy buen desempeño. Tu promedio total es "+prom+". Éxitos en tu siguiente curso.")
            }
            if ( prom >=8 && prom <=10) {
             alert("Felicitaciones. Tu promedio total es "+prom+". Sigue así, se te tomará en cuenta para los jóvenes becados del Top 10.")
             console.log("Felicitaciones. Tu promedio total es "+prom+". Sigue así, se te tomará en cuenta para los jóvenes becados del Top 10.")
             confirm("Te gustaría tomar un examen para ser uno de los estudiantes becados de nuestra institución.")
            }

    }
*/

let promedio = 0;
let bandera = true;
while (bandera){
  let nombreAlumno = prompt("Ingrese el nombre del Alumno");

  let numExamenes = parseInt(prompt("Ingrese la cantidad de examenes"));
  let notas = parseInt(prompt("Ingrese el total de las notas de los examenes"));

  let promedio =  notas/numExamenes;
  console.log("el promedio es " + promedio);
  alert(`El nombre del alumno es ${nombreAlumno} y el promedio es ${promedio}`);
  if(promedio <=2){
    alert(`Usted está desaprobado!`);
    console.log("Usted esta desaprobado, tiene que recursar");
    bandera = false;
  }

}

//como usar para que le pregunten las notas a los alumnos
/*
for (let i = 0; i < 5; i++){
    let nombre= prompt("A nombre de quien será hecha la reserva?)
    alert(`La mesa numero $(i) será a para $(nombre)` )
}
*/



