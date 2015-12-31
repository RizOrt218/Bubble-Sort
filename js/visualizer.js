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

//==================================

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

//==================================

var unsortedItems = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

for( var i = 0; i < unsortedItems.length; i++ ) {
  var bars = $( '<div>' );
    bars
      .addClass( 'bars' + i )
      .text( unsortedItems[i] )
      .css( 'background-color', 'red' );
    $( barsDiv ).append( bars );
}
//========== sorter button =========
