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

    public isKingUnderAttack(): boolean {
        const lastAvailableCells = this.cell.board.lastAvailableCells

        const isUnderAttack = !!lastAvailableCells.find(el => el.figure?.name === FigureNames.KING);
        // console.log(!!lastAvailableCells.find(el => el.figure?.name === FigureNames.KING))
        //
        // if(isUnderAttack) {
        //     console.log(isUnderAttack + ' корольк под атакой')
        //     return !!lastAvailableCells.find(el => el !== targetCell || targetCell.figure === this.cell.board.lastFigure)
        // }

        return isUnderAttack
    }


    canMove(targetCell: CellModel) : boolean {
        if (this.color === targetCell.figure?.color) {
            return false
        }

        if(targetCell.figure?.name === FigureNames.KING) {
            return true
        }
        return true
    }

    public  moveFigure(targetCell: CellModel) {

    }

}