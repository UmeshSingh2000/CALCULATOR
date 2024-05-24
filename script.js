let input = document.getElementById("input");

const handleClick = (val) => {
    // Check if the input is an operator and input field is empty
    if (['+', '-', '*', '/'].includes(val) && input.value === "") {
        return;
    }
    if (val === '=') {
        // Evaluate the expression in the input field
        input.value = eval(input.value);
        return;
    }
    if (val === 'c') {
        // Clear the input field
        input.value = "";
        return;
    }
    if (val === '>') {
        // Delete the last character from the input field
        let str = input.value;
        input.value = str.slice(0, str.length - 1);
        return;
    }
    if (val === '1/x') {
        // Calculate the reciprocal of the input value
        input.value = eval(1 / input.value);
        return;
    }
    if (val === 'xsqr') {
        // Calculate the square of the input value
        input.value = eval(input.value * input.value);
        return;
    }
    if (val === 'xsqrt') {
        // Calculate the square root of the input value
        input.value = eval(Math.sqrt(input.value));
        return;
    }
    if (val === '!') {
        // Calculate the factorial of the input value
        let num = input.value;
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        input.value = fact;
        return;
    }
    // Concatenate the input value with the clicked button value
    input.value = input.value + val;
}


// checks if the valid key is pressed
window.addEventListener("keydown", (e) => {

    const key = e.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Backspace', 'Enter','c'];
    if (validKeys.includes(key)) {
        if(key==="Enter"){
            input.value = eval(input.value);
        }
        else if(key==="Backspace"){
            input.value = input.value.slice(0, -1);
        }
        else if(key==='c'){
            input.value = "";
        }
        else{
            input.value = input.value + key;
        }
    }

})
