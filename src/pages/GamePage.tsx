import React, {FC, useEffect, useState} from 'react';
import {BoardModel} from "../Models/BoardModel";
import {Player} from "../Models/Player";
import {Colors} from "../Models/Colors";
import Board from "../components/Board";

const GamePage: FC = () => {
    const [board, setBoard] = useState(new BoardModel());
    const [whitePlayer, setWhitePlayer] = useState<Player>(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState<Player>(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    useEffect(() => {
        createBoard();
        setCurrentPlayer(whitePlayer)
    }, [])

    function createBoard() {
        const newBoard = new BoardModel();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard)

    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer )
    }

    return (
        <div className="flex justify-center items-center h-screen w-[100wh]">
            <Board
                board={board}
                setBoard={setBoard}
                player={currentPlayer}
                swapPlayer={swapPlayer}
            />
        </div>
    );
};

export default GamePage;