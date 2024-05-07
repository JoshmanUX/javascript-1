function submitImg() {
  let value = imageLink.img.value;
  let img = document.createElement("img");
  img.src = value;
  document.getElementById("displayImg").appendChild(img);
}
