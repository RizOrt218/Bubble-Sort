var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleSort = require('./../bubbleSort.js');

describe('bubble sort', function() {
  it('should be a function that exist', function() {
    expect(bubbleSort).to.be.a('function');
  });

  it('should sort an unsorted array', function() {
    var result = bubbleSort([ 7,5,6,3,4,2,1]);

    expect( result ).to.be.an('array');
    expect( result ).to.deep.equal([ 1,2,3,4,5,6,7]);
  });
});