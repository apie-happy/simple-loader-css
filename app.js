// select loading-window
const loaderWindow = document.querySelector("#loading-window")
// the window and the dom load => launch function
window.addEventListener("load", loaderFunct)
document.addEventListener("DOMContentLoaded", loaderFunct)
// display none for the loader window
function loaderFunct(){
  loaderWindow.style.display = 'none'
}