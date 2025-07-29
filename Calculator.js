// Make a caluclator of any number in js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter first number: ", (num1) => {
  readline.question("Enter operator (+ - * /): ", (op) => {
    readline.question("Enter second number: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      let result;
      switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : "Cannot divide by zero"; break;
        default: result = "Invalid operator";
      }

      console.log(`Result: ${result}`);
      readline.close();
    });
  });
});
