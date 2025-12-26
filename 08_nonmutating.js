// concat
let a = [10,20,4,5];
let b = [40,50,60,70,5];
let c = a.concat(b);
console.log(c);
c.sort();
console.log(c);
// slice
let plate= [10,20,30,40,50,60,70,80];
let newplate=plate.slice(2,6);
console.log(newplate);
console.log(plate);
// includes
let fruits = ["apple","orange","banana"];
console.log(fruits.includes("orange"));
console.log(fruits.includes("jackfruit"));
// indexof
let num = [10,20,30,40,50,60];
console.log(num.indexOf(20));
console.log(num.indexOf(90));
// lastindexof
let num1 = [10,20,30,40,50,60];

console.log(num1.lastIndexOf(20)); 
// join
let arr = ["I", "love", "JS"];

let text = arr.join(" ");

console.log(text); 
// tostring
let arr14 = [1, 2, 3];
console.log(arr14.toString()); 
// enteries
let z=["a","b"];
let x=z.entries();
console.log(x);






