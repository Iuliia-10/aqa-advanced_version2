import Book from "./Book.js"
import EBook from "./EBook.js"


// Створення екземплярів класу Book
const book1 = new book("Майстер і Маргарита", "Михайло Булгаков", 1966);
const book2 = new book("Тарас Бульба", "Микола Гоголь", 1835);
const book3 = new book("Війна і мир", "Лев Толстой", 1869);

// Виклик методу printInfo для кожної книги
book1.printInfo();
book2.printInfo();
book3.printInfo();

// Створення екземпляру класу EBook
const ebook1 = new EBook("Собаче серце", "Михайло Булгаков", 1925, "EPUB");
ebook1.printInfo();

// Зміна властивостей через геттери і сеттери
ebook1.title = "Собаче серце (оновлена версія)";
ebook1.fileFormat = "PDF";
ebook1.printInfo();

// Використання статичного методу findOldestBook
const books = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

// Використання статичного методу fromBook
const ebook2 = EBook.fromBook(book3, "MOBI");
ebook2.printInfo();