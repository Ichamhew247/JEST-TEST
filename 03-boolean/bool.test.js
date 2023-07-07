const {
  isEven,
  isPrime,
  isAdmin,
  isLeapYear,
  isPalindrome,
  isValidPassword,
} = require("./bool");

describe("isEven", () => {
  it("should return true when number is even", () => {
    const number = 4;
    const result = isEven(number);
    expect(result).toBe(true);
  });
  it("should return false when number is odd", () => {
    const number = 5;
    const result = isEven(number);
    expect(result).toBe(false);
  });
});

describe("isPrime", () => {
  it("isPrime should return false when number less than 2", () => {
    const number = 1;
    const result = isPrime(number);
    expect(result).toBe(false);
  });
  it("isPrime should return true when number more than 2", () => {
    const number = 1;
    const result = isPrime(number);
    expect(result).toBe(false);
  });
  it("isPrime should return true when number is prime number", () => {
    const number = 13;
    const result = isPrime(number);
    expect(result).toBe(true);
  });
});

test.each([
  [2000, true], // Leap year divisible by 400
  [2020, true], // Leap year divisible by 4 but not by 100
  [2022, false], // Non-leap year
  [1900, false], // Divisible by 100 but not by 400
])("add(%s) should return %s", (year, expected) => {
  const result = isLeapYear(year);
  expect(result).toBe(expected);
});

describe("isAdmin", () => {
  it("should return true for admin", () => {
    const user = { admin: true };
    const result = isAdmin(user);
    expect(result).toBe(true);
  });
  it("should return true for non-admin", () => {
    const user = { admin: false };
    const result = isAdmin(user);
    expect(result).toBe(false);
  });
});

test.each([
  ["wow", true],
  ["lol", true],
  ["pop", true],
  ["mew", false],
])("%s should return %s", (word, expected) => {
  const result = isPalindrome(word);
  expect(result).toBe(expected);
});

it.each([
  ["1234", false],
  ["123456aA0", true],
])("%s should return %s", (password, expected) => {
  const result = isValidPassword(password);
  expect(result).toBe(expected);
});
