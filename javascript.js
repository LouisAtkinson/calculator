let display = 0;
let firstNum = 0;
let secondNum = 0;
let thirdNum = 'empty';
let op = 0;
let prevOp = 0;
let answer = 'empty';
let stored = '';
let eq = 0;
let dec = 0;
let error = 0;

const result = document.querySelector('.result');
result.classList.add('result');
result.textContent = round(display);

const memory = document.querySelector('.memory');
memory.classList.add('memory');
memory.textContent = stored;

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
    storage("add"," + ");
});

const subtract = document.getElementById("subtract");
subtract.addEventListener("click", function() {
    storage("subtract"," - ");
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", function() {
    storage("multiply"," x ");
});

const divide = document.getElementById("divide");
divide.addEventListener("click", function() {
    storage("divide"," ÷ ");
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", function() {
    if (dec === 0) {
    number(".");
    dec = 1;
    }
});

const clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    number("clear");
});

const equals = document.getElementById("equals");
equals.addEventListener("click", function() {
    eq = "equals";
    operate(op, firstNum, secondNum);
});

function number(a) {
    if (Number.isInteger(a) && display === 0 && answer === 'empty') {
        display = a;
    } else if (Number.isInteger(a) && error === 1) {
        display = a;
        error = 0;
    } else if (a === 'clear') {
        display = 0;
        firstNum = 0;
        secondNum = 0;
        thirdNum = 'empty';
        op = 0;
        prevOp = 0;
        answer = 'empty';
        stored = '';
        eq = 0;
        dec = 0;
        error = 0;
    } else if (Number.isInteger(a) && answer != 'empty') {
        display = a;
        stored = "";
        answer = 'empty';
    } else if (answer != 'empty') {
        display = "" + 0 + a;
        stored = "";
        answer = 'empty';
    } else {
        display = "" + display + a;
    }
    result.textContent = display;
    memory.textContent = stored;
}

function storage(b,c) {
    dec = 0;
    if (stored === '' && error === 0) {
        firstNum = display;
        op = b;
        stored = firstNum + c;
        display = 0;
    } else if (error === 1) {
        firstNum = 0;
        op = b;
        stored = firstNum + c;
        error = 0;
        display = 0;
    } else if (answer != 'empty') {
        firstNum = answer;
        op = b;
        stored = firstNum + c;
        display = 0;
        answer = 'empty';
    } else {
        prevOp = op
        op = b;
        console.log(prevOp)
        if (prevOp === "add") {
            secondNum = display;
            thirdNum = parseFloat(firstNum) + parseFloat(secondNum);
            stored = stored + secondNum + c;
            display = 0;
            eq = 0;
        } else if (prevOp === "subtract") {
            console.log(firstNum);
            secondNum = display;
            thirdNum = parseFloat(firstNum) - parseFloat(secondNum);
            stored = stored + secondNum + c;
            display = 0;
            eq = 0;
        } else if (prevOp === "multiply") {
            secondNum = display;
            thirdNum = parseFloat(firstNum) * parseFloat(secondNum);
            stored = stored + secondNum + c;
            display = 0;
            eq = 0;
        } else if (prevOp === "divide") {
            secondNum = display;
            if (parseFloat(secondNum) === 0) {
                display = "I cannot divide by 0 :(";
                stored = "";
                error = 1;
            } else {
            thirdNum = parseFloat(firstNum) / parseFloat(secondNum);
            stored = stored + secondNum + c;
            display = 0;
            eq = 0;
            }
        } else {
        };
    };
    memory.textContent = stored;
    result.textContent = round(display)
}


function operate(op, a, b) {
    dec = 0;
    if (eq === "equals" && thirdNum === "empty" && answer === 'empty') {
        if (op === "add") {
            secondNum = display;
            answer = parseFloat(firstNum) + parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
        } else if (op === "subtract") {
            secondNum = display;
            answer = parseFloat(firstNum) - parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
        } else if (op === "multiply") {
            secondNum = display;
            answer = parseFloat(firstNum) * parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
        } else if (op === "divide") {
            secondNum = display;
            if (parseFloat(secondNum) === 0) {
                display = "I cannot divide by 0 :(";
                stored = "";
                result.textContent = display;
                error = 1;
            } else {
            answer = parseFloat(firstNum) / parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
            }
        } else {
        };
    } else if (eq === "equals" && thirdNum != "empty" && answer === 'empty') {
        if (op === "add") {
            secondNum = display;
            answer = parseFloat(thirdNum) + parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
        } else if (op === "subtract") {
            secondNum = display;
            answer = parseFloat(thirdNum) - parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
        } else if (op === "multiply") {
            secondNum = display;
            console.log(thirdNum)
            answer = parseFloat(thirdNum) * parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
        } else if (op === "divide") {
            secondNum = display;
            if (parseFloat(secondNum) === 0) {
                display = "I cannot divide by 0 :(";
                stored = "";
                result.textContent = display;
                error = 1;
            } else {
            answer = parseFloat(thirdNum) / parseFloat(secondNum);
            result.textContent = round(answer);
            stored = stored + secondNum;
            eq = 0;
            }
        } else {
        };
    } else if (eq === 'equals' && answer != 'empty') {
        if (op === "add") {
            stored = answer + " + " + secondNum;
            answer = parseFloat(answer) + parseFloat(secondNum);
            result.textContent = round(answer);
            eq = 0;
        } else if (op === "subtract") {
            stored = answer + " - " + secondNum;
            answer = parseFloat(answer) - parseFloat(secondNum);
            result.textContent = round(answer);
            eq = 0;
        } else if (op === "multiply") {
            stored = answer + " x " + secondNum;
            answer = parseFloat(answer) * parseFloat(secondNum);
            result.textContent = round(answer);
            eq = 0;
        } else if (op === "divide") {
            if (parseFloat(secondNum) === 0) {
                display = "I cannot divide by 0 :(";
                stored = "";
                result.textContent = display;
                error = 1;
            } else {
                stored = answer + " ÷ " + secondNum;
                answer = parseFloat(answer) / parseFloat(secondNum);
                result.textContent = round(answer);
                eq = 0;
            }
        } else {
        };
    } else {
        if (op === "add") {
            secondNum = display;
            firstNum = parseFloat(firstNum) + parseFloat(secondNum);
            stored = stored + display + " + ";
            display = 0;
            result.textContent = round(display);
            eq = 0;
        } else if (op === "subtract") {
            secondNum = display;
            firstNum = parseFloat(firstNum) - parseFloat(secondNum);
            stored = stored + display + " - ";
            display = 0;
            result.textContent = round(display);
            eq = 0;
        } else if (op === "multiply") {
            secondNum = display;
            firstNum = parseFloat(firstNum) * parseFloat(secondNum);
            stored = stored + display + " x ";
            display = 0;
            result.textContent = round(display);
            eq = 0;
        } else if (op === "divide") {
            secondNum = display;
            if (parseFloat(secondNum) === 0) {
                display = "I cannot divide by 0 :(";
                stored = "";
                result.textContent = display;
                error = 1;
            } else {
            firstNum = parseFloat(firstNum) / parseFloat(secondNum);
            stored = stored + display + " ÷ ";
            display = 0;
            result.textContent = round(display);
            eq = 0;
            }
        } else {
        };
    };
    memory.textContent = stored;
}

function round(a) {
    if (typeof a === 'number') {
        let rounded = Math.round(a * 1000000000) / 1000000000;
        return rounded;
    }
}