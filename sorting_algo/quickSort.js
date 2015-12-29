module.exports = quickSort;

function quickSort( numArr ) {

  var left = [];
  var right = [];
  var pivot = numArr[0];
//base case
  if( numArr.length <= 1 ) {
    return numArr;
  }

  for( var i = 1; i < numArr.length; i++ ) {
    if( pivot >= numArr[i] ) {
      left.push(numArr[i]); //2, 3, 4, 1
      // leftLength++; //4
    }
    else {
      right.push(numArr[i]); // 7, 6
      // rightLength++; //2
    }
  }
  //console.log(quickSort(left).concat(pivot, quickSort(right)));
  return quickSort(left).concat(pivot, quickSort(right));

  //grab a number in your array
  // var pivot = numArr.shift(0);
  // console.log('pivottttting', pivot);
  // var left = [];
  // var right = [];
  // var sortedArray = [];
  // var leftLength = 0;
  // var rightLength = 0;

  // //loop through array
  // for( var i = 0; i < numArr.length; i++ ) {
  //   if( pivot >= numArr[i] ) {
  //     left.push(numArr[i]); //2, 3, 4, 1
  //     leftLength++; //4
  //   }
  //   else {
  //     right.push(numArr[i]); // 7, 6
  //     rightLength++; //2
  //   }
  //   if( leftLength > 1 ) {
  //     if ( rightLength > 1 ) {
  //     return quickSort( numArr );
  //   }
  //   }
  //   else {
  //     sortedArray.push(left.concat(right));
  //     console.log('concattting?', sortedArray);
  //   }
  // }


}