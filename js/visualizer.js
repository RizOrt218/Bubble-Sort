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

    $( '.bubbleButt' ).click( function( ) {
      var result = bubbleSortModule.bubbleSort( unsortedItems );
      console.log(result);
    });
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

for( var i = 0; i < 30; i++ ) {
  var randomNums = Math.floor(( Math.random() * 30 ) + 1);
  unsortedItems.push(randomNums);

  var bars = $( '<div>' );
    bars
      .addClass( 'bars' )
      .text( unsortedItems[i] )
      .css( 'height', (10 * unsortedItems[i]) + 'px' );
    $( barsDiv ).append( bars );
}
//========== sorter button =========
