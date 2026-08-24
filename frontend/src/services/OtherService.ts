import { BookService } from './BookService.js';
// ponerle un nombre al archivo más guiado a su funcionalidad. ej: categoryservice.ts
export default class OtherService {
  public static getUniqueBookCategories(): string[] {
    const books = BookService.getBooks();
    const categories = books.map((book) => book.category);
    const uniqueCategories = new Set(categories);
    return Array.from(uniqueCategories);
  }
}
