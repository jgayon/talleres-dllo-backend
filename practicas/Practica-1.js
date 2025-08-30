//Taller Practica

/* Desarrolle una función que reciba una lista de strings, y retorne la cantidad de strings con longitud
mayor a 25 caracteres*/

let lista = ["hola", "Como", "Estas", "Mundo?"];

function lenLista(myArray) {
    let cont = 0
    let n = myArray.length
    for (let i = 0; i < n; i++) {
        let item = myArray[i]
        if (item.length >= 5) {
            cont += 1
        }
    }
    return cont
}
console.log("P1:")
console.log(lenLista(lista))

/*Desarrolle una función que retorne el resultado de una exponenciación dada la base y el exponente sin
utilizar el operador respectivo.*/


function exponen(base,expo){
    let res = 1
    for (let i = 0; i < expo; i++) {
        res *= base
    }
    return res
}
console.log("P2:")
console.log("Deberia dar:", 2**4)
console.log("Dio:", exponen(2, 4))

//3.Desarrolle una función que retorne las ocurrencias de un elemento en una lista.

function ocurrencias(myArray, elemento){
    let contador = 0
    for (let i=0; i < myArray.length; i++){
        if (elemento == myArray[i]){
            contador++
        }
    }
    return contador
}
console.log("P3:")
let listas = ["1","2","3","4","5","2","3","5","1","3","4","2","3"]
console.log(ocurrencias(listas,3))

//4. Desarrolle una función que retorne el elemento n de la serie Fibonacci.
//Fibo =  0,1,1,2,3,5,8,13,21...    => f[n] =  f[n-1] + f[n-2]

function fibonacci(n) {
    if (n < 0) {
        throw new Error("El índice no puede ser negativo")
    }
    if (n === 0) return 0
    if (n === 1) return 1

    let a = 0, b = 1, temp

    for (let i = 2; i <= n; i++) {
        temp = a + b
        a = b
        b = temp
    }
    return b
}

console.log(fibonacci(6))

//5. Desarrolle una función que retorne si una lista tiene duplicados o no.

function tieneDuplicados(lista) {
    return new Set(lista).size !== lista.length;   //Set elimina duplicados de lista.
}
console.log("P5: Ver-1")
console.log(tieneDuplicados(["a", "b", "c"]));   // false
console.log(tieneDuplicados(["a", "b", "a"]));   // true
    //Ver 2
function tieneDuplicados2(lista) {
    let vistos = new Set()

    for (let i = 0; i < lista.length; i++) {
        if (vistos.has(lista[i])) {
            return true  
        }
        vistos.add(lista[i])
    }
    return false
}

// Ejemplos:
console.log(tieneDuplicados([1, 2, 3, 4]))  
console.log(tieneDuplicados([1, 2, 3, 2])) 

//6. Desarrolle una función que retorne el elemento mas repetido de una lista.

function masRepetido(lista) {
    let contador = {}
    let maxElemento = null
    let maxRepeticiones = 0

    // Contar ocurrencias
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i]
        contador[item] = (contador[item] || 0) + 1

        // Verificar si este item supera el máximo
        if (contador[item] > maxRepeticiones) {
            maxRepeticiones = contador[item]
            maxElemento = item
        }
    }

    return maxElemento
}

console.log(masRepetido([1, 2, 3, 2, 4, 2, 5]))
console.log(masRepetido(["a", "b", "b", "c", "a", "b"]))

//7. Desarrolle una función que ordene una lista desordenada.
//se Puede usar Sort para ordenar
function ordenarLista(lista) {
    let ordenada = []
    
    while (lista.length > 0) {
        let minIndex = 0
        
        for (let i = 1; i < lista.length; i++) {
            if (lista[i] < lista[minIndex]) {
                minIndex = i
            }
        }

        ordenada.push(lista[minIndex])
        lista.splice(minIndex, 1)
    }
    
    return ordenada
}

let list = [1,3,2,4,6,5]
console.log("P7:", ordenarLista(list))

//8. Desarrolle una función que retorne el n-esimo elemento mas grande de una lista.

function nEsimoMayor(lista, n) {
    if (n < 1 || n > lista.length) {
        throw new Error("n fuera de rango");
    }

    let copia = lista.slice(); // solo para no modificar la original

    for (let count = 1; count <= n; count++) {
        // Buscar índice del máximo actual
        let maxIndex = 0;
        for (let i = 1; i < copia.length; i++) {
            if (copia[i] > copia[maxIndex]) {
                maxIndex = i;
            }
        }

        // Guardar el máximo actual
        var maximo = copia[maxIndex];

        // Eliminar ese máximo de la lista para seguir buscando
        copia.splice(maxIndex, 1);
    }

    return maximo
}
console.log("P8:")
console.log(nEsimoMayor([5, 8, 1, 4, 7], 1)) // 8 (el mayor)
console.log(nEsimoMayor([5, 8, 1, 4, 7], 3)) // 5 (el tercero mayor)


//9. Desarrolle una función que retorne el producto maximo de dos numeros de una lista.

function productoMaximo(lista) {
    if (lista.length < 2) {
        throw new Error("La lista debe tener al menos dos números")
    }

    let max1 = -Infinity
    let max2 = -Infinity

    for (let i = 0; i < lista.length; i++) {
        let num = lista[i]
        
        if (num > max1) {
            // Primer mayor 
            max2 = max1
            max1 = num
        } else if (num > max2) {
            // Segundo mayor
            max2 = num
        }
    }

    return max1 * max2
}

console.log("P9:")
console.log(productoMaximo([5, 8, 1, 4, 7])) // 8 * 7 = 56
console.log(productoMaximo([-10, -3, 5, 6])) // 6 * 5 = 30


//10. Desarrolle una función que realice una busqueda binaria de un elemento (y lo retorne).  //Lista tiene que estar ordenada

function busquedaBinaria(lista, objetivo) {
    let inicio = 0
    let fin = lista.length - 1

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        let valorMedio = lista[medio]

        if (valorMedio === objetivo) {
            return valorMedio // Encontrado
        } else if (valorMedio < objetivo) {
            inicio = medio + 1 // Buscar en la mitad derecha
        } else {
            fin = medio - 1// Buscar en la mitad izquierda
        }
    }

    return null; // No encontrado
}

console.log("P10:")
let numeros = [1, 3, 4, 6, 8, 10, 12]
console.log(busquedaBinaria(numeros, 6))   // 6
console.log(busquedaBinaria(numeros, 5))   // null
