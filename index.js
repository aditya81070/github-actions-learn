/**
 * returns the sum of two numbers
 * @param a number
 * @param b number
 * @param isSubtract
 * @returns number
 */
const sum = (a = 0, b = 0, isSubtract = false) => (isSubtract ? a - b : a + b);

// TODO: add new feature for multiplication

const multiply = (a, b) => a * b;

// TODO: breaking change - remove subtract function and use third argument in sum function

// const sum = (a= 0, b = 0, isSubtract) => isSubtract ? a - b: a + b;

const divide = (a, b) => (b === 0 ? undefined : a / b);
module.exports = sum;

module.exports.divide = divide;
