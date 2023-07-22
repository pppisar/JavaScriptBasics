// ------------------------------------
// Classes

console.log('-=-=-=-=-=-=-=-=Classes=-=-=-=-=-=-=-=-')

// Classes allow you to create objects

class Person {
    constructor(firstName, lastName, age) {
        //                         If the parameter was not passed
        this.firstName = firstName ?? 'Undefined name'
        this.lastName = lastName ?? 'Undefined surname'
        this.age = age ?? 'Undefined age'
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    printFullInfo() {
        console.log(`I'm ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    }
}

const newPerson = new Person('Oleksii', 'Pysarenko', 21)
// Will be an object
console.log(newPerson)
console.log(newPerson.getFullName())
newPerson.printFullInfo()


// Class Inheritance

class Student extends Person {
    constructor(firstName, lastName, age, university, yearOfStudy) {
        // Calling the constructor of an inherited class
        super(firstName, lastName, age)

        this.university = university ?? 'Undefined university'
        this.yearOfStudy = yearOfStudy
    }
}

const student1 = new Student('Ivan', 'Samarskiy', 18, 'CVUT', 2)
console.log(student1)