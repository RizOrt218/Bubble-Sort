var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubsModule = require('./../sorting_algo/bubbleSort.js');
// var bubbleSortModule = require('./../sorting_algo/bubbleSort.js');
var quickSort = require('./../sorting_algo/quickSort.js');

describe('bubble sort', function() {
  it('should be a function that exist', function() {
    expect(bubsModule).to.be.a('object');
  });

  it('should sort an unsorted array', function() {
    var result = bubsModule.bubbleSort([ 4, 5, 6, 3, 7, 2, 1, 8 ]);

    expect( result ).to.be.an('array');
    expect( result ).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7, 8 ] );
  });
});

describe('quick sort', function() {
  it('should be a function that exist', function() {
    expect(quickSort).to.be.a('function');
  });

  it('should sort an unsorted array', function() {
    // var result = quickSort([ 5,2,7,6,3,4,1 ]);
    var result = quickSort([ 2, 3, 1, 4, 6, 5 ]);

    expect( result ).to.be.an('array');
    // expect( result ).to.deep.equal([ 1,2,3,4,5,6,7 ]);
    expect( result ).to.deep.equal([ 1, 2, 3, 4, 5, 6 ]);
  });
});