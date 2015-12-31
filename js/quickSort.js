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
    }
    else {
      right.push(numArr[i]); // 7, 6
    }
  }
  //console.log(quickSort(left).concat(pivot, quickSort(right)));
  return quickSort(left).concat(pivot, quickSort(right));

}
var testArr = [ 3, 2, 1, 4];
console.log(testArr);
// console.log( quickSort( testArr ));