const skillSection = document.querySelector(".skills");
const detail = document.querySelector('.detail');
const fetchSkill = async () => {
    try {
        const response = await fetch("/api-skill/about");
        const data = await response.json();
        makeCard(data);

    }
    catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function importText(text) {
    detail.innerText = text;
}

function makeCard(data) {

    data.forEach(element => {

        const skillCard = document.createElement("div");
        const outerCircle = document.createElement("div");
        const innerCircle = document.createElement("div");
        const progressNumber = document.createElement("h2");
        const skillName = document.createElement("h3");

        skillCard.classList.add("skill-card");
        outerCircle.classList.add('outer-circle');
        innerCircle.classList.add('inner-circle');
        progressNumber.classList.add('progress-number');
        skillName.classList.add('skill');

        outerCircle.setAttribute("data-skill", element.name);
        outerCircle.setAttribute("data-target", element.percentage);

        skillSection.appendChild(skillCard);
        skillCard.appendChild(outerCircle);
        outerCircle.appendChild(innerCircle);
        innerCircle.appendChild(progressNumber);
        innerCircle.appendChild(skillName);


        detail.innerText = "CLICK ON ONE OF THE SKILLS TO SEE THE DETAIL";
        skillCard.addEventListener('click', () => importText(element.description))

        let counter = 0;
        setInterval(() => {
            counter += 1;
            if (counter > element.percentage) {
                clearInterval();
                return;
            }
            progressNumber.innerText = `${counter}%`
            skillName.innerText = `${element.name}`
            outerCircle.style.background = `conic-gradient(#c14b09 ${counter}%, rgb(0, 6, 18) 0deg)`;

        }, 40)

    })
}

let isWatched = true;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {


        if (entry.isIntersecting && isWatched) {
            fetchSkill();
            isWatched = false;
        }
    });
})

observer.observe(document.querySelector('.skillSection'))