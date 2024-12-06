export interface Fighter {
    /**
     * Substract life :()
     * @param fighter 
     */
    attack(fighter: Fighter): void

    receiveDamage(value: number): void

    get isAlive(): boolean
}