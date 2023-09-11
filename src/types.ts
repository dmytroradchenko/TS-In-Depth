import { Author, Book, Person } from './interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';

export type BookProperties = keyof Book;
export type PersonBook = Person | Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorNoEmail = Omit<Author, 'email'>;

export type CreateCustomerFunctionType = typeof createCustomer;

export type fn = (p1: string, p2: number, p3: boolean) => symbol;
export type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
export type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;
export type Param4<T> = T extends (p1: infer S, p2: infer N, p3: infer B) => symbol ? [S, N, B] : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;
type P4 = Param4<fn>;

export type RequiredProps<T extends object> = NonNullable<
    {
        [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
    }[keyof T]
>;

export type OptionalProps<T extends object> = NonNullable<
    {
        [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
    }[keyof T]
>;

type BookRequiredProps = RequiredProps<Author>;
type BookOptionalProps = OptionalProps<Author>;

export type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredPropsType = RemoveProps<Author, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Author, BookRequiredProps>;

type Unpromisify<T> = T extends Promise<infer U> ? U : never;

type fnPromise = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;
