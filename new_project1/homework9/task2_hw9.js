// Завдання 2

// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.

// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль


const book = {
    title: 'Reality',
    author: 'Anna Norman',
    year: 2000,
  };

//console.log(book);

const { title, author } = book;
console.log(title);
console.log(author);

