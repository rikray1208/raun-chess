import {Figure, FigureNames} from "./Figure";
import {CellModel} from "../CellModel";
import {Colors} from "../Colors";
import whiteIcon from "../../assets/chessIcons/white-pawn.png";
import blackIcon from "../../assets/chessIcons/black-pawn.png";

export class Pawn extends Figure {
    isFirst: boolean = true;

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.name = FigureNames.PAWN
        this.image = color === Colors.WHITE ? whiteIcon : blackIcon
    }

    canMove(targetCell: CellModel): boolean {

        if (!super.canMove(targetCell)) {
            return false
        }

        if(this.isFirst && this.cell.x === targetCell.x  && this.cell.y === targetCell.y + 2) {
            return true
        }
        if(!this.isFirst && this.cell.x === targetCell.x  && this.cell.y === targetCell.y + 1) {
            return true
        }

        return false;
    }

    moveFigure(targetCell: CellModel) {
        super.moveFigure(targetCell);
        this.isFirst = false
    }
}