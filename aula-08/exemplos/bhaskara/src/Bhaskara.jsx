export function calcularDelta(a, b, c) {
    return b ** 2 - 4 * a * c;
  }
  
  export function calcularRaizes(a, b, c) {
    const delta = calcularDelta(a, b, c);
    if (delta < 0) {
      return ["na"];
    } else if (delta === 0) {
      const raiz = -b / (2 * a);
      return [raiz];
    } else {
      const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
      const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [raiz1, raiz2];
    }
  }
  