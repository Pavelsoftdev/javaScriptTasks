console.log("Завдання 9:");
const logItems = function (array) {
    for (let i = 1; i<=array.length; i+=1) {
       console.log(`${i} - ${array[i-1]}`)
    }
};
logItems(['Alex', 'Poly', 'Robert', 'Lada', 'Jay', 'Kiril']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);