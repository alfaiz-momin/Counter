// set initial count
let count = 0

// Select value and buttons
const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //using classList.contain() to check that button has wich class, read belwo tutorial for more
    //https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/

    const styles = e.currentTarget.classList

    if (styles.contains("decrease")) {
      count--
    } else if (styles.contains("increase")) {
      count++
    } else {
      count = 0
    }

    if (count > 0) {
      value.style.color = "#7edf84" //Green
    }

    if (count < 0) {
      value.style.color = "#f97272" //Red
    }

    if (count === 0) {
      value.style.color = "#222"
    }

    value.textContent = count
  })
})
