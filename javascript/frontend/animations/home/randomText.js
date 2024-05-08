const container = document.querySelector('.hero')
const animationSection = document.querySelector('.characterAnimation');
const charactersArray = ["</>", "#C14B09", "JS", "function", "||", "&&", "HTML5", "*", "Const", "Math.random()", "++", "STD::COUT", "DIV"];

let height = container.clientHeight;
let width = container.clientWidth;

let randomTextAnimation = () => {
    let xPosition = Math.floor(Math.random() * width) + 1;
    let yPosition = Math.floor(Math.random() * height) + 1;
    let rand = Math.floor(Math.random() * charactersArray.length) + 0;
    let duration = Math.random() * 3;
    let randChar = charactersArray[rand];

    let element = document.createElement('div');

    animationSection.appendChild(element);
    element.innerHTML = randChar;
    element.style.animationDirection = duration;
    element.style.left = (xPosition) + "px";
    element.style.top = (yPosition) + "px";

    setTimeout(() => {
        animationSection.removeChild(element);
    }, 2900)
}

setInterval(randomTextAnimation, 200);