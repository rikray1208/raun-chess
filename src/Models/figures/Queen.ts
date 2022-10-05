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

    canMove(targetCell: CellModel, flag: boolean): boolean {

        if (!super.canMove(targetCell)) {
            return false
        }

        if (this.cell.isEmptyVertical(targetCell, flag) || this.cell.isEmptyHorizontal(targetCell, flag) || this.cell.isEmptyDiagonal(targetCell, flag)) {
            return true;
        }

        return false
    }
}