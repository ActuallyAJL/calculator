const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber
    return difference
}

const multiply = (firstNumber, secondNumber) => {
    const mult = firstNumber * secondNumber
    return mult
}

const divide = (firstNumber, secondNumber) => {
    const div = firstNumber / secondNumber
    return div
}

const square = (firstNumber, secondNumber) => {
    const squ = firstNumber * firstNumber
    return squ
}

let num1 = 100
let num2 = 5

console.log(add(num1 , num2));
console.log(subtract(num1 , num2));
console.log(multiply(num1 , num2));
console.log(divide(num1 , num2));
console.log(square(num1 , num2));