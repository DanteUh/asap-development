// ANIMATE INDEX HEADLINE

window.addEventListener("DOMContentLoaded", interval, false);
var indexHeader = document.getElementsByTagName("h1");
var largeFlash = document.getElementById("large-flash");
var smallFlash = document.getElementById("small-flash");

var timesRun = 0;

var interval = setInterval(function() {
    indexHeader[timesRun].setAttribute("class", "white-text text-center");
    timesRun++;
    if (timesRun === 3) {
        clearInterval(interval);
        displayFlash();
    }
}, 800);


function displayFlash() {
    largeFlash.setAttribute("class", "flash-after");
    smallFlash.setAttribute("class", "flash-after");
}



// -- end