var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleSort = require('./../bubbleSort.js');

describe('bubble sort', function() {
  it('should be a function that exist', function() {
    expect(bubbleSort).to.be.a('function');
  });
});