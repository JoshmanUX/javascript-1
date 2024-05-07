function addAttendee() {
  let firstname = signUpForm.firstname.value;
  let lastname = signUpForm.lastname.value;
  let age = signUpForm.age.value;

  if (firstname == "" || lastname == "" || age == "") {
    alert("Full Name and Age must be provided!");
    return false;
  }

  if (age < 21) {
    let persona = firstname + " " + lastname + " - " + age;
    let ul = document.getElementById("attendeesUnder21");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(persona));
    ul.appendChild(li);
  } else if (age >= 21) {
    let persona = firstname + " " + lastname + " - " + age;
    let ul = document.getElementById("attendeesOver21");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(persona));
    ul.appendChild(li);
  }

  return false;
}
