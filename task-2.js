console.log("Завдання 2:");
const total = 100; 
const ordered = 50;
function checkingQuantityGoods(tot, ord){
if (ord > tot) {
    console.log("На складі недостатньо товарів!");
} else {
    console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}
}

checkingQuantityGoods(total,ordered)
checkingQuantityGoods(total,20)
checkingQuantityGoods(total,80)
checkingQuantityGoods(total,130)