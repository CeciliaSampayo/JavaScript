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
    console.log("Usted esta desaprobado, tiene que recursar");
    bandera = false;
  }

}





