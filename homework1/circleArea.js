let unit = "inches";

// let unit = prompt(
//   "What unit of measurement would you like to use? (inches, feet, centimeters, millimeters)"
// );

let radius = prompt("Enter a radius in " + unit);
let circleArea = Math.PI * radius * radius;

let userRoundPreference = prompt(
  "Would you like to round to a whole number? (y/n)"
);

if (userRoundPreference === "y" || userRoundPreference === "Y") {
  circleArea = circleArea.toFixed();
}

if (userRoundPreference === "n" || userRoundPreference === "N") {
  circleArea = circleArea.toFixed(5);
}

// if (userRoundPreference === "idk" || userRoundPreference === "IDK") {
//   prompt(
//     "Oh come on...What's the worst that can happen? Do you want to round or not? (y/n)"
//   );
// }

alert("The area is " + circleArea + ".");
