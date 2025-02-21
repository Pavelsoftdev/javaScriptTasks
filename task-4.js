console.log("Завдання 4:");
let credits = 23580; 
const pricePerDroid = 3000; 
const input = prompt("Для 4го завдання - скільки дроїдів ви хочете купити?");

if (input === null) {
    console.log("Скасовано користувачем!");
} else {
    const numberOfDroids = Number(input); 
    const totalPrice = numberOfDroids * pricePerDroid; 

    if (isNaN(numberOfDroids) || numberOfDroids <= 0) {
        console.log("Будь ласка, введіть коректне число!");
    } else if (totalPrice > credits) {
        console.log("Недостатньо коштів на рахунку!");
    } else {
        credits -= totalPrice;
        console.log(`Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${credits} кредитів.`);
    }
}



