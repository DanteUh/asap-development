// ANIMATE INDEX HEADLINE

window.addEventListener("DOMContentLoaded", interval, false);
var indexHeader = document.getElementsByTagName("h1");
var timesRun = 0;

var interval = setInterval(function() {
    indexHeader[timesRun].setAttribute("class", "green-text");
    timesRun++;
    if (timesRun === 3) {
        clearInterval(interval);
        displayFlash();
    }
}, 1000);


function displayFlash() {
    alert("blixten!");
}



// -- end