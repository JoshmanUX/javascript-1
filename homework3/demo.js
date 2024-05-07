/* The purpose of this assignment is to demonstrate your understanding of loops and functions in JavaScript.

Write a JavaScript program that displays text to a user x times. Your program must include the following elements:

an html file to run in the browser, and prompt the user for input

a function named getMotto() that will prompt the user for their favorite phrase or motto. This function should return a string that includes this motto. */

function getMotto() {
  return prompt("What is your favorite phrase or motto? Enter it here: ");
}

/* a function named getCount() that will prompt the user for the number of times they'd like to see this motto displayed to them. TIP: you will need to use parseFloat. */

function getCount() {
  return parseFloat(
    prompt(
      "How many times do you want to see this motto displayed? Enter your answer here: "
    )
  );
}

/* a function named printMotto() that will accept two parameters: (motto, count). It will include a loop that will cause the motto to be displayed in the console count times. */

function printMotto(userMotto, mottoCount) {
  for (let i = 0; i < mottoCount; i++) {
    console.log(userMotto);
  }
}

let userMotto = getMotto();
let mottoCount = getCount();

printMotto(userMotto, mottoCount);
