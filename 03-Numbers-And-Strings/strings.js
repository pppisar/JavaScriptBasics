// -----------------------------
// Strings
console.log('-=-=-=-=-=-=-=-=Strings=-=-=-=-=-=-=-=-')

const oneLine = 'any string'
const multiLine = `first line
second line
another line`

console.log(oneLine, multiLine)

const myAge = 21
console.log('My age is ' + myAge)
// ===
console.log(`My age is ${myAge}`)
console.log(`I'm ${myAge} and I'm an ${
    myAge > 18 ? 'adult' : 'young'
}`)

// Using ' in string
console.log('It\'s normal to use \' with \\')


const firstName = 'Oleksii'
console.log(`Length of my name is ${firstName.length}`)
// Translate to lower and upper case 
// (returns a new line rather than modifying the initial line).
console.log(`My name in uppercase: ${firstName.toUpperCase()}`)
console.log(`My name in lowercase: ${firstName.toLowerCase()}`)

// Find out what character is at the specified index
console.log(firstName.charAt(2))
// Find at what position (index) the specified character is located
// Returns -1 if character doesn't exist
console.log(firstName.indexOf('e'))

// Checking the end and beginning of a string
console.log(`First name starts with 'il': ${firstName.toLowerCase().startsWith('Ol')}`)
console.log(`First name edns with 'ij': ${firstName.endsWith('ij')}`)

// Duplicate string multiple times
console.log(firstName.repeat(2))


const password = '  12345678  '

// Remove extra spaces at the beginning and end
console.log(password.trim())