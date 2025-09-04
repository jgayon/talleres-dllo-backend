const datos = require("./practicas/15-datos-parcial-01.json")


//1. Desarrolle una función que reciba un estudiante y retorne los nombres de los cursos del estudiante.
function nombreCurso(estudiante){
    return estudiante.cursos.map(curso => curso.nombre)
}
//2. Desarrolle una función que reciba un estudiante y retorne la nota maxima lograda por el estudiante.
function notaMaxima(estudiante) {
  return Math.max(...estudiante.cursos.map(curso => curso.nota))
}

//3. Desarrolle una función que reciba un estudiante y retorne si el estudiante mide mas de 1,65m.
function mideMas(estudiante) {
  return estudiante.altura > 1.65
}

//4. Desarrolle una función que reciba un estudiante el nombre completo del estudiante.
function nombreCompleto(estudiante) {
  return `${estudiante.nombre} ${estudiante.apellido}`
}
//5. Desarrolle una función que reciba dos estudiantes y retorne la diferencia de altura entre los estudiantes.
function diferenciaAltura(est1, est2) {
  return Math.abs(est1.altura - est2.altura)
}

//6. Desarrolle una función que reciba un estudiante y retorne el estudiante con el campo 'nombreCompleto' agregado.
function agregarNombreCompleto(estudiante) {
  return {
    ...estudiante, // copiamos todos los campos existentes
    nombreCompleto: `${estudiante.nombre} ${estudiante.apellido}`
  }
}

//Prueba
console.log(datos[0])
console.log(nombreCurso(datos[0]))
console.log(notaMaxima(datos[0]))
console.log(mideMas(datos[0]))
console.log(nombreCompleto(datos[0]))
console.log(diferenciaAltura(datos[0],datos[1]))
console.log(agregarNombreCompleto(datos[0]))
