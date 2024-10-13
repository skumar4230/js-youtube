//Primitive - 7 types
//it's called by value
//String, Number, Boolean, null, Undefined, Symbol, BigInt

//eg of symbol
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id); //output: Symbol(123)
console.log(id === anotherId); //symbols are unique

//js is dynamically typed language
//it means you don't need to declare the type of variable before using it

//Non-Primitive or Reference Type
//it's called by reference
//reference allocated to memory
//Arrays, Objects, Functions

const heros = ["ironman", "spiderman"];
let myObj = {
  name: "Sourav",
  age: 25,
};
const myFunction = function () {
  console.log("Hello World");
};
myFunction();

console.log(typeof myFunction); //type of returns datatype
