import { Category } from './enums';

interface ShelfItem {
    title: string;
}

interface Magazine extends ShelfItem {
    title: string;
    publisher: string;
}

interface DamageLogger {
    (reason: string): void;
}

interface Book extends ShelfItem {
    id: number;
    author: string;
    title: string;
    category: Category;
    available: boolean;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}
export {
    Person,
    Author,
    Librarian,
    Book,
    ShelfItem,
    DamageLogger as Logger,
    Magazine,
    TOptions,
    Callback,
    LibMgrCallback,
};
