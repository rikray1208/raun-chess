import {Colors} from "../Colors";
import {CellModel} from "../CellModel";

export enum FigureNames {
    BASE = 'фигура',
    BISHOP = 'слон',
    KING = 'король',
    KNIGHT = 'конь',
    PAWN = 'пешка',
    QUEEN = 'ферзь',
    ROOK = 'Ладья',
}

export class Figure {
    image: any
    color: Colors
    cell: CellModel
    name: FigureNames
    id: number

    constructor(color: Colors, cell: CellModel) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.image = null;
        this.name = FigureNames.BASE;
        this.id = Math.random()
    }

    kingUnderAttack(targetCell: CellModel) {
        if (targetCell.figure?.name === FigureNames.KING) {
            console.log('king')

        }
        return false
    }

    canMove(targetCell: CellModel) : boolean {
        if (this.color === targetCell.figure?.color) {
            return false
        }

        if(targetCell.figure?.name === FigureNames.KING) {
            return false
        }


        return true
    }

    public  moveFigure(targetCell: CellModel) {

    }

}