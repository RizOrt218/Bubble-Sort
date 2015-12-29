module.exports = quickSort;

function quickSort( numArr ) {

  //grab a number in your array
  var pivot = numArr.shift(0);
  console.log('pivottttting', pivot);
  var left = [];
  var right = [];

  //take numbers and compare to your pivot
  //left => less than pivot
  //right => greater than pivot

  //loop through array
  for( var i = 0; i < numArr.length; i++ ) {
    if( pivot > numArr[i] ) {
      left.push(numArr[i]);
      console.log('to the left', left);
    }
    else {
      right.push(numArr[i]);
      console.log('to the right you go', right);
    }
  }

}