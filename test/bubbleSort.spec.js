var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleSort = require('./../bubble_sort.js');

describe('bubble sort', function() {
  it('should be a function that exist', function() {
    expect(bubble_sort).to.be.a('function');
  });
});