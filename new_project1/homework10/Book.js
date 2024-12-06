// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
 

export class Book {

    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
      }

      //Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
      //В сеттерах необхідно додати валідацію для переданих значень. 
      //Використовуйте їх для зміни та отримання значень властивостей.  

    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Назва книги має бути непустим рядком.");
        }
        this._title = value;
    }
    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Ім'я автора має бути непустим рядком.");
        }
        this._author = value;
    }
    set year(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("Рік видання має бути додатнім цілим числом.");
        }
        this._year = value;
    }

    //Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
    printInfo(preface){
        console.log(` This book ${this._title} allows ${preface}...`);
    }

}

//Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

const maths1 = new Book('Maths for 1st', 'Anna Norman', 2010);
maths1.printInfo('to start your way....');
console.log(maths1);

const maths2 = new Book('Maths for 2st', 'Anna Norman', 2011);
maths2.printInfo('to improve your knowledge...');
console.log(maths2);

const maths3 = new Book('Maths for 3st', 'Anna Norman', 2012);
maths2.printInfo('to polish your knowledge...');
console.log(maths3);








