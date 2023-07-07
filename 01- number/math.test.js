const { add, subtract, divide, modulo, power, absolute } = require("./math");

// test("function add", () => {
//   // เขียน Unit test ตรงนี้
//   // let result = add(1, 2)

//   //Assert, Verify
//   expect(4 + 2).toBe(3);
// });

describe("add", () => {
  it("add method with positive and positive number should complete correctly", () => {
    let result = add(2, 9);
    expect(result).toBe(11);
  });
  it("add method with positive and negative number should complete correctly", () => {
    let result = add(2, -3);
    expect(result).toBe(-1);
  });
  it("add method with negative and negative number should complete correctly", () => {
    let result = add(-4, -2);
    expect(result).toBe(-6);
  });
  it("string in parameter 1st can add with number", () => {
    let result = add("4", 2);
    expect(result).toBe(6);
  });
  it("string in parameter 2nd can add with number", () => {
    let result = add(4, "2");
    expect(result).toBe(6);
  });
  it("string in parameter 1st and 2nd can add with number", () => {
    let result = add("4", "2");
    expect(result).toBe(6);
  });
});

describe("subtract Function", () => {
  it("should return -1 when call function with 5 and 6", () => {
    let result = subtract(5, 6);
    expect(result).toBe(-1);
  });
  it("should return 2 when call function with '5' and 3", () => {
    let str = "5";
    let num = 3;
    let result = subtract(str, num);

    expect(result).toBe(2);
  });
});

describe("multiply", () => {
  it("should return 20 when call function with 10 and 2", () => {
    let result = multiply(10, 2);
    expect(result).toBe(20);
  });
  it("should return 20 when call function with '10' and 2", () => {
    let result = multiply("10", 2);
    expect(result).toBe(20);
  });
  it("should return 20 when call function with '10' and '2'", () => {
    let result = multiply("10", "2");
    expect(result).toBe(20);
  });
  it("should return 20 when call function with 0 and 2", () => {
    let result = multiply(0, 2);
    expect(result).toBe(0);
  });
});
describe("divide", () => {
  it("should return 2 when call function with 4 and 2", () => {
    let result = divide(4, 2);
    expect(result).toBe(2);
  });
  it("should return 0.5 when call function with 2 and 4", () => {
    let result = divide(2, 4);
    expect(result).toBe(0.5);
  });
});

describe("modulo", () => {
  it("should return result properly", () => {
    let result = modulo(5, 2);
    expect(result).toBe(1);
  });
});
describe("power", () => {
  it("should return result properly", () => {
    let result = power(2, 3);
    expect(result).toBe(8);
  });
});
describe("absolute", () => {
  it("should return absolute result ", () => {
    let result = absolute(-3);
    expect(result).toBe(3);
  });
  it("should return absolute result ", () => {
    let result = absolute("3");
    expect(result).toBe(3);
  });
  it("should return absolute result ", () => {
    let result = absolute("abc");
    expect(result).toBe(NaN);
  });
});
