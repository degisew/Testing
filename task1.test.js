const TestDemo = require("./task1");

test("string length must be greater than zero and less than 10", () => {
  
  expect(() => TestDemo.stringLength("Hello! my name is Degi")).toThrow();
});
test("null", () => {
  expect(() => TestDemo.stringLength("")).toThrow();
});
test("reversed string or not", () => {
  //arrange
  const string = "Hello";
  //act
  const funToBeCalled = TestDemo.reverseString(string.toLowerCase());
  //assert
  expect(funToBeCalled).toMatch("olleh");
});
