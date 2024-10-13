"use strict"; //treat all JS code as newer version
//standard way generally no need to mention explicitly now a days it's default

// alert(3 + 3); //it is browser specific not in backend

//in react, node we don't need to specify ; as it's not mandate

console.log(3 + 3);
//code reusability should be high
//documentation can be found  in mdn or ec i.e ecmascript
console.log("Sourav");

let name = "Sourav"; //String

let isLoggedIn = false; //boolean

//Primitive datatypes
//number=>2 to power 53
let age = 18;
//bigInt => n is used to specify it's bigInt i.e for bigger numbers
let bigInt = 9007199254740991n;
//symbol => unique
let sym = Symbol("Sourav"); //Symbol is used to create unique identifier
//string
let str = "Sourav";
//boolean => true or false
let isLogged = true;
//null => standalone value - value is null
let nullVar = null;
//undefined=> value is not yet defined yet type is also not defined
let undef;

console.log(typeof str); //specify type of variable
console.log(undef); //undefined type
console.log(typeof nullVar); //object type

//non primitive - focus later

//object
let obj = {
  name: "Sourav",
  age: 18,
};
//array
let arr = [1, 2, 3, 4, 5];
//function
function add(a, b) {
  return a + b;
}
//object literal
let objLiteral = {
  name: "Sourav",
  age: 18,
};
//array literal
let arrLiteral = [1, 2, 3, 4, 5];
//function expression
let funcExpr = function (a, b) {
  return a + b;
};
//function declaration
function funcDecl(a, b) {
  return a + b;
}
