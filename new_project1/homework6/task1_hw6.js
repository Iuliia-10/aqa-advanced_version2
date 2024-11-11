// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height 
//та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

//function declaration
function calculateArea1(widthRectangle1, heightRectangle1){
    console.log(`Rectangle area is ${widthRectangle1 * heightRectangle1}`);
}
calculateArea1(5, 10);
//
function calculateArea2(widthRectangle2, heightRectangle2){
    let result = widthRectangle2 * heightRectangle2;
    return result;
}
let result = calculateArea2(5, 10);
console.log(result);
//
function calculateArea3(widthRectangle3, heightRectangle3){
    let result = widthRectangle3 * heightRectangle3;
    return result;
}
console.log(calculateArea3(5,10));

//function expression / викликаємо функцію по назві змінної

let calculateArea4 = function(widthRectangle4, heightRectangle4){
    console.log(`Rectangle area is ${widthRectangle4 * heightRectangle4}`);
}
calculateArea4(5,10);
//
let calculateArea5 = function(widthRectangle5, heightRectangle5){
    let result5 = widthRectangle5 * heightRectangle5;
    return result5;
}
console.log(calculateArea5(5,10));

//arrow function / В цьому варіанті ми не використовували ключове слово return 
//для повернення результату обчислення, але його все одно буде повернуто при виклику функції. 
//Це називається неявним повненням.

let calculateArea6 = (widthRectangle6, heightRectangle6) => {
    let result6 = widthRectangle6 * heightRectangle6;
    return result6; 
}
console.log(calculateArea6(5,10));
//
let calculateArea7 = (widthRectangle7, heightRectangle7) => widthRectangle7 * heightRectangle7
console.log(calculateArea7(5,10));