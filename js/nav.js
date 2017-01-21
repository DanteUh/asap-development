//JS for navbar 

//glob vars
var hamburger = document.getElementById("hamburger");
var openIcon = document.getElementById("openIcon");
var closeIcon = document.getElementById("closeIcon");
var navWrapper = document.getElementById("nav-bg-wrapper");

//event listeners
hamburger.addEventListener("click", navDropDown);
window.addEventListener("scroll", navbarBg);



//menu drop when hamburger menu is clicked
function navDropDown(event) {
    event.preventDefault();
    var menu = document.getElementsByClassName("nav-menu")[0];

    if (menu.id === "menu-up") {
        menu.setAttribute("id", "menu-down");
        navWrapper.className = "bg-blue";
        closeIcon.className = "shown";
        openIcon.className = "hidden";


    } else if (menu.id === "menu-down") {
        menu.setAttribute("id", "menu-up");
        if (document.body.scrollTop < (60)) {
            navWrapper.className = "bg-transparent";
            openIcon.className = "shown";
            closeIcon.className = "hidden";
        }
    }
}

//navbar background change
function navbarBg() {
    var menu = document.getElementsByClassName("nav-menu")[0];
    var viewPort = document.getElementsByTagName("header")[0];

    if(menu.id !== "menu-down") {
        if (document.body.scrollTop > (60) || document.documentElement.scrollTop > (60)) {
            navWrapper.className = "bg-blue";
            closeIcon.className = "shown";
            openIcon.className = "hidden";
        } else {
            navWrapper.className = "bg-transparent";
            openIcon.className = "shown";
            closeIcon.className = "hidden";
        }
    }
}