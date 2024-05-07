// How to change elements in your HTML
document.getElementById("headingID").innerHTML = "Updated Content";
let headingContent = document.getElementById("headingID").innerHTML;
console.log(headingContent);

//by class
document.querySelector(".myHeading").innerHTML = "Updated from query";
let headingContent2 = document.queryselector(".myHeading").innerHTML;
console.log(headingContent2);

// How to insert elements in your HTML, like paragraphs
const paragraph = document.createElement("p");
const node = document.createTextNode("This is my text node!");
paragraph.appendChild(node);
let div = document.getElementById("myContainer");
div.appendChild(paragraph);

// How to select certain elements in your HTML
let allPara = document.getElementsByTagName("p");
let allParaByClass = document.querySelectorAll("red");
console.log(allParaByClass);

function changeText(id) {
  id.innerHTML = "This text has changed!!!";
}

function changeColor() {
  let colors = ["green", "red", "blue", "yellow"];
  let random = Math.floor(Math.random() * colors.length);
  console.log(
    "The random number is: " +
      random +
      ", the random color is: " +
      colors[random]
  );
  document.body.style.backgroundColor = colors[random];
}
function changeColorForHeading() {
  document.getElementById("headingID").style.color = "purple";
}
document.getElementById("changeColor").addEventListener("click", changeColor);
document
  .getElementById("changeColor")
  .addEventListener("click", changeColorForHeading);

//clicking button to output the date

function displayDate() {
  document.getElementById("myContainer").innerHTML = Date();
}

document.getElementById("displayDate").addEventListener("click", displayDate);


function displayTime(){
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let am = true;
}

document.getElementById("time").addEventListener("click", displayTime);

//Animate

function move(){
    let id = null;
    const elem = document.getElementById("animate");
    let position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame(){
        if(position == 350){
            clearInterval(id);
        }else{
            position++;
            document.getElementById("position").innerHTML = position;
            elem.style.top = position + "px";
            elem.style.left = position + "px";
        }
    }

}