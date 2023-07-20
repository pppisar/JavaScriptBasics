// --------------------------------------------
// Theory
console.log('--------------Theory--------------')

// ---------------------
// Working with arrays

const names = ['Marie', 'Oleksii', 'Anna', 'Ivan']

console.log(`Names: ${names}`)

// add new element to the end of the array
names.push('Yana')
console.log(`Names: ${names}`)

// add to the start of the array
// Performs a full loop through the array, 
// because you need to move all the elements
names.unshift('Olena')
console.log(`Names: ${names}`)

// delete first element of the array
// and return it
const name1 = names.shift()
console.log(`Names: ${names}`)
console.log(`Returned name is ${name1}`)

// detete last element of the array
// and return it
const name2 = names.pop()
console.log(`Names: ${names}`)
console.log(`Returned name is ${name2}`)

// Returns an array in reverse order
// !!and changes the original array!!
// console.log(`Reverse names: ${names.reverse()}`)
// console.log(`!!Initial names were also changed!!: ${names}`)

// Just returns an array in reverse order
const reversed = names.toReversed()
console.log(`Reverse names: ${reversed}`)
console.log(`!!Initial names were not changed!!: ${names}`)

// Returns a sorted array
// !!and changes the original array!!
// console.log(`Names: ${names}`)
// console.log(`Sorting names: ${names.sort()}`)
// console.log(`!!Initial names were also changed!!: ${names}`)


// Sorting an array using function to define order
const numbers = [2, 1, 12, 0, 100, 37, 17]
console.log(numbers.sort(function(a, b) {
   return a - b // ascending (by default) | b - a -- descending
}))

// Just returns a sorted array
const sorted = names.toSorted()
console.log(`Names: ${names}`)
console.log(`Sorting names: ${sorted}`)

// Delete a certain number of items from the array starting from a certain index
// And return them to the array view
//                  Start index, Number of elements to delete                         
// console.log(numbers.splice(2, 3))

// Returns a new array with the remaining elements after the removal. 
// And do not modify initial array
console.log(`Spliced numbers: ${numbers.toSpliced(2, 3)}`)
console.log(`Initial numbers: ${numbers}`)

// Finding the index of an element in an array
// Returns -1 if the element is not in the array
const myName = 'Oleksii'
console.log(`My name is at the ${names.indexOf(myName)} index in names array`)

// Returns a new array with the replaced element at the specified index
console.log(`Changed array: ${names.with(1, 'Oleksii Pysarenko')}`)
console.log(`Initial names: ${names}`)

// !! Iterating over elements and applying a function to them
console.log('Map result:', names.map(function (name, index) {
    return name.toUpperCase() + ` With index ${index}`
}))
console.log(`After map: ${names} - the initial array has not changed`)

// Check if an element is in an array
console.log(`Oleksii is in names: ${names.includes('Oleksii')}`)
// names.indexOf('Oleksii') !== -1

// -------------------
// Working with objects

const people = [
    { name: 'Oleksii', budget: 3000}, 
    { name: 'Ivan', budget: 2400}, 
    { name: 'Marie', budget: 4000}, 
    { name: 'Oleksandr', budget: 3600}, 
]

// let findedPerson

// for (let person of people) {
//     if (person.budget === 3000) {
//         findedPerson = person
//     }
// }

// Finding the required object in an array using an anonymous function
const findedPerson = people.find(function (person) {
    return person.budget === 3000
})
console.log(findedPerson)

// Finding the required object in an array using an arrow function
const finded = people.find((p) => p.budget === 3000)
console.log(finded)

// Finding the index of the required object in the array
const findedIndex = people.findIndex((p) => p.budget === 3000)
console.log(`Index is ${findedIndex}`)

// Return a new array of objects that match the condition
const richPeople = people.filter(function (person) {
    return person.budget > 3000
})

console.log('Rich people are: ', richPeople)


// Calculate the budget of rich people
// forEach iterates over an array 
let sumBudget = 0
richPeople.forEach(function (p) {
    sumBudget += p.budget
})
console.log(`Rich people's budget is ${sumBudget}`)

// The same task using method:
// The reduce method takes two parameters: 
// - a function with an accumulator and the objects that we are enumerating
// - Initial value with accumulator 

// One line function
const getBudget = (p) => p.budget

sumBudget = richPeople.map(getBudget).reduce((acc, p) => acc + p, 0)
console.log(`Rich people's budget using reduce is ${sumBudget}`)

// How to reverse a string

const hiStr = 'Hello, how are you?'
//                                 Separator             Separator
const reversedString = hiStr.split('').toReversed().join('')