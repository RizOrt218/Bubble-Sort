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
    // while( count !== 0 ) {
    //   return bubbleSort( numArr );
    // }
    //return numArr if count
    if( next === undefined && count === 0 ) {
      return numArr;
    }
    //we've reached the end of array but swapped numbers took place
    if( next === undefined && count !== 0 ) {
      return bubbleSort( numArr );
    }
  }

}
// bubbleSort();
// console.log(bubbleSort());