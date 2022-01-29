console.log("im here")
// for mobile menu
const btn = document.querySelector(".mobile-menu-btn")
const menu = document.querySelector(".mobile-menu")

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

// colour picker
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'
    default: 'gray',

    components: {

        // Main components
        preview: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            input: true,
        }
    }
});

// qr code
document.getElementById("generate").addEventListener("click", () => {
    const lightHex = document.getElementById("light-colour-field").value
    const darkHex = document.getElementById("dark-colour-field").value
    const qrtext = document.getElementById("text-field").value
    document.getElementById("qrcode").innerHTML = ""
    generate(qrtext, lightHex, darkHex)
    
})


function generate(text, colour1, colour2) {
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 256,
        height: 256,
        colorDark : colour2,
        colorLight : colour1,
        correctLevel : QRCode.CorrectLevel.H
    });
}

