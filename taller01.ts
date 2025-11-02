// Punto 1: Convertidor de temperatura (Celsius → Fahrenheit)
export function temp(a: number): number {
  return a * (9 / 5) + 32;
}

// Punto 2: Resolvedor de ecuación cuadrática (usa signo "+" o "-")
export function resolvedor(a: number, b: number, c: number, signo: string): number | null {
  const discriminante = b ** 2 - 4 * a * c;
  if (discriminante < 0) return null; // No tiene solución real

  if (signo === "+") {
    return (-b + Math.sqrt(discriminante)) / (2 * a);
  } else if (signo === "-") {
    return (-b - Math.sqrt(discriminante)) / (2 * a);
  }
  return null;
}

// Punto 3: Mejor Paridad (retorna true si es par)
export function mejorParidad(a: number): boolean {
  return a % 2 === 0;
}

// Punto 4: Peor Paridad (usa una tabla manual hasta 10)
export function peorParidad(a: number): string {
  switch (a) {
    case 0: return "Par";
    case 1: return "Impar";
    case 2: return "Par";
    case 3: return "Impar";
    case 4: return "Par";
    case 5: return "Impar";
    case 6: return "Par";
    case 7: return "Impar";
    case 8: return "Par";
    case 9: return "Impar";
    case 10: return "Par";
    default: return "Fuera de rango (0–10)";
  }
}