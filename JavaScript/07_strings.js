/*************  ✨ Codeium Command 🌟  *************/
/*************  ✨ Codeium Command 🌟  *************/
// In JavaScript, strings can be defined with double or single quotes

// String constructor
//use mdn docs to know more about methods
// jo jyada sahi rahega

//string constructor
const gameName = new String("Sokinfy");

// String concatenation
const name = "Sourav";
const name2 = name + " Kumar"; // Concatenates name with " Kumar"
console.log(name2); // Outputs: "Sourav Kumar"

// String interpolation - a better way to concatenate
console.log(`Hello my name is ${name} Kumar`); // Outputs: "Hello my name is Sourav Kumar"
console.log(`Hello my name is ${name.toUpperCase()} Kumar`); // Outputs: "Hello my name is SOURAV Kumar"

// String methods
console.log(name2.toUpperCase()); // Converts the string to uppercase: "SOURAV KUMAR"
console.log(name2.toLowerCase()); // Converts the string to lowercase: "sourav kumar"
console.log(name2.includes("ourav")); // Checks if "ourav" is in the string: true
console.log(name2.startsWith("Sourav")); // Checks if string starts with "Sourav": true
console.log(name2.endsWith("Kumar")); // Checks if string ends with "Kumar": true
console.log(name2.repeat(3)); // Repeats the string 3 times: "Sourav KumarSourav KumarSourav Kumar"

// String trim
const myName = "Sourav Kumar";
console.log(myName.trim()); // Trims whitespace from both sides: "Sourav Kumar"

// String split
console.log(myName.split(" ")); // Splits the string into an array: ["", "", "Sourav", "Kumar", ""]

// String replace
console.log(myName.replace("Sourav", "Sourav Kumar")); // Replaces "Sourav" with "Sourav Kumar": "  Sourav Kumar Kumar"

// String search
console.log(myName.search("Kumar")); // Searches for "Kumar" and returns the starting index: 9

// String charAt
console.log(myName.charAt(0)); // Returns the character at index 0: " "

// String indexOf
console.log(myName.indexOf("Sourav")); // Returns the index of the first occurrence of "Sourav": 2

// String lastIndexOf
console.log(myName.lastIndexOf("Kumar")); // Returns the index of the last occurrence of "Kumar": 9

// String slice
console.log(myName.slice(0, 5)); // Extracts a section of the string: "  Sou"
console.log(myName.slice(-4, -1)); // Extracts using negative indices: "uma"

// String substring
console.log(myName.substring(0, 5)); // Similar to slice but doesn't accept negative indices: "  Sou"

// String substr (deprecated)
console.log(myName.substr(0, 5)); // Extracts a portion of the string: "  Sou"

// String concat
console.log(myName.concat(" is a good boy")); // Concatenates with another string: "  Sourav Kumar  is a good boy"

// String valueOf
console.log(myName.valueOf()); // Returns the primitive value of the string: "  Sourav Kumar
// String charCodeAt
console.log(myName.charCodeAt(0)); // Returns the UTF-16 code of the character at index 0: 32 (space)

// String fromCharCode
console.log(String.fromCharCode(65)); // Converts a UTF-16 code to a character: "A"

// String escape (deprecated)
console.log(escape("Sourav Kumar")); // Encodes the string: "Sourav%20Kumar"

// String unescape (deprecated)
console.log(unescape("Sourav%20Kumar")); // Decodes the string: "Sourav Kumar"
//string fromCharCode
console.log(String.fromCharCode(65));

// String trimStart
console.log(myName.trimStart()); // Trims whitespace from the start: "Sourav Kumar  "
//string escape
console.log(escape("Sourav Kumar"));

// String trimEnd
console.log(myName.trimEnd()); // Trims whitespace from the end: "  Sourav Kumar"
//string unescape
console.log(unescape("Sourav Kumar"));

// String padStart
console.log(myName.padStart(20, "*")); // Pads the start with "*" to length 20: "***  Sourav Kumar  "
//string trimStart
console.log(myName.trimStart());

// String padEnd
console.log(myName.padEnd(20, "*")); // Pads the end with "*" to length 20: "  Sourav Kumar  ***"
//string trimEnd
console.log(myName.trimEnd());

// String match
console.log(myName.match("Sourav")); // Searches for matches of "Sourav": ["Sourav"]
//string padStart
console.log(myName.padStart(20, "*"));

// String replaceAll
console.log(myName.replaceAll("Sourav", "Sourav Kumar")); // Replaces all occurrences of "Sourav": "  Sourav Kumar Kumar  "
//string padEnd
console.log(myName.padEnd(20, "*"));
