var mergeSortModule = module.exports = (function () {

  return {

    mergeSort : function( numArr ) {
      var sortedArray = [];
      var lt_Index = 0;
      var rt_Index = 0;

      if ( numArr.length <= 1 ) {
        return numArr;
      }
      var middle = Math.floor( numArr.length/2 ); //3
      var left = numArr.slice( 0, middle ); //[2, 3, 1]
      var right = numArr.slice( middle ); //[4, 6, 5]

      function compareBoth ( left, right ) {
        while( leftIndex < left.length && rightIndex < right.length ) {
          if( left[] < right[0] ){

          }
        }
      }

  }


  };
}());


