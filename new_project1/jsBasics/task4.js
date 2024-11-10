// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1

// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

//4.1
let radiusCircle = 2;
let areaCircle = Math.PI * Math.pow(radiusCircle, 2);
let roundedAreaCircle = areaCircle.toFixed(2);

console.log(roundedAreaCircle)

// Завдання 4.2

// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let lengthRectagle = 2;
let widthRectangle = 5;
let areaRectangle = lengthRectagle * widthRectangle;
let roundedAreaRectangle = areaRectangle.toFixed(2);

console.log(roundedAreaRectangle)

// Завдання 4.3

// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let radius4 = 3;
let height4 = 2;
let volumeCylinder = Math.PI * Math.pow(radius4, 2) * height4;
let roundedVolumeCylinder = volumeCylinder.toFixed(2);

console.log(roundedVolumeCylinder)


