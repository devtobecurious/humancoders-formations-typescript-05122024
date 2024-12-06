import {Character, Boss} from './domains/game/models/character'
import {Elf} from './domains/game/models/elf'
import {Array, Items} from './core/custom-types/arrays'
import {Axe} from './domains/game/models/items/weapons/axe'
import {Bow} from './domains/game/models/items/weapons/bow'
import {Potion} from './domains/game/models/items/potion'
import { Movable } from './domains/game/models/move'
import {Eagle} from './domains/game/models/eagle'

// const sam = new Character('Sam', 38) // inference

function displayCharacter(item: Character): void {
    console.info(item.name)
}

//displayCharacter(sam)
// displayCharacter(1)

const sauron = new Boss('Sauron')

const character: Character = new Boss('Sauron')

function displayCharacters(items: Character[]): void {
    items.forEach(item => {
        console.info(item.name)
    })
}

// const arrayCharacters: Character[] = []
const arrayCharacters: Character[] = [ 
    new Boss('Sauron'),
    new Elf('Legolas', 2931, new Axe('', 100))
]
displayCharacters(arrayCharacters)


function displayInventory(items: Items): void {
    items.forEach(item => {
        console.info(`${item.label} -> ${item.value}`)
    })
}

const items: Items = [
    new Axe('Ma hache', 100),
    new Bow('Mon arc', 100),
    new Potion('Potion +', 500)
]
displayInventory(items)


type Moves = Array<Movable>
const moves: Moves = [
    new Elf('Legolas', 2931, new Bow('', 50)),
    new Boss('Sauron'),
    new Eagle()
    // new Potion('', 10) // pas possible car Potion ne respecte pas Movable
]
moves.forEach(item => item.move('down'))