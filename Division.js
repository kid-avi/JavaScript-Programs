// Wap to divide two numbers
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        if (parseInt(num2) === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            console.log("The quotient is:", parseInt(num1) / parseInt(num2));
        }
        rl.close();
    });
});