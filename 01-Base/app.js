// Variable and basic operations
// Variable - let | constant - const
let num = 12; // number
console.log("Your number is " + num.toString());
console.log(13, '+', 12, '=', 13 + 12);

let surname = 'Pysarenko'; // string
const firstName = 'Oleksii';

const isJavaScript = true; // bool

// alert blocks page loading
// alert("You are is " + surname + ' ' + firstName);

// surname = 'Samarsky' // ok - modify let
// firstName = 'Ivan' // error - modify const

/** Possible names for variables
 * let $ = 'test'
 * let $name = 1337 
*/

const fullName = firstName + ' ' + surname;


// ------------------------------------------
// Working with the html

const $input1 = document.getElementById('input1')
const $input2 = document.getElementById('input2')

const $operationBtns = document.getElementsByClassName('flex-grow-1')

const $plusBtn = document.getElementById('plus')
const $minusBtn = document.getElementById('minus')
const $mulBtn = document.getElementById('mul')
const $divBtn = document.getElementById('div')

const $button = document.getElementById('submit')
const $result = document.getElementById('result')

// operations: +, -, *, /
let operation = '+'

function chooseOperatore(button) {
    for (let i = 0; i < $operationBtns.length; i++) {
        if ($operationBtns[i] == button) {
            $operationBtns[i].classList.remove('btn-danger')
            $operationBtns[i].classList.add('btn-success')
        }
        else {
            $operationBtns[i].classList.remove('btn-success')
            $operationBtns[i].classList.add('btn-danger')
        }
    }
}

$plusBtn.onclick = function() {
    operation = '+'
    chooseOperatore($plusBtn)
}

$minusBtn.onclick = function () {
    operation = '-'
    chooseOperatore($minusBtn)
}

$mulBtn.onclick = function () {
    operation = '*'
    chooseOperatore($mulBtn)
}

$divBtn.onclick = function () {
    operation = '/'
    chooseOperatore($divBtn)
}

function calculateOperation(inp1, inp2, op) {
    const val1 = Number(inp1.value)
    const val2 = Number(inp2.value)

    /* Debugging in browser
     * Using developer tools in the Source tab
     * You can check values by hovering over variables
     * You can also execute the code step by step
     * You can also put your own breakpoints by 
     * clicking on the line number in the browser
     */
    // debugger

    switch (op) {
        case '+':
            return val1 + val2
            break
        case '-':
            return val1 - val2
            break
        case '*':
            return val1 * val2
            break
        case '/':
            return val1 / val2
            break
        default:
            console.log(`Invalid operation: ${op}`)
    }
}

$button.onclick = function () {
    $result.textContent = calculateOperation($input1, $input2, operation)
}

// Ternary conditional operator:
// function plusMinus(num1, num2, op) {
//         if op == '+':         else:
//    return op == '+' ? num1 + num2 : num1 - num2
// }