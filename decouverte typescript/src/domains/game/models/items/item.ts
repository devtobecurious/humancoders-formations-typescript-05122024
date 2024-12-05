abstract class Item {
    constructor(private _label: string, public value: number) {}

    get label() {
        return this._label
    }


    // private label: string
    // /**
    //  *
    //  */
    // constructor(label: string) {
    //     this.label = label
        
    // }
}

export default Item