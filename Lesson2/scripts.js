// let x = 15;
// let y = 12;
// let z = 21;

// if (x < 15 && y < 12) {
//     console.log("This is falsey");
// } else if (x == 15) {
//     console.log("This is true!");
// } else if (z == 21) {
//     console.log("This is also true!");
// } else {
//     console.log("This is false");
// }

// --Loops
// While
let i = 1;
while (i <= 5) {
  console.log("WHILE: The number is " + i);
  i++;
}

//DO While Loop
let y = 1;
do {
  console.log("DO WHILE: The number is " + y);
  y++;
} while (y <= 5);

//FOR Loop
for (let i = 1; i <= 5; i++) {
  console.log("FOR LOOP: The number is " + i);
}

//Arrays
let colors = ["red", "blue", "green", "black", "yellow", "orange"];
let stats = [4.0, 3.7, 2.3, 1.3, 4.5, 5.5];
let multi = [
  ["green", "blue"],
  ["black", "red"],
];

// console.log(colors[colors.length - 1]);
// console.log(colors[2]);
// console.log(stats[2]);
// console.log(multi[1][0]);

//Objects
let person = { name: "Joshua", age: "39", height: "6.0" };
person.name = "Jesus"; // is repeatable //
console.log(person.age);

//Loop Colors Array
for (let i = 0; i < colors.length; i++) {
  console.log("The color is " + colors[i]);
}

//FOR EACH loop

for (let stat of stats) {
  console.log(stat);
}

for (let color of colors) {
  console.log(color);
}

for (let prop in person) {
  console.log(prop + " = " + person[prop]);
}

// 1.2 Functions
function myFunction(number1, number2) { //peramaters () ()
  let sum = number1 + number2;
  return sum;
}

let getSum = myFunction(5, 5); //involking means arguements () ()
console.log(getSum);

//hoisting means involking 'involkation' before declaring 'declaration'
function addItems() {
    console.log("test");
}


//lets bring everything together

let sports = ["basketball", "baseball", "football"];

function addArray(array){
    for (let item of array){
        console.log(item);
    }
}
addArray(sports);