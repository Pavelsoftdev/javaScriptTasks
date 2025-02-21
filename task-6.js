console.log("Завдання 6:");
let total = 0;
while (true) {
    let input = prompt("Для 6го завдання - введіть число:");
    if (input === null) {
        break;
    }
    let number = Number(input);
    if (isNaN(number)) {
        alert("Було написано не число, спробуйте ще раз");
    } else {
        total += number;
    }
}
console.log(`Загальна сума чисел дорівнює ${total}`);