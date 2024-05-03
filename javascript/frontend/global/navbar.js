const burger = document.querySelector(".burger");
const items = document.querySelector(".nav-container");
const navbar = document.querySelector(".navbar")

let isMenuOpen = false;




burger.addEventListener("click", () => {
    if (!isMenuOpen) {
        //If menu isn't open
        items.style.display = "flex";
        isMenuOpen = true;
        //expand the color of navbar
        navbar.style.background = "rgb(4,4,4)";
        navbar.style.height = "66%";
    }
    else if (isMenuOpen) {
        //If menu is open
        items.style.display = "none";
        isMenuOpen = false;
        navbar.style.background = "";
        navbar.style.height = "";
    }
    
})

window.addEventListener("resize",() => {
    if (this.window.innerWidth > 800)
    {
        items.style.display = "";
        navbar.style.background = "";
        navbar.style.height = "";
        isMenuOpen = false;
        }
})