var bubbleSortModule = require('./bubbleSort');

//========== main ==================

var main = $( '<div>');
  main
    .addClass( 'main' );
  $( 'body' ).append( main );

//===== sort algo buttons ==========

var algoButtons = $( '<div>' );
  algoButtons
    .addClass ( 'algoButtons' );
  $( main ).append( algoButtons );

  //======== bubble ================

  var bubbleButt = $( '<div>' );
    bubbleButt
      .addClass ( 'bubbleButt' )
      .text ( 'Bubble' );
    $( algoButtons ).append( bubbleButt );

    // $( '.bubbleButt' ).click( function( ) {
    //   var result = bubbleSortModule.bubbleSort( unsortedItems );
    //   console.log(result);
    // });
  //======== quick ================

  var quickButt = $( '<div>' );
    quickButt
      .addClass ( 'quickButt' )
      .text ( 'Quick' );
    $( algoButtons ).append( quickButt );

  //======== merge ================

  var mergeBtn = $( '<div>' );
    mergeBtn
      .addClass ( 'mergeBtn' )
      .text ( 'Merge' );
    $( algoButtons ).append( mergeBtn );

  //======== insertion ================

  var insertionBtn = $( '<div>' );
    insertionBtn
      .addClass ( 'insertionBtn' )
      .text ( 'Insertion' );
    $( algoButtons ).append( insertionBtn );

  //======== selection ================

  var selectionBtn = $( '<div>' );
    selectionBtn
      .addClass ( 'selectionBtn' )
      .text ( 'Selection' );
    $( algoButtons ).append( selectionBtn );

//========== viz ===================

var visualizeIt = $( '<div>' );
  visualizeIt
    .addClass ( 'visualizeIt' );
  $( main ).append( visualizeIt );

//=========== bars div =============

var barsDiv = $( '<div>' );
  barsDiv
    .addClass ( 'barsDiv' );
  $( visualizeIt ).append( barsDiv );

//============== bars ==============

var unsortedItems = [];
var click = false;
console.log(click);


for( var i = 0; i < 4; i++ ) {
  var randomNums = Math.floor(( Math.random() * 30 ) + 1);
    unsortedItems.push(randomNums);
  var randomHeight = 10 * unsortedItems[i];
console.log(unsortedItems);

  var bars = $( '<div>' );
    bars
      .addClass( 'bars' )
      .text( unsortedItems[i] )
      .css( 'height', (randomHeight) + 'px' );
    $( barsDiv ).append( bars );

}
//============ click event ==========

    $( '.bubbleButt' ).click( function ( evnt ) {
      var result = bubbleSortModule.bubbleSort( unsortedItems );
      console.log(result);
        click = true;
      console.log( click );
      crtSrtArr(result);

    });

// function crtSrtArr (result) {
//   for( var j = 0; j < result.length; j++ ) {

//       var bars = $( '<div>' );
//     bars
//       .addClass( 'bars' )
//       .text( result[j] )
//       .css( 'height', (10 * result[j]) + 'px' );
//     $( barsDiv ).append( bars );
//   }
// }