var mergeSortModule = module.exports = (function () {

  return {

    mergeSort : function (numArr) {
      var middle = Math.floor((numArr.length)/2);
      var right = [];

      if ( numArr.length <= 1 ) {
        return numArr;
      }
      // for( var i = 0; i < numArr.length; i++ ) {
        console.log(middle);
        var left = numArr.slice(0, middle);
        console.log(left);

      }
    // }


  };
}());


