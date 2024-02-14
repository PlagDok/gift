const toggleButton = document.getElementById("toggleButton");
const toggleButton2 = document.getElementById("toggleButton2");
const toggleButton3 = document.getElementById("toggleButton3");
const toggleButton4 = document.getElementById("toggleButton4");
const toggleButton5 = document.getElementById("toggleButton5");
const toggleButton6 = document.getElementById("toggleButton6");
const textBlock = document.getElementById("textBlock");
const textBlock2 = document.getElementById("textBlock2");
const textBlock3 = document.getElementById("textBlock3");
const textBlock4 = document.getElementById("textBlock4");
const textBlock5 = document.getElementById("textBlock5");
const textBlock6 = document.getElementById("textBlock6");

toggleButton.addEventListener("click", function () {
  textBlock.classList.toggle("hide");
});
toggleButton2.addEventListener("click", function () {
  textBlock2.classList.toggle("hide2");
});
toggleButton3.addEventListener("click", function () {
  textBlock3.classList.toggle("hide3");
});
toggleButton4.addEventListener("click", function () {
  textBlock4.classList.toggle("hide4");
});
toggleButton5.addEventListener("click", function () {
  textBlock5.classList.toggle("hide5");
});
toggleButton6.addEventListener("click", function () {
  textBlock6.classList.toggle("hide6");
});
