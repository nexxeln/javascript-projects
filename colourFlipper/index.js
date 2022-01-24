const spanEl = document.getElementById("span-el")
const buttonEl = document.getElementById("button-el")

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

buttonEl.addEventListener("click", function() {
    let colour = "#"
    for (let i = 0; i < 6; i++) {
        colour += hex[Math.floor(Math.random() * hex.length)]
    }

    document.body.style.backgroundColor = colour
    spanEl.textContent = colour
})