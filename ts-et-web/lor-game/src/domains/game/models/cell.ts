import { NullableOrUndefined } from "../../../core/custom-types/nullables"


export class Cell {
    index: NullableOrUndefined<number>

    display(): void {
        // this.index?.toString()
        // narrowing
        if(typeof(this.index) === 'number') { // typeguard
            this.index.toString()
        }
    }
}

const cell = new Cell()
cell.index = undefined