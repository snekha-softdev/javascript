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
// let
let b=10;
console.log(b);
// function scope
function sum(){
  let r=50;
  console.log(r);
}
sum();
// Reassignable
let s=40;
s=10000;
console.log(s);
// block scope
{
  let i=20;
  console.log(i);
}
// constant
const w=20;
console.log(w);
// block scope
{
  const r=30;
console.log(r);
}
// function scope
function add() {
  const w=20;
console.log(w);
}
add();







