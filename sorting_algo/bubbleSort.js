module.exports = bubbleSort;

function bubbleSort( numArr ) {

  var count = 0;

  for ( var i = 0; i < numArr.length; i++ ) {
    var currentNum = numArr[i];
    var next = numArr[i + 1];

    //switch index if currentNum > next
    if( currentNum > next ) {
      numArr[i] = next;
      numArr[i + 1] = currentNum;
      count++; //increment count whenever switch takes place
    }

    //return numArr if reached end of array
    if( i === (numArr.length - 1) ) {
      if( count === 0 ){ //& if count is 0; does not need swapping
        return numArr;
      }
      else {
        return bubbleSort( numArr );
      }
    }
  }
}