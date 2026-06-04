const photo = document.querySelector("img");
const buttons = document.querySelectorAll("button"); // [happy, sad]

buttons[0].addEventListener("click", () => {
  photo.src = "images (2).jpg"; // happy
});

buttons[1].addEventListener("click", () => {
  photo.src = "images (1).jpg"; // sad
});
