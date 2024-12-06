import {Movable} from './move'
import {Position} from './position'
import {Direction} from '../../../core/custom-types/strings'

export abstract class Character implements Movable {
    private _name: string
    #age: number
    protected lifePoints = 100
    private position = new Position() 

    constructor(name: string, age: number) {
        this._name = name
        this.#age = age
    }

    //move(direction: string): void {
    // move(direction: 'right' | 'left' | 'top' | 'down'): void {
    move(direction: Direction): void {
        const vector: Position = {
            x: 0,
            y: 0
        }

        switch(direction) {
            case 'right': {} break
            case 'left': {} break
            //case 'Topp': {} break // Oops buggy
            case 'top': {} break
            case 'down': {} break
        }
    }

    get name() {
        return this._name
    }
    protected set name(value: string) {
        this._name = value
    }
}

export class Boss extends Character {
    constructor(name: string) {
        super(name, 100)

        this.lifePoints = 500
    }
}

class ChutJeMeCache {}

// const char: Character = new Character('dfsd')
// console.info(char.name) // getter
// // char.name = 'Sam' // setter
