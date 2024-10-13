// basic comparison hai bhai aata hi hoga kuch naya dekho jo  ki niche hai

console.log("2" > 1);
//auto converion in number happened i.e true
//in sab ke liye typescript hai jahan thoda strict rule hai
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true because of value conversion

/*
The reason is that an equality check and comparisons > < >=
work differently.
Comparisons convert null to a number, treating it as 0.
That's why null>=0 is true and null>0 is false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); //always false

// note not that imp

// Strict Check
console.log("2" === 2); //false checks with datatype and value as well
