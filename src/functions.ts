/* eslint-disable no-redeclare */

import { Book, Callback, LibMgrCallback, TOptions } from './interfaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';
import Encyclopedia from './classes/encyclopedia';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

export function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    console.log('Book titles:', titles);
}

export function logFirstAvailable(books: Book[]): void {
    console.log('Number of books: ', books.length);
    console.log('First available: ', books.find(item => item.available)?.title);
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index] ?? ({} as Book);
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log('Name: ', name);
    age && console.log('Age: ', age);
    city && console.log('City: ', city);
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]) {
    console.log('Customer name: ', customer);

    return bookIDs
        .map(id => getBookById(id))
        .filter(book => book?.available)
        .map(book => book!.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.title === (arg as string)).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === (arg as boolean)).map(({ title }) => title);
        }
    } else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'boolean') {
        return books
            .filter(book => book.id === (args[0] as number) && book.available === (args[1] as boolean))
            .map(({ title }) => title);
    }
    return [];
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new TypeError('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(
    obj: TObject,
    prop: TKey,
): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        return (obj[prop] as Function).name;
    }
    return obj[prop];
}

export function getAllBooks(): readonly Book[] {
    return [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            category: Category.JavaScript,
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            category: Category.JavaScript,
            available: false,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            category: Category.JavaScript,
            available: true,
        },
    ];
}

export function getBookById(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 1;
    options.speed ??= 10;
    return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('value should have been a string');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof Encyclopedia);
    data.printItem();
}

export function update(val: boolean): string | number {
    return val ? String(val) : Number(val);
}

type UpdateResult<T> = T extends true ? string : number;

export function update2<T extends boolean>(p: T): UpdateResult<T> {
    if (p) {
        return 'abc' as UpdateResult<T>;
    }
    return 10 as UpdateResult<T>;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
    //export function getBooksByCategory(category: Category, callback: Callback<string>) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (error: any) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(error: Error | null, titles: string[] | null): void {
    if (error) {
        console.log(error.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const titles = getBookTitlesByCategory(category);
                if (titles.length > 0) {
                    resolve(titles);
                } else {
                    throw new Error('No books found');
                }
            } catch (error: any) {
                reject(error);
            }
        }, 2000);
    });

    return p;
}

export async function logSearchResults(category: Category) {
    const r = await getBooksByCategoryPromise(category);
    console.log(r.length);
}
