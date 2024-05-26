
let circles = document.querySelectorAll('.outer-circle');

let isWatched = true;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && isWatched) {
            circles.forEach(element =>{
                execute(element)
                isWatched = false;
            })
        }
    });
})

function execute(element) {
    let progressText = element.querySelector(".progress-number")
    let skillText = element.querySelector(".skill")
    let progress = parseInt(element.getAttribute('data-target'))
    let skill = (element.getAttribute('data-skill'))
    Interval(element, progressText, progress, skillText, skill)
}

function Interval(element, progressText, progress, skillText, skill) {
    let counter = 0;
    setInterval(() => {
        counter += 1;
        if (counter > progress) {
            clearInterval();
            return;
        }
        progressText.innerText = `${counter}%`
        skillText.innerText = `${skill}`
        element.style.background = `conic-gradient(#c14b09 ${counter}%, rgb(0, 6, 18) 0deg)`;

    }, 40)
}

observer.observe(document.querySelector('.skillSection'))
