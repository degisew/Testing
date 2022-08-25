const captitalize = require("./capitalize.js");

it("should return a string with first character capitalized.", () => {
  //arrange
  const expectedString = "Degisew";
  //act
  const funToBeTeste = captitalize("degisew");
  //assert
  expect(funToBeTeste).toMatch("Degisew");
});
