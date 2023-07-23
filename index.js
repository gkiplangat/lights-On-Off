let lightStatus = document.querySelector("#bulb")
let messageEl = document.querySelector("#message-el")
//let backgroundEl = document.querySelector("body")



function btnOn() {
    lightStatus.src = "images/lights-on.png"
    messageEl.textContent = "Lights On"
    //backgroundEl = "black"
}
function btnOff() {
    lightStatus.src = "images/lights-off.png"
    messageEl.textContent = "Lights Off" 
}