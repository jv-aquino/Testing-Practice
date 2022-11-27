const capitalize = require("./index").capitalize;
const reverse = require("./index").reverse;

describe("Capitalize", () => {
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
  test.skip("Multiple Words", () => {
    expect(reverse("abc batata OIU")).toBe("UIO atatab cba");
  });
  test.skip("Null string", () => {
    expect(reverse("")).toBe("");
  });
});