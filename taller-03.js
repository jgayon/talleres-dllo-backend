//Punto 1
function desglosarString(texto, tipo){
    const vocales = "aeiou"
    const letras = texto.toLowerCase()

    if (tipo === "vocales") {
        ans = [...letras].filter(char => vocales.includes(char)).length
        return console.log(ans)
    } else if (tipo === "consonantes") {
        ans = [...letras].filter(char => !vocales.includes(char)).length
        return console.log(ans)
    } else {
        return console.log("Tipo inválido: use 'vocales' o 'consonantes'")
    }
}

//Punto 2
function twoSum(nums, target) {
  const mapa = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i]

    if (mapa.has(complemento)) {
      return console.log([mapa.get(complemento), i])
    }

    mapa.set(nums[i], i)
  }

  return console.log("No hay solución")
}

//Punto 3
function conversionRomana(romano) {
  const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let total = 0

  for (let i = 0; i < romano.length; i++) {
    const actual = valores[romano[i]]
    const siguiente = valores[romano[i + 1]]

    if (siguiente && actual < siguiente) {
      total -= actual
    } else {
      total += actual
    }
  }

  return console.log(total)
}

//Punto 4
function descomposicion(cadena) {
  const partes = cadena.split(",")
  const palabraObjetivo = partes[0]
  const diccionario = partes.slice(1)

  for (let i = 0; i < diccionario.length; i++) {
    for (let j = 0; j < diccionario.length; j++) {
      if (i !== j) { 
        if (diccionario[i] + diccionario[j] === palabraObjetivo) {
          return console.log([diccionario[i], diccionario[j]])
        }
      }
    }
  }

  return null
}

