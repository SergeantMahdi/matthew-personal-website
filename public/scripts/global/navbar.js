const burger = document.querySelector(".burger");
const items = document.querySelector(".nav-container");
const navbar = document.querySelector(".navbar");
const icon = document.querySelector("#nav-icon");

const navbarIcon = icon.getAttribute('d');

let isMenuOpen = false;




burger.addEventListener("click", () => {
    if (!isMenuOpen) {
        //If menu isn't open
        items.style.display = "flex";
        isMenuOpen = true;
        //expand the color of navbar
        navbar.style.background = "rgb(4,4,4)";
        navbar.style.height = "555px";
        //change the icon to cross
        icon.setAttribute('d', 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z');
        
    }
    else if (isMenuOpen) {
        //If menu is open
        items.style.display = "none";
        isMenuOpen = false;
        navbar.style.background = "";
        navbar.style.height = "";
        icon.setAttribute('d', navbarIcon);
    }
    
})

window.addEventListener("resize",() => {
    if (this.window.innerWidth > 800)
    {
        items.style.display = "";
        navbar.style.background = "";
        navbar.style.height = "";
        icon.setAttribute('d', navbarIcon);
        isMenuOpen = false;
        }
})