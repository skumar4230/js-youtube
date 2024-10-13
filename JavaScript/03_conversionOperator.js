let score1 = "33";
console.log(typeof score1);
let score = Number(score1); //converting to number
console.log(typeof score);
if (typeof score == "number") {
  console.log("number hai bhai");
}
console.log("hello");
//what if we are storing some Nan eg below
// let score2 = "123abc";
let score2 = null;
let score3 = Number(score2);
console.log(typeof score3); //will give number but
console.log(score3); //output NaN it's also a type

//"33"=>33
// "33abc"=>NaN
// true=>1;false=>0
//""=>false;"anything" =>true
// 1=>true;0=>false

let isLoggedIn = 1;
let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn); //true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
