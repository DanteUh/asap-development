//JS for navbar 

//glob vars
var hamburger = document.getElementById("hamburger");

//event listeners
hamburger.addEventListener("click", navDropDown);
window.addEventListener("scroll", navbarBg);


//menu drop when hamburger menu is clicked
function navDropDown() {
    var menu = document.getElementsByClassName("nav-menu")[0];


    if (menu.id === "menu-up") {
        menu.setAttribute("id", "menu-down");

    } else if (menu.id === "menu-down") {
        menu.setAttribute("id", "menu-up");
    }
}

//navbar background change
function navbarBg() {
    var viewPort = document.getElementById("header");

    if (document.body.scrollTop > viewPort.scrollHeight || document.documentElement.scrollTop > viewPort.scrollHeight) {
        document.getElementById("nav-bg-wrapper").className = "bg-blue";
    } else {
        document.getElementById("nav-bg-wrapper").className = "";
    }
}