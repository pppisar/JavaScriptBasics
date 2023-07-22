// ------------------------------------
// Dates

console.log('-=-=-=-=-=-=-=-=Dates=-=-=-=-=-=-=-=-')

// Countdown in JavaScript
const start = new Date(0)

// 2 January 1970
const ownDate1 = new Date(1000 * 60 * 60 * 24)
// 2021, 4 January, 12 hoursh, 13 minutes and 14 secunds
// Months starts with 0
const ownDate2 = new Date(2021, 0, 4, 12, 13, 14)

// Current time
const now = new Date()

console.log(start)
console.log(ownDate1)
console.log(ownDate2)
console.log(now)

// Date Get Methods
console.log(`Current year: ${now.getFullYear()}
Current month: ${now.getMonth()}
Current full date: ${now.getDate()}
Current hour: ${now.getHours()}
Current minute: ${now.getMinutes()}
Current second: ${now.getSeconds()}`)

// Date set methods
now.setFullYear(2077)
now.setHours(18)
now.setMinutes(36)
now.setSeconds(42)
console.log(now)

// Converting the date to the correct format
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())


// ------------------------------------
// Application

$fullBtn = document.getElementById('full')
$dateBtn = document.getElementById('date')
$timeBtn = document.getElementById('time')

$output = document.getElementById('output')

// can be: full / date / time
let timeState = 'full'
changeTime()

function changeTime() {
    const actual = new Date()
    switch (timeState) {
        case 'full':
            $output.textContent = `${actual.toLocaleDateString()} ${actual.toLocaleTimeString()}`
            break
        case 'date':
            $output.textContent = actual.toLocaleDateString()
            break
        case 'time':
            $output.textContent = actual.toLocaleTimeString()
            break
        default:
            $output.textContent = `${actual.toLocaleDateString()} ${actual.toLocaleTimeString()}`    
    }
}

function bindMode(mode) {
    return function() {
        timeState = mode
        changeTime()
    }
}

$fullBtn.onclick = bindMode('full')

$dateBtn.onclick = bindMode('date')

$timeBtn.onclick = bindMode('time')

// $fullBtn.onclick = function () {
//     timeState = 'full'
//     changeTime()
// }

// $dateBtn.onclick = function () {
//     timeState = 'date'
//     changeTime()
// }

// $timeBtn.onclick = function () {
//     timeState = 'time'
//     changeTime()
// }

const timeRefresh = setInterval(changeTime, 1000)