export abstract class Character {
    private _name: string
    #age: number
    protected lifePoints = 100

    constructor(name: string, age: number) {
        this._name = name
        this.#age = age
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
