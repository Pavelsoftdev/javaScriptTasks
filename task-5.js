console.log("Завдання 5:");
const countryInput = prompt("Введіть країну для доставки:"); 

if (countryInput === null) {
    alert("Скасовано користувачем!");
} else {
    const country = String(countryInput.toUpperCase()); 
    let price;
    let formattedCountry;

    switch (country) {
        case "КИТАЙ":
            price = 100;
            formattedCountry = "Китай";
            break;
        case "ЧИЛІ":
            price = 250;
            formattedCountry = "Чилі";
            break;
        case "АВСТРАЛІЯ":
            price = 170;
            formattedCountry = "Австралія";
            break;
        case "ІНДІЯ":
            price = 80;
            formattedCountry = "Індія";
            break;
        case "ЯМАЙКА":
            price = 120;
            formattedCountry = "Ямайка";
            break;
        default:
            alert("У вашій країні доставка недоступна");
            price = null;
    }

    if (price !== null) {
       console.log(`Доставка в ${formattedCountry} буде коштувати ${price} кредитів`);
    }
}