// Users were obtained using
// https://jsonplaceholder.typicode.com/users

const $input = document.getElementById('filter')
// ===
const $users = document.querySelector('#list')
// To find id with querySelector use '#idName'
// To find class with querySelector use '.className'
let usersData = []

// download data
async function getData() {
    $users.innerHTML = 'Loading...'
    try {
        // send request
        // fetch returns a promise
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        })
        const data = await response.json()
        usersData = data
        render(data)
    } catch (err) {
        $users.style.color = 'red'
        $users.innerHTML = `<p>${err.message}</p>`
    }
}

function toHTML(user) {
    return `<li class="list-group-item">${user.name}</li>`
}

function render(users = []) {
    if (users.length === 0) {
        $users.innerHTML = 'Nothing founded :('
    } else {
        const dataToHTML = users.map(toHTML).join('\n')
        $users.innerHTML = dataToHTML
    }
}

getData()


$input.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filteredUsers = usersData.filter((user) => user.name.toLowerCase().includes(value))
    render(filteredUsers)
})