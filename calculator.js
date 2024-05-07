function submitData() {
  const balance = document.getElementById("accountBalance").value;
  const interest = document.getElementById("annualInterest").value;
  const months = document.getElementById("investmentDuration").value;

  if (balance == "" || interest == "" || months == "") {
    var error = "ERROR: All fields must be filled out.";
    var color = "red";
    updateDOM(error, color);
    return false;
  } else {
    var value = "Your ROI is " + computeFutureValue(balance, interest, months);
    var color = "green";
    updateDOM(value, color);
    return false;
  }
}

function updateDOM(value, color) {
  var message = document.getElementById("message");
  message.textContent = value;
  message.style.color = color;
}

function computeFutureValue(balance, interest, months) {
  let time = months / 12;
  let rate = interest / 100;
  let roi = balance * (1 + rate * time);
  let formattedNumber = roi.toLocaleString("en-US");
  return '$'+formattedNumber;
}
