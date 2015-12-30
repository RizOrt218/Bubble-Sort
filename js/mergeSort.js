var mergeSortModule = module.exports = (function () {

  return {

  split : function( numArr, left, right ) {
    //base case
    if( numArr.length <= 1 ) {
      return numArr;
    }
    var midPoint = Math.floor( numArr.length/2 );
    return split( left, right );
  }
};

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
}());

//split array in half
//work with left half and run split fn until array = 1




