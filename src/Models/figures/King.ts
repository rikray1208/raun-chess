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

        const abcX = Math.abs(this.cell.x - targetCell.x);
        const abcY = Math.abs(this.cell.y - targetCell.y);

        if(abcX < 2 && abcY < 2 && abcX + abcY > 0 ) {
            const arr = this.cell.cellsUnderAttack.find(el => el === targetCell)
            console.log(arr)
            if (!!arr) {
                return false
            }

            return true;
        }

        return false;
    }
}