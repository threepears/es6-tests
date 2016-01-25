var expect = require("chai").expect;

describe('test suite', function () {
  it('true should be true', function () {
    expect(true).to.be.true;
  });
});

describe('template strings', function () {
  it('should be a string', function () {
    var string = `abc`;
    expect(string).to.be.a('string');
  });
});
