import React, {FC} from 'react';
import {CellModel} from "../../Models/CellModel";
import {Colors} from "../../Models/Colors";
import classes from './Cell.module.scss'

type CellProps = {
    cell: CellModel,
    selectedCell: boolean,
    setSelectedCell: (cell: CellModel) => void
}

const Cell: FC<CellProps> = ({cell, setSelectedCell, selectedCell}) => {

    function cellStyles(): string {
        if(cell.color === Colors.HONEST) {
            return `${classes.cell} ${classes.cell__color_honest}`
        } else {
            return `${classes.cell} ${classes.cell__color_odd}`
        }
    }

    function cellSelected() {
        if(selectedCell) {
            return classes.cell__selected
        }
    }

    return (
        <div className={`${cellStyles()} ${cellSelected()}`} onClick={() => setSelectedCell(cell)}>
            {cell?.figure &&
                <img width='64px' height='64px' alt='figure' src={cell.figure.image}/>
            }
        </div>
    );
};

export default Cell;