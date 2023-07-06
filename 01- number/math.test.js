const { add, subtract } = require("./math");

// test("function add", () => {
//   // เขียน Unit test ตรงนี้
//   // let result = add(1, 2)

//   //Assert, Verify
//   expect(4 + 2).toBe(3);
ก// });

describe("subtract Function", () => {
  it("should return -1 when call function with 5 and 6", () => {
    let result = subtract(5, 6);
    expect(result).toBe(-1);
  }),
    it("should return 2 when call function with '5' and 3", () => {
      let str = "5";
      let num = 3;
      let result = subtract(str, num);

      expect(result).toBe(2);
    });
});
