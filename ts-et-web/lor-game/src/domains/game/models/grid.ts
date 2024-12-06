import { Array } from "../../../core/custom-types/arrays";
import { Cell } from "./cell";

export class Grid {
    private list: Array<Cell> = []

    init(nbCells: number): void  {
        for(let i = 0; i < nbCells; i ++) {
            const cell = new Cell()
            cell.index = i
            this.list.push(cell)
        } 
    }

    generate(displayMotor: (cells: Array<Cell>) => void): void {
        displayMotor(this.list)
    }
}