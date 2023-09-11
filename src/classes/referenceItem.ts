import {timeout} from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;
    private id: number;
    private publisher: string = '';
    static department: string = 'Default';

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    get Publisher(): string {
        return this.publisher.toUpperCase();
    }

    set Publisher(newPublisher: string) {
        this.publisher = newPublisher;
    }

    constructor(public title: string, protected year: number, newId: number) {
        this.id = newId;
    }

    getID(): number {
        return this.id;
    }

    @timeout(3000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}
