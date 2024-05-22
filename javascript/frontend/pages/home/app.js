let index = 0;
const observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
const animateHiddens = () => {
    hiddenElements.forEach((el) =>{
        observe.observe(el);
    })
}

animateHiddens()