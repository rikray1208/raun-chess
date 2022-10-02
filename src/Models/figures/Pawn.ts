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

        const direction = this.color === 'black' ? 1 : -1;
        const firstDirection = this.color === 'black' ? 2 : -2;

        const offsetCheck = (targetCell.y === this.cell.y + direction) || (this.isFirst && (targetCell.y === this.cell.y + firstDirection));
        const horizontalCheck = targetCell.x === this.cell.x;
        const isEmptyCheck = this.cell.board.getCell(targetCell.y, targetCell.x).isEmpty();

        const abcX = Math.abs(this.cell.x - targetCell.x);
        const abcY = Math.abs(this.cell.y - targetCell.y);

        if ( offsetCheck && horizontalCheck && isEmptyCheck ) {
            return true;
        }

        if( abcX === abcY &&  abcX === 1 && offsetCheck && !isEmptyCheck ) {
            return true
        }

        return false;
    }

    moveFigure(targetCell: CellModel) {
        super.moveFigure(targetCell);
        this.isFirst = false
    }
}