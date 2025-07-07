# React + Vite
 Tic Tac Toe game implemented using ReactJS, 
**Create three components**:
1.Square.jsx 2.app.jsx 3.Pattern.jsx
**1.Square component:** 
- Props: val (X, O, or empty), chooseSquare (callback when clicked).
- Returns a div with a class square and shows the current value (val).
- Click triggers chooseSquare.
**2.App Component:**
- board: An array of 9 strings representing the squares.
- player: Tracks whose turn it is ("O" or "X").
- result: Tracks if the game is over and the winner.
Creating use State all this.
**3.Pattern**

 All possible winning combinations of nested Array
 **useeffect():**
Runs When board Changes:when board Changes
 -Checks for win/tie after each move.
 -Alerts when the game is over.
- Resets the game automatically.
**chooseSquare(square):**
- User clicks a square → updates the board if it's empty:
**CheckWin():**
- Iterates over winning Patterns (rows, columns, diagonals).
**Tie Check:**
checkIfTie()
- If all squares are filled and no winner, it's a tie.
 ****Restart**
Clears the board and resets to initial state.
Resets everything:
Rendering Board:
Renders three rows with three squares each.
 Each square is connected to chooseSquare with its index.
Displays reset button.
