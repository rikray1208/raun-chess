import {Colors} from "./Colors";
import {BoardModel} from "./BoardModel";
import {Figure, FigureNames} from "./figures/Figure";

export class CellModel {
    readonly x: number
    readonly y: number
    readonly color: Colors
    board: BoardModel
    figure: Figure | null
    id: number
    available: boolean
    cellsUnderAttack: CellModel[] = [];

    constructor(board: BoardModel, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
        this.figure = figure;
        this.id = Math.random();
        this.available = false;
    }

    isEmpty() {
        return this.figure === null
    }


    isEmptyVertical(targetCell: CellModel, flag?: boolean): boolean {
        if (this.x !== targetCell.x) {
            return false
        }
         const min = Math.min(this.y, targetCell.y);
         const max = Math.max(this.y, targetCell.y);

         for (let y = min + 1; y < max; y++){
             if ( !flag && !this.board.getCell(y, this.x).isEmpty() ) {
                 return false
             }
         }

         return true
    }

    isEmptyHorizontal(targetCell: CellModel, flag?: boolean): boolean {
        if (this.y !== targetCell.y) {
            return false
        }
        const min = Math.min(this.x, targetCell.x);
        const max = Math.max(this.x, targetCell.x);

        for (let x = min + 1; x < max; x++){
            if (!flag && !this.board.getCell(this.y, x).isEmpty()) {
                return false
            }
        }

        return true
    }

    isEmptyDiagonal(targetCell: CellModel, flag?: boolean): boolean {
        const absX = Math.abs(this.x - targetCell.x);
        const absY = Math.abs(this.y - targetCell.y);

        if (absX !== absY) {
            return false
        }

       const dx = this.x < targetCell.x ? 1 : -1;
       const dy = this.y < targetCell.y ? 1 : -1;

       for (let i = 1; i < absY; i++) {
           if (!flag && !this.board.getCell(this.y + dy * i, this.x + dx * i).isEmpty()) {
               return false
           }
       }

       return true
    }

    public setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    // public whichCellsUnderAttack() {
    //     this.cellsUnderAttack = []
    //     const cellsWithFigure = this.board.cells.flat().filter(el =>  el?.figure && el.figure?.color !== this.figure?.color)
    //
    //     cellsWithFigure.forEach(figure => {
    //         this.board.cells.flat().forEach(cell => {
    //             if (figure.figure?.canMove(cell, true)) {
    //                 if (!this.cellsUnderAttack.find(el => el === cell)) this.cellsUnderAttack.push(cell)
    //             }
    //         })
    //     })
    //
    // }
    //
    // public haveCells() {
    //     const king = this.board.cells.flat().find(el => el.figure?.name === FigureNames.KING)
    //     const av = []
    //     this.board.cells.flat().forEach(el => {
    //         if(king?.figure?.canMove(el)) {
    //             av.push(el)
    //         }
    //     })
    //
    //     return av.length
    // }



    public moveFigure(targetCell: CellModel) {
        if (this?.figure?.canMove(targetCell)) {
            targetCell.setFigure(this.figure)
            this.figure.moveFigure(targetCell)
            this.figure = null;
        }

    }
}