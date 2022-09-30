import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackIcon from '../../assets/chessIcons/black-bishop.png';
import whiteIcon from '../../assets/chessIcons/white-bishop.png';
import {CellModel} from "../CellModel";

export class Bishop extends Figure {

    constructor(color: Colors, cell: CellModel) {
        super(color, cell);
        this.name = FigureNames.BISHOP
        this.image = color === Colors.WHITE ? whiteIcon : blackIcon
    }

    canMove(targetCell: CellModel): boolean {

        if (!super.canMove(targetCell)) {
            return false
        }

        if(this.cell.isEmptyDiagonal(targetCell)) {
            return true
        }

        return false
    }
}