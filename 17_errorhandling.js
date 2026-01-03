// try...catch Statement
try {
  let result = a + 10; // error
  console.log(result);
} catch (error) {
  console.log("Error occurred:", error.message);
}
// error object

    try {
      // Code that might throw an error
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
//   throw statement

    function divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }

    try {
      const result = divide(10, 0);
      console.log("Result:", result);
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
//   debugging with console

    function add(a, b) {
      console.log("Adding numbers:", a, b);
      const sum = a + b;
      console.log("Sum:", sum);
      return sum;
    }

    add(5, 3);
  