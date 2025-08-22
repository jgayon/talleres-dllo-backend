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

}

let listas= [3,17,-1,4,-19]
console.log(includes(listas,4))