// 1. WHILE LOOP - Create a program that displays the numbers 1 to 100 using a while loop.

let x = 1;
while (x <= 100) {
  console.log("1: The number is " + x);
  x++;
}

// 2. FOR LOOP - Create a program that displays the numbers 1 to 100 using a for loop.

for (let z = 1; z <= 100; z++) {
    console.log("2: The number is " + z);
}

// 3. FOR LOOP - Create a program that displays the EVEN numbers from 1 to 100 using a for loop.

for (let y = 2; y <= 100; y += 2) {
  console.log("3: The number is " + y);
}

// 4. FOR EACH LOOP - Create a program with an array that contains 10 names. Write a loop to display each of those names to the user.

let favShows = [
  "Breaking Bad",
  "Invincible",
  "The Daily Show",
  "Fallout",
  "Halo",
  "Better Call Saul",
  "Curb Your Enthusiasm",
  "Arrested Development",
  "Last Week Tonight",
  "Abstract",
];

for (let show of favShows) {
  console.log(show);
}
