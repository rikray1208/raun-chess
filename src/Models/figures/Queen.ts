import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import whiteIcon from "../../assets/chessIcons/white-queen.png";
import blackIcon from "../../assets/chessIcons/black-queen.png";
import {CellModel} from "../CellModel";

export class Queen extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.name = FigureNames.QUEEN
        this.image = color === Colors.WHITE ? whiteIcon : blackIcon
    }

    canMove(targetCell: CellModel): boolean {

        if (!super.canMove(targetCell)) {
            return false
        }

        if (this.cell.isEmptyVertical(targetCell) || this.cell.isEmptyHorizontal(targetCell) || this.cell.isEmptyDiagonal(targetCell)) {
            return true;
        }

        return false
    }
}