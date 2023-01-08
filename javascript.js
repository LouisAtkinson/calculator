let display = 0;
let firstNum = 0;
let secondNum = 0;
let thirdNum = 'empty';
let op = 0;
let prevOp = 0;
let answer = 'empty';
let stored = '';
let eq = 0;

const result = document.querySelector('.result');
result.classList.add('result');
result.textContent = display;

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
    number(".")
});

const clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    number("clear")
});

const equals = document.getElementById("equals");
equals.addEventListener("click", function() {
    eq = "equals";
    operate(op, firstNum, secondNum);
});

function number(a) {
    if (Number.isInteger(a) && display === 0) {
        display = a;
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
    } else if (Number.isInteger(a) && answer != 'empty') {
        display = a;
        stored = "";
        answer = 'empty';
    } else {
        display = "" + display + a
    }
    result.textContent = display;
    memory.textContent = stored;
}

function storage(b,c) {
    if (stored === '') {
        firstNum = display;
        op = b;
        stored = firstNum + c;
        memory.textContent = stored;
        display = 0;
        result.textContent = display;
    } else if (answer != 'empty') {
        firstNum = answer;
        op = b;
        stored = firstNum + c;
        memory.textContent = stored;
        display = 0;
        result.textContent = display;
        answer = 'empty';
    } else {
        prevOp = op
        op = b;
        console.log(prevOp)
        if (prevOp === "add") {
            secondNum = display;
            thirdNum = parseInt(firstNum) + parseInt(secondNum);
            stored = stored + secondNum + c;
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
        } else if (prevOp === "subtract") {
            console.log(firstNum);
            secondNum = display;
            thirdNum = parseInt(firstNum) - parseInt(secondNum);
            stored = stored + secondNum + c;
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
        } else if (prevOp === "multiply") {
            secondNum = display;
            thirdNum = parseInt(firstNum) * parseInt(secondNum);
            stored = stored + secondNum + c;
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
            console.log(firstNum);
        } else if (prevOp === "divide") {
            secondNum = display;
            thirdNum = parseInt(firstNum) / parseInt(secondNum);
            stored = stored + secondNum + c;
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
        } else {
        };
    };
}


function operate(op, a, b) {
    if (eq === "equals" && thirdNum === "empty") {
        if (op === "add") {
            secondNum = display;
            answer = parseInt(firstNum) + parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
        } else if (op === "subtract") {
            secondNum = display;
            answer = parseInt(firstNum) - parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
        } else if (op === "multiply") {
            secondNum = display;
            answer = parseInt(firstNum) * parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
            console.log(firstNum);
        } else if (op === "divide") {
            secondNum = display;
            answer = parseInt(firstNum) / parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
        } else {
        };
    } else if (eq === "equals" && thirdNum != "empty") {
        if (op === "add") {
            secondNum = display;
            answer = parseInt(thirdNum) + parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
        } else if (op === "subtract") {
            secondNum = display;
            answer = parseInt(thirdNum) - parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
        } else if (op === "multiply") {
            secondNum = display;
            console.log(thirdNum)
            answer = parseInt(thirdNum) * parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
        } else if (op === "divide") {
            secondNum = display;
            answer = parseInt(thirdNum) / parseInt(secondNum);
            result.textContent = answer;
            stored = stored + secondNum;
            memory.textContent = stored;
            eq = 0;
        } else {
        };
    } else {
        if (op === "add") {
            secondNum = display;
            firstNum = parseInt(firstNum) + parseInt(secondNum);
            stored = stored + display + " + ";
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
        } else if (op === "subtract") {
            secondNum = display;
            firstNum = parseInt(firstNum) - parseInt(secondNum);
            stored = stored + display + " - ";
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
        } else if (op === "multiply") {
            secondNum = display;
            firstNum = parseInt(firstNum) * parseInt(secondNum);
            stored = stored + display + " x ";
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
        } else if (op === "divide") {
            secondNum = display;
            firstNum = parseInt(firstNum) / parseInt(secondNum);
            stored = stored + display + " ÷ ";
            memory.textContent = stored;
            display = 0;
            result.textContent = display;
            eq = 0;
        } else {
        };
    };
}

/* else {
    secondNum = parseInt(display);
    op = b;
    stored = stored + display + c;
    memory.textContent = stored;
    display = 0
    result.textContent = display;
};
 */