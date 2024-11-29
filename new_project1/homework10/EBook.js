// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості
// та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 



//export const Book = require('./Book');

import {Book} from "./Book.js"
export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    // Геттер та сеттер для формату файлу
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Формат файлу має бути непустим рядком.");
        }
        this._fileFormat = value;
    }

    // Перевизначений метод для виведення інформації
    printInfo() {
        console.log(
            `Книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`
        );
    }

    // Статичний метод для створення EBook з Book
    static fromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error("Аргумент має бути екземпляром класу Book.");
        }
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

