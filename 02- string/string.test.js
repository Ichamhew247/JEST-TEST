const {
  reverseString,
  capitalize,
  countVowels,
  spamCheck,
  isPangram,
} = require("./string");

describe("reverseString", () => {
  it("should return 'cba' when call with 'abc'", () => {
    let result = reverseString("abc");
    expect(result).toBe("cba");
  });
});

describe("capitalize", () => {
  it("mew should capitalize correctly", () => {
    let result = capitalize("mew");
    expect(result).toBe("Mew");
  });
});

describe("countVowels", () => {
  it("should countVowels correctly", () => {
    let result = countVowels("Tae");
    expect(result).toBe(2);
  });
  it("should countVowels correctly", () => {
    let result = countVowels("nattanicha");
    expect(result).toBe(4);
  });
});

describe("spamCheck", () => {
  it("message should not have 'viagra' ", () => {
    let result = spamCheck("viagra");
    expect(result).toBe(true);
  });
  it("message should not have 'viagra' ", () => {
    let result = spamCheck("xxx");
    expect(result).toBe(true);
  });
  it("message should not have spame ", () => {
    let result = spamCheck(" ");
    expect(result).toBe(false);
  });
});

describe("isPangram", () => {
  it("'The quick brown fox jumps over a lazy dog' is pangram", () => {
    let result = isPangram("The quick brown fox jumps over a lazy dog");
    expect(result).toBe(true);
  });
  it(" empty string is not pangram", () => {
    let result = isPangram("");
    expect(result).toBe(false);
  });
  it("abc is not pangram", () => {
    let result = isPangram("abc");
    expect(result).toBe(false);
  });
});
