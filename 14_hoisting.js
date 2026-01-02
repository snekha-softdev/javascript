// hoiting
// variable hoisting
console.log(x); 
      var x = 10;
// function hoisting
greet(); 
    
      function greet() {
        console.log("Hello!");
      }
// function expression hoisting
      greet(); 
  
      var greet = function() {
        console.log("Hello!");
      };
// hoisting with let and constant
console.log(x); 
      let x = 10;
