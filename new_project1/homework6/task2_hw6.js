// Завдання 2

// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою)
// в консоль для кожного випадку.

function isUserAdult1(age1){
    if (age1 >=18){
        return true;
    }   
    else {
        return false;
    }
}
console.log(isUserAdult1(25));
console.log(isUserAdult1(15));

//

function isUserAdult2(age2){
        return age2 >= 18;
}
console.log(isUserAdult2(25));
console.log(isUserAdult2(15));
