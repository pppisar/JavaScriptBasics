// ------------------------------------
// Objects

console.log('-=-=-=-=-=-=-=-=Objects=-=-=-=-=-=-=-=-')

// Object creation
const person = {
    firstName: 'Oleksii',
    lastName: 'Pysarenko',
    age: 20,
    isStudent: true,
    isEmployed: false,
    languages: ['EN', 'CZ', 'UA', 'RU'],
    address: {
        country: 'Czech Republic',
        city: 'Prague'
    },
    'complex key': 'complex value',
    ['key' + 21 * 2]: 'computed value',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    context() {
        // This refers to the object in which they are defined
        console.log('Person context', this)
    },
    contextArrow: () => {
        // Arrow function does not create its own context
        console.log('Arrow context', this)
    }
}

console.log(person)
const dynamicKey = 'isEmployed'
console.log(`Person name: ${person.getFullName()}
Person age: ${person.age}
Is the person a student: ${person['isStudent']}
Is the person a employee: ${person[dynamicKey]}
Person complex key: ${person['complex key']}`)


// Attributes inside an object can be changed 
// even if it is const
console.log(person.age)
console.log(++person.age)

// How to delete keys from object
delete person.address
console.log(person)


const firstName = 'Ivan'

// Destructuring
//                          default value
const {age, firstName: name = 'TEST', lastName} = person
console.log(`${name} ${lastName} is ${age} years old`)


// Iterating over object keys
console.log('-=-=All attributes of person=-=-')
for (let key in person) {
    // Checking for belonging to the object, 
    // not its prototype
    if (person.hasOwnProperty(key)) {
        console.log(`person[${key}]: ${person[key]}`)
    }
}

// Get keys without checking for belonging to the object
console.log(Object.keys(person))
console.log('-=-=All attributes of person=-=-')
Object.keys(person).forEach((key) => {
    console.log(`person[${key}]: ${person[key]}`)
})


// Working with context
console.log('-=-=Logger=-=-')
const logger = {
    printKeys(doPrinting, objName) {
        if (doPrinting) {
            console.log(`${objName} keys: ${Object.keys(this)}`)
        } else {
            console.log(`${objName} don't want to print`)
        }
    },
    printKeysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log(`object[${key}]: ${this[key]}`)
        })
    }
}

// Object context attaching
// Returns the function to which the context of the passed object is attached
const bound = logger.printKeys.bind(person)
bound(true, 'person')
// Usually use the following notation
// logger.printKeys.bind(person)()
// ====
// Attaching a context and call of a function 
// with attached context of the passed object
logger.printKeys.call(person, true, 'person')
// ===
logger.printKeys.apply(person, [true, 'person'])