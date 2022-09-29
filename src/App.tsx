import React, {useEffect, useState} from 'react';
import Board from "./components/Board";
import {BoardModel} from "./Models/BoardModel";

function App() {
    const [board, setBoard] = useState(new BoardModel())

    useEffect(() => {
        createBoard();
    }, [])

    function createBoard() {
        const newBoard = new BoardModel();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard)


    }

    return (
    <div className="flex justify-center items-center h-screen w-[100wh]">
        <Board board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
