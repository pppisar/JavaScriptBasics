// -------------------------------------
// Operators

let num1 = 10
let num2 = 5

let res

// Operator +
res = num1 + num2
console.log(`${num1} + ${num2} = ${res}`)

// Operator -
res = num1 - num2
console.log(`${num1} - ${num2} = ${res}`)

// Operator *
res = num1 * num2
console.log(`${num1} * ${num2} = ${res}`)

// Operator /
res = num1 / num2
console.log(`${num1} / ${num2} = ${res}`)

// Operator ** (pow)
res = num1 ** num2
console.log(`${num1} ** ${num2} = ${res}`)

res = res + 10
console.log(`res = res + 10: ${res}`)
// +=
res += 10
console.log(`res += 10: ${res}`)

/* Other operator reductions
 * res -= 10
 * res *= 10
 * res /= 10
 */

// boolean operators
// <, >, <=, >=, !=, ==, ===
const test1 = 42
const test2 = '42'
// == - Check the value
console.log(`42 == '42' = ${test1 == test2}`)
// == - Check the value and вфеф ензу
console.log(`42 === '42' = ${test1 === test2}`)

// -------------------------------------
// Data types

const age = 21 // number
console.log(typeof age)
const name = 'Oleksii' // string
console.log(typeof name)
const isProgrammer = true // boolean
console.log(typeof isProgrammer)
let x // undefined (without value)
console.log(typeof x)
// null, but typeof display object
console.log(typeof null)
let wtf = 1 / x // Not A Number
console.log(`wtf = 1 / x = ${wtf}, but typeof wtf = ${typeof wtf}`) 