const subtract = require("./subtract");

// test("Must subtract properly", () => {
//   expect(subtract(1, 2)).toBe(-1);
// });
describe("subtract", () => {
  it("should subtract positive and positive number correctly", () => {
    expect(subtract(8, 9)).toBe(-1);
  });

  it("should subtract positive and negative number correctly", () => {
    expect(subtract(1, -2)).toBe(3);
  });

  it("should subtract negative and negative number correctly", () => {
    expect(subtract(-8, -2)).toBe(-6);
  });
});
