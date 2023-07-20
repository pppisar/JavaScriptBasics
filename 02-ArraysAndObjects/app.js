// ----------------------------
// Arrays

const array = [1, 2, 3, 4, 20, 42]
console.log(array)
const arrayString = ['a', 'b', 12, null, 'Oleksii', 'Pysarenko']
console.log(arrayString)
// another syntax
otherArray = new Array(1, 2, 3, 4, 20, 24)
console.log(otherArray)

// size of array
console.log(`Size: ${otherArray.length}`)

// first element of arrayString
console.log(`arrayString[0] = ${arrayString[0]}`)
// Non-existent array element(Elements start at 0)
console.log(`arrayString[arrayString.length] = ${arrayString[arrayString.length]}`)
// Last element
console.log(`last item of arrayString = ${arrayString[arrayString.length - 1]}`)
// Adding element to the array
arrayString.push('Ukraine')
console.log(arrayString)

// -------------------
// Practice

const $inputElement = document.getElementById('title')
const $addBtn = document.getElementById('create')
const $notesList = document.getElementById('list')

// let notesFromDB = ['Learn JavaScript', 'Find a job', 'Write nice code']
let notesFromDB = [
    {
        title: 'Learn JavaScript',
        completed: false,
    },
    {
        title: 'Find a job',
        completed: false,
    },
    {
        title: 'Write nice code',
        completed: true,
    }
]

let noteIndex = 0

function renderNote(note, index) {
    $notesList.insertAdjacentHTML('beforeend', `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}"
                data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
            </span>
        </li>`)
}

function render() {
    $notesList.innerHTML = ''
    if (notesFromDB.length === 0) {
        $notesList.innerHTML = '<h1>There are no notes :(</h1>'
    } else {
        for (let i = 0; i < notesFromDB.length; i++) {
            renderNote(notesFromDB[i], i)
        }
    }
    // for (let note of notesFromDB) {
    //     renderNote(note)
    // }
}

render()

console.log($notesList)

$addBtn.onclick = function () {
    if ($inputElement.value != '') {
        const newNote = {
            title: $inputElement.value,
            completed: false,
        }
        notesFromDB.push(newNote)
        render()
    }
}

$notesList.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notesFromDB[index].completed = !notesFromDB[index].completed;    
        } else if (type === 'remove') {
            // delete element(s) from array
            //           Start index, Number of elements to delete
            notesFromDB.splice(index, 1)
        }
        render()
   }
}

// -----------------------------------------
// Objects theory
const person = {
    firstName: 'Oleksii',
    lastName: 'Pysarenko',
    age: 21,
    languages: ['UA', 'EN', 'CZ', 'RU', 'DE'],
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.getFullName() + ` is ${person.age} years old!`)

// -----------------------------------------