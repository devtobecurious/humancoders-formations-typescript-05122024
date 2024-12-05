import {Character, Boss} from './domains/game/models/character'
import {Elf} from './domains/game/models/elf'
import Item from './domains/game/models/items/item'

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
    new Elf('Legolas', 2931)
]
displayCharacters(arrayCharacters)