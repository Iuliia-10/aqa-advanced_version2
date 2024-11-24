// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: "Anna", email: "anna1@gmail.com", age: 25 },
    { name: "Nina", email: "nina1@gmail.com", age: 30 },
    { name: "Lili", email: "lili1@gmail.com", age: 20 },
  ];

//console.log(users);

for (const {name, email, age} of users) {
    console.log(`${name} is ${age} years old, email ${email}`);
  }