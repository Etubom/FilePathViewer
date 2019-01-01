const functionFactory = require("./functionFactory");

test("Adds 2 + 2 to equal 4", () => {
  expect(functionFactory.add(2, 2)).toBe(4);
});
