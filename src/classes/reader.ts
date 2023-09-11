import { Book } from '../interfaces';

export class Reader {
    name?: string;
    books: Book[] = [];

    constructor(name: string) {
        this.name = name;
    }

    take(book: Book): void {
        this.books.push(book);
    }
}
