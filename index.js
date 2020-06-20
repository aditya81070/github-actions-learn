/**
 * returns the sum of two numbers
 * @param a number
 * @param b number
 * @returns number
 */
const sum = (a = 0, b = 0) => a + b;

// TODO: fix the bugs
const subtract = (a, b) => a + b;

// TODO: add new feature for multiplication

const multiply = (a, b) => a * b;

// TODO: breaking change - remove subtract function and use third argument in sum function

// const sum = (a= 0, b = 0, isSubtract) => isSubtract ? a - b: a + b;

module.exports = sum;

module.exports.subtract = subtract;
