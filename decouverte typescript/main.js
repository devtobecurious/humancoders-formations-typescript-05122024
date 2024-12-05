"use strict";
let title = 'A sam journey'; // inférence de type
/**
 * Comment who needs it ?
 */
class Sam {
    /**
     *
     * @param prenom
     * @param age
     */
    constructor(prenom, age) {
        this.prenom = prenom;
        this.age = age;
    }
}
const sam = new Sam('Sam', 38);
sam.prenom = 'Freddo';
//sam = 'coucou'
// title = 14
let uneVariable;
uneVariable = 12;
uneVariable = 'coucou';
