console.log("Завдання 3:");
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userInput = prompt("Введіть пароль користувача для 3тього завдання:");

if (userInput === null) {
    message = "Скасовано користувачем!";
} else if (userInput === ADMIN_PASSWORD) {
    message = "Ласкаво просимо!";
} else {
    message = "Доступ заборонений, невірний пароль!";
}
alert(message);