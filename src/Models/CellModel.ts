import {Colors} from "./Colors";
import {BoardModel} from "./BoardModel";
import {Figure} from "./figures/Figure";

export class CellModel {
    readonly x: number
    readonly y: number
    readonly color: Colors
    board: BoardModel
    figure: Figure | null
    id: number
    available: boolean

    constructor(board: BoardModel, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
        this.figure = figure;
        this.id = Math.random();
        this.available = false;
    }
}