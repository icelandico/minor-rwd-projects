const buttonContainer = document.querySelector(".button-container")
const bars = document.querySelectorAll("[class*='part-']")

buttonContainer.addEventListener("click", function () {
  bars.forEach(bar => bar.classList.toggle("active"))
})