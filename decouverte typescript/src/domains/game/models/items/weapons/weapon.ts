import Item from '../item'

/**
 * Weapon
 */
export abstract class Weapon extends Item {
    /**
     * Hit hit again :)
     */
    abstract hit(): number
}