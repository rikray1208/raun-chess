import React, {FC, Fragment, useState} from 'react';
import {BoardModel} from "../../Models/BoardModel";
import Cell from "../Cell";
import {CellModel} from "../../Models/CellModel";


type BoardProps = {
    board: BoardModel,
    setBoard: (board: BoardModel) => void
}

const Board: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<CellModel | null>(null)

    function click(cell: CellModel) {
       if(cell?.figure) {
           setSelectedCell(cell)
       }
    }

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