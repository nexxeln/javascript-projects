const inputEL = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")
const outputEl = document.getElementById("output-el")
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

const span = document.createElement("span")
span.textContent = "=>"
span.classList.add("text-blue-500")

const variable = document.createElement("span")

buttonEl.addEventListener("click", () => {
    inputText = inputEL.value
    const vowelCount = countVowels(inputText)
    outputEl.textContent = "Number of vowels "
    outputEl.appendChild(span)
    variable.textContent = " " + vowelCount
    outputEl.appendChild(variable)
})

function countVowels(text) {
    let count = 0
    for(let char of text) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}