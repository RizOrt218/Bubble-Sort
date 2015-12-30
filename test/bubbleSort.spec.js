var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleSortModule = require('./../js/bubbleSort.js');
var quickSort = require('./../js/quickSort.js');
var mergeSortModule = require('./../js/mergeSort.js');

describe('bubble sort', function() {
  it('should be a function that exist', function() {
    expect(bubbleSortModule).to.be.a('object');
  });

  it('should sort an unsorted array', function() {
    var result = bubbleSortModule.bubbleSort([ 4, 5, 6, 3, 7, 2, 1, 8 ]);

    expect( result ).to.be.an('array');
    expect( result ).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7, 8 ] );
  });
});

describe('quick sort', function() {
  it('should be a function that exist', function() {
    expect(quickSort).to.be.a('function');
  });

  it('should sort an unsorted array', function() {
    var result = quickSort([ 2, 3, 1, 4, 6, 5 ]);

    expect( result ).to.be.an('array');
    expect( result ).to.deep.equal([ 1, 2, 3, 4, 5, 6 ]);
  });
});

describe('Merge sort', function() {
  it('should be a function that exist', function() {
    expect(mergeSortModule).to.be.a('object');
  });

  it('should sort an unsorted array', function() {
    var result = mergeSortModule.merge([ 2, 3, 1, 4, 6, 5 ]);

    expect( result ).to.be.an('array');
    expect( result ).to.deep.equal([ 1, 2, 3, 4, 5, 6 ]);
  });
});