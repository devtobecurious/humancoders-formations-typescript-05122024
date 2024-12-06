import { Fighter } from "../models/fighter";
import { Fight } from "./fight";

export class DeathMatchFight implements Fight {

    run(fighter1: Fighter, fighter2: Fighter): void {
        while(fighter1.isAlive && fighter2.isAlive) {
            fighter1.attack(fighter2)

            if(fighter2.isAlive) {
                fighter2.attack(fighter1)
            }
        }    
    }

}