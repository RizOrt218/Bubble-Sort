var mergeSortModule = module.exports = (function () {

  return {

    mergeSort : function (numArr) {
      var middle = 0;

      if ( numArr.length <= 1 ) {
        return numArr;
      }

      middle = Math.floor((numArr.length)/2);
      console.log(middle);
    }


  };
}());


