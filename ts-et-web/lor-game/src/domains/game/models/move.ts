import { Direction } from "../../../core/custom-types/strings";

/**
 * 
 */
export interface Movable {
    /**
     * 
     * @param direction 
     */
    move(direction: Direction): void
}