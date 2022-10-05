import {CellModel} from "./CellModel";
import {Colors} from "./Colors";
import {Bishop} from "./figures/Bishop";
import {King} from "./figures/King";
import {Knight} from "./figures/Knight";
import {Pawn} from "./figures/Pawn";
import {Queen} from "./figures/Queen";
import {Rook} from "./figures/Rook";


export class BoardModel {
    cells: CellModel[][] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: CellModel[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push( new CellModel(this, j, i, Colors.HONEST, null))   // HONEST
                } else {
                    row.push( new CellModel(this, j, i, Colors.ODD, null) ) // ODD
                }
            }

            this.cells.push(row);
        }
    }

    public setAvailableCells(selectedCell: CellModel | null) {
        for (let i = 0; i < 8; i++) {
            const row = this.cells[i];

            for (let j = 0; j < 8; j++) {
                const currentCell = row[j];
                currentCell.available = !!selectedCell?.figure?.canMove(currentCell)
            }
        }
    }

    public getCopy(): BoardModel {
            const newBoard = new BoardModel()
            newBoard.cells = this.cells

            return newBoard
    }


    public getCell(i: number, j: number): CellModel {
        return this.cells[i][j]
    }

    private addBishop() {
        new Bishop(Colors.BLACK, this.getCell(0,2))
        new Bishop(Colors.BLACK, this.getCell(0,5))
        new Bishop(Colors.WHITE, this.getCell(7,5))
        new Bishop(Colors.WHITE, this.getCell(7,2))
    }

    private addKing() {
        new King(Colors.BLACK, this.getCell(0, 3))
        new King(Colors.WHITE, this.getCell(7, 3))
    }

    private addKnight() {
        new Knight(Colors.BLACK, this.getCell(0, 1))
        new Knight(Colors.BLACK, this.getCell(0, 6))
        new Knight(Colors.WHITE, this.getCell(7, 1))
        new Knight(Colors.WHITE, this.getCell(7, 6))

    }

    private addPawn() {
        for (let j = 0; j < 8; j++) {
            new Pawn(Colors.BLACK, this.getCell(1, j))
            new Pawn(Colors.WHITE, this.getCell(6, j))
        }

    }

    private addQueen() {
        new Queen(Colors.BLACK, this.getCell(0, 4))
        new Queen(Colors.WHITE, this.getCell(7, 4))
    }

    private addRook() {
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 0))
        new Rook(Colors.WHITE, this.getCell(7, 7))
    }

    public addFigures() {
        this.addBishop()
        this.addKing()
        this.addKnight()
        this.addPawn()
        this.addQueen()
        this.addRook()
    }
}