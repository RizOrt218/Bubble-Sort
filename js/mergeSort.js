var mergeSortModule = module.exports = (function () {

  return {

    merge : function( left, right ) {
      var sortedArr = [];
      var lf_i = 0;
      var rt_i = 0;

      while( lf_i < left.length && rt_i < right.length ) {
        if( left[lf_i] < right[rt_i] ) {
          sortedArr.push( left[lf_i] );
          lf_i++;
        }
        else {
          sortedArr.push( right[rt_i] );
          rt_i++;
        }
        return sortedArr.console(left[lf_i]).concat(right[rt_i]);
      }
    }
  };
}());

  // return {

  //   mergeSort : function( numArr ) {
  //     var ltIndex = 0;
  //     var rtIndex = 0;

  //     if ( numArr.length <= 1 ) {
  //       return numArr;
  //     }
  //     var middle = Math.floor( numArr.length/2 ); //3
  //     var left = numArr.slice( 0, middle ); //[2, 3, 1]
  //     var right = numArr.slice( middle ); //[4, 6, 5]

  //     function compareBoth ( left, right ) {
  //       var sortedArray = [];
  //       while( leftIndex < left.length && rightIndex < right.length ) {
  //         if( left[ltIndex] < right[rtIndex] ){
  //           sortedArray.push(left[ltIndex]);
  //           ltIndex++;
  //         }
  //       }
  //     }
  // }


  // };


//split array in half
//recursively run the fn till you reach base case of --
// array.length = 1

var testArr = [ 3, 2, 1, 4];
console.log(testArr);
// var mer = mergeSortModule;
// console.log( mer.merge( testArr ));


