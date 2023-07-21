// ------------------------------------
// Numbers

console.log('-=-=-=-=-=-=-=-=Functions=-=-=-=-=-=-=-=-')


// Function declaration
// Can be called before announcement
function greet1(name) {
    console.log(`1) Hello dear ${name}!`)
}

// Function Expression
// Cannot be called before declaration
const greet2 = function (name) {
    console.log(`2) Hello dear ${name}`)
}

// Function data type is ubject, but
console.log(typeof greet1) // == function


// Calling a functional (function) after a certain time
//         function           time(ms)
const timeout = setTimeout(function () {
    console.log('Timeout')
    greet1('Oleksii')

    // clearTimeout(timeout)
}, 1500)

// Repeating a function every interval
let counter = 0
const interval = setInterval(function () {
    console.log('Repeating')
    if (counter === 5) {
        // Stop interval
        clearInterval(interval)
    } else {
        counter++
    }
}, 2000)


// Arrow functions

// greet function using arrow:
const arrow1Greet = (name, age) => {
    console.log(`3) Hello dear ${name}! You are ${age}`)
}
arrow1Greet('Oleksii', 21)
// If the function consists of one line, 
// then the following syntax is possible
// Also you don't need to write return
const arrow2Greet = (name, age) => console.log(`4) Hello dear ${name}! You are ${age}`)
arrow2Greet('Oleksii', 21)


// Default parameters
// const sum = (a, b = a * 2) => a + b
const sum = (a, b = 3) => a + b
console.log(sum(1))

// Rest operator
function sumAll(...numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }
    // return res
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sumAll(1, 2, 3))


// Closures
// (Function in function)
function createPerson(name) {
    return function (lastName) {
        console.log(`${name} ${lastName}`)
    }
}
// Oleksii is "closed" inside the function that 
// will be returned by createPerson
const addLastName = createPerson('Oleksii')
addLastName('Pysarenko')
addLastName('Poroshenko')