//Завдання 2: Конкатенація радків та шаблонний рядок

//Створіть дві змінні, які містять імена двох осіб. 
//Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. 
//Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. 
//Виведіть результат в консоль.//

let studentName = 'Anna';
let teacherName = 'Victor';

let notification1 = 'Have a nice day, ' + studentName + ' and ' + teacherName;

let notification2 = `Have a nice day, ${studentName} and ${teacherName}`

console.log(notification1)
console.log(notification2)