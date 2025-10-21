const taller01 = require('./taller01')
const taller02 = require('./taller02')
const taller03 = require('./taller03')


let listas= [3,17,-1,4,-19]
console.log('Taller1')
console.log(taller01.temp(23))
console.log(taller01.resolvedor(1,5,4,"+"))
console.log(taller01.mejorParidad(7))
console.log(taller01.peorParidad(2))

console.log('Taller2')
console.log(taller02.findMax(listas))
console.log(taller02.includes(listas, 6))
console.log(taller02.sum(listas))
console.log(taller02.missingNumbers(listas))

console.log('Taller3')
console.log(taller03.desglosarString("holaaaaa", "vocales"))
console.log(taller03.twoSum([2, 7, 11, 15], 9 ))
console.log(taller03.conversionRomana("XVII"))
console.log(taller03.descomposicion("malhumor,al,hum,humor,m,mal,malhu"))