const capitalize = require("./index").capitalize;
const reverse = require("./index").reverse;
const calculator = require("./index").calculator;

describe.skip("Capitalize", () => {
  test("Single Word", () => {
    expect(capitalize("abc")).toBe("Abc");
  });
  test("Multiple Words", () => {
    expect(capitalize("abc batata OIU")).toBe("Abc Batata OIU");
  });
  test("Null string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe.skip("Reverse", () => {
  test("Single Word", () => {
    expect(reverse("abc")).toBe("cba");
  });
  test("Multiple Words", () => {
    expect(reverse("abc batata OIU")).toBe("UIO atatab cba");
  });
  test("Null string", () => {
    expect(reverse("")).toBe("");
  });
});

describe("Calculator", () => {
  test("Add - Positve numbers", () => {
    expect(calculator.add(2.5, 8)).toBe(10.5);
  });
  test("Add - Negative numbers", () => {
    expect(calculator.add(-2, -6.3)).toBe(-8.3);
  });
  
  test("Subtract - Positve numbers", () => {
    expect(calculator.subtract(7.5, 8)).toBe(-0.5);
  });
  test("Subtract - Negative numbers", () => {
    expect(calculator.subtract(-2, -6.3)).toBe(4.3);
  });

  
  test("Divide - Positve numbers", () => {
    expect(calculator.divide(14, 8)).toBe(1.75);
  });
  test("Divide - Negative numbers", () => {
    expect(calculator.divide(-2, 8)).toBe(-0.25);
  });
  test("Divide - Zero being divided", () => {
    expect(calculator.divide(0, 2)).toBe(0);
  });
  test("Divide - Zero dividing", () => {
    expect(() => calculator.divide(2, 0)).toThrow(Error);
  });

  
  test("Multiply - Positve numbers", () => {
    expect(calculator.multiply(7, 8)).toBe(56);
  });
  test("Multiply - Negative numbers", () => {
    expect(calculator.multiply(-2, 65)).toBe(-130);
  });
  test("Multiply - One", () => {
    expect(calculator.multiply(20, 1)).toBe(20);
  });
  test("Multiply - Zero", () => {
    expect(calculator.multiply(-123, 0)).toBe(0);
  });
})