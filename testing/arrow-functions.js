var expect = require('chai').expect;

describe('arrow functions', function () {
  it('is shorter to write', function () {
    var fn = () => {
      return 'Hello world';
    };

    expect(fn()).to.equal('Hello world');
  });

  it('one parameter can be written without parens', function () {
    var fn = name => {
      return `Hello ${name}`;
    };

    expect(fn('Scott')).to.equal('Hello Scott');
  });

  it('binds "this" to the function', function () {
    this.foo = 'bar';

    var fn = () => {
     return this.foo;
    };

    expect(fn()).to.equal('bar');
  });

  it('uses "let" to stay in block scope', function () {
    "use strict";
    var x = 200;
    var y = 0;

    if (x > 100) {
      let x = 50;
      y = 25 + x;
    }

    expect(x).to.equal(200);
    expect(y).to.equal(75);
  });

  it('uses destructuring to assign and return values', function () {
    var arr = ["happy", "sad", "angry"];
    var obj = { "one": 100, "two": 200, "three": 300 };

    var [sunny, rainy, foggy] = arr;
    var {"one": twoFifties, "two": fourFifties, "three": sixFifties} = obj;

    expect(sunny).to.equal("happy");
    expect(fourFifties).to.equal(200);
  });
});
