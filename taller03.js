// Punto 1
function desglosarString(texto, tipo) {
  const vocales = "aeiou";
  const letras = String(texto).toLowerCase();
  let ans;

  if (tipo === "vocales") {
    ans = [...letras].filter(char => /[a-z]/.test(char) && vocales.includes(char)).length;
    return ans;
  } else if (tipo === "consonantes") {
    ans = [...letras].filter(char => /[a-z]/.test(char) && !vocales.includes(char)).length;
    return ans;
  } else {
    throw new Error("Tipo inválido: use 'vocales' o 'consonantes'");
  }
}

// Punto 2
function twoSum(nums, target) {
  const mapa = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];

    if (mapa.has(complemento)) {
      return [mapa.get(complemento), i];
    }

    mapa.set(nums[i], i);
  }

  return null; // sin solución
}

// Punto 3
function conversionRomana(romano) {
  if (!romano) return 0;
  const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  const s = String(romano).toUpperCase();

  for (let i = 0; i < s.length; i++) {
    const actual = valores[s[i]] || 0;
    const siguiente = valores[s[i + 1]] || 0;

    if (siguiente && actual < siguiente) {
      total -= actual;
    } else {
      total += actual;
    }
  }

  return total;
}

// Punto 4
function descomposicion(cadena) {
  if (!cadena) return null;
  const partes = cadena.split(",").map(p => p.trim());
  const palabraObjetivo = partes[0];
  const diccionario = partes.slice(1);

  for (let i = 0; i < diccionario.length; i++) {
    for (let j = 0; j < diccionario.length; j++) {
      if (i !== j && diccionario[i] + diccionario[j] === palabraObjetivo) {
        return [diccionario[i], diccionario[j]];
      }
    }
  }

  return null;
}

//const resultado = desglosarString("hola", "vocales");
//console.log(desglosarString("holaaaaa", "vocales"));

module.exports = {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion
}