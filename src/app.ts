import { UL, RefBook, Shelf } from './classes';
import {
    setDefaultConfig,
    printRefBook,
    purge,
    getObjectProperty,
    getAllBooks,
    createCustomer,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
    showHello
} from './functions';
import { Librarian, Logger, TOptions, Magazine, Book } from './interfaces';
import { Library } from './classes/library';
import { Category } from './enums';
import { BookRequiredFields, UpdatedBook, CreateCustomerFunctionType } from './types';

showHello('greeting', 'TypeScript');

// type Book = {
//     id: number;
//     author: string;
//     title: string;
//     category: Category;
//     available: boolean;
// };

// const myID = createCustomerID('Smile', 1);
// const idGenerator: (name: string, id: number) => string = createCustomerID;
// console.log(idGenerator('Txt', 1));

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: reason => console.log('Damaged:', reason),
};
//
// printBook(myBook);
// myBook.markDamaged?.('missing back cover');
// const logDamage: Logger = reason => console.log('Damaged:', reason);
// logDamage('Test');

// const favoriteAuthor: Author = {
//     name: 'Nick',
//     email: 'nick@mail.com',
//     numBooksPublished: 10,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Jane',
//     email: 'jane@mail.com',
//     department: 'Main Dep',
//     assistCustomer: (custName: string, bookTitle: string) => console.log(`Assists ${custName} with ${bookTitle}`),
// };

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
//
// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle());
// console.log(offer.book?.getTitle?.());
// console.log(offer.book?.authors?.[0]);
// console.log(offer.book?.authors?.[0].name);
//
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));

// Task 05.01
// const ref = new ReferenceItem('Learn TypeScript', 2023, 1);
// ref.Publisher = 'New Publisher';
// console.log(ref.Publisher);
// console.log(ref);
// ref.printItem();

// Task 05.02 and 05.03
// const refBook = new RefBook(0, 'Big Encyclopedia', 2000, 2);
// refBook.printItem();
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian('Taras', 'taras@mail.com', 'Main');
// favoriteLibrarian.assistCustomer('Lesia', 'Lisova Pisnya');

// Task 05.05
// const pBook: PersonBook = {
//     author: 'Vasyl',
//     available: false,
//     category: undefined,
//     id: 0,
//     title: 'The Book',
//     name: 'Vasyl',
//     email: 'vasyl@mail.com',
// };
// console.log('PersonBook', pBook);
// console.log(setDefaultConfig({ speed: 100 }));

// Task 06.03
// printRefBook(new RefBook(0, 'Big Encyclopedia', 2000, 2));
// printRefBook({});
// printRefBook(new UL.UniversityLibrarian('Taras', 'taras@mail.com', 'Main'));

// Task 06.05
// const flag = true;
// if (flag) {
//     // import('./classes').then(module => {
//     //     const reader = new module.Reader('Anna');
//     //     console.log(reader);
//     // });
//     const module = await import('./classes');
//     const reader = new module.Reader('Anna');
//     console.log(reader);
// }

// Task 6.06
// let library: Library = {
//     id: 1,
//     name: 'Library',
//     address: 'Main St. 1',
// };
// console.log(library);

// Task 7.01
// const inventory = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
// const r1 = purge(inventory);
// console.log(r1);
// const r2 = purge([1, 2, 3, 4]);
// console.log(r2);
//
// const purgeNumbers = purge<number>;
// console.log(purgeNumbers([1, 2, 3, 4]));
// console.log(purgeNumbers(['','','']));

// Task 7.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());
//
// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst());

// Task 7.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
//
// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(magazines[0], 'publisher'));
// console.log(getObjectProperty(myBook, 'markDamaged'));

// Task 7.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     markDamaged: reason => console.log(`Damaged: ${reason}`),
//     pages: 0,
//     id: 1,
//     title: 'Learn TypeScript',
// };
// const updatedBook: UpdatedBook = {
//     id: 2,
//     author: 'Jane',
// };
// const params: Parameters<CreateCustomerFunctionType> = ['Anna', 30, 'Kharkiv'];
// createCustomer(...params);
//
// console.log('UPDATE:', update(true));
// console.log('UPDATE 2:', update2(true));

// Task 08.01
// const librarian = new UL.UniversityLibrarian();
// librarian.assistCustomer = () => {};
// UniversityLibrarian['a'] = 123;

// Task 08.02
// const librarian = new UL.UniversityLibrarian();
// librarian.name = 'Anna';
// console.log(librarian);
// (librarian as any).printLibrarian();

// Task 08.03
// const librarian = new UL.UniversityLibrarian();
// librarian.name = 'Anna';
// console.log(librarian);
// librarian.assistFaculty();
// librarian.assistFaculty = () => {};
// librarian.assistFaculty();
//
// librarian.teachCommunity = () => {};
// librarian.teachCommunity();

// Task 08.04
// const refBook = new RefBook(0, 'Big Encyclopedia', 2000, 2);
// refBook.printItem();

// Task 08.05
// const l = new Library();

// Task 08.06
// const librarian = new UL.UniversityLibrarian();
// librarian.name = 'Anna';
// console.log(librarian);
// console.log(librarian.name);
// librarian.assistCustomer('Boris', 'TypeScript');

// Task 08.07
// const encyclopedia = new RefBook(1, 'Learn TypeScript', 2000, 1);
// encyclopedia.copies = -4.5;
// console.log(encyclopedia.copies);

// Task 09.01
// getBooksByCategory(Category.JavaScript, logCategorySearch);

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(len => console.log(len))
//     .catch(error => console.log(error));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03
console.log('Begin');
logSearchResults(Category.Software).catch(reason => console.log(reason));
console.log('End');
