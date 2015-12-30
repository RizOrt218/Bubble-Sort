var mergeSortModule = module.exports = (function () {

  return {

    mergeSort : function (numArr) {
      var middle = 0;

      if ( numArr.length <= 1 ) {
        return numArr;
      }

      for( var i = 0; i < numArr.length; i++ ) {
        middle = Math.floor((0 + numArr.length)/2);
        console.log(middle);
      }
    }


  };
}());

