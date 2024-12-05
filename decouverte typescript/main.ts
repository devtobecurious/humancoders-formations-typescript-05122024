let title = 'A sam journey' // inférence de type

/**
 * Comment who needs it ?
 */
class Sam {
    prenom: string
    age: number

    /**
     * 
     * @param prenom 
     * @param age 
     */
    constructor(prenom: string, age: number) {
        this.prenom = prenom
        this.age = age
    }
}

const sam = new Sam('Sam', 38)
sam.prenom = 'Freddo'

//sam = 'coucou'

// title = 14

let uneVariable: any 
uneVariable = 12
uneVariable = 'coucou'