import {Figure, FigureNames} from "./Figure";
import {CellModel} from "../CellModel";
import {Colors} from "../Colors";
import whiteIcon from "../../assets/chessIcons/white-rook.png";
import blackIcon from "../../assets/chessIcons/black-rook.png";

export class Rook extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.name = FigureNames.BISHOP
        this.image = color === Colors.WHITE ? whiteIcon : blackIcon
    }

    canMove(targetCell: CellModel): boolean {

        if (!super.canMove(targetCell)) {
            return false
        }

        if (this.cell.isEmptyVertical(targetCell)) {
            return true;
        }

        if (this.cell.isEmptyHorizontal(targetCell)) {
            return true;
        }

        return false;

    }
}