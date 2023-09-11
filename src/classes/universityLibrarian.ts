import * as interfaces from '../interfaces';
import {format, freeze, logger, writable} from '../decorators';

// @freeze('UniversityLibrarian')
// @logger
class UniversityLibrarian implements interfaces.Librarian {
    @format()
    accessor name!: string;
    email!: string;
    department!: string;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculity');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
