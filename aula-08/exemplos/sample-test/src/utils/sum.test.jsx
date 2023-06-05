// sum.test.js

function sum(a, b) {
  return a + b;
}

describe("sum function", () => {
  test("retorna a soma de dois números", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  test("zero , somando zero + zero", () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
  });

  test("número positivo, com positivo + negativo", () => {
    const result = sum(-5, 10);
    expect(result).toBe(5);
  });
});
