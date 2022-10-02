import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import whiteIcon from "../../assets/chessIcons/white-king.png";
import blackIcon from "../../assets/chessIcons/black-king.png";
import {CellModel} from "../CellModel";

export class King extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.name = FigureNames.KING
        this.image = color === Colors.WHITE ? whiteIcon : blackIcon
    }

    canMove(targetCell: CellModel): boolean {

        if (!super.canMove(targetCell)) {
            return false
        }

        const horizontalCheck = targetCell.x === this.cell.x  && (targetCell.y === this.cell.y - 1 || targetCell.y === this.cell.y + 1);
        const verticalCheck = targetCell.y === this.cell.y  && (targetCell.x === this.cell.x - 1 || targetCell.x === this.cell.x + 1);
        const diagonalCheck = (targetCell.y === this.cell.y + 1 || targetCell.y === this.cell.y - 1 )&& (targetCell.x === this.cell.x + 1 || targetCell.x === this.cell.x - 1)

        if (horizontalCheck || verticalCheck || diagonalCheck) {
            return true
        }


        return false;
    }
}