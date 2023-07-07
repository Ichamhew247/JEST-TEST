const { add } = require("./array");

test.each([
  [1, 2, 3], // Test case 1: 1 + 2 = 3
  [-1, 5, 4], // Test case 2: -1 + 5 = 4
  [0, 0, 0], // Test case 3: 0 + 0 = 0
])("add(%s, %s) should return %s", (a, b, expected) => {
  const result = add(a, b);
  expect(result).toBe(expected);
});
