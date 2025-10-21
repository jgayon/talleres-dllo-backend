/* 
Sin Usar:
Math.max
Math.min
Some
Every
Includes
Sort
Reduce
Find
FindIndex
Filter */

//Punto 1

function findMax(lista){
    let max = lista[0]
    for (let i = 1; i< lista.length; i++){
        if (max < lista[i]){
            max = lista[i]
        }
    }
    return max
}

//Punto 2

function includes(lista, num){
    for (let i = 0; i< lista.length; i++){
        if (lista[i]===num){
            return true
            break
        }
    }
    return false
}

//Punto 3

function sum(lista){
    let suma = 0
    for (let i = 0; i< lista.length; i++){
        suma += lista[i]
    }
    return suma
}

//Punto 4

function missingNumbers(lista){
    let min = lista[0]
    let max = lista[0]
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min){ 
            min = lista[i]
        }
        if (lista[i] > max){ 
            max = lista[i]
        }
    }
    let missing = []
    for (let n = min; n <= max; n++){
        let found = false
        for (let j = 0; j < lista.length; j++) {
            if (lista[j] === n) {
                found = true
                break
            }
        }
        if (!found) {
        missing.push(n)
        }
    }
    return missing
}

//let listas= [3,17,-1,4,-19]
//console.log(missingNumbers(listas))
module.exports = {
    findMax,
    includes,
    sum,
    missingNumbers
}