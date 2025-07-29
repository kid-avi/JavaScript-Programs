// reverse the numbers in js taking user input
function reverseArray(arr) {
  return arr.reverse();
}

// For manual input in Node.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input.split(" ").map(Number);
  const reversedNumbers = reverseArray(numbers);

  console.log("Reversed numbers:", reversedNumbers.join(" "));
  readline.close();
});
