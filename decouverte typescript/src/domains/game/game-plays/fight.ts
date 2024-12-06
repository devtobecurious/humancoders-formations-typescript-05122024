import { Fighter } from "../models/fighter";

/**
 * Contrat qui représente un combat entre deux attaquants
 */
export interface Fight {
    run(fighter1: Fighter, fighter2: Fighter): void
}