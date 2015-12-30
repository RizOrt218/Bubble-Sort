var mergeSortModule = module.exports = (function () {

  return {

    mergeSort : function (numArr) {

      if ( numArr.length <= 1 ) {
        return numArr;
      }
      var middle = Math.floor((numArr.length)/2); //3
      var left = numArr.slice(0, middle); //[2, 3, 1]
      var right = numArr.slice(middle); //[4, 6, 5]

      if( left[0] < right[0] ){
        return this.mergeSort( numArr );
      }

      }


  };
}());


