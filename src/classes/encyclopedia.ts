import { positiveInteger } from '../decorators';
import { ReferenceItem } from './referenceItem';

export default class extends ReferenceItem {
    private _copies: number = 0;

    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(id: number, title: string, year: number, public edition: number) {
        super(title, year, id);
    }

    override printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
