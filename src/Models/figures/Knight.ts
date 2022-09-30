import {Figure, FigureNames} from "./Figure";
import {CellModel} from "../CellModel";
import {Colors} from "../Colors";
import whiteIcon from "../../assets/chessIcons/white-knight.png";
import blackIcon from "../../assets/chessIcons/black-knight.png";

export class Knight extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.name = FigureNames.BISHOP
        this.image = color === Colors.WHITE ? whiteIcon : blackIcon
    }

    canMove(targetCell: CellModel): boolean {

        if (!super.canMove(targetCell)) {
            return false
        }

        const abcX = Math.abs(this.cell.x - targetCell.x);
        const abcY = Math.abs(this.cell.y - targetCell.y);

        if ((abcX === 1 && abcY === 2) || (abcY === 1 && abcX === 2)) {
            return true
        }

        return false;
    }
}