// ------------------------------------
// Numbers

console.log('-=-=-=-=-=-=-=-=Numbers=-=-=-=-=-=-=-=-')

const intNum = 42 // integer(number)
const floatNum = 42.42 // float(number)
const powNum = 10e3 // 10**3
const bigNum = 1_000_000 // == 1000000
console.log(`Integer: ${intNum}
Float: ${floatNum}
Power number: ${powNum}
Big number: ${bigNum}`)


// View all properties
console.dir(Number)


// Special values
// Number.MAX_SAFE_INTEGER == Math.pow(2, 53) - 1
console.log(`Maximum safe number: ${Number.MAX_SAFE_INTEGER}
Minimum safe number: ${Number.MIN_SAFE_INTEGER}
The biggest number: ${Number.MAX_VALUE}
The smallest number: ${Number.MIN_VALUE}`)

const weird = 23 / undefined
console.log(`${Number.POSITIVE_INFINITY} and ${Number.NEGATIVE_INFINITY}
${Number.isFinite(1 / 0)}
${Number.isNaN(weird)}`)


const strInt = '42'
const strFloat = '42.42'

console.log(Number(strInt), Number(strFloat))
// ===
console.log(parseInt(strInt), parseFloat(strFloat))
// ===
console.log(+strInt, +strFloat)

// with an error
console.log(0.1 + 0.2)
// Limiting the number of numbers after the decimal point
// Return string
console.log((0.1 + 0.2).toFixed(1), +(0.1 + 0.2).toFixed(1))


// Big Intefer (Numbers > MAX_SAVE_INTEGER)
// To get big integer from simple number add (n) to the end of it
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n, BigInt(-42n))

// BigInt can only work with BigInt and cannot be float
// console.log(42.42n) // error
// console.log(10n - 4) // error
console.log(parseInt(10n) - 4, 10n + BigInt(4)) // OK
console.log(5n / 2n, 5 / 2)


// Math module
// Constants
console.log(`Pi number: ${Math.PI}
Epsilon (3): ${Math.E}
Sqrt ((25)^(1/2)): ${Math.sqrt(25)}
Pow (10^2): ${Math.pow(10, 2)}
Absolute value of (-100): ${Math.abs(-100)}
Maximum number of numbers (2, 5, 199, 22, 0): ${Math.max(2, 5, 199, 22, 0)}
Minimum number of numbers (2, 5, 199, 22, 0): ${Math.min(2, 5, 199, 22, 0)}
Rounding up (floor): ${Math.floor(4.7)}
Rounding down (ceil): ${Math.ceil(4.2)}
Usual rounding (round): ${Math.round(4.6)}
Return integer part (trunc): ${Math.trunc}
Random number: ${Math.random()}}`)

function randomInInterval(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min)
}

console.log(`Random number in interval (10, 100): ${randomInInterval(10, 100)}`)