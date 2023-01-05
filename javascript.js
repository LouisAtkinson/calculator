let display = 0
const result = document.querySelector('.result');
result.classList.add('result');
result.textContent = display;

const zero = document.getElementById("zero");
zero.addEventListener("click", function() {
    number(0)
});

const one = document.getElementById("one");
one.addEventListener("click", function() {
    number(1)
});

const two = document.getElementById("two");
two.addEventListener("click", function() {
    number(2)
});

const three = document.getElementById("three");
three.addEventListener("click", function() {
    number(3)
});

const four = document.getElementById("four");
four.addEventListener("click", function() {
    number(4)
});

const five = document.getElementById("five");
five.addEventListener("click", function() {
    number(5)
});

const six = document.getElementById("six");
six.addEventListener("click", function() {
    number(6)
});

const seven = document.getElementById("seven");
seven.addEventListener("click", function() {
    number(7)
});

const eight = document.getElementById("eight");
eight.addEventListener("click", function() {
    number(8)
});

const nine = document.getElementById("nine");
nine.addEventListener("click", function() {
    number(9)
});

const add = document.getElementById("add");
add.addEventListener("click", function() {
    number(" + ")
});

const subtract = document.getElementById("subtract");
subtract.addEventListener("click", function() {
    number(" - ")
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", function() {
    number(" x ")
});

const divide = document.getElementById("divide");
divide.addEventListener("click", function() {
    number(" ÷ ")
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", function() {
    number(".")
});

const clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    number("clear")
});

function number(a) {
    if (Number.isInteger(a) && display === 0) {
        display = a;
    } else if (a === 'clear') {
        display = 0;
    } else {
        display = "" + display + a
    }
    result.textContent = display;
}


/* function operate(op, a, b) {
    if (op === "add") {
        return a + b;
    } else if (op === "sub") {
        return a - b;
    } else if (op === "mult") {
        return a * b;
    } else if (op === "divide") {
        return a / b;
    } else {
        return "ERROR";
    };
} */

