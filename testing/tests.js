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

  it('can evaluate variables', function () {
    var bar = 'baz';
    var string = `foo${bar}`;

    expect(string).to.equal('foobaz');
  });

  it('can execute functions', function () {
    var string = `The date is: ${new Date()}`;
    var date = new Date();

    expect(string).to.equal('The date is: ' + date);
  });

  it('can evaluate expressions', function () {
    var x = `2 + 2 = ${2 + 2}`;

    expect(x).to.equal('2 + 2 = 4');
  });

  it('can evaluate multi-line strings', function () {
    var string = `Hello
       world`;

    expect(string).to.equal('Hello\n       world');
  });
});
