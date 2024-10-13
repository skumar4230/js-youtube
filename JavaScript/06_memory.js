console.log("we will learn about stack and heap here");

//Stack, Heap
// Stack = Primitive - will get copy here
// Heap = Non primitive - will get reference here

let myName = "Sourav"; //go on heap

let anotherName = myName;
console.log(anotherName);
anotherName = "Sourav Kumar"; //we are changing copy here not direct value
console.log(myName);

let user1 = {
  email: "sk@gmail.com",
  upi: "sk@ybl",
};
console.log(user1);
let user2 = user1;
console.log(user2);
user2.email = "changed@mail.com";
console.log(user2);
console.log(user1); //value of user1  will also be changed here because we get reference here and can be changed
