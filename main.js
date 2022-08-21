const button = document.querySelector(".btn");
const text = document.querySelector(".text__1");

button.addEventListener("click", function () {
  if (button.innerText == "Read More") {
    text.style.display = "block";
    button.innerText = "Read Less";
  } else {
    text.style.display = "none";
    button.innerText = "Read More";
  }
});
