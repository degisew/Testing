const calculator = require("./calculator.js");

describe("Calculator operation Testing", () => {
  //arrange
  const a = 5,
    b = 6;
  describe("Addition test cases", () => {
    test("sum of 5 and 6 should be 11", () => {
      //act
      const addFun = calculator.add(a, b);
      //arrange
      const expectedValue = 11;
      //assert
      expect(addFun).toBe(expectedValue);
    });
    test("sum of 10 and -1 should be 9", () => {
      //arrange
      const expectedValue = 9;
      //act
      const addFun = calculator.add(10, -1);
      //arrange
      //assert
      expect(addFun).toBe(expectedValue);
    });
    test("sum of 0 and 1 should be 1", () => {
      //arrange
      const expectedValue = 1;
      //act
      const addFun = calculator.add(0, 1);
      //assert
      expect(addFun).toBe(expectedValue);
    });
  });
  describe("Subtraction test cases", () => {
    test("Difference of 5 and 6 should be -1", () => {
      //arrange
      const expectedValue = -1;
      //act
      const subFun = calculator.subtract(a, b);
      //assert
      expect(subFun).toBe(expectedValue);
    });
    test("Difference of 10 and 4 should be 6", () => {
      //arrange
      const expectedValue = 6;
      //act
      const subFun = calculator.subtract(10, 4);
      //assert
      expect(subFun).toBe(expectedValue);
    });
    test("Difference of 0 and -1 should be 1", () => {
      //arrange
      const expectedValue = 1;
      //act
      const subFun = calculator.subtract(0, -1);
      //assert
      expect(subFun).toBe(expectedValue);
    });
  });

  describe("Multiplication test cases", () => {
    test("5 multiply by 6 should return 30", () => {
      //arrange
      const expectedValue = 30;
      //act
      const multFun = calculator.multiply(a, b);
      //assert
      expect(multFun).toBe(expectedValue);
    });
    test(" 0 multiply by 6 should return 0", () => {
      //arrange
      const expectedValue = 0;
      //act
      const multFun = calculator.multiply(0, 6);
      //assert
      expect(multFun).toBe(expectedValue);
    });
    test("-1 multiply by -2 should return 2", () => {
      //arrange
      const expectedValue = 2;
      //act
      const multFun = calculator.multiply(-1, -2);
      //assert
      expect(multFun).toBe(expectedValue);
    });
  });
  describe(" Division test cases", () => {
    test("5 Divided by 6 should be arround 0.83", () => {
      //arrange
      const expectedValue = 0.83;
      //act
      const divFun = calculator.divide(a, b);
      //assert
      expect(divFun).toBeCloseTo(expectedValue);
    });
    test("10 Divided by 2 should be 5", () => {
      //arrange
      const expectedValue = 5;
      //act
      const divFun = calculator.divide(10, 2);
      //assert
      expect(divFun).toBe(expectedValue);
    });
    test(" 2 Divided by 0 should return Infinity", () => {
      //arrange
      const expectedValue = Infinity;
      //act
      const divFun = calculator.divide(2, 0);
      //assert
      expect(divFun).toBe(expectedValue);
    });
  });
});
