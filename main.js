function calculate() {
    let firstElement = Number(document.getElementById("firstInput").value);
    let secondElement = Number(document.getElementById("secondInput").value);
    let operand = document.getElementById("operand").value;
    let second = firstElement - secondElement;
    let result;
    if (operand == 'plus') {
        result = firstElement + secondElement;
    } 
    else if (operand == 'minus') {
        result = firstElement - secondElement;
    } 
    else if (operand == 'multiply') {
       result = firstElement * secondElement;
    } 
    else if (operand == 'divide') {
        if (secondElement == 0) {
            alert("На ноль делить нельзя!!!");
        }
        else 
        result = firstElement / secondElement;
    }
    else if (operand === 'fact') {
        res = fact(firstElement);
    }
    else if (operand === 'sqrt') {
        result = Math.sqrt(firstElement);
    }
    else if ( operand == 'PISN') {
        result = fact(firstElement);
    }
    else if (operand == 'AISNPOK') {
        
        result = fact(firstElement) / fact(second);
    }
    else if (operand == 'CISNPOK') {
        result = (fact(firstElement) / fact(second)) / fact(secondElement);
    }
    else {
        result = firstElement % secondElement;
    }
    document.getElementById("result").textContent = "Результат: " + result;
}
function toggleInput() {
    let operand = document.getElementById("operand").value;
    let secondInput = document.getElementById("secondInput");
    if (operand === "fact" || operand === 'sqrt' || operand == 'PISN') {
        secondInput.value = '';
        secondInput.disabled = true;
    }
    else {
        secondInput.disabled = false;
    }
}
function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}