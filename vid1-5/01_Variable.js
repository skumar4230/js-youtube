const accountId = 1238459;
let accountEmail = "sk@gmail.com";
var accountPassword = "12345";
accountCity = "Bangalore"; //this is not a good way to declare variable

let accountState; //it's undefined

// this is just inspection and different variable
//keyword

// const = final i.e can't be modified
// let = can be modified have block level scope
// var = can be modified global scope
//so we will be using only let and const

//trying to update const
// accountId = 5465;
// // will give error
// console.log(accountId);//will give error

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
//modification
accountEmail = "sk1@gmail.com";
accountPassword = "985";
accountCity = "Mysore";

console.log(accountEmail);
//to see output as a table
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
// we see all are getting updated

/*
prefer not to use var because of issue in block scope and functional scope 
*/
