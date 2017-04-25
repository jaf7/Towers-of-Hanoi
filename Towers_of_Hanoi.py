"""
A recursive function to print the steps to solve an arbitrary Towers of Hanoi problem
(With helper function logMove())
It might help to think of the positional argument names (from_position, to_position, spare)
as belonging to a stack of discs rather than the spire on which the discs sit.  Once a stack has
moved, it aquires the name of it's new position.

Visualize execution: https://goo.gl/sCvuZF
"""
def printMove(from_position, to_position):
    print('move: ' + 'top disc at ' + str(from_position) + ' --> ' + str(to_position))

def Towers(n, from_position, to_position, spare):
    if n == 1:
        printMove(from_position, to_position)
    else:
        Towers(n-1, from_position, spare, to_position)
        Towers(1, from_position, to_position, spare)
        Towers(n-1, spare, to_position, from_position)

Towers(5, 'from_position', 'to_position', 'spare_position')
