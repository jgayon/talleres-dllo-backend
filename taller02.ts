// Punto 1: Encontrar el máximo en una lista
export function findMax(lista: number[]): number {
  let max = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (max < lista[i]) {
      max = lista[i];
    }
  }
  return max;
}

// Punto 2: Verificar si un número está incluido en la lista
export function includes(lista: number[], num: number): boolean {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === num) {
      return true;
    }
  }
  return false;
}

// Punto 3: Sumar todos los elementos de una lista
export function sum(lista: number[]): number {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

// Punto 4: Encontrar los números faltantes entre el mínimo y máximo de la lista
export function missingNumbers(lista: number[]): number[] {
  let min = lista[0];
  let max = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < min) {
      min = lista[i];
    }
    if (lista[i] > max) {
      max = lista[i];
    }
  }

  const missing: number[] = [];
  for (let n = min; n <= max; n++) {
    let found = false;
    for (let j = 0; j < lista.length; j++) {
      if (lista[j] === n) {
        found = true;
        break;
      }
    }
    if (!found) {
      missing.push(n);
    }
  }
  return missing;
}