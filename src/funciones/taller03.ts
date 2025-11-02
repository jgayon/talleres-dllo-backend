// Punto 1: Contar vocales o consonantes en un string
export function desglosarString(texto: string, tipo: "vocales" | "consonantes"): number {
  const vocales = "aeiou";
  const letras = String(texto).toLowerCase();
  let ans: number;

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

// Punto 2: Encontrar dos índices cuyo valor suma el target
export function twoSum(nums: number[], target: number): [number, number] | null {
  const mapa = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];

    if (mapa.has(complemento)) {
      return [mapa.get(complemento)!, i];
    }

    mapa.set(nums[i], i);
  }

  return null;
}

// Punto 3: Convertir número romano a decimal
export function conversionRomana(romano: string): number {
  if (!romano) return 0;

  const valores: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };

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

// Punto 4: Descomponer palabra objetivo en dos partes del diccionario
export function descomposicion(cadena: string): [string, string] | null {
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