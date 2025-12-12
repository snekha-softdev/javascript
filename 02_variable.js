// variable declaration
var name="Ram";
console.log(name);
// Redeclaration
var a=20;
console.log(a);
var a=50;
console.log(a);
// Reassignment
var x=100;
console.log(x);
x=200;
console.log(x);
// function scope
function  greeter() {
    var y=40;
    console.log(y);
    
}
greeter();
// global scope
function  greeter1() {
    // var z=40;
    console.log(a);
    }
greeter1();
// hoisted
var a;    
console.log(a);
a = 10;
greet();  // Hello

function greet() {
  console.log(a);
}







