"use strict";
let myMoney = 100;
console.log(myMoney);
function add(num1, num2) {
    return num1 + num2;
}
add(3, 6);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Ben', 'adam');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log(output);
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
