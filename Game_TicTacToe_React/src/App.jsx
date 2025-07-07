import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Pattern.js";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();
    //alert("useEffect Player :"+player)
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
  //  alert( "board :"+  board) ;
  //  alert( "square :"+  square) ;
  //  alert("Initial Player :"+ player);
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
         //  alert("Initial inside map Player :"+ player);
          return player;
        }
      //  alert("outside map Player :"+ player);
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((x) => {
     // alert("first pattern:"+x)
       // alert("first pattern[0]:"+x[0])
      const firstPlayer = board[x[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      x.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <>
    <h1>REACT TIC TAC TOE</h1>
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
    <div><br></br>
      <button 
  onClick={restartGame} 
  style={{ backgroundColor: 'rgb(114, 182, 142)', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px'}}
>
  Reset Game
</button>
    </div>
    </>
  );
}

export default App;