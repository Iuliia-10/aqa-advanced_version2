// Завдання 3

// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення
// про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням -
// “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

function checkOrder1(available1, ordered1){
    if (ordered1 === 0){
        return `Your order is empty`;
    } else if (available1 < ordered1){
        return `Your order is too large, we don’t have enough goods`;
    } return `Your order is accepted`;
}
console.log(checkOrder1(3,0));
console.log(checkOrder1(3,7));
console.log(checkOrder1(7,3));

//

function checkOrder2(available2, ordered2){
    if (ordered2 === 0){
        console.log(`Your order is empty`);
        return;
    } else if (available2 < ordered2){
        console.log(`Your order is too large, we don’t have enough goods`);
        return;
    }console.log(`Your order is accepted`); 
    return;
}
checkOrder2(3,0);
checkOrder2(3,7);
checkOrder2(7,3);