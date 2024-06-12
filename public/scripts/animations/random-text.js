const animationSection = document.querySelector('.characterAnimation');
const charactersArray = ["</>", "#C14B09", "TRUE", "function", "||",
    "&&", "HTML5", "STD::THREAD", "Const", "Math.random()",
    "EVENT", "STD::COUT", "DIV"];


let randomTextAnimation = () => {
    //Get the size of animationSection to scope the characters
    let height = animationSection.offsetHeight - 100;
    let width = animationSection.offsetWidth - 200;
    //Make a random number for x and y postion
    let xPosition = Math.floor(Math.random() * width) + 1;
    let yPosition = Math.floor(Math.random() * height) + 1;

    //make random number for characters inside the array
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