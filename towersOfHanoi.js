/*
Practicing recursion:
A recursive function to print the steps to solve an arbitrary Towers of Hanoi problem
(With helper function logMove())
It might help to think of the positional argument names (fromPosition, toPosition, sparePosition)
as belonging to a stack of discs rather than the spire on which the discs sit.  Once a stack has
moved, it aquires the name of it's new position.

Visualize execution: https://goo.gl/OdOhRD
*/

function logMove( from, to ) {
  console.log( 'Move top disc: from ', from, ' to ', to );
}

function towerSolve( stackSize, fromPosition, toPosition, sparePosition ) {
  if ( stackSize === 1 ) { logMove( fromPosition, toPosition ); }

  else {
    // first recursive call inverts the target (to) & auxillary stack positions (spare)
    // (auxillary position becomes target)
    // and moves all but the last bottom disc (move n-1 discs where stacksize=n)
    towerSolve( stackSize-1, fromPosition, sparePosition, toPosition );
    // the actual move that gets printed by logMove():
    // move the last disc (nth disc, stacksize=n) from source to target
    towerSolve( 1, fromPosition, toPosition, sparePosition );
    // second recursive call inverts the source and auxillary stack positions
    // (auxillary position becomes source)
    // and moves all but the last bottom disc (n-1 discs where stacksize=n)
    towerSolve( stackSize-1, sparePosition, toPosition, fromPosition );
  }
}

towerSolve( 5, 'one', 'two', 'three' );
