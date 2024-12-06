import { Character } from "./character";
import {Fighter} from './fighter'
import { Weapon } from "./items/weapons/weapon";

/**
 * This is Legolas <3
 */
export class Elf extends Character implements Fighter {
    constructor(name: string, age: number, private weapon: Weapon) {
        super(name, age)
    }

    receiveDamage(value: number): void {
        this.lifePoints -= value
    }

    attack(fighter: Fighter): void {
        let max = this.weapon.value
        max = max - Math.random() * 10
        fighter.receiveDamage(max)
    }

    get isAlive(): boolean {
        return this.lifePoints > 0
    }
    
}