let display = document.getElementById('result');
let expression = '';

function append(value) {
    expression += value;
    display.value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = String(result);
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function clearDisplay(){
    expression = '';
    display.value = '';
}

function clearLastDigit(){
    expression = expression.slice(0, -1);
    display.value = expression;
}


