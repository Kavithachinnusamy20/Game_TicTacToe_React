import { useState } from 'react'
import './App.css'
import Square from './components/Square';
function App() {
  const [board, setBoard] = useState(["","","","","","","","","",]);

  return (
    <>
      <div className="App">
        <div className="board">
          <Square val={board[0]} 
          chooseSquare={() =>{
            alert(0);
            }}/>
            <Square val={board[1]} 
          chooseSquare={() =>{
            alert(0);
            }}/>
            <Square val={board[2]} 
          chooseSquare={() =>{
            alert(0);
            }}/>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
        
      </div>
       
    
     
    </>
  )
}

export default App
