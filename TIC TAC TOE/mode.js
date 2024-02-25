let mode = document.querySelector("#mode");

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    mode.src = "logo/sun.png";
  } else {
    mode.src = "logo/moon.png";
  }
});
