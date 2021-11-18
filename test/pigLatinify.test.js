const { expect } = require("chai");
const { pigLatinify } = require("../pig-latinify.js");

describe("pigLatinify", function () {
  it("Should throw an error if input is not a string!", () => {
    const invalidInput = pigLatinify.bind(null, 9);
    const validInput = pigLatinify.bind(null, "9");
    expect(invalidInput).to.throw();
    expect(validInput).to.not.throw();
  });

  it("Should return a string", () => {
    const randomString = pigLatinify("Hello");
    expect(typeof randomString).to.equal("string");
  });

  it("Should convert 'banana' into pig latin", () => {
    const result = pigLatinify("banana");
    const expected = "ananabay";
    expect(expected).to.equal(result);
  });

  it("'Pig' should return the 🐷 emoji", () => {
    const result = pigLatinify("Pig");
    expect(result).to.equal("🐷");
  });

  it("Should handle multiple words", () => {
    const result = pigLatinify("Have a nice day");
    const expected = "Avehay away icenay ayday";
    expect(expected.toUpperCase()).to.equal(result.toUpperCase());
  });
});
