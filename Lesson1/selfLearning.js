// Variables - A variable is a memory location that holds data and is accessed by a name.

// var name; // var is a keyword to declare a variable.
// let anotherName; // let will declare block-scoped variable.

// Variables cont. - Adding Values to our Variables.

var name = "Josh";
let anotherName = "Wardo";
const unchangeableName = "Superman!";
// const will declare a variable that can never change value.

//Variables cont. - Types and Operators
//a. Types

let foo; //foo is undefined
foo = 42; //foo is now a number.
foo = "bar"; //foo is now a string.
foo = "true"; //foo is now a boolean.

//b. Operators
//Arithmetic, Comparison, Logical, Assignment, Conditional

//Arithmetic:
var x = 5, y = 10, z = 15;
x + y; //returns 15
y - x; //returns 5
x * y; //returns 50
y / x; //returns 2
x % 2; //returns 1
x++; //returns 6
x--; //returns 4

//Comparison: Comparison operators are used in logical statements to determine equality or difference between variables or values.
var x = 5;
x == 8; //returns false '== means 'equal to''
x == 5; //returns true 
x === "5"; //returns false '=== means 'equal value and type''
x === 5; //returns true
x != 8; //returns true '!= means 'not equal''
x !== "5"; //returns true '!== means 'not equal value or type''
x !== 5; //returns false
x > 8; //returns false
x < 8; //returns true
x >= 8; //retuns false
x <= 8; //returns true


