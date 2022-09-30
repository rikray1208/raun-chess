import React, {FC, Fragment, useEffect, useState} from 'react';
import {BoardModel} from "../../Models/BoardModel";
import Cell from "../Cell";
import {CellModel} from "../../Models/CellModel";


type BoardProps = {
    board: BoardModel,
    setBoard: (board: BoardModel) => void
}

const Board: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<CellModel | null>(null)

    function click(currentCell: CellModel) {
        if(selectedCell && selectedCell !== currentCell && selectedCell.figure?.canMove(currentCell)) {
            selectedCell.moveFigure(currentCell);
            setSelectedCell(null);

        } else   {
            if( currentCell?.figure ) {
                setSelectedCell(currentCell)
            }
        }
    }


    function setAvailableCells() {
        if(board.cells.length) {
            board.setAvailableCells(selectedCell);
        }
        updateStateBoard()
    }

    function updateStateBoard() {
        const newBoard = board.getCopy()
        setBoard(newBoard)
    }

    useEffect(() => {
        setAvailableCells()
    }, [selectedCell]);

    return (
        <div className='w-[760px] h-[760px] flex flex-wrap'>
            {
                board.cells.map((row, idx) =>
                    <Fragment key={idx} >
                        {row.map((cell) =>
                            <Cell
                                selectedCell={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
                                setSelectedCell={click}
                                key={cell.id}
                                cell={cell}
                            />
                        )}
                    </Fragment>
                )
            }
        </div>
    );
};

export default Board;