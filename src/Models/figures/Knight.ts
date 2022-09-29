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
}