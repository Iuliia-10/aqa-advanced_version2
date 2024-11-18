// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator 
// та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі, якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, 
// коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, 
// виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.


function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers.");
    }

    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return numerator / denominator;
}
const testCases = [
    { numerator: 10, denominator: 2 },
    { numerator: 10, denominator: 0 },
    { numerator: "10", denominator: 2 },
    { numerator: 20, denominator: "5" },
];

testCases.forEach(({ numerator, denominator }) => {
    try {
        const result = divide(numerator, denominator);
        console.log(`Result of ${numerator} / ${denominator} = ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Робота завершена");
    }
});
