var mergeSortModule = module.exports = (function () {

  return {

    mergeSort : function (numArr) {
      var middle = Math.floor((numArr.length)/2); //3

      if ( numArr.length <= 1 ) {
        return numArr;
      }
      var left = numArr.slice(0, middle); //[2, 3, 1]
      var right = numArr.slice(middle);
      console.log(right);

      }


  };
}());


